import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingDown, AlertTriangle, Utensils, Users, Package } from "lucide-react";

const ChallengesSection = () => {
  const challenges = [
    {
      icon: TrendingDown,
      title: "Desperdício elevado e baixa rentabilidade",
      description: "Falta de controle de custos e gestão inadequada de estoque geram perdas desnecessárias."
    },
    {
      icon: AlertTriangle,
      title: "Falhas em Boas Práticas",
      description: "Risco de multas e interdições por não conformidade com a legislação sanitária."
    },
    {
      icon: Utensils,
      title: "Cardápios sem padrão",
      description: "Ausência de fichas técnicas resulta em qualidade inconsistente e custos descontrolados."
    },
    {
      icon: Users,
      title: "Escalas e dimensionamento falhos",
      description: "Equipe mal dimensionada compromete produtividade e qualidade do atendimento."
    },
    {
      icon: Package,
      title: "Estoques desorganizados",
      description: "Perdas por vencimento, armazenamento inadequado e falta de controle de temperatura."
    }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-4">
            Sua operação já sofreu com algum desses problemas?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.slice(0, 3).map((challenge, index) => (
            <Card key={index} className="shadow-chef-md hover:shadow-chef-lg transition-chef border-l-4 border-l-destructive">
              <CardHeader>
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                  <challenge.icon className="w-6 h-6 text-destructive" />
                </div>
                <CardTitle className="text-lg font-poppins">{challenge.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{challenge.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {challenges.slice(3).map((challenge, index) => (
            <Card key={index + 3} className="shadow-chef-md hover:shadow-chef-lg transition-chef border-l-4 border-l-destructive">
              <CardHeader>
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                  <challenge.icon className="w-6 h-6 text-destructive" />
                </div>
                <CardTitle className="text-lg font-poppins">{challenge.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{challenge.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;