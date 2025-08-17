import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { QrCode, ShoppingCart, Download, Share2 } from 'lucide-react';
import productsImage from '../assets/paris_baguette_real_products.jpg';
import { downloadMenu, shareMenu, orderProduct } from '../utils/actions.js';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('boulangerie');

  const categories = [
    { id: 'boulangerie', name: 'Boulangerie', delay: '0.1s' },
    { id: 'patisserie', name: 'Pâtisserie', delay: '0.2s' },
    { id: 'restaurant', name: 'Restaurant', delay: '0.3s' },
    { id: 'boissons', name: 'Boissons & Glacier', delay: '0.4s' }
  ];

  const products = {
    boulangerie: [
      { name: "Baguette traditionnelle", description: "Pain français authentique", price: "500 FCFA", delay: "0.1s" },
      { name: "Croissant au beurre", description: "Viennoiserie feuilletée", price: "300 FCFA", delay: "0.2s" },
      { name: "Pain de mie", description: "Pain moelleux pour sandwich", price: "800 FCFA", delay: "0.3s" },
      { name: "Pain aux raisins", description: "Viennoiserie sucrée", price: "400 FCFA", delay: "0.4s" }
    ],
    patisserie: [
      { name: "Éclair au chocolat", description: "Pâte à choux garnie", price: "600 FCFA", delay: "0.1s" },
      { name: "Tarte aux fruits", description: "Pâtisserie saisonnière", price: "1200 FCFA", delay: "0.2s" },
      { name: "Macaron assortis", description: "Délicatesse française", price: "200 FCFA", delay: "0.3s" },
      { name: "Mille-feuille", description: "Feuilletage crémeux", price: "800 FCFA", delay: "0.4s" }
    ],
    restaurant: [
      { name: "Sandwich club", description: "Garni généreusement", price: "1500 FCFA", delay: "0.1s" },
      { name: "Salade César", description: "Fraîcheur garantie", price: "2000 FCFA", delay: "0.2s" },
      { name: "Quiche lorraine", description: "Spécialité française", price: "1800 FCFA", delay: "0.3s" },
      { name: "Plat du jour", description: "Menu varié quotidien", price: "2500 FCFA", delay: "0.4s" }
    ],
    boissons: [
      { name: "Café expresso", description: "Arabica sélectionné", price: "300 FCFA", delay: "0.1s" },
      { name: "Thé à la menthe", description: "Infusion rafraîchissante", price: "250 FCFA", delay: "0.2s" },
      { name: "Smoothie tropical", description: "Fruits frais mixés", price: "800 FCFA", delay: "0.3s" },
      { name: "Glace artisanale", description: "Parfums variés", price: "400 FCFA", delay: "0.4s" }
    ]
  };

  return (
    <section id="products" className="py-20 section-fluid">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 gradient-text">
            Nos Produits
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre sélection de produits frais, préparés quotidiennement 
            avec passion et savoir-faire artisanal.
          </p>
        </div>

        {/* Navigation des catégories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 animate-fade-in-up hover-lift ${
                activeCategory === category.id 
                  ? 'btn-fluid text-primary-foreground' 
                  : 'glass-effect hover:bg-primary/10'
              }`}
              style={{animationDelay: category.delay}}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Grille de produits */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Image des produits */}
          <div className="lg:col-span-1">
            <div className="relative animate-fade-in-left">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl hover-lift">
                <img 
                  src={productsImage} 
                  alt="Produits Paris Baguette" 
                  className="w-full h-96 object-cover hover-scale transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                
                {/* Badge catégorie active */}
                <div className="absolute top-4 left-4 glass-effect rounded-full px-4 py-2">
                  <span className="text-white font-medium capitalize">
                    {categories.find(cat => cat.id === activeCategory)?.name}
                  </span>
                </div>
              </div>
              
              {/* Overlay flottant */}
              <div className="absolute -bottom-6 -right-6 glass-effect rounded-2xl p-4 animate-float">
                <div className="text-center">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                    <ShoppingCart className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <p className="text-xs font-medium text-foreground">Frais</p>
                  <p className="text-xs text-muted-foreground">Quotidien</p>
                </div>
              </div>
            </div>
          </div>

          {/* Liste des produits */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground mb-6 gradient-text capitalize animate-fade-in-right">
                {categories.find(cat => cat.id === activeCategory)?.name}
              </h3>
              <p className="text-muted-foreground mb-6 animate-fade-in-right" style={{animationDelay: '0.1s'}}>
                {activeCategory === 'boulangerie' && "Pain frais et viennoiseries artisanales"}
                {activeCategory === 'patisserie' && "Gâteaux et desserts raffinés"}
                {activeCategory === 'restaurant' && "Cuisine française et internationale dans un cadre moderne et chaleureux, ouvert 24h/24 pour votre confort"}
                {activeCategory === 'boissons' && "Boissons chaudes, froides et glaces artisanales"}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {products[activeCategory].map((product, index) => (
                  <div 
                    key={index} 
                    className="card-premium p-4 rounded-xl hover-lift animate-fade-in-up"
                    style={{animationDelay: product.delay}}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{product.name}</h4>
                        <p className="text-sm text-muted-foreground">{product.description}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold gradient-text">{product.price}</span>
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      className="w-full btn-fluid text-primary-foreground hover-lift"
                      onClick={() => orderProduct(product.name, product.price)}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Commander
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section QR Menu */}
        <div className="qr-container rounded-2xl p-8 max-w-2xl mx-auto animate-scale-in" style={{animationDelay: '0.8s'}}>
          <div className="text-center mb-6">
            <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 hover-scale shadow-lg">
              <QrCode className="w-24 h-24 text-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2 gradient-text">
              Menu Digital Complet
            </h3>
            <p className="text-muted-foreground">
              Scannez ce QR code pour accéder à notre menu complet avec tous les prix 
              et la possibilité de commander directement.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              className="glass-effect hover:bg-primary/10 hover-lift"
              onClick={downloadMenu}
            >
              <Download className="w-4 h-4 mr-2" />
              Télécharger
            </Button>
            <Button 
              className="btn-fluid text-primary-foreground hover-lift"
              onClick={shareMenu}
            >
              <Share2 className="w-4 h-4 mr-2" />
              Partager
            </Button>
          </div>
        </div>

        {/* Bouton d'action principal */}
        <div className="text-center mt-12 animate-fade-in-up" style={{animationDelay: '1s'}}>
          <Button 
            size="lg" 
            className="btn-fluid text-primary-foreground px-8 py-4 text-lg hover-lift"
            onClick={() => orderProduct('Commande générale', '')}
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Commander maintenant
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;

