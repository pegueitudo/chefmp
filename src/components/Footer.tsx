import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de mais informações sobre os serviços da Chef MP.");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-poppins font-bold mb-4">Chef MP</h3>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Consultoria gastronômica e sanitária especializada em transformar cozinhas em operações seguras e lucrativas.
            </p>
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-chef font-medium"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </button>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-poppins font-semibold mb-4">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-primary-foreground/80 hover:text-primary-foreground transition-chef">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-primary-foreground/80 hover:text-primary-foreground transition-chef">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#por-que-escolher" className="text-primary-foreground/80 hover:text-primary-foreground transition-chef">
                  Por que nos escolher
                </a>
              </li>
              <li>
                <a href="#quem-somos" className="text-primary-foreground/80 hover:text-primary-foreground transition-chef">
                  Quem somos
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-primary-foreground/80 hover:text-primary-foreground transition-chef">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-primary-foreground/80 hover:text-primary-foreground transition-chef">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-poppins font-semibold mb-4">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-primary-foreground/80">Diagnóstico Inicial</span>
              </li>
              <li>
                <span className="text-primary-foreground/80">Consultoria Mensal</span>
              </li>
              <li>
                <span className="text-primary-foreground/80">Treinamentos</span>
              </li>
              <li>
                <span className="text-primary-foreground/80">Boas Práticas</span>
              </li>
              <li>
                <span className="text-primary-foreground/80">Fichas Técnicas</span>
              </li>
              <li>
                <span className="text-primary-foreground/80">Controle Sanitário</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-poppins font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MessageCircle className="w-4 h-4 mr-3 text-secondary" />
                <span className="text-primary-foreground/80">(11) 99999-9999</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-secondary" />
                <span className="text-primary-foreground/80">(11) 3333-4444</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-secondary" />
                <span className="text-primary-foreground/80">contato@chefmp.com.br</span>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="font-medium mb-2">Horário de Atendimento</h5>
              <p className="text-sm text-primary-foreground/80">
                Segunda a Sexta: 8h às 18h<br />
                Sábado: 8h às 12h
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-primary-foreground/80 mb-4 md:mb-0">
              © {currentYear} Chef MP. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/politica-privacidade" className="text-primary-foreground/80 hover:text-primary-foreground transition-chef">
                Política de Privacidade
              </a>
              <span className="text-primary-foreground/40">|</span>
              <span className="text-primary-foreground/80">
                LGPD Compliance
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;