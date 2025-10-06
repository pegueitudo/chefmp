import { Helmet } from "react-helmet-async";

interface StructuredDataProps {
  type?: 'home' | 'faq';
}

const StructuredData = ({ type = 'home' }: StructuredDataProps) => {
  const baseUrl = "https://chefmp.com.br";

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Chef MP",
    "description": "Consultoria gastronômica e sanitária especializada em Boas Práticas, segurança alimentar e padronização de processos",
    "url": baseUrl,
    "logo": `${baseUrl}/chef-mp-og.jpg`,
    "image": `${baseUrl}/chef-mp-og.jpg`,
    "telephone": "+55-11-99999-9999",
    "email": "contato@chefmp.com.br",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR",
      "addressRegion": "SP"
    },
    "serviceType": "Consultoria Gastronômica",
    "areaServed": "Brasil",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Consultoria",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Diagnóstico Inicial",
            "description": "Auditoria técnica completa e plano de ação priorizado"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Consultoria Mensal",
            "description": "Implantação e manutenção de Boas Práticas com relatórios"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Treinamentos",
            "description": "Capacitação da equipe em segurança alimentar"
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quais são os principais erros que geram multa na cozinha?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Os principais erros incluem: ausência de Manual de Boas Práticas (MBP) e POPs, armazenamento inadequado de alimentos, falta de controle de temperatura, ausência de fichas técnicas, uso incorreto de uniformes e EPIs, condições inadequadas de higiene pessoal, presença de pragas urbanas, rotulagem incorreta e descarte inadequado de resíduos."
        }
      },
      {
        "@type": "Question",
        "name": "O que inclui o diagnóstico inicial do Chef MP?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O diagnóstico inclui avaliação de estrutura física e layout, análise de Boas Práticas e higiene, controle sanitário, gestão de equipe, documentação obrigatória, cardápio e fichas técnicas, além de relatório de não conformidades e plano de ação priorizado."
        }
      },
      {
        "@type": "Question",
        "name": "Como a consultoria mensal funciona?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A consultoria mensal inclui auditorias programadas, controles sanitários, gestão de estoque e compras, padronização de cardápios, gestão de equipe e relatórios mensais com indicadores de performance."
        }
      }
    ]
  };

  const schemas = type === 'faq' ? [professionalServiceSchema, faqSchema] : [professionalServiceSchema];

  return (
    <Helmet>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default StructuredData;