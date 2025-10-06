import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    details: {
      sections: Array<{
        title: string;
        items: string[];
      }>;
    };
  };
}

const ServiceModal = ({ isOpen, onClose, service }: ServiceModalProps) => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Olá! Tenho interesse no serviço de ${service.title}. Gostaria de mais informações sobre valores e cronograma.`);
    window.open(`https://wa.me/5511943430405?text=${message}`, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-poppins text-primary">
            {service.title}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Detalhes completos do serviço {service.title}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {service.details.sections.map((section, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-lg font-semibold text-primary">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start text-sm text-foreground">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div className="pt-4 border-t border-border">
            <Button 
              onClick={handleWhatsApp}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;
