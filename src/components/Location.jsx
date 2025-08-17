import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  MapPin, 
  Phone, 
  Clock, 
  QrCode, 
  Navigation, 
  MessageCircle,
  Mail,
  Facebook
} from 'lucide-react';
import { openGoogleMaps, makeCall, openWhatsApp, openFacebook, sendContactMessage } from '../utils/actions.js';

const Location = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.message) {
      const success = sendContactMessage(formData);
      if (success) {
        setFormData({ name: '', phone: '', message: '' });
      }
    } else {
      alert('Veuillez remplir tous les champs');
    }
  };
  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Adresse",
      content: "Carrefour N'dotré, Abobo",
      subtitle: "Abidjan, Côte d'Ivoire"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Téléphones",
      content: "(+225) 01 40 99 99 77",
      subtitle: "(+225) 05 05 70 54 61"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Horaires",
      content: "Ouvert 24h/24",
      subtitle: "7 jours sur 7"
    }
  ];

  const quickActions = [
    {
      icon: <Navigation className="w-5 h-5" />,
      title: "Itinéraire GPS",
      description: "Ouvrir dans Google Maps",
      action: "GPS",
      variant: "default"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "WhatsApp",
      description: "Commander par message",
      action: "WhatsApp",
      variant: "outline"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Appeler",
      description: "Contact direct",
      action: "Call",
      variant: "outline"
    }
  ];

  const handleQuickAction = (action) => {
    switch (action) {
      case 'GPS':
        openGoogleMaps();
        break;
      case 'WhatsApp':
        openWhatsApp('Bonjour, je souhaite obtenir des informations sur vos services');
        break;
      case 'Call':
        makeCall('+2250140999977');
        break;
      default:
        break;
    }
  };

  return (
    <section id="location" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nous Trouver
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Situés au cœur d'Abobo, nous sommes facilement accessibles et vous accueillons 
            24h/24 dans notre établissement moderne.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Carte et informations */}
          <div className="space-y-6">
            {/* Carte intégrée */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-80 bg-muted/30 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Carrefour N'dotré
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Abobo, Abidjan, Côte d'Ivoire
                    </p>
                    <Button 
                      onClick={() => handleQuickAction('GPS')}
                      className="flex items-center space-x-2"
                    >
                      <Navigation className="w-4 h-4" />
                      <span>Voir sur Google Maps</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Informations de contact */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        <p className="text-foreground">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Actions rapides et QR codes */}
          <div className="space-y-6">
            {/* Actions rapides */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Actions Rapides
                </h3>
                <div className="space-y-4">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant={action.variant}
                      className="w-full justify-start h-auto p-4"
                      onClick={() => handleQuickAction(action.action)}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                          {action.icon}
                        </div>
                        <div className="text-left">
                          <div className="font-medium">{action.title}</div>
                          <div className="text-sm text-muted-foreground">{action.description}</div>
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* QR Codes */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  QR Codes Utiles
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {/* QR Localisation */}
                  <div className="text-center p-4 bg-white rounded-xl">
                    <div className="w-16 h-16 bg-muted/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <QrCode className="w-12 h-12 text-foreground" />
                    </div>
                    <h4 className="font-medium text-sm text-foreground mb-1">Localisation</h4>
                    <p className="text-xs text-muted-foreground">GPS direct</p>
                  </div>

                  {/* QR Contact */}
                  <div className="text-center p-4 bg-white rounded-xl">
                    <div className="w-16 h-16 bg-muted/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <QrCode className="w-12 h-12 text-foreground" />
                    </div>
                    <h4 className="font-medium text-sm text-foreground mb-1">Contact</h4>
                    <p className="text-xs text-muted-foreground">Infos complètes</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Formulaire de contact */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Nous Contacter
                </h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nom complet
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Téléphone
                    </label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Votre numéro"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea 
                      rows="3"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Votre message..."
                      required
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full">
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Réseaux sociaux */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Suivez-nous
                </h3>
                <div className="flex space-x-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center space-x-2"
                    onClick={openFacebook}
                  >
                    <Facebook className="w-4 h-4" />
                    <span>Facebook</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center space-x-2"
                    onClick={() => openWhatsApp()}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

