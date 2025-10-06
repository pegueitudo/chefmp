import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AlertTriangle } from "lucide-react";

const ErrorsAccordion = () => {
  const errors = [
    {
      title: "Ausência de Manual de Boas Práticas (MBP) e POPs",
      content: "A falta de documentação obrigatória como Manual de Boas Práticas e Procedimentos Operacionais Padrão é uma das principais causas de multas. Estes documentos devem estar sempre disponíveis e atualizados conforme a legislação sanitária."
    },
    {
      title: "Armazenamento inadequado de alimentos",
      content: "Alimentos armazenados em condições inadequadas, sem separação entre produtos crus e cozidos, em temperaturas incorretas ou em recipientes não apropriados representam alto risco de contaminação e multas significativas."
    },
    {
      title: "Falta de controle de temperatura e amostras",
      content: "A ausência de monitoramento contínuo de temperaturas e a coleta em guarda de amostras de maneira inadequada, podem resultar em multas por não atender a legislação sanitária."
    },
    {
      title: "Ausência de fichas técnicas ou registro de preparo",
      content: "Não possuir fichas técnicas detalhadas dos preparos, com informações nutricionais e procedimentos padronizados, compromete a qualidade e a padronização dos preparos, comprometendo a segurança dos alimentos."
    },
    {
      title: "Uso incorreto ou incompleto de uniformes e EPIs",
      content: "Manipuladores sem uniformes adequados, toucas, aventais limpos ou calçados apropriados representam risco direto de contaminação e são facilmente identificados pela fiscalização."
    },
    {
      title: "Condições inadequadas de higiene pessoal",
      content: "Falta de higienização correta das mãos, uso de adornos, unhas compridas ou esmalte, ferimentos expostos são práticas que violam as normas sanitárias básicas."
    },
    {
      title: "Presença de pragas urbanas",
      content: "A existência de insetos, roedores ou outros vetores nas áreas de manipulação indica falhas no controle integrado de pragas e pode resultar em interdição imediata."
    },
    {
      title: "Rotulagem incorreta de alimentos",
      content: "Produtos sem identificação adequada, com informações incorretas ou falta de data de validade comprometem a rastreabilidade e segurança alimentar."
    },
    {
      title: "Descarte inadequado de resíduos",
      content: "Manejo incorreto do lixo, falta de separação adequada ou recipientes sem tampa são infrações que facilitam a proliferação de pragas e contaminação cruzada."
    },
    {
      title: "Equipamentos sem manutenção ou calibração",
      content: "Termômetros descalibrados, equipamentos defeituosos ou sem manutenção preventiva comprometem o controle de temperatura e a segurança dos alimentos."
    }
  ];

  return (
    <section className="py-16 bg-destructive/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-8 h-8 text-destructive" />
          </div>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-4">
            Erros que Mais Geram Multa
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça as principais infrações que podem comprometer seu negócio e como evitá-las
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {errors.map((error, index) => (
              <AccordionItem 
                key={index} 
                value={`error-${index}`}
                className="bg-card rounded-lg shadow-chef-md border-l-4 border-l-destructive"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="font-poppins font-medium">{error.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  {error.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ErrorsAccordion;