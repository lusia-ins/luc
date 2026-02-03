import './styles/main.css';
import { config } from './data/config';
import { renderApp } from './components/App';

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  if (app) {
    app.innerHTML = renderApp(config);
  }

  // Show sidebar only after scrolling past hero
  const sidebar = document.getElementById('sidebar');
  const hero = document.querySelector('.hero-section');

  if (sidebar && hero) {
    const handleScroll = () => {
      const heroBottom = hero.getBoundingClientRect().bottom;
      if (heroBottom <= 100) {
        sidebar.classList.remove('opacity-0', 'pointer-events-none');
        sidebar.classList.add('opacity-100');
      } else {
        sidebar.classList.add('opacity-0', 'pointer-events-none');
        sidebar.classList.remove('opacity-100');
      }
    };

    // Initial state - hidden
    sidebar.classList.add('opacity-0', 'pointer-events-none', 'transition-opacity', 'duration-300');

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state
  }

  // Contact form - send to WhatsApp
  const contactForm = document.getElementById('contact-form') as HTMLFormElement;
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = (document.getElementById('form-name') as HTMLInputElement).value;
      const phone = (document.getElementById('form-phone') as HTMLInputElement).value;
      const message = (document.getElementById('form-message') as HTMLTextAreaElement).value;

      let whatsappMessage = `היי לוסיה,\n\nשם: ${name}\nטלפון: ${phone}`;
      if (message.trim()) {
        whatsappMessage += `\n\n${message}`;
      }

      const whatsappUrl = `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');
    });
  }
});
