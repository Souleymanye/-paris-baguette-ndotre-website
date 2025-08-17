import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { QrCode, ShoppingCart, Menu, X } from 'lucide-react';
import logo from '../assets/paris_baguette_logo.jpg';
import { orderGeneral, downloadMenu } from '../utils/actions.js';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { id: 'hero', label: 'Accueil' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'À propos' },
    { id: 'products', label: 'Produits' },
    { id: 'location', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo et nom */}
          <div className="flex items-center space-x-3 hover-scale cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30 hover-glow">
              <img 
                src={logo} 
                alt="Paris Baguette Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white gradient-text">PARIS BAGUETTE</h1>
              <p className="text-xs text-gray-300">N'dotré</p>
            </div>
          </div>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:bg-white/10 hover:text-primary transition-all duration-300 hover-lift"
              >
                {item.label}
              </Button>
            ))}
          </nav>

          {/* Boutons d'action desktop */}
          <div className="hidden md:flex items-center space-x-2">
            <Button 
              variant="outline" 
              size="sm"
              className="glass-effect border-white/30 text-white hover:bg-white/20 hover-lift"
              onClick={downloadMenu}
            >
              <QrCode className="w-4 h-4 mr-2" />
              Menu QR
            </Button>
            <Button 
              size="sm"
              className="btn-fluid text-primary-foreground hover-lift"
              onClick={orderGeneral}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Commander
            </Button>
          </div>

          {/* Menu hamburger mobile */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden glass-effect rounded-lg mt-2 p-4 animate-fade-in-up">
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:bg-white/10 justify-start hover-lift"
                >
                  {item.label}
                </Button>
              ))}
              <div className="flex flex-col space-y-2 pt-2 border-t border-white/20">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="glass-effect border-white/30 text-white hover:bg-white/20"
                  onClick={downloadMenu}
                >
                  <QrCode className="w-4 h-4 mr-2" />
                  Menu QR
                </Button>
                <Button 
                  size="sm"
                  className="btn-fluid text-primary-foreground"
                  onClick={orderGeneral}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Commander
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

