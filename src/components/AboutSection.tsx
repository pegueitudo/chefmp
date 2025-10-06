import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Users, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: CheckCircle,
      title: "Especialização Comprovada",
      description: "Consultoria gastronômica, nutricional e segurança alimentar com foco em resultados"
    },
    {
      icon: Award,
      title: "Implantação Eficaz",
      description: "Monitoramento contínuo de Boas Práticas e POPs para garantir conformidade"
    },
    {
      icon: Users,
      title: "Treinamentos Eficazes",
      description: "Capacitação de equipes com metodologia prática e resultados mensuráveis"
    },
    {
      icon: TrendingUp,
      title: "Foco em Performance",
      description: "Desempenho operacional, segurança alimentar e satisfação do cliente"
    }
  ];

  return (
    <section id="quem-somos" className="py-16" style={{ backgroundColor: '#0C573D' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-4">
              Quem Somos
            </h2>
            <p className="text-lg text-white">
              Especialistas em transformar cozinhas em operações seguras, eficientes e lucrativas
            </p>
          </div>
          
          <div className="bg-card rounded-2xl shadow-chef-lg p-8 mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                O <strong className="text-primary">Chef MP</strong> é especializada em consultoria gastronômica, nutricional e segurança alimentar, 
                com foco na implantação e monitoramento de Boas Práticas e Procedimentos Operacionais Padrão (POPs) 
                para estabelecimentos do setor alimentício.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Nossa expertise abrange <strong className="text-primary">gestão completa de cozinhas profissionais</strong>, 
                desenvolvimento de cardápios equilibrados e rentáveis, criação de fichas técnicas padronizadas e 
                programas de treinamento que elevam a qualidade operacional.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                Com experiência consolidada em gestão administrativa, comercial e de qualidade, oferecemos 
                <strong className="text-primary"> soluções práticas e eficazes</strong> que garantem desempenho operacional superior, 
                segurança dos alimentos e total satisfação dos clientes.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="shadow-chef-md hover:shadow-chef-lg transition-chef">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-poppins font-semibold text-primary mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;