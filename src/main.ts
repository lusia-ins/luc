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

  // Service accordions
  const accordionButtons = document.querySelectorAll('[data-accordion]');
  accordionButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const index = btn.getAttribute('data-accordion');
      const panel = document.getElementById(`panel-${index}`);
      const wrapper = btn.closest('.service-accordion');
      const isOpen = wrapper?.classList.contains('open');

      // Close all
      document.querySelectorAll('.service-accordion').forEach((el) => el.classList.remove('open'));
      document.querySelectorAll('.accordion-panel').forEach((el) => el.classList.remove('open'));
      document.querySelectorAll('[data-accordion]').forEach((el) => el.setAttribute('aria-expanded', 'false'));

      // Toggle current
      if (!isOpen && panel && wrapper) {
        wrapper.classList.add('open');
        panel.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

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

  // QR Code Modal
  const qrButton = document.getElementById('qr-button');
  const qrModal = document.getElementById('qr-modal');
  const qrModalClose = document.getElementById('qr-modal-close');
  const qrModalBackdrop = document.getElementById('qr-modal-backdrop');
  const qrCodeImg = document.getElementById('qr-code-img') as HTMLImageElement;

  if (qrButton && qrModal && qrCodeImg) {
    // Generate vCard string
    const vCard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${config.profile.name}`,
      `N:רחמילוב;לוסיה;;;`,
      `ORG:לוסיה רחמילוב - סוכנות ביטוח פנסיוני`,
      `TITLE:${config.profile.title}`,
      `TEL;TYPE=CELL:${config.contact.phone.replace(/-/g, '')}`,
      `EMAIL:${config.contact.email}`,
      'URL:https://lusia-ins.co.il',
      'ADR;TYPE=WORK:;;יגאל אלון 155;תל אביב;;6744320;ישראל',
      'END:VCARD'
    ].join('\n');

    // Generate QR code URL using QR Server API
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(vCard)}&format=svg`;
    qrCodeImg.src = qrUrl;

    const openModal = () => {
      qrModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
      qrModal.classList.add('hidden');
      document.body.style.overflow = '';
    };

    qrButton.addEventListener('click', openModal);
    qrModalClose?.addEventListener('click', closeModal);
    qrModalBackdrop?.addEventListener('click', closeModal);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !qrModal.classList.contains('hidden')) {
        closeModal();
      }
    });
  }

  // Cookie Consent Banner
  const cookieBanner = document.getElementById('cookie-banner');
  const cookieAccept = document.getElementById('cookie-accept');
  const cookieDecline = document.getElementById('cookie-decline');

  if (cookieBanner && cookieAccept && cookieDecline) {
    const COOKIE_CONSENT_KEY = 'lusia_cookie_consent';

    // Check if user already made a choice
    const existingConsent = localStorage.getItem(COOKIE_CONSENT_KEY);

    if (!existingConsent) {
      // Show banner after a short delay for better UX
      setTimeout(() => {
        cookieBanner.classList.remove('hidden');
      }, 1500);
    } else if (existingConsent === 'accepted') {
      // Enable analytics if previously accepted
      enableAnalytics();
    }

    cookieAccept.addEventListener('click', () => {
      localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
      cookieBanner.classList.add('hidden');
      enableAnalytics();
    });

    cookieDecline.addEventListener('click', () => {
      localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
      cookieBanner.classList.add('hidden');
      disableAnalytics();
    });
  }
});

// Analytics functions
function enableAnalytics() {
  // Google Analytics
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: 'granted'
    });
  }

  // Microsoft Clarity - load only after consent
  if (typeof window.loadClarity === 'function') {
    window.loadClarity();
  }
}

function disableAnalytics() {
  // Google Analytics - update consent
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: 'denied'
    });
  }
  // Clarity was never loaded if user declined, so nothing to disable
}
