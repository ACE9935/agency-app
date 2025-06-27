
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface TimeSlot {
  date: string;
  time: string;
  datetime: string;
}

interface AvailabilityCalendarProps {
  onSlotSelect: (slot: TimeSlot) => void;
  selectedSlot: TimeSlot | null;
}

const AvailabilityCalendar: React.FC<AvailabilityCalendarProps> = ({ onSlotSelect, selectedSlot }) => {
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentWeekStart, setCurrentWeekStart] = useState(new Date());
  const { toast } = useToast();

  useEffect(() => {
    fetchAvailableSlots();
  }, [currentWeekStart]);

  const fetchAvailableSlots = async () => {
    setLoading(true);
    try {
      const weekEnd = new Date(currentWeekStart);
      weekEnd.setDate(weekEnd.getDate() + 7);

      const { data, error } = await supabase.functions.invoke('get-calendar-availability', {
        body: {
          startDate: currentWeekStart.toISOString().split('T')[0],
          endDate: weekEnd.toISOString().split('T')[0]
        }
      });

      if (error) {
        console.error('Error fetching availability:', error);
        toast({
          title: "Erreur",
          description: "Impossible de charger les créneaux disponibles. Veuillez réessayer.",
          variant: "destructive"
        });
        return;
      }

      setAvailableSlots(data.availableSlots || []);
    } catch (error) {
      console.error('Error fetching availability:', error);
      toast({
        title: "Erreur",
        description: "Impossible de charger les créneaux disponibles. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const goToPreviousWeek = () => {
    const newWeekStart = new Date(currentWeekStart);
    newWeekStart.setDate(newWeekStart.getDate() - 7);
    setCurrentWeekStart(newWeekStart);
  };

  const goToNextWeek = () => {
    const newWeekStart = new Date(currentWeekStart);
    newWeekStart.setDate(newWeekStart.getDate() + 7);
    setCurrentWeekStart(newWeekStart);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(':');
    const date = new Date();
    date.setHours(parseInt(hours), parseInt(minutes));
    return date.toLocaleTimeString('fr-FR', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: false
    });
  };

  const groupSlotsByDate = (slots: TimeSlot[]) => {
    const grouped: { [key: string]: TimeSlot[] } = {};
    slots.forEach(slot => {
      if (!grouped[slot.date]) {
        grouped[slot.date] = [];
      }
      grouped[slot.date].push(slot);
    });
    return grouped;
  };

  const groupedSlots = groupSlotsByDate(availableSlots);

  const DateElement=({className}:{className:string})=>
    <span className={`text-sm font-medium text-white ${className}`}>
            {currentWeekStart.toLocaleDateString('fr-FR', { month: 'long', day: 'numeric' })} - {' '}
            {new Date(currentWeekStart.getTime() + 6 * 24 * 60 * 60 * 1000).toLocaleDateString('fr-FR', { month: 'long', day: 'numeric' })}
          </span>

  if (loading) {
    return (
      <div className="gradient-border">
        <div className="rounded-xl px-4 py-8 sm:p-8 relative z-10">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-2">
              <Calendar className="h-5 w-5 text-[#FF52D1]" />
              Créneaux Disponibles
            </h3>
            <p className="text-gray-300">Chargement des créneaux disponibles...</p>
          </div>
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#FF52D1]"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="gradient-border">
      <div className="rounded-xl px-4 py-8 sm:p-8 relative z-10">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-2">
            <Calendar className="h-5 w-5 text-[#FF52D1]" />
            Créneaux Disponibles
          </h3>
          <p className="text-gray-300">
            Sélectionnez votre créneau de réunion préféré parmi les disponibilités ci-dessous
          </p>
        </div>
        
        <div className="flex md:flex-row flex-col gap-3 items-center justify-center mb-6">
          <DateElement className='block md:hidden'/>
          <div className='flex items-center gap-3'>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={goToPreviousWeek}
            className="border-gray-600 cursor-pointer text-gray-300 hover:bg-gray-800 hover:text-white"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Semaine Précédente
          </Button>
          <DateElement className='hidden md:block'/>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={goToNextWeek}
            className="border-gray-600 cursor-pointer text-gray-300 hover:bg-gray-800 hover:text-white"
          >
            Semaine Suivante
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
          </div>
        </div>

        {Object.keys(groupedSlots).length === 0 ? (
          <div className="text-center py-8 text-gray-400">
            <Clock className="h-8 w-8 mx-auto mb-2 opacity-50" />
            <p>Aucun créneau disponible pour cette semaine.</p>
            <p className="text-sm">Essayez de sélectionner une autre semaine.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {Object.entries(groupedSlots).map(([date, slots]) => (
              <div key={date}>
                <h3 className="font-medium text-white mb-3">
                  {formatDate(date)}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                  {slots.map((slot, index) => (
                    <Button
                      key={`${slot.date}-${slot.time}-${index}`}
                      variant={selectedSlot?.datetime === slot.datetime ? "default" : "outline"}
                      size="sm"
                      onClick={() => onSlotSelect(slot)}
                      className={selectedSlot?.datetime === slot.datetime 
                        ? "bg-main-gradient text-white glow" 
                        : "border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-[#FF52D1] cursor-pointer"
                      }
                    >
                      {formatTime(slot.time)}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AvailabilityCalendar;
