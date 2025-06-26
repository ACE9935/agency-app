
-- Create a table to store event scheduling requests
CREATE TABLE public.event_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  name TEXT NOT NULL,
  event_title TEXT NOT NULL,
  event_description TEXT,
  preferred_date DATE NOT NULL,
  preferred_time TIME NOT NULL,
  duration_minutes INTEGER DEFAULT 60,
  phone TEXT,
  additional_notes TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS but allow public access for this table since no authentication is required
ALTER TABLE public.event_requests ENABLE ROW LEVEL SECURITY;

-- Create policy that allows anyone to insert event requests
CREATE POLICY "Anyone can create event requests" 
  ON public.event_requests 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy that allows anyone to view their own requests by email
CREATE POLICY "Users can view requests by email" 
  ON public.event_requests 
  FOR SELECT 
  USING (true);
