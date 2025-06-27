
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { User, Mail, Phone, Building, FileText, CheckCircle, Send } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Sending contact form data:', formData);
      
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        console.error('Supabase function error:', error);
        throw new Error(error.message || 'Erreur lors de l\'envoi du message');
      }

      if (!data.success) {
        throw new Error(data.error || 'Erreur lors de l\'envoi du message');
      }
      
      console.log('Message envoyé avec succès:', data);
      
      setIsSubmitted(true);
      
      toast({
        title: "Message envoyé !",
        description: "Nous vous recontacterons bientôt.",
      });
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      toast({
        title: "Erreur",
        description: error.message || "Impossible d'envoyer le message. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="gradient-border">
          <div className="bg-[#1A1A1A] rounded-xl p-12 relative z-10">
            <div className="mb-8">
              <div className="w-20 h-20 bg-main-gradient rounded-full flex items-center justify-center mx-auto mb-6 glow">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                🎉 Message <span className="gradient-text">Envoyé !</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Votre message a été envoyé avec succès. Nous vous recontacterons dans les plus brefs délais.
              </p>
            </div>

            <Button 
              onClick={resetForm}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              Envoyer un Autre Message
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[800px] self-center">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Demandez Votre <span className="gradient-text">Devis</span>
        </h2>
        <p className="text-lg text-gray-300">
          Envoyez-nous vos besoins et recevez un devis personnalisé
        </p>
      </div>

      <div className="gradient-border">
        <div className="bg-[#1A1A1A] rounded-xl px-4 py-8 sm:p-8 relative z-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="flex items-center gap-2 text-gray-300">
                  <User className="h-4 w-4" />
                  Prénom *
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  placeholder="Votre prénom"
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-[#FF52D1]"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="lastName" className="flex items-center gap-2 text-gray-300">
                  <User className="h-4 w-4" />
                  Nom *
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  placeholder="Votre nom"
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-[#FF52D1]"
                />
              </div>
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

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2 text-gray-300">
                <Phone className="h-4 w-4" />
                Numéro de Téléphone
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
              <Label htmlFor="company" className="flex items-center gap-2 text-gray-300">
                <Building className="h-4 w-4" />
                Nom de l'Entreprise
              </Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Votre entreprise"
                className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-[#FF52D1]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="flex items-center gap-2 text-gray-300">
                <FileText className="h-4 w-4" />
                Décrivez Votre Projet *
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder="Décrivez votre projet, vos besoins, budget approximatif, délais souhaités..."
                rows={5}
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
                  Envoi en cours...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  Demander un Devis
                </div>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;