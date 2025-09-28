import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Repeat, GraduationCap, MessageCircle } from "lucide-react";
import trainingImage from "@/assets/training-team.jpg";
import documentationImage from "@/assets/documentation.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: Search,
      title: "Diagnóstico Inicial",
      description: "Auditoria técnica completa e plano de ação priorizado para sua cozinha.",
      features: [
        "Avaliação de estrutura física e layout",
        "Análise de Boas Práticas e higiene",
        "Controle sanitário e documentação",
        "Relatório de não conformidades",
        "Plano de ação por prioridade"
      ],
      image: documentationImage,
      price: "A partir de R$ 890"
    },
    {
      icon: Repeat,
      title: "Consultoria Mensal",
      description: "Implantação e manutenção contínua de Boas Práticas com relatórios de acompanhamento.",
      features: [
        "Auditorias programadas",
        "Controles sanitários",
        "Gestão de estoque e compras",
        "Padronização de cardápios",
        "Relatórios mensais com indicadores"
      ],
      image: documentationImage,
      price: "A partir de R$ 1.490/mês"
    },
    {
      icon: GraduationCap,
      title: "Treinamentos",
      description: "Capacitação da equipe alinhada a procedimentos, atendimento e segurança alimentar.",
      features: [
        "Boas práticas de manipulação",
        "Higiene pessoal e uniformes",
        "Controle de temperaturas",
        "Padronização por fichas técnicas",
        "Preparação para fiscalização"
      ],
      image: trainingImage,
      price: "A partir de R$ 390/turma"
    }
  ];

  const handleWhatsApp = (service: string) => {
    const message = encodeURIComponent(`Olá! Tenho interesse no serviço de ${service}. Gostaria de mais informações sobre valores e cronograma.`);
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <section id="servicos" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-4">
            Então, nós podemos te ajudar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Combinamos diagnóstico técnico, consultoria prática e treinamentos para que sua cozinha seja produtiva e sem riscos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="shadow-chef-lg hover:shadow-chef-xl transition-chef group">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-chef"
                />
                <div className="absolute inset-0 bg-primary/20"></div>
              </div>
              
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-poppins text-primary">{service.title}</CardTitle>
                <p className="text-muted-foreground">{service.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-lg font-semibold text-primary mb-4">{service.price}</p>
                  <Button 
                    onClick={() => handleWhatsApp(service.title)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Solicitar Orçamento
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;