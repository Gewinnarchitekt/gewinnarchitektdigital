import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
const contactFormSchema = z.object({
  email: z.string().trim().email({ message: "Ungültige E-Mail-Adresse" }).max(255),
  firstName: z.string().trim().min(1, { message: "Vorname ist erforderlich" }).max(100),
  lastName: z.string().trim().min(1, { message: "Nachname ist erforderlich" }).max(100),
  company: z.string().trim().max(100).optional(),
  phone: z.string().trim().max(50).optional(),
  message: z.string().trim().min(1, { message: "Nachricht ist erforderlich" }).max(1000, { message: "Nachricht darf maximal 1000 Zeichen haben" }),
  copyToSelf: z.boolean().default(false),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface ContactSectionProps {}

const ContactSection = ({}: ContactSectionProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      copyToSelf: false,
    },
  });

  const copyToSelf = watch("copyToSelf");

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    console.log("Submitting contact form:", data);

    try {
      const { data: responseData, error } = await supabase.functions.invoke("send-contact-email", {
        body: data,
      });

      if (error) {
        console.error("Error sending message:", error);
        throw error;
      }

      console.log("Message sent successfully:", responseData);

      toast({
        title: "Nachricht gesendet!",
        description: "Vielen Dank für Ihre Nachricht. Wir melden uns bald bei Ihnen.",
      });

      reset();
    } catch (error: any) {
      console.error("Failed to send message:", error);
      toast({
        title: "Fehler",
        description: "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="kontakt" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Nächster Schritt</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Wähle deinen bevorzugten Weg
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Erstgespräch */}
          <div className="bg-muted/50 p-8 md:p-12 rounded-xl flex flex-col h-full">
            <h3 className="text-3xl font-bold mb-8">Zusammenarbeit prüfen...</h3>

            {/* 3-Step Process */}
            <div className="relative mb-10">
              {/* Vertical Line */}
              <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-accent/30" />
              
              {/* Step 1 */}
              <div className="flex items-center space-x-4 mb-14">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm z-10">
                  1
                </div>
                <p className="text-lg font-medium text-foreground">
                  Unverbindlich Kennenlernen
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex items-center space-x-4 mb-14">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm z-10">
                  2
                </div>
                <p className="text-lg font-medium text-foreground">
                  Bedürfnisse und Ziele austauschen
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex items-center space-x-4 mb-14">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm z-10">
                  3
                </div>
                <p className="text-lg font-medium text-foreground">
                  Individuelles Angebot erhalten
                </p>
              </div>

              {/* Step 4 */}
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm z-10">
                  4
                </div>
                <p className="text-lg font-medium text-foreground">
                  Zielsetzungen vereinbaren
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-auto">
              <a href="https://tidycal.com/gewinnarchitekt/angebotscheck" target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="outline" size="lg" className="w-full text-lg py-3 h-auto">
                  Termin buchen
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-accent p-8 md:p-12 rounded-xl flex flex-col h-full">
            <h3 className="text-3xl font-bold mb-8 text-white">... oder Nachricht senden</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 flex-1 flex flex-col">
              {/* Email */}
              <div>
                <Input
                  type="email"
                  placeholder="Email*"
                  {...register("email")}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
                {errors.email && (
                  <p className="text-red-200 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* First and Last Name */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input
                    placeholder="Vorname*"
                    {...register("firstName")}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  />
                  {errors.firstName && (
                    <p className="text-red-200 text-sm mt-1">{errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <Input
                    placeholder="Nachname*"
                    {...register("lastName")}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  />
                  {errors.lastName && (
                    <p className="text-red-200 text-sm mt-1">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              {/* Company Name */}
              <Input
                placeholder="Firmenname"
                {...register("company")}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />

              {/* Phone */}
              <Input
                type="tel"
                placeholder="Telefonnummer"
                {...register("phone")}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />

              {/* Message */}
              <div>
                <Textarea
                  placeholder="Nachricht*"
                  rows={6}
                  {...register("message")}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70 resize-none"
                />
                {errors.message && (
                  <p className="text-red-200 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Copy Checkbox */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="copy"
                  checked={copyToSelf}
                  onCheckedChange={(checked) => setValue("copyToSelf", checked as boolean)}
                  className="border-white/40 data-[state=checked]:bg-white data-[state=checked]:text-accent"
                />
                <label htmlFor="copy" className="text-sm text-white cursor-pointer">
                  Kopie erhalten
                </label>
              </div>

              {/* Submit Button */}
              <div className="mt-auto">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full text-lg py-3 h-auto bg-accent-foreground hover:bg-accent-foreground/90 text-accent font-semibold disabled:opacity-50"
                >
                  {isSubmitting ? "Wird gesendet..." : "senden"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
