import { Config } from '../data/config';

export function renderApp(config: Config): string {
  return `
    <!-- Fixed Side Contact Buttons - All Screens (Right side for RTL) -->
    <div id="sidebar" class="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col shadow-lg rounded-l-lg overflow-hidden">
      <a
        href="#contact"
        class="side-button bg-slate-800 text-white"
        title="יצירת קשר"
        aria-label="מעבר ליצירת קשר"
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
    </div>


    <!-- Hero Section with Background Image -->
    <section class="hero-section relative min-h-[100svh] flex flex-col overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img
          src="/luc1.png"
          alt="לוסיה רחמילוב - יועצת ביטוח"
          class="w-full h-full object-cover object-[55%_center] md:object-center"
          loading="eager"
        />
        <!-- Gradient Overlay - Optimized for text readability -->
        <div class="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-slate-900/90 via-slate-900/60 to-slate-900/30 md:from-slate-900/80 md:via-slate-900/50 md:to-transparent"></div>
      </div>

      <!-- Top Header Bar with Logo -->
      <div class="relative z-30 w-full bg-gradient-to-b from-white/90 to-transparent">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-3 flex justify-start">
          <img
            src="/logo/logo-cropped.svg"
            alt="${config.profile.name}"
            class="h-20 sm:h-28 md:h-36 lg:h-40 w-auto"
          />
        </div>
      </div>

      <!-- Content -->
      <div class="relative z-20 flex-1 flex items-end md:items-center justify-center w-full px-5 sm:px-6 md:px-8 pb-16 pt-4 md:py-20">
        <div class="text-center w-full max-w-4xl">
          <!-- Name and Title -->
          <div class="animate-fade-in-up">
            <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg leading-tight">
              ${config.profile.name}
            </h1>
            <p class="text-xl sm:text-2xl md:text-3xl text-primary-300 font-medium mb-3 md:mb-4">
              ${config.profile.title}
            </p>
            <p class="text-lg sm:text-xl md:text-2xl text-slate-200 mb-8 md:mb-12 leading-relaxed max-w-2xl mx-auto">
              ${config.profile.bio}
            </p>
          </div>

          <!-- CTA Button -->
          <div class="animate-fade-in-up animation-delay-200">
            <a href="#contact" class="cta-button-hero text-lg px-10 py-4">
              לשיחת מיפוי פנסיוני
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
          ${config.links.filter(link => link.icon !== 'calendar').map((link) => `
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

          <!-- Trust Indicators - Inline -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 mb-4">
            <div class="trust-item text-center">
              <div class="text-2xl md:text-3xl font-bold text-primary-600 mb-1">7+</div>
              <div class="text-xs md:text-sm text-slate-500">שנות ניסיון</div>
            </div>
            <div class="trust-item text-center">
              <div class="text-2xl md:text-3xl font-bold text-primary-600 mb-1">50+</div>
              <div class="text-xs md:text-sm text-slate-500">לקוחות מרוצים</div>
            </div>
            <div class="trust-item text-center">
              <div class="text-2xl md:text-3xl font-bold text-primary-600 mb-1">100%</div>
              <div class="text-xs md:text-sm text-slate-500">שקיפות מלאה</div>
            </div>
            <div class="trust-item text-center">
              <div class="text-2xl md:text-3xl font-bold text-primary-600 mb-1">❤️</div>
              <div class="text-xs md:text-sm text-slate-500">ליווי אישי</div>
            </div>
          </div>

          <!-- CTA Button for Appointment -->
          <a
            href="#contact"
            class="mt-2 py-4 px-6 bg-primary-600 hover:bg-primary-700 text-white text-center rounded-2xl font-bold text-lg shadow-lg shadow-primary-600/30 hover:shadow-xl hover:shadow-primary-600/40 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
            קביעת פגישת ייעוץ
          </a>
        </div>
      </div>
    </section>

    <!-- YouTube Shorts Section -->
    <section id="shorts" class="py-14 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-8 md:mb-12">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">
            ידע פיננסי שיעזור לכם לקבל החלטות חכמות יותר
          </h2>
        </div>

        <!-- Shorts Grid 4x2 -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          ${config.youtubeShorts.map((short) => `
            <div class="short-card-grid">
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
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="py-14 md:py-24 bg-slate-50/70">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-8 md:mb-12">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3">
            מה אומרים הלקוחות
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <!-- Testimonial 1 -->
          <div class="bg-white rounded-2xl p-6 shadow-md border border-slate-100">
            <div class="flex items-center gap-4 mb-4">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
                alt="קטיה"
                class="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 class="font-semibold text-slate-800">קטיה מחולון</h4>
                <div class="flex text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
              </div>
            </div>
            <p class="text-slate-600 text-sm leading-relaxed">
              <span class="font-semibold text-primary-600">ממליצה בחום!</span> מרגיע לדעת שיש בן אדם כמו לוסיה לצדך. הקרנות פנסיה שלי היו מפוזרות בהמון חברות לאורך השנים, לוסיה מצאה וחיברה את כולם לאחד. לא צריך לשבור את הראש או לחכות שעות בשיחות המתנה. מקצועית, אמינה, מהירה - הכל מתבצע בצורה הכי טובה שיש!
            </p>
          </div>

          <!-- Testimonial 2 -->
          <div class="bg-white rounded-2xl p-6 shadow-md border border-slate-100">
            <div class="flex items-center gap-4 mb-4">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
                alt="אלונה"
                class="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 class="font-semibold text-slate-800">אלונה מנתניה</h4>
                <div class="flex text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
              </div>
            </div>
            <p class="text-slate-600 text-sm leading-relaxed">
              ברצוני להמליץ על <span class="font-semibold text-primary-600">לוסיה האלופה!</span> לוסיה מלווה אותי מזה מספר שנים בכל הקשור לעניין הביטוחים. אני זוכה ליחס אישי, מקצועי, הסבר מפורט בכל נושא הביטוח ומעבר. אם אתם מחפשים ליווי אישי יד ביד - ללא ספק אתם יכולים לסמוך על לוסיה, ממליצה מאוד!
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-14 md:py-24 bg-gradient-to-b from-slate-50/50 to-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3">
          3 פנסיות מעבודות שונות? בואו נעשה סדר
        </h2>
        <p class="text-slate-500 text-base md:text-lg mb-8 md:mb-10 max-w-xl mx-auto">
          שיחת מיפוי ראשונית ללא עלות - נבדוק יחד מה יש לכם, מה חסר, ואיפה אפשר לשפר
        </p>

        <!-- Contact Form -->
        <div class="max-w-md mx-auto mb-8 bg-white rounded-2xl shadow-lg p-6 border border-slate-100">
          <div class="flex items-center justify-center gap-2 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            <h3 class="text-lg font-semibold text-slate-800">לתיאום שיחה</h3>
          </div>
          <p class="text-slate-500 text-sm mb-4 text-center">מלאו את הפרטים - ייפתח וואטסאפ מוכן לשליחה</p>
          <form id="contact-form" class="flex flex-col gap-3">
            <input
              type="text"
              name="name"
              id="form-name"
              placeholder="שם מלא"
              required
              class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-right"
            />
            <input
              type="tel"
              name="phone"
              id="form-phone"
              placeholder="טלפון"
              required
              class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-right"
            />
            <textarea
              name="message"
              id="form-message"
              placeholder="במה אוכל לעזור? (אופציונלי)"
              rows="2"
              class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none text-right"
            ></textarea>
            <button
              type="submit"
              class="w-full px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              שלחו לי בוואטסאפ
            </button>
          </form>
        </div>

        <!-- Social proof -->
        <p class="text-slate-400 text-sm">
          עוקבים אחרי בתוכן פיננסי?
          <a
            href="https://instagram.com/lusia_ins"
            class="text-primary-500 hover:text-primary-400 transition-colors font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >@lusia_ins</a>
        </p>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-slate-900 text-white py-4">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <p class="text-white text-sm mb-2">
          ${config.profile.name} | ${config.profile.title}
        </p>
        <p class="text-xs text-white/70">
          <a href="/privacy" class="hover:text-white transition-colors">מדיניות פרטיות</a>
          <span class="mx-2">|</span>
          <a href="/terms" class="hover:text-white transition-colors">תקנון</a>
          <span class="mx-2">|</span>
          <span>&copy; ${new Date().getFullYear()}</span>
        </p>
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

