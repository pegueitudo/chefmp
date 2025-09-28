import { Button } from "@/components/ui/button";
import { FileText, MessageCircle } from "lucide-react";

const CTASection = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá! Quero organizar minha cozinha e aumentar minha margem. Vamos conversar?");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-gradient-hero text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
            Vamos Organizar sua Cozinha e Aumentar sua Margem?
          </h2>
          <p className="text-xl mb-8 text-gray-200 leading-relaxed">
            Transforme sua operação gastronômica em um negócio seguro, eficiente e lucrativo. 
            Nossa consultoria especializada já ajudou centenas de estabelecimentos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 text-lg"
            >
              <FileText className="w-5 h-5 mr-2" />
              Solicitar Diagnóstico Gratuito
            </Button>
            
            <Button
              onClick={handleWhatsApp}
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Conversar no WhatsApp
            </Button>
          </div>

          <div className="mt-8 text-sm text-gray-300">
            <p>🔒 Seus dados estão protegidos | ⚡ Resposta em até 2 horas | 🎯 Consultoria personalizada</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;