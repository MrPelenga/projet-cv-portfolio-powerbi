
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

// EmailJS constants
const SERVICE_ID = 'service_hexlq7l';
const TEMPLATE_ID = 'template_ak5pmqq';
const USER_ID = '3BNU_eAllRCKjlCv_';

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>();
  
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        to_email: 'gabrielpelenga@gmail.com',
        from_name: data.name,
        from_email: data.email,
        message: data.message
      };
      
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        USER_ID
      );
      
      toast({
        title: "Message envoyé !",
        description: "Merci de m'avoir contacté. Je vous répondrai dans les plus brefs délais.",
      });
      reset();
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-8">
      <h2 className="text-2xl font-semibold mb-6">M'envoyer un message</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Nom</Label>
          <Input
            id="name"
            placeholder="Votre nom"
            {...register('name', { required: 'Le nom est requis' })}
          />
          {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="votre.email@exemple.com"
            {...register('email', { 
              required: 'L\'email est requis',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Adresse email invalide'
              }
            })}
          />
          {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            className="min-h-32 resize-none"
            placeholder="Votre message..."
            {...register('message', { required: 'Le message est requis' })}
          />
          {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
        </div>
        
        <Button 
          type="submit" 
          size="lg" 
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
