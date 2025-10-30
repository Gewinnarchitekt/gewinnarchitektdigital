import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

interface CoachingSectionProps {}

const CoachingSection = ({}: CoachingSectionProps) => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-12 card-shadow hover:elegant-shadow smooth-transition border-2 border-primary/20">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700">
                  <MessageSquare className="w-12 h-12 text-white" />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Individuelles Coaching
                </h3>
                <p className="text-lg text-muted-foreground mb-2">
                  Brauchst du persönliche Beratung, die auf deine spezifischen Herausforderungen zugeschnitten ist?
                </p>
                <p className="text-xl font-semibold text-foreground">
                  2 x 50 Minuten • CHF 350
                </p>
              </div>
              
              {/* CTA */}
              <div className="flex-shrink-0">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg px-8 py-6 h-auto"
                >
                  Coaching buchen
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachingSection;