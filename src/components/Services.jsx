import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Croissant, 
  Coffee, 
  UtensilsCrossed, 
  Building, 
  Snowflake, 
  Tv,
  Wind,
  Users
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Croissant className="w-8 h-8" />,
      title: "Boulangerie",
      description: "Pain frais, baguettes traditionnelles et viennoiseries artisanales préparés quotidiennement selon les méthodes françaises.",
      features: ["Pain frais", "Baguettes", "Viennoiseries"],
      delay: "0.1s"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Pâtisserie & Salon de thé",
      description: "Délicieuses pâtisseries françaises, gâteaux sur mesure et espace détente pour savourer nos créations.",
      features: ["Pâtisseries", "Gâteaux", "Salon de thé"],
      delay: "0.2s"
    },
    {
      icon: <UtensilsCrossed className="w-8 h-8" />,
      title: "Restaurant",
      description: "Cuisine française et internationale dans un cadre moderne et chaleureux, ouvert 24h/24 pour votre confort.",
      features: ["Cuisine française", "Plats internationaux", "Service 24h/24"],
      delay: "0.3s"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Rooftop",
      description: "Terrasse panoramique avec vue sur Abidjan, parfaite pour vos moments de détente et événements spéciaux.",
      features: ["Vue panoramique", "Terrasse", "Événements"],
      delay: "0.4s"
    },
    {
      icon: <Snowflake className="w-8 h-8" />,
      title: "Glacier",
      description: "Large sélection de glaces artisanales et sorbets rafraîchissants, parfaits pour le climat tropical.",
      features: ["Glaces artisanales", "Sorbets", "Desserts glacés"],
      delay: "0.5s"
    }
  ];

  const amenities = [
    {
      icon: <Wind className="w-6 h-6" />,
      title: "Climatisation",
      description: "Confort optimal",
      delay: "0.6s"
    },
    {
      icon: <Tv className="w-6 h-6" />,
      title: "Écrans TV",
      description: "Divertissement",
      delay: "0.7s"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Terrasse",
      description: "Espace extérieur",
      delay: "0.8s"
    }
  ];

  return (
    <section id="services" className="py-20 section-fluid">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 gradient-text">
            Nos Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre gamme complète de services dans un cadre moderne et accueillant, 
            alliant tradition française et hospitalité ivoirienne.
          </p>
        </div>

        {/* Services principaux */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card-premium rounded-2xl hover-lift animate-fade-in-up"
              style={{animationDelay: service.delay}}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 glass-effect rounded-full flex items-center justify-center text-primary hover-glow transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex}
                      className="text-xs glass-effect text-primary px-3 py-1 rounded-full hover-scale transition-all duration-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </div>
          ))}
        </div>

        {/* Équipements */}
        <div className="card-premium rounded-2xl p-8 shadow-lg animate-fade-in-up" style={{animationDelay: '0.9s'}}>
          <h3 className="text-2xl font-semibold text-foreground mb-6 text-center gradient-text">
            Équipements & Confort
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {amenities.map((amenity, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-4 p-4 glass-effect rounded-xl hover-lift animate-fade-in-left"
                style={{animationDelay: amenity.delay}}
              >
                <div className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-primary hover-glow">
                  {amenity.icon}
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{amenity.title}</h4>
                  <p className="text-sm text-muted-foreground">{amenity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Horaires */}
        <div className="mt-12 text-center animate-scale-in" style={{animationDelay: '1s'}}>
          <div className="inline-flex items-center space-x-3 glass-effect rounded-full px-8 py-4 hover-glow">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-primary font-semibold text-lg gradient-text">
              Ouvert 24h/24 - 7j/7
            </span>
          </div>
          <p className="text-muted-foreground mt-2">
            Nous sommes toujours là pour vous servir
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;

