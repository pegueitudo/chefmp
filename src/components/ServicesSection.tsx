import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Repeat, GraduationCap, MessageCircle, Info } from "lucide-react";
import diagnosticoImage from "@/assets/diagnostico-inicial.jpg";
import consultoriaImage from "@/assets/consultoria-mensal.jpg";
import treinamentoImage from "@/assets/treinamento.jpg";
import ServiceModal from "./ServiceModal";

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
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
      image: diagnosticoImage,
      price: "A partir de R$ 200",
      details: {
        sections: [
          {
            title: "Estrutura física e layout",
            items: ["Organização do espaço, fluxo de produção, áreas de risco cruzado."]
          },
          {
            title: "Boas Práticas e higiene",
            items: [
              "Higienização de equipamentos, utensílios, superfícies e manipuladores.",
              "Uso correto de EPIs."
            ]
          },
          {
            title: "Controle sanitário",
            items: [
              "Armazenamento de alimentos (estoque seco, câmaras frias, congelados).",
              "Controle de temperatura e validade.",
              "Coleta de amostras e registros obrigatórios."
            ]
          },
          {
            title: "Gestão de equipe",
            items: [
              "Dimensionamento de pessoal.",
              "Escalas de trabalho e treinamento."
            ]
          },
          {
            title: "Documentação obrigatória",
            items: [
              "Manual de Boas Práticas (MBP).",
              "Procedimentos Operacionais Padrão (POPs).",
              "Planilhas de controle (temperatura, recebimento, higienização)."
            ]
          },
          {
            title: "Cardápio e Ficha Técnica",
            items: [
              "Cálculo nutricional, variedade, padronização de receitas.",
              "Desperdício de alimentos e custo por refeição."
            ]
          }
        ]
      }
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
      image: consultoriaImage,
      price: "A partir de R$ 1.490/mês",
      details: {
        sections: [
          {
            title: "Auditoria e monitoramento",
            items: [
              "Visitas programadas para verificar aplicação das Boas Práticas.",
              "Avaliação de higiene, armazenamento, manipulação de alimentos e layout.",
              "Ensinamos o colaborador a fazer o controle sanitário.",
              "Coleta de amostras de alimentos.",
              "Controle e registro de temperaturas (câmaras, balcões térmicos, preparo).",
              "Checagem de validade e rotulagem.",
              "Mostramos como gerir os estoque e compras de alimentos.",
              "Quanto comprar.",
              "Orientação no recebimento de mercadorias.",
              "Planejamento de estocagem.",
              "Minimização de perdas e desperdícios."
            ]
          },
          {
            title: "Ensinamos como ajustar seu cardápio",
            items: [
              "Cardápios equilibrados, nutritivos e saudável.",
              "Criação de fichas técnicas de preparo (para padronizar receitas e custos)."
            ]
          },
          {
            title: "Gestão de equipe",
            items: [
              "Apoio na escala de trabalho, dimensionamento de pessoal.",
              "Monitoramento da produtividade."
            ]
          },
          {
            title: "Relatórios de desempenho",
            items: [
              "Relatórios mensais com não conformidades, melhorias aplicadas e próximos passos.",
              "Emissão de relatórios com indicadores (custos, desperdícios, conformidade sanitária)."
            ]
          }
        ]
      }
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
      image: treinamentoImage,
      price: "A partir de R$ 390/turma",
      details: {
        sections: [
          {
            title: "Boas Práticas de Manipulação de Alimentos",
            items: [
              "Higienização de mãos, utensílios, superfícies e EPIs.",
              "Prevenção de contaminações cruzadas.",
              "Higiene Pessoal e Postura Profissional na Cozinha.",
              "Uniformes, uso de toucas, aventais, luvas.",
              "Conduta ética e de segurança.",
              "Controle de porções para reduzir desperdício.",
              "Segurança Alimentar e Fiscalização Sanitária.",
              "Atendimento ao Cliente, postura, comunicação cordial, foco na experiência do cliente."
            ]
          },
          {
            title: "Conservação de Alimentos",
            items: [
              "Controle de Temperaturas.",
              "Regras para congelamento, refrigeração, descongelamento e preparo.",
              "Importância do registro de planilhas de controle."
            ]
          },
          {
            title: "Recebimento e Armazenamento Correto de Mercadorias",
            items: [
              "Conferência de quantidade, qualidade, temperatura e validade.",
              "Planejamento de produção."
            ]
          },
          {
            title: "Padronização de Receitas e Fichas Técnicas",
            items: [
              "Como seguir passo a passo as fichas técnicas e manter padrão e sabor.",
              "Quanto comprar de insumos alimentares.",
              "Controle de porções para reduzir desperdício.",
              "Como se preparar para uma inspeção da Vigilância Sanitária."
            ]
          }
        ]
      }
    }
  ];

  const handleWhatsApp = (service: string) => {
    const message = encodeURIComponent(`Olá! Tenho interesse no serviço de ${service}. Gostaria de mais informações sobre valores e cronograma.`);
    window.open(`https://wa.me/5511943430405?text=${message}`, '_blank');
  };

  return (
    <section id="servicos" className="py-16 bg-muted">
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
                
                <div className="pt-4 border-t border-border space-y-3">
                  <p className="text-lg font-semibold text-primary">{service.price}</p>
                  
                  <Button 
                    onClick={() => setSelectedService(service)}
                    variant="outline"
                    className="w-full"
                  >
                    <Info className="w-4 h-4 mr-2" />
                    Ver Detalhes Completos
                  </Button>
                  
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
        
        {selectedService && (
          <ServiceModal 
            isOpen={!!selectedService}
            onClose={() => setSelectedService(null)}
            service={selectedService}
          />
        )}
      </div>
    </section>
  );
};

export default ServicesSection;