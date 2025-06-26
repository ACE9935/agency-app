import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface EventRequest {
  id: string;
  name: string;
  email: string;
  phone?: string;
  event_title: string;
  event_description?: string;
  preferred_date: string;
  preferred_time: string;
  duration_minutes: number;
  additional_notes?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { eventRequest }: { eventRequest: EventRequest } = await req.json();
    
    console.log('Processing event request:', eventRequest);

    // Create Google Calendar event to block the time slot
    const calendarEvent = await createGoogleCalendarEvent(eventRequest);
    
    // Send confirmation email with Google Meet link
    await sendConfirmationEmail(eventRequest, calendarEvent);

    return new Response(
      JSON.stringify({ 
        success: true, 
        calendarEvent,
        message: "Event created and email sent successfully" 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in create-calendar-event function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        details: error.toString()
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

async function getAccessTokenFromRefreshToken() {
  const clientId = Deno.env.get("GOOGLE_CALENDAR_CLIENT_ID");
  const clientSecret = Deno.env.get("GOOGLE_CALENDAR_CLIENT_SECRET");
  const refreshToken = Deno.env.get("GOOGLE_CALENDAR_REFRESH_TOKEN");
  
  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("Google Calendar OAuth credentials not fully configured. Need CLIENT_ID, CLIENT_SECRET, and REFRESH_TOKEN");
  }

  console.log('Attempting to refresh OAuth token...');

  const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
    }),
  });

  if (!tokenResponse.ok) {
    const errorText = await tokenResponse.text();
    console.error('Token refresh failed:', errorText);
    throw new Error(`Failed to refresh OAuth token: ${tokenResponse.statusText} - ${errorText}`);
  }

  const tokenData = await tokenResponse.json();
  console.log('OAuth token refreshed successfully');
  return tokenData.access_token;
}

async function createGoogleCalendarEvent(eventRequest: EventRequest) {
  const calendarId = Deno.env.get("GOOGLE_CALENDAR_ID") || 'primary';
  
  // Get access token using refresh token
  const accessToken = await getAccessTokenFromRefreshToken();

  const startDateTime = new Date(`${eventRequest.preferred_date}T${eventRequest.preferred_time}`);
  const endDateTime = new Date(startDateTime.getTime() + (eventRequest.duration_minutes * 60000));

  const event = {
    summary: `Meeting: ${eventRequest.event_title}`,
    description: `${eventRequest.event_description || ''}\n\nMeeting with: ${eventRequest.name} (${eventRequest.email})${eventRequest.phone ? `\nPhone: ${eventRequest.phone}` : ''}${eventRequest.additional_notes ? `\n\nNotes: ${eventRequest.additional_notes}` : ''}`,
    start: {
      dateTime: startDateTime.toISOString(),
      timeZone: 'UTC',
    },
    end: {
      dateTime: endDateTime.toISOString(),
      timeZone: 'UTC',
    },
    attendees: [
      { 
        email: eventRequest.email, 
        responseStatus: 'needsAction',
        displayName: eventRequest.name
      }
    ],
    conferenceData: {
      createRequest: {
        requestId: `meet-${eventRequest.id}-${Date.now()}`,
        conferenceSolutionKey: { type: 'hangoutsMeet' }
      }
    },
    transparency: 'opaque', // This makes the event show as busy
    status: 'confirmed',
    visibility: 'private'
  };

  console.log('Creating calendar event with OAuth token for calendar:', calendarId);

  const calendarResponse = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?conferenceDataVersion=1&sendUpdates=all`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    }
  );

  if (!calendarResponse.ok) {
    const errorText = await calendarResponse.text();
    console.error('Google Calendar API error:', errorText);
    throw new Error(`Failed to create calendar event: ${calendarResponse.statusText} - ${errorText}`);
  }

  const createdEvent = await calendarResponse.json();
  console.log('Calendar event created successfully:', createdEvent.id);

  return {
    id: createdEvent.id,
    htmlLink: createdEvent.htmlLink,
    hangoutLink: createdEvent.hangoutLink || createdEvent.conferenceData?.entryPoints?.[0]?.uri || `https://meet.google.com/new`,
    meetingId: createdEvent.conferenceData?.conferenceId,
    summary: createdEvent.summary,
    start: createdEvent.start,
    end: createdEvent.end,
    attendees: createdEvent.attendees
  };
}

async function sendConfirmationEmail(eventRequest: EventRequest, calendarEvent: any) {
  const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
  
  const startDateTime = new Date(`${eventRequest.preferred_date}T${eventRequest.preferred_time}`);
  const formattedDate = startDateTime.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const formattedTime = startDateTime.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  const meetingLink = calendarEvent.hangoutLink || 'https://meet.google.com/new';
  const calendarLink = calendarEvent.htmlLink || 'https://calendar.google.com/calendar';

  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">
        Event Scheduled Successfully! 🎉
      </h2>
      
      <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #4CAF50; margin-top: 0;">Event Details</h3>
        <p><strong>Title:</strong> ${eventRequest.event_title}</p>
        <p><strong>Date:</strong> ${formattedDate}</p>
        <p><strong>Time:</strong> ${formattedTime}</p>
        <p><strong>Duration:</strong> ${eventRequest.duration_minutes} minutes</p>
        ${eventRequest.event_description ? `<p><strong>Description:</strong> ${eventRequest.event_description}</p>` : ''}
      </div>

      <div style="background-color: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1976d2; margin-top: 0;">Join the Meeting</h3>
        <p>Click the link below to join your Google Meet session:</p>
        <a href="${meetingLink}" 
           style="display: inline-block; background-color: #4CAF50; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; margin-bottom: 15px;">
          Join Google Meet
        </a>
        <br>
        <a href="${calendarLink}" 
           style="display: inline-block; background-color: #1976d2; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: bold;">
          Add to Google Calendar
        </a>
        <p style="margin-top: 15px; font-size: 14px; color: #666;">
          Meeting Link: <a href="${meetingLink}">${meetingLink}</a>
        </p>
        ${calendarEvent.meetingId ? `<p style="font-size: 14px; color: #666;">Meeting ID: ${calendarEvent.meetingId}</p>` : ''}
      </div>

      ${eventRequest.additional_notes ? `
      <div style="background-color: #fff3e0; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #f57c00; margin-top: 0;">Additional Notes</h3>
        <p>${eventRequest.additional_notes}</p>
      </div>
      ` : ''}

      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 14px;">
        <p><strong>What's Next?</strong></p>
        <ul>
          <li>Save the Google Meet link: ${meetingLink}</li>
          <li>Add this event to your calendar using the button above</li>
          <li>We'll send you a reminder 24 hours before the meeting</li>
          <li>If you need to reschedule, please reply to this email</li>
        </ul>
        
        <p style="margin-top: 20px;">
          If you have any questions or need to make changes, please don't hesitate to contact us.
        </p>
        
        <p>Looking forward to meeting with you!</p>
      </div>
    </div>
  `;

  const emailResponse = await resend.emails.send({
    from: "Events <onboarding@resend.dev>",
    to: [eventRequest.email],
    subject: `Event Confirmed: ${eventRequest.event_title} - ${formattedDate}`,
    html: emailHtml,
  });

  console.log("Confirmation email sent:", emailResponse);
  return emailResponse;
}

serve(handler);
