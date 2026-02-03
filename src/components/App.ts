import { Config } from '../data/config';

export function renderApp(config: Config): string {
  return `
    <!-- Fixed Side Contact Buttons - Desktop Only -->
    <div class="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col shadow-lg rounded-r-lg overflow-hidden">
      <a
        href="#services"
        class="side-button bg-slate-800 text-white"
        title="לשירותים"
        aria-label="מעבר לשירותים"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </a>
      <a
        href="https://wa.me/${config.contact.whatsapp}"
        class="side-button bg-green-500 text-white"
        target="_blank"
        rel="noopener noreferrer"
        title="WhatsApp"
        aria-label="שלח הודעת WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
      <a
        href="https://instagram.com/lusia_ins"
        class="side-button side-button-instagram text-white"
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
        aria-label="עקבו באינסטגרם"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
      </a>
      <a
        href="mailto:${config.contact.email}"
        class="side-button bg-red-400 text-white"
        title="שלחו אימייל"
        aria-label="שלח אימייל"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
      </a>
      <a
        href="tel:${config.contact.phone}"
        class="side-button bg-green-400 text-white"
        title="התקשרו אלי"
        aria-label="התקשר עכשיו"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      </a>
    </div>

    <!-- Mobile Floating WhatsApp Button -->
    <a
      href="https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent('היי לוסיה, אשמח לשמוע פרטים נוספים')}"
      class="mobile-whatsapp-btn md:hidden"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="שלח הודעת WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </a>

    <!-- Hero Section with Background Image -->
    <section class="hero-section relative min-h-[100svh] flex items-center overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img
          src="/luc1.png"
          alt="לוסיה רחמילוב - יועצת ביטוח"
          class="w-full h-full object-cover object-[70%_center] md:object-center"
          loading="eager"
        />
        <!-- Gradient Overlay - Optimized for text readability -->
        <div class="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-slate-900/90 via-slate-900/60 to-slate-900/30 md:from-slate-900/80 md:via-slate-900/50 md:to-transparent"></div>
      </div>

      <!-- Content -->
      <div class="relative z-20 w-full max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-8 md:py-16">
        <div class="max-w-xl mx-auto md:mx-0 md:mr-0 md:ml-auto text-center md:text-right mt-auto md:mt-0 pt-[45vh] md:pt-0">
          <!-- Name and Title -->
          <div class="animate-fade-in-up">
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 drop-shadow-lg leading-tight">
              ${config.profile.name}
            </h1>
            <p class="text-lg sm:text-xl md:text-2xl text-primary-300 font-medium mb-2 md:mb-3">
              ${config.profile.title}
            </p>
            <p class="text-base sm:text-lg md:text-xl text-slate-200 mb-6 md:mb-8 leading-relaxed">
              ${config.profile.bio}
            </p>
          </div>

          <!-- CTA Buttons -->
          <div class="animate-fade-in-up animation-delay-200 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-end">
            <a href="#services" class="cta-button-hero">
              לשירותים שלי
            </a>
            <a href="tel:${config.contact.phone}" class="cta-button-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>התקשרו עכשיו</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-60"><path d="m6 9 6 6 6-6"/></svg>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-14 md:py-24 bg-gradient-to-b from-white to-slate-50/50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-8 md:mb-12">
          <span class="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-medium rounded-full mb-4">
            השירותים שלי
          </span>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3">
            איך אני יכולה לעזור?
          </h2>
          <p class="text-slate-500 text-base md:text-lg max-w-xl mx-auto">
            ליווי מקצועי ואישי בכל תחומי הביטוח והפיננסים
          </p>
        </div>

        <!-- Service Links - Linktree Style -->
        <div class="flex flex-col gap-3 sm:gap-4 max-w-2xl mx-auto">
          ${config.links.map((link) => `
            <a
              href="${link.url}"
              class="service-card group"
              ${link.url.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''}
            >
              <div class="service-icon">
                ${getServiceIcon(link.icon || 'shield')}
              </div>
              <div class="service-content">
                <h3 class="text-base sm:text-lg font-semibold text-slate-800 group-hover:text-primary-600 transition-colors">${link.title}</h3>
              </div>
              <div class="service-arrow mr-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transform group-hover:-translate-x-1 transition-transform"><path d="m15 18-6-6 6-6"/></svg>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- YouTube Shorts Section -->
    <section id="shorts" class="py-14 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-8 md:mb-12">
          <span class="inline-block px-4 py-1.5 bg-red-50 text-red-600 text-sm font-medium rounded-full mb-4">
            תוכן וידאו
          </span>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3">
            טיפים בסרטונים קצרים
          </h2>
          <p class="text-slate-500 text-base md:text-lg max-w-xl mx-auto">
            ידע פיננסי שיעזור לכם לקבל החלטות חכמות יותר
          </p>
        </div>

        <!-- Shorts Carousel -->
        <div class="shorts-carousel-container relative">
          <div class="shorts-carousel flex gap-4 md:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            ${config.youtubeShorts.map((short) => `
              <div class="short-card group snap-start flex-shrink-0">
                <div class="short-embed-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/${short.id}?loop=1&playlist=${short.id}"
                    title="${short.title}"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    loading="lazy"
                    class="short-iframe"
                  ></iframe>
                </div>
                <div class="short-info">
                  <h3 class="short-title">${short.title}</h3>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Scroll hint for mobile -->
          <div class="shorts-scroll-hint md:hidden">
            <span class="text-slate-400 text-sm flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              גלול לעוד סרטונים
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Indicators -->
    <section class="py-12 md:py-16 bg-slate-50/70">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 text-center">
          <div class="trust-item">
            <div class="text-3xl md:text-4xl font-bold text-primary-600 mb-1">15+</div>
            <div class="text-sm md:text-base text-slate-500">שנות ניסיון</div>
          </div>
          <div class="trust-item">
            <div class="text-3xl md:text-4xl font-bold text-primary-600 mb-1">500+</div>
            <div class="text-sm md:text-base text-slate-500">לקוחות מרוצים</div>
          </div>
          <div class="trust-item">
            <div class="text-3xl md:text-4xl font-bold text-primary-600 mb-1">100%</div>
            <div class="text-sm md:text-base text-slate-500">שקיפות מלאה</div>
          </div>
          <div class="trust-item">
            <div class="text-3xl md:text-4xl font-bold text-primary-600 mb-1">24/7</div>
            <div class="text-sm md:text-base text-slate-500">זמינות</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-14 md:py-24 bg-gradient-to-b from-slate-50/50 to-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <span class="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-medium rounded-full mb-4">
          יצירת קשר
        </span>
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3">
          בואו נדבר
        </h2>
        <p class="text-slate-500 text-base md:text-lg mb-8 md:mb-10 max-w-xl mx-auto">
          אשמח לענות על כל שאלה ולעזור לכם למצוא את הפתרון המתאים
        </p>

        <div class="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-10 max-w-2xl mx-auto">
          <a
            href="tel:${config.contact.phone}"
            class="contact-card-new"
          >
            <div class="contact-card-icon-new bg-green-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div class="contact-card-content">
              <span class="block text-slate-800 font-semibold">התקשרו אלי</span>
              <span class="block text-slate-500 text-sm">${config.contact.phone}</span>
            </div>
          </a>

          <a
            href="https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent('היי לוסיה, אשמח לשמוע פרטים נוספים')}"
            class="contact-card-new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="contact-card-icon-new bg-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </div>
            <div class="contact-card-content">
              <span class="block text-slate-800 font-semibold">WhatsApp</span>
              <span class="block text-slate-500 text-sm">תגובה מהירה</span>
            </div>
          </a>

          <a
            href="mailto:${config.contact.email}"
            class="contact-card-new"
          >
            <div class="contact-card-icon-new bg-primary-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <div class="contact-card-content">
              <span class="block text-slate-800 font-semibold">אימייל</span>
              <span class="block text-slate-500 text-sm">${config.contact.email}</span>
            </div>
          </a>
        </div>

        <!-- Social Links -->
        <div class="flex justify-center gap-4">
          ${config.socialLinks.map(social => `
            <a
              href="${social.url}"
              class="social-icon-new"
              target="_blank"
              rel="noopener noreferrer"
              title="${social.platform}"
              aria-label="עקבו אחרי ב${social.platform}"
            >
              ${getSocialIcon(social.platform)}
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer-dark">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <!-- Main Footer Content -->
        <div class="text-center pb-8 md:pb-10">
          <!-- Logo -->
          <div class="inline-flex items-center justify-center mb-4">
            <img
              src="/logo/13-01.svg"
              alt="${config.profile.name} - לוגו"
              class="h-20 sm:h-24 md:h-28 w-auto brightness-110"
            />
          </div>
          <p class="text-slate-400 text-sm sm:text-base mb-6">${config.profile.bio}</p>

          <!-- Social Links -->
          <div class="flex justify-center gap-3 mb-8">
            ${config.socialLinks.map(social => `
              <a
                href="${social.url}"
                class="w-11 h-11 rounded-xl bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="${social.platform}"
              >
                ${getSocialIcon(social.platform)}
              </a>
            `).join('')}
          </div>

          <!-- Contact Links -->
          <div class="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
            <a href="tel:${config.contact.phone}" class="text-slate-400 hover:text-white transition-colors">
              ${config.contact.phone}
            </a>
            <span class="text-slate-700 hidden sm:inline">|</span>
            <a href="mailto:${config.contact.email}" class="text-slate-400 hover:text-white transition-colors">
              ${config.contact.email}
            </a>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-slate-800 pt-6 text-center">
          <p class="text-xs sm:text-sm text-slate-600">
            &copy; ${new Date().getFullYear()} ${config.profile.name}. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  `;
}

function getServiceIcon(icon: string): string {
  const icons: Record<string, string> = {
    heart: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
    activity: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
    car: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8c-.3.5-.1 1.1.3 1.5l.3.3H3c0 .6.4 1 1 1h.2c.4 1.2 1.5 2 2.8 2s2.4-.8 2.8-2h4.4c.4 1.2 1.5 2 2.8 2s2.4-.8 2.8-2h.2c0-.1 0 0 0 0Z"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>',
    home: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    'piggy-bank': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z"/><path d="M2 9v1c0 1.1.9 2 2 2h1"/><path d="M16 11h.01"/></svg>',
    calendar: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',
    shield: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  };
  return icons[icon] || icons.shield;
}

function getSocialIcon(platform: string): string {
  const icons: Record<string, string> = {
    facebook: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
    instagram: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>',
    linkedin: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>',
    whatsapp: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',
    youtube: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>',
  };
  return icons[platform] || '';
}
