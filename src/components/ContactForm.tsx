import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from '@/hooks/useTranslation';
import emailjs from 'emailjs-com';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const SERVICE_ID = 'service_c80mvtd';
const TEMPLATE_ID = 'template_ak5pmqq';
const USER_ID = '3BNU_eAllRCKjlCv_';

const ContactForm = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
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
      
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
      
      toast({
        title: t('contact.form.success.title'),
        description: t('contact.form.success.description'),
      });
      reset();
    } catch (error) {
      console.error('Email send error:', error);
      toast({
        title: t('contact.form.error.title'),
        description: t('contact.form.error.description'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card rounded-xl shadow-md p-8">
      <h2 className="text-2xl font-semibold mb-6">{t('contact.form.title')}</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">{t('contact.form.name')}</Label>
          <Input
            id="name"
            placeholder={t('contact.form.name.placeholder')}
            {...register('name', { required: t('contact.form.name.required') })}
          />
          {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">{t('contact.form.email')}</Label>
          <Input
            id="email"
            type="email"
            placeholder={t('contact.form.email.placeholder')}
            {...register('email', { 
              required: t('contact.form.email.required'),
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: t('contact.form.email.invalid')
              }
            })}
          />
          {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="message">{t('contact.form.message')}</Label>
          <Textarea
            id="message"
            className="min-h-32 resize-none"
            placeholder={t('contact.form.message.placeholder')}
            {...register('message', { required: t('contact.form.message.required') })}
          />
          {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
        </div>
        
        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
