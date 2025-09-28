import { Helmet } from "react-helmet-async";

interface SEOMetadataProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  type?: string;
}

const SEOMetadata = ({
  title = "Chef MP - Consultoria Gastronômica e Segurança Alimentar",
  description = "Consultoria gastronômica e sanitária para cozinhas que performam e passam na fiscalização. Implementamos Boas Práticas, padronizamos receitas e controles.",
  keywords = "consultoria gastronômica, boas práticas, segurança alimentar, fichas técnicas, diagnóstico sanitário, consultoria para restaurantes, ANVISA, vigilância sanitária",
  canonical = "/",
  ogImage = "/chef-mp-og.jpg",
  type = "website"
}: SEOMetadataProps) => {
  const baseUrl = "https://chefmp.com.br";
  const fullUrl = `${baseUrl}${canonical}`;
  const fullImageUrl = `${baseUrl}${ogImage}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Chef MP" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Chef MP" />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Portuguese" />
      <meta name="revisit-after" content="7 days" />
    </Helmet>
  );
};

export default SEOMetadata;