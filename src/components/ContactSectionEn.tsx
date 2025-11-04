import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Check } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
  firstName: z.string().trim().min(1, { message: "First name is required" }).max(100),
  lastName: z.string().trim().min(1, { message: "Last name is required" }).max(100),
  company: z.string().trim().max(100).optional(),
  phone: z.string().trim().max(50).optional(),
  message: z.string().trim().min(1, { message: "Message is required" }).max(1000, { message: "Message must be max 1000 characters" }),
  copyToSelf: z.boolean().default(false),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface ContactSectionEnProps {}

const ContactSectionEn = ({}: ContactSectionEnProps) => {
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
        title: "Message sent!",
        description: "Thank you for your message. We will get back to you soon.",
      });

      reset();
    } catch (error: any) {
      console.error("Failed to send message:", error);
      toast({
        title: "Error",
        description: "The message could not be sent. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Talk</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready for the next step? Send me a message or book an appointment
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Initial Meeting */}
          <div className="bg-muted/50 p-8 md:p-12 rounded-xl flex flex-col h-full">
            <div className="space-y-8 flex-1">
            <h3 className="text-3xl font-bold mb-8">Initial Meeting</h3>

            {/* Benefits List */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Analysis of your current offers - Where do you stand today and where are the biggest levers?
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Concrete action recommendations - Immediately implementable tips for more profit
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Find the right solution - Which offer best fits your goals?
                </p>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-3 mb-8">
              <div className="text-sm">
                <span className="font-semibold text-foreground">Duration:</span>{" "}
                <span className="text-muted-foreground">30-45 minutes</span>
              </div>
              <div className="text-sm">
                <span className="font-semibold text-foreground">Format:</span>{" "}
                <span className="text-muted-foreground">Video Call</span>
              </div>
              <div className="text-sm">
                <span className="font-semibold text-foreground">Cost:</span>{" "}
                <span className="text-muted-foreground">Free, no obligations</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-auto">
              <a href="https://tidycal.com/gewinnarchitekt/angebotscheck" target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="outline" size="lg" className="w-full text-lg py-3 h-auto">
                  Clarify Profit Potential Now!
                </Button>
              </a>
            </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-accent p-8 md:p-12 rounded-xl flex flex-col h-full">
            <h3 className="text-3xl font-bold mb-8 text-white">Send Message</h3>

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
                    placeholder="First Name*"
                    {...register("firstName")}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  />
                  {errors.firstName && (
                    <p className="text-red-200 text-sm mt-1">{errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <Input
                    placeholder="Last Name*"
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
                placeholder="Company Name"
                {...register("company")}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />

              {/* Phone */}
              <Input
                type="tel"
                placeholder="Phone Number"
                {...register("phone")}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />

              {/* Message */}
              <div>
                <Textarea
                  placeholder="Message*"
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
                  Receive copy
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
                  {isSubmitting ? "Sending..." : "Send"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSectionEn;
