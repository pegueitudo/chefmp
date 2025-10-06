import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOMetadata from "@/components/SEOMetadata";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, UserCheck } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOMetadata 
        title="Política de Privacidade - Chef MP | LGPD Compliance"
        description="Política de Privacidade do Chef MP em conformidade com a LGPD. Transparência total sobre proteção e uso de dados pessoais."
        canonical="/politica-privacidade"
        type="article"
      />
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-4">
                Política de Privacidade
              </h1>
              <p className="text-lg text-muted-foreground">
                Transparência total sobre como protegemos e utilizamos seus dados pessoais
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>
            </div>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="shadow-chef-md">
                <CardContent className="p-6 text-center">
                  <Eye className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-poppins font-semibold mb-2">Transparência</h3>
                  <p className="text-sm text-muted-foreground">
                    Informamos claramente quais dados coletamos e como os usamos
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-chef-md">
                <CardContent className="p-6 text-center">
                  <Lock className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-poppins font-semibold mb-2">Segurança</h3>
                  <p className="text-sm text-muted-foreground">
                    Seus dados são protegidos com tecnologias de segurança avançadas
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-chef-md">
                <CardContent className="p-6 text-center">
                  <UserCheck className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-poppins font-semibold mb-2">Controle</h3>
                  <p className="text-sm text-muted-foreground">
                    Você tem total controle sobre suas informações pessoais
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <Card className="shadow-chef-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-poppins text-primary">
                    1. Informações que Coletamos
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p className="mb-4">Coletamos as seguintes informações quando você entra em contato conosco:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Dados de identificação:</strong> nome completo, e-mail, telefone/WhatsApp</li>
                    <li><strong>Dados profissionais:</strong> nome do estabelecimento, cidade, tipo de operação</li>
                    <li><strong>Dados operacionais:</strong> número de refeições por dia, principais desafios</li>
                    <li><strong>Dados de comunicação:</strong> mensagens enviadas através do formulário de contato</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-chef-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-poppins text-primary">
                    2. Como Utilizamos suas Informações
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p className="mb-4">Utilizamos seus dados pessoais para:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Entrar em contato para apresentar nossos serviços de consultoria gastronômica</li>
                    <li>Elaborar propostas personalizadas conforme suas necessidades</li>
                    <li>Enviar informações relevantes sobre boas práticas e segurança alimentar</li>
                    <li>Manter histórico de comunicações para melhor atendimento</li>
                    <li>Cumprir obrigações legais e regulamentares</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-chef-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-poppins text-primary">
                    3. Base Legal para o Tratamento
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p className="mb-4">O tratamento de seus dados pessoais é baseado em:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Consentimento:</strong> ao aceitar os termos do formulário de contato</li>
                    <li><strong>Legítimo interesse:</strong> para fins comerciais relacionados à nossa atividade</li>
                    <li><strong>Execução de contrato:</strong> quando necessário para prestação de serviços</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-chef-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-poppins text-primary">
                    4. Compartilhamento de Dados
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p className="mb-4">
                    Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, 
                    exceto nas seguintes situações:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Quando exigido por lei ou ordem judicial</li>
                    <li>Com prestadores de serviços que nos auxiliam (sempre mediante contrato de confidencialidade)</li>
                    <li>Em caso de reestruturação empresarial (fusão, aquisição, etc.)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-chef-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-poppins text-primary">
                    5. Seus Direitos (LGPD)
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p className="mb-4">Conforme a Lei Geral de Proteção de Dados, você tem direito a:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Confirmação:</strong> saber se tratamos seus dados pessoais</li>
                    <li><strong>Acesso:</strong> obter cópia dos dados que possuímos sobre você</li>
                    <li><strong>Correção:</strong> solicitar a correção de dados incompletos ou inexatos</li>
                    <li><strong>Eliminação:</strong> solicitar a exclusão de dados desnecessários</li>
                    <li><strong>Portabilidade:</strong> receber seus dados em formato estruturado</li>
                    <li><strong>Revogação:</strong> retirar o consentimento a qualquer momento</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-chef-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-poppins text-primary">
                    6. Segurança dos Dados
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p className="mb-4">
                    Implementamos medidas técnicas e organizacionais apropriadas para proteger seus dados:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Criptografia de dados em trânsito e em repouso</li>
                    <li>Controle de acesso restrito aos dados pessoais</li>
                    <li>Treinamento regular da equipe sobre proteção de dados</li>
                    <li>Monitoramento contínuo de sistemas e processos</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-chef-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-poppins text-primary">
                    7. Retenção de Dados
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p>
                    Mantemos seus dados pessoais apenas pelo tempo necessário para as finalidades 
                    descritas nesta política, observando sempre os prazos legais aplicáveis. 
                    Dados de contato são mantidos por até 5 anos após o último contato, 
                    salvo se você solicitar a exclusão antecipada.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-chef-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-poppins text-primary">
                    8. Contato e DPO
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p className="mb-4">
                    Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p><strong>E-mail:</strong> privacidade@chefmp.com.br</p>
                    <p><strong>WhatsApp:</strong> (11) 99999-9999</p>
                    <p><strong>Responsável:</strong> Chef MP Consultoria Gastronômica</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-chef-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-poppins text-primary">
                    9. Alterações nesta Política
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p>
                    Esta política pode ser atualizada periodicamente. Quando houver alterações significativas, 
                    notificaremos você por e-mail ou através de aviso em nosso site. 
                    Recomendamos revisar esta página regularmente para estar ciente de quaisquer mudanças.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;