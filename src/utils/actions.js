import { menuData } from './menuData.js';

// Fonction pour télécharger le menu PDF
export const downloadMenu = () => {
  try {
    // Créer le contenu HTML du menu
    const menuHTML = generateMenuHTML();
    
    // Créer un blob avec le contenu
    const blob = new Blob([menuHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    // Créer un lien de téléchargement
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Menu-PARIS-BAGUETTE-Ndotre.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    // Notification de succès
    showNotification('Menu téléchargé avec succès !', 'success');
  } catch (error) {
    console.error('Erreur lors du téléchargement:', error);
    showNotification('Erreur lors du téléchargement du menu', 'error');
  }
};

// Générer le HTML du menu
const generateMenuHTML = () => {
  const { restaurant, categories } = menuData;
  
  return `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menu - ${restaurant.name}</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; color: #333; }
        .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #D4AF37; padding-bottom: 20px; }
        .restaurant-name { color: #D4AF37; font-size: 28px; font-weight: bold; margin-bottom: 10px; }
        .contact-info { font-size: 14px; color: #666; }
        .category { margin-bottom: 30px; }
        .category-title { color: #D4AF37; font-size: 20px; font-weight: bold; margin-bottom: 10px; border-bottom: 1px solid #eee; padding-bottom: 5px; }
        .category-description { font-style: italic; color: #666; margin-bottom: 15px; }
        .menu-item { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; padding: 8px 0; border-bottom: 1px dotted #ddd; }
        .item-info { flex: 1; }
        .item-name { font-weight: bold; color: #333; }
        .item-description { font-size: 12px; color: #666; margin-top: 2px; }
        .item-price { font-weight: bold; color: #D4AF37; white-space: nowrap; margin-left: 20px; }
        .footer { text-align: center; margin-top: 40px; padding-top: 20px; border-top: 2px solid #D4AF37; }
        .hours { font-weight: bold; color: #D4AF37; font-size: 16px; }
    </style>
</head>
<body>
    <div class="header">
        <div class="restaurant-name">${restaurant.name}</div>
        <div class="contact-info">
            <div>${restaurant.address}</div>
            <div>${restaurant.phones.join(' • ')}</div>
        </div>
    </div>
    
    ${Object.values(categories).map(category => `
        <div class="category">
            <div class="category-title">${category.name}</div>
            <div class="category-description">${category.description}</div>
            ${category.items.map(item => `
                <div class="menu-item">
                    <div class="item-info">
                        <div class="item-name">${item.name}</div>
                        <div class="item-description">${item.description}</div>
                    </div>
                    <div class="item-price">${item.price}</div>
                </div>
            `).join('')}
        </div>
    `).join('')}
    
    <div class="footer">
        <div class="hours">${restaurant.hours}</div>
        <div style="margin-top: 10px; font-size: 12px; color: #666;">
            Menu généré le ${new Date().toLocaleDateString('fr-FR')}
        </div>
    </div>
</body>
</html>`;
};

// Fonction pour partager le menu
export const shareMenu = () => {
  try {
    if (navigator.share) {
      navigator.share({
        title: 'Menu PARIS BAGUETTE N\'dotré',
        text: 'Découvrez notre menu complet - Boulangerie Restaurant 24h/24',
        url: window.location.href
      });
    } else {
      // Fallback pour les navigateurs qui ne supportent pas l'API Share
      copyToClipboard(window.location.href);
      showNotification('Lien copié dans le presse-papiers !', 'success');
    }
  } catch (error) {
    console.error('Erreur lors du partage:', error);
    copyToClipboard(window.location.href);
    showNotification('Lien copié dans le presse-papiers !', 'success');
  }
};

// Fonction pour commander un produit
export const orderProduct = (productName, price) => {
  try {
    const message = `Bonjour ! Je souhaite commander : ${productName} (${price}). Merci !`;
    const whatsappUrl = `https://wa.me/22501409999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    showNotification(`Commande de ${productName} envoyée !`, 'success');
  } catch (error) {
    console.error('Erreur lors de la commande:', error);
    showNotification('Erreur lors de l\'envoi de la commande', 'error');
  }
};

// Fonction pour commander généralement
export const orderGeneral = () => {
  try {
    const message = `Bonjour ! Je souhaite passer une commande chez PARIS BAGUETTE N'dotré. Pouvez-vous m'aider ? Merci !`;
    const whatsappUrl = `https://wa.me/22501409999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    showNotification('Redirection vers WhatsApp pour commander !', 'success');
  } catch (error) {
    console.error('Erreur lors de la commande:', error);
    showNotification('Erreur lors de l\'ouverture de WhatsApp', 'error');
  }
};

// Fonction pour ouvrir Google Maps
export const openGoogleMaps = () => {
  try {
    const address = "Carrefour N'dotré, Abobo, Abidjan, Côte d'Ivoire";
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
    showNotification('Ouverture de Google Maps...', 'success');
  } catch (error) {
    console.error('Erreur lors de l\'ouverture de Maps:', error);
    showNotification('Erreur lors de l\'ouverture de Google Maps', 'error');
  }
};

// Fonction pour appeler
export const makeCall = (phoneNumber) => {
  try {
    window.location.href = `tel:${phoneNumber}`;
    showNotification(`Appel vers ${phoneNumber}...`, 'success');
  } catch (error) {
    console.error('Erreur lors de l\'appel:', error);
    showNotification('Erreur lors de l\'appel', 'error');
  }
};

// Fonction pour ouvrir WhatsApp
export const openWhatsApp = (message = '') => {
  try {
    const defaultMessage = message || `Bonjour PARIS BAGUETTE N'dotré ! Je souhaite obtenir des informations. Merci !`;
    const whatsappUrl = `https://wa.me/22501409999?text=${encodeURIComponent(defaultMessage)}`;
    window.open(whatsappUrl, '_blank');
    showNotification('Ouverture de WhatsApp...', 'success');
  } catch (error) {
    console.error('Erreur lors de l\'ouverture de WhatsApp:', error);
    showNotification('Erreur lors de l\'ouverture de WhatsApp', 'error');
  }
};

// Fonction pour ouvrir Facebook
export const openFacebook = () => {
  try {
    window.open('https://www.facebook.com/parisbaguette40999977/', '_blank');
    showNotification('Ouverture de Facebook...', 'success');
  } catch (error) {
    console.error('Erreur lors de l\'ouverture de Facebook:', error);
    showNotification('Erreur lors de l\'ouverture de Facebook', 'error');
  }
};

// Fonction pour envoyer un message de contact
export const sendContactMessage = (formData) => {
  try {
    const { name, phone, message } = formData;
    const whatsappMessage = `Bonjour ! Je suis ${name} (${phone}). ${message}`;
    const whatsappUrl = `https://wa.me/22501409999?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    showNotification('Message envoyé via WhatsApp !', 'success');
    return true;
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error);
    showNotification('Erreur lors de l\'envoi du message', 'error');
    return false;
  }
};

// Fonction utilitaire pour copier dans le presse-papiers
const copyToClipboard = (text) => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
  } else {
    // Fallback pour les anciens navigateurs
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }
};

// Fonction pour afficher les notifications
const showNotification = (message, type = 'info') => {
  // Créer l'élément de notification
  const notification = document.createElement('div');
  notification.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg text-white font-medium transition-all duration-300 transform translate-x-full`;
  
  // Définir la couleur selon le type
  switch (type) {
    case 'success':
      notification.style.backgroundColor = '#10B981';
      break;
    case 'error':
      notification.style.backgroundColor = '#EF4444';
      break;
    default:
      notification.style.backgroundColor = '#3B82F6';
  }
  
  notification.textContent = message;
  document.body.appendChild(notification);
  
  // Animation d'entrée
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Animation de sortie et suppression
  setTimeout(() => {
    notification.style.transform = 'translateX(full)';
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, 3000);
};

