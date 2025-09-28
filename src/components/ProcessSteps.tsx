import { Card, CardContent } from "@/components/ui/card";
import { Search, ClipboardList, Wrench, BarChart3 } from "lucide-react";

const ProcessSteps = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Diagnóstico",
      description: "Avaliação completa da sua cozinha, identificando não conformidades e oportunidades de melhoria"
    },
    {
      icon: ClipboardList,
      number: "02", 
      title: "Plano de Ação",
      description: "Desenvolvimento de plano customizado com prioridades definidas e cronograma realista"
    },
    {
      icon: Wrench,
      number: "03",
      title: "Implantação",
      description: "Execução das melhorias com acompanhamento presencial e treinamento da equipe"
    },
    {
      icon: BarChart3,
      number: "04",
      title: "Monitoramento",
      description: "Acompanhamento contínuo com relatórios mensais e ajustes quando necessário"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-4">
            Como Funciona
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Processo estruturado e comprovado para transformar sua cozinha
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-primary/20 transform translate-x-3 z-0">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary/40 rounded-full"></div>
                  </div>
                )}

                <Card className="relative z-10 shadow-chef-lg hover:shadow-chef-xl transition-chef group h-full">
                  <CardContent className="p-6 text-center">
                    {/* Step Number */}
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-chef">
                      <span className="text-primary font-poppins font-bold text-lg">{step.number}</span>
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-chef">
                      <step.icon className="w-8 h-8 text-secondary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-poppins font-semibold text-primary mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;