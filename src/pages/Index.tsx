import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ChallengesSection from "@/components/ChallengesSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSteps from "@/components/ProcessSteps";
import ErrorsAccordion from "@/components/ErrorsAccordion";
import BenefitsSection from "@/components/BenefitsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SEOMetadata from "@/components/SEOMetadata";
import StructuredData from "@/components/StructuredData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOMetadata />
      <StructuredData type="faq" />
      <Header />
      <main>
        <Hero />
        <ChallengesSection />
        <ServicesSection />
        <ProcessSteps />
        <ErrorsAccordion />
        <BenefitsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
