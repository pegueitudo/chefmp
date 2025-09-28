import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingWhatsApp = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá! Estou navegando no site da Chef MP e gostaria de mais informações sobre os serviços de consultoria gastronômica.");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <Button
        onClick={handleWhatsApp}
        size="lg"
        className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-chef-xl p-4 animate-pulse"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default FloatingWhatsApp;