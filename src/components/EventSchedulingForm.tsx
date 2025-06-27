
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { User, Mail, Phone, FileText, Calendar, Clock, CheckCircle, ArrowLeft } from 'lucide-react';
import AvailabilityCalendar from './AvailabilityCalendar';

interface TimeSlot {
  date: string;
  time: string;
  datetime: string;
}

type FormState = 'selecting' | 'entering' | 'confirmed';

const EventSchedulingForm = () => {
  const [formState, setFormState] = useState<FormState>('selecting');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [duration, setDuration] = useState(30);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventTitle: '',
    eventDescription: '',
    additionalNotes: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSlotSelect = (slot: TimeSlot) => {
    setSelectedSlot(slot);
    setFormState('entering');
  };

  const handleBackToSelection = () => {
    setFormState('selecting');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedSlot) return;

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase
        .from('event_requests')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            event_title: formData.eventTitle,
            event_description: formData.eventDescription || null,
            preferred_date: selectedSlot.date,
            preferred_time: selectedSlot.time,
            duration_minutes: duration,
            additional_notes: formData.additionalNotes || null
          }
        ])
        .select();

      if (error) throw error;

      const { error: calendarError } = await supabase.functions.invoke('create-calendar-event', {
        body: {
          eventRequest: data[0]
        }
      });

      if (calendarError) {
        console.error('Calendar error:', calendarError);
      }

      setFormState('confirmed');

    } catch (error) {
      console.error('Error submitting event request:', error);
      toast({
        title: "Erreur",
        description: "Impossible de planifier la réunion. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDateTime = (slot: TimeSlot) => {
    const date = new Date(slot.datetime);
    return {
      date: date.toLocaleDateString('fr-FR', { 
        weekday: 'long', 
        month: 'long', 
        day: 'numeric',
        year: 'numeric'
      }),
      time: date.toLocaleTimeString('fr-FR', { 
        hour: 'numeric', 
        minute: '2-digit', 
        hour12: false 
      })
    };
  };

  const resetForm = () => {
    setFormState('selecting');
    setSelectedSlot(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventTitle: '',
      eventDescription: '',
      additionalNotes: ''
    });
    setDuration(30);
  };

  if (formState === 'selecting') {
    return (
      <div className="space-y-8">
        <AvailabilityCalendar 
          onSlotSelect={handleSlotSelect}
          selectedSlot={selectedSlot}
        />
      </div>
    );
  }

  if (formState === 'entering') {
    const { date, time } = formatDateTime(selectedSlot!);
    
    return (
        
        <div className="gradient-border">
         
          <div className="rounded-xl px-4 py-8 sm:p-8 relative">
            <button
          onClick={handleBackToSelection}
          className="mb-6 flex items-center text-gray-300 hover:text-white cursor-pointer hover:underline"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour à la sélection d'heure
        </button>
            
            <div className="space-y-6">
              {/* Meeting Summary */}
              <div>
                <div className="rounded-lg relative">
                  <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-[#FF52D1]" />
                    Résumé de la Réunion
                  </h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex justify-between">
                      <span>Date :</span>
                      <span className="font-medium text-white">{date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Heure :</span>
                      <span className="font-medium text-white">{time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Durée :</span>
                      <div className="flex items-center gap-2">
                        <select 
                          value={duration} 
                          onChange={(e) => setDuration(Number(e.target.value))}
                          className="text-sm bg-gray-800 border border-gray-600 rounded px-2 py-1 font-medium text-white"
                        >
                          <option value={30}>30 minutes</option>
                          <option value={60}>1 heure</option>
                          <option value={90}>1h30</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2 text-gray-300">
                      <User className="h-4 w-4" />
                      Nom Complet *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Entrez votre nom complet"
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-[#FF52D1]"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2 text-gray-300">
                      <Mail className="h-4 w-4" />
                      Adresse Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="votre.email@exemple.com"
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-[#FF52D1]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2 text-gray-300">
                    <Phone className="h-4 w-4" />
                    Numéro de Téléphone (Optionnel)
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+33 6 12 34 56 78"
                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-[#FF52D1]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="eventTitle" className="text-gray-300">
                    Titre de la Réunion *
                  </Label>
                  <Input
                    id="eventTitle"
                    name="eventTitle"
                    value={formData.eventTitle}
                    onChange={handleInputChange}
                    required
                    placeholder="De quoi souhaitez-vous discuter ?"
                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-[#FF52D1]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="eventDescription" className="text-gray-300">
                    Description de la Réunion
                  </Label>
                  <Textarea
                    id="eventDescription"
                    name="eventDescription"
                    value={formData.eventDescription}
                    onChange={handleInputChange}
                    placeholder="Brève description de ce dont nous discuterons..."
                    rows={3}
                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-[#FF52D1]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalNotes" className="flex items-center gap-2 text-gray-300">
                    <FileText className="h-4 w-4" />
                    Notes Supplémentaires
                  </Label>
                  <Textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleInputChange}
                    placeholder="Exigences particulières ou sujets que vous aimeriez aborder..."
                    rows={3}
                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-[#FF52D1]"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-main-gradient hover:opacity-90 text-white font-medium py-3 text-lg glow cursor-pointer" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      Planification en cours...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      Confirmer la Réunion
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
    );
  }

  if (formState === 'confirmed') {
    const { date, time } = formatDateTime(selectedSlot!);
    
    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="gradient-border">
          <div className="rounded-xl relative px-4 py-8 sm:p-8">
            <div className="mb-8">
              <div className="w-20 h-20 bg-main-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                🎉 Réunion <span className="gradient-text">Confirmée !</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Votre réunion a été planifiée avec succès. Nous vous enverrons un email de confirmation avec tous les détails incluant le lien Google Meet.
              </p>
            </div>

            <div className="mb-8">
              <div className="rounded-lg relative z-10">
                <h3 className="font-semibold text-white mb-4">Détails de la Réunion</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between">
                    <span>Date :</span>
                    <span className="font-medium text-white">{date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Heure :</span>
                    <span className="font-medium text-white">{time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Durée :</span>
                    <span className="font-medium text-white">{duration} minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Titre :</span>
                    <span className="font-medium text-white">{formData.eventTitle}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="rounded-lg relative z-10">
                <h3 className="font-semibold text-white mb-3">Besoin de modifications ou avez-vous des questions ?</h3>
                <p className="text-gray-300 mb-4">
                  Pour toute demande supplémentaire, modification ou question concernant votre réunion, veuillez contacter :
                </p>
                <div className="flex items-center justify-center gap-2 gradient-text font-medium">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:calvin@ema-marketing.fr" className="hover:underline">
                    calvin@ema-marketing.fr
                  </a>
                </div>
              </div>
            </div>

            <Button 
              onClick={resetForm}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white cursor-pointer"
            >
              Planifier une Autre Réunion
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default EventSchedulingForm;
