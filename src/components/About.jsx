import React from 'react';
import { Button } from '@/components/ui/button';
import { QrCode, Heart, Award, Users, Clock } from 'lucide-react';
import interiorImage from '../assets/paris_baguette_real_interior.jpg';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passion",
      description: "L'amour de la boulangerie française et de l'hospitalité ivoirienne",
      delay: "0.1s"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Qualité",
      description: "Ingrédients sélectionnés et savoir-faire artisanal",
      delay: "0.2s"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Convivialité",
      description: "Un lieu de rencontre chaleureux pour tous",
      delay: "0.3s"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Disponibilité",
      description: "À votre service 24h/24 pour votre confort",
      delay: "0.4s"
    }
  ];

  const stats = [
    { number: "24/7", label: "Service continu", delay: "0.5s" },
    { number: "5+", label: "Services", delay: "0.6s" },
    { number: "100%", label: "Satisfaction", delay: "0.7s" }
  ];

  return (
    <section id="about" className="py-20 section-transparent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenu texte */}
          <div className="space-y-8">
            <div className="animate-fade-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 gradient-text">
                À propos de PARIS BAGUETTE N'dotré
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="animate-fade-in-left" style={{animationDelay: '0.1s'}}>
                  Situé au carrefour stratégique de N'dotré à Abobo, PARIS BAGUETTE est bien plus qu'une simple boulangerie. 
                  C'est un véritable lieu de vie qui allie l'excellence de la tradition boulangère française à l'hospitalité 
                  chaleureuse ivoirienne.
                </p>
                <p className="animate-fade-in-left" style={{animationDelay: '0.2s'}}>
                  Notre établissement moderne dispose d'une boulangerie artisanale, d'une pâtisserie raffinée, d'un restaurant 
                  gastronomique, d'un glacier gourmand et d'un salon de thé cosy. Notre rooftop offre une vue imprenable sur 
                  Abidjan, créant l'ambiance parfaite pour vos moments de détente.
                </p>
                <p className="animate-fade-in-left" style={{animationDelay: '0.3s'}}>
                  Ouverts 24h/24, nous nous engageons à vous offrir une expérience culinaire exceptionnelle à tout moment 
                  de la journée, dans un cadre climatisé et confortable.
                </p>
              </div>
            </div>

            {/* Valeurs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="card-premium p-4 rounded-xl hover-lift animate-fade-in-left"
                  style={{animationDelay: value.delay}}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 glass-effect rounded-full flex items-center justify-center text-primary hover-glow">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* QR Contact */}
            <div className="qr-container rounded-xl p-6 animate-scale-in" style={{animationDelay: '0.8s'}}>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center hover-scale">
                  <QrCode className="w-12 h-12 text-foreground" />
                </div>
                <div className="text-foreground">
                  <h4 className="font-semibold mb-1">Contactez-nous rapidement</h4>
                  <p className="text-sm text-muted-foreground">
                    Scannez ce QR code pour accéder à nos informations de contact, 
                    réserver une table ou passer commande.
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-2 glass-effect hover:bg-primary/10"
                  >
                    Voir les contacts
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Image et statistiques */}
          <div className="space-y-8">
            <div className="relative animate-fade-in-right">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl hover-lift">
                <img 
                  src={interiorImage} 
                  alt="Intérieur Paris Baguette N'dotré" 
                  className="w-full h-96 object-cover hover-scale transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Overlay avec effet de verre */}
              <div className="absolute -bottom-6 -right-6 glass-effect rounded-2xl p-6 animate-float">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                    <Award className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <p className="text-sm font-medium text-foreground">Excellence</p>
                  <p className="text-xs text-muted-foreground">Garantie</p>
                </div>
              </div>
            </div>

            {/* Statistiques */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="card-premium text-center p-6 rounded-xl hover-lift animate-scale-in"
                  style={{animationDelay: stat.delay}}
                >
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

