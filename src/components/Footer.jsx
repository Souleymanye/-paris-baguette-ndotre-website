import React from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  QrCode, 
  Facebook, 
  MessageCircle,
  Heart,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const qrCodes = [
    {
      icon: <QrCode className="w-8 h-8" />,
      title: "Menu Digital",
      description: "Accès complet au menu"
    },
    {
      icon: <QrCode className="w-8 h-8" />,
      title: "Localisation",
      description: "GPS et itinéraire"
    },
    {
      icon: <QrCode className="w-8 h-8" />,
      title: "Contact",
      description: "Infos et réservation"
    },
    {
      icon: <QrCode className="w-8 h-8" />,
      title: "Commande",
      description: "WhatsApp direct"
    }
  ];

  const services = [
    "Boulangerie artisanale",
    "Pâtisserie française",
    "Restaurant gastronomique",
    "Rooftop avec vue",
    "Glacier artisanal",
    "Salon de thé"
  ];

  const quickLinks = [
    { name: "Accueil", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "À propos", href: "#about" },
    { name: "Produits", href: "#products" },
    { name: "Contact", href: "#location" }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Section principale */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Informations principales */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">PB</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Paris Baguette</h3>
                <p className="text-sm opacity-80">N'dotré</p>
              </div>
            </div>
            
            <p className="text-sm opacity-80 mb-6 leading-relaxed">
              Votre boulangerie-restaurant de référence à Abidjan. 
              Excellence française et hospitalité ivoirienne, 24h/24.
            </p>

            {/* Informations de contact */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 opacity-80" />
                <div className="text-sm">
                  <p>Carrefour N'dotré, Abobo</p>
                  <p className="opacity-80">Abidjan, Côte d'Ivoire</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-1 opacity-80" />
                <div className="text-sm">
                  <p>(+225) 01 40 99 99 77</p>
                  <p className="opacity-80">(+225) 05 05 70 54 61</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 mt-1 opacity-80" />
                <div className="text-sm">
                  <p>Ouvert 24h/24</p>
                  <p className="opacity-80">7 jours sur 7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all flex items-center space-x-2"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nos Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-sm opacity-80 flex items-center space-x-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* QR Codes */}
          <div>
            <h4 className="text-lg font-semibold mb-6">QR Codes Rapides</h4>
            <div className="grid grid-cols-2 gap-3">
              {qrCodes.map((qr, index) => (
                <div key={index} className="text-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
                  <div className="flex justify-center mb-2 text-primary">
                    {qr.icon}
                  </div>
                  <h5 className="text-xs font-medium mb-1">{qr.title}</h5>
                  <p className="text-xs opacity-70">{qr.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section réseaux sociaux */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Réseaux sociaux */}
            <div className="flex items-center space-x-4">
              <span className="text-sm opacity-80">Suivez-nous :</span>
              <div className="flex space-x-3">
                <a 
                  href="https://facebook.com/parisbaguette40999977" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://wa.me/2250140999977" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Statut */}
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm opacity-80">Actuellement ouvert</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm opacity-70">
              © {currentYear} Paris Baguette N'dotré. Tous droits réservés.
            </p>
            <p className="text-sm opacity-70 flex items-center space-x-1">
              <span>Fait avec</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>à Abidjan</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

