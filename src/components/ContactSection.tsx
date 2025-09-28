import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, MessageCircle, Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    establishment: "",
    city: "",
    state: "",
    operationType: "",
    mealsPerDay: "",
    painPoints: [] as string[],
    message: "",
    acceptTerms: false
  });

  const painPointOptions = [
    "Multas/risco sanitário",
    "Desperdício alto",
    "Cardápio desorganizado",
    "Problemas com equipe",
    "Controle de estoque",
    "Preparação para auditorias",
    "Outros"
  ];

  const handlePainPointChange = (painPoint: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      painPoints: checked 
        ? [...prev.painPoints, painPoint]
        : prev.painPoints.filter(p => p !== painPoint)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validações
    if (!formData.name || !formData.email || !formData.whatsapp) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.acceptTerms) {
      toast({
        title: "Termos de uso",
        description: "É necessário aceitar os termos para enviar o formulário.",
        variant: "destructive"
      });
      return;
    }

    // Simular envio
    try {
      // Aqui seria a integração real com backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve. Obrigado pelo interesse!",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        whatsapp: "",
        establishment: "",
        city: "",
        state: "",
        operationType: "",
        mealsPerDay: "",
        painPoints: [],
        message: "",
        acceptTerms: false
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro. Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive"
      });
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de agendar uma conversa sobre a consultoria gastronômica da Chef MP.");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <section id="contato" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-4">
            Vamos Organizar sua Cozinha e Aumentar sua Margem?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solicite seu diagnóstico gratuito e descubra como podemos transformar sua operação
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <Card className="shadow-chef-lg h-fit">
              <CardHeader>
                <CardTitle className="text-xl font-poppins text-primary">
                  Entre em Contato
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">(11) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">E-mail</p>
                    <p className="text-sm text-muted-foreground">contato@chefmp.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Telefone</p>
                    <p className="text-sm text-muted-foreground">(11) 3333-4444</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <Button 
                    onClick={handleWhatsApp}
                    className="w-full bg-gradient-cta hover:opacity-90 text-warning-foreground"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Falar no WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-chef-lg">
              <CardHeader>
                <CardTitle className="text-xl font-poppins text-primary">
                  Solicitar Diagnóstico
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome completo *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="whatsapp">WhatsApp *</Label>
                      <Input
                        id="whatsapp"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData(prev => ({ ...prev, whatsapp: e.target.value }))}
                        placeholder="(11) 99999-9999"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="establishment">Nome do estabelecimento</Label>
                      <Input
                        id="establishment"
                        value={formData.establishment}
                        onChange={(e) => setFormData(prev => ({ ...prev, establishment: e.target.value }))}
                        placeholder="Nome do seu negócio"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">Cidade</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                        placeholder="Sua cidade"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="state">Estado</Label>
                      <Input
                        id="state"
                        value={formData.state}
                        onChange={(e) => setFormData(prev => ({ ...prev, state: e.target.value }))}
                        placeholder="SP"
                        maxLength={2}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="operationType">Tipo de operação</Label>
                      <Select value={formData.operationType} onValueChange={(value) => setFormData(prev => ({ ...prev, operationType: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="restaurante">Restaurante</SelectItem>
                          <SelectItem value="marmitaria">Marmitaria</SelectItem>
                          <SelectItem value="refeitorio">Refeitório</SelectItem>
                          <SelectItem value="lanchonete">Lanchonete</SelectItem>
                          <SelectItem value="padaria">Padaria</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="mealsPerDay">Refeições por dia</Label>
                      <Select value={formData.mealsPerDay} onValueChange={(value) => setFormData(prev => ({ ...prev, mealsPerDay: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a faixa" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ate-50">Até 50</SelectItem>
                          <SelectItem value="51-100">51 a 100</SelectItem>
                          <SelectItem value="101-300">101 a 300</SelectItem>
                          <SelectItem value="301-500">301 a 500</SelectItem>
                          <SelectItem value="mais-500">Mais de 500</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>Principais dores (marque todas que se aplicam)</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {painPointOptions.map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox
                            id={option}
                            checked={formData.painPoints.includes(option)}
                            onCheckedChange={(checked) => handlePainPointChange(option, checked as boolean)}
                          />
                          <Label htmlFor={option} className="text-sm cursor-pointer">
                            {option}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem adicional</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Conte-nos mais detalhes sobre suas necessidades..."
                      rows={4}
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.acceptTerms}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, acceptTerms: checked as boolean }))}
                      required
                    />
                    <Label htmlFor="terms" className="text-sm cursor-pointer leading-relaxed">
                      Aceito ser contatado pela Chef MP via e-mail, WhatsApp e telefone para receber informações sobre serviços. 
                      Li e concordo com a <a href="/politica-privacidade" className="text-primary hover:underline">Política de Privacidade</a>.
                    </Label>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3"
                    size="lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Solicitar Diagnóstico
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;