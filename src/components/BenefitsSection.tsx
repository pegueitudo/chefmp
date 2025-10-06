import { Card, CardContent } from "@/components/ui/card";
import { Shield, TrendingUp, Target, Users, Star, ClipboardCheck, Brain } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Conformidade Sanitária",
      description: "Segurança contra multas e interdições ao cumprir integralmente a legislação sanitária"
    },
    {
      icon: TrendingUp,
      title: "Redução de Desperdícios",
      description: "Menos desperdício, mais lucro com controle rigoroso de estoque e fichas técnicas"
    },
    {
      icon: Target,
      title: "Padronização",
      description: "Qualidade padronizada e experiência consistente para seus clientes"
    },
    {
      icon: Users,
      title: "Produtividade da Equipe",
      description: "Equipe mais capacitada e produtiva com treinamentos contínuos"
    },
    {
      icon: Star,
      title: "Reputação Fortalecida",
      description: "Diferencial competitivo e fortalecimento da marca no mercado"
    },
    {
      icon: ClipboardCheck,
      title: "Gestão Organizada",
      description: "Controles sistemáticos de temperatura, relatórios e escalas organizadas"
    },
    {
      icon: Brain,
      title: "Tranquilidade para o Gestor",
      description: "Liberdade para focar no crescimento do estabelecimento"
    }
  ];

  return (
    <section id="por-que-escolher" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-4">
            Por que nos Contratar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Benefícios comprovados que transformam sua operação gastronômica
          </p>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="shadow-chef-md hover:shadow-chef-lg transition-chef group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-success/20 transition-chef">
                  <benefit.icon className="w-6 h-6 text-success" />
                </div>
                <h3 className="text-lg font-poppins font-semibold text-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;