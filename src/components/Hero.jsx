import React from 'react';
import { Button } from '@/components/ui/button';
import { QrCode, Clock, MapPin, Star } from 'lucide-react';
import heroImage from '../assets/paris_baguette_real_storefront.png';
import { orderGeneral } from '../utils/actions.js';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Image de fond */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax-slow"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/60"></div>
      </div>

      {/* Contenu */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass-effect rounded-full px-6 py-3 mb-8 animate-fade-in-up hover-glow">
            <Star className="w-5 h-5 text-primary animate-float" />
            <span className="text-sm font-medium">Boulangerie-Restaurant de référence</span>
          </div>

          {/* Titre principal */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            PARIS BAGUETTE
            <span className="block gradient-text">N'dotré</span>
          </h1>

          {/* Sous-titre */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Votre boulangerie-restaurant 24h/24 au cœur d'Abobo. 
            Savourez l'excellence française dans un cadre moderne avec rooftop.
          </p>

          {/* Informations clés */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-10 text-sm md:text-base animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="flex items-center space-x-2 glass-effect rounded-full px-6 py-3 hover-lift">
              <Clock className="w-5 h-5 text-primary" />
              <span>Ouvert 24h/24</span>
            </div>
            <div className="flex items-center space-x-2 glass-effect rounded-full px-6 py-3 hover-lift">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Carrefour N'dotré, Abobo</span>
            </div>
          </div>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <Button 
              size="lg" 
              className="btn-fluid text-primary-foreground px-8 py-4 text-lg hover-lift"
              onClick={() => scrollToSection('products')}
            >
              Découvrir nos produits
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="glass-effect border-white text-white hover:bg-white/20 px-8 py-4 text-lg hover-lift"
              onClick={() => scrollToSection('location')}
            >
              Nous localiser
            </Button>
          </div>

          {/* QR Code Section */}
          <div className="qr-container rounded-2xl p-6 max-w-md mx-auto animate-scale-in" style={{animationDelay: '1s'}}>
            <div className="flex items-center justify-center space-x-4">
              <div className="text-center">
                <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center mb-3 mx-auto hover-scale">
                  <QrCode className="w-16 h-16 text-foreground" />
                </div>
                <p className="text-sm font-medium text-foreground">Scannez pour voir</p>
                <p className="text-sm text-muted-foreground">notre menu complet</p>
              </div>
              <div className="text-left text-foreground">
                <h3 className="font-semibold mb-2">Accès rapide</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Menu digital</li>
                  <li>• Commande directe</li>
                  <li>• Prix actualisés</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Indicateur de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center glass-effect">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

