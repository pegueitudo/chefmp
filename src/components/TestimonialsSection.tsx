import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      content: "Transformei a gestão da cozinha com as orientações da Chef MP. Hoje tenho total controle dos processos e minha equipe trabalha de forma muito mais organizada.",
      author: "Gerente de Restaurante",
      location: "São Paulo - SP",
      rating: 5
    },
    {
      content: "A consultoria foi essencial para garantir a segurança alimentar no nosso estabelecimento. Passamos em todas as fiscalizações sem problemas.",
      author: "Proprietária de Marmitaria",
      location: "Rio de Janeiro - RJ", 
      rating: 5
    },
    {
      content: "Os cardápios ficaram muito mais equilibrados e nutritivos. Nossos clientes elogiaram a melhoria na qualidade das refeições.",
      author: "Chef de Refeitório",
      location: "Belo Horizonte - MG",
      rating: 5
    },
    {
      content: "Os relatórios analíticos me ajudam muito nas decisões do dia a dia. Consigo acompanhar indicadores importantes e tomar ações preventivas.",
      author: "Administrador de Cozinha",
      location: "Brasília - DF",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-4">
            O que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Resultados reais de transformação em cozinhas profissionais
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-chef-lg hover:shadow-chef-xl transition-chef">
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-secondary fill-current" />
                  ))}
                </div>
                
                {/* Testimonial Content */}
                <blockquote className="text-lg text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-semibold text-lg">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-primary">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;