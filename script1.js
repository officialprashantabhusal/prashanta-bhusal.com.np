
    // Initialize EmailJS with the provided public key
    if (window.emailjs && typeof emailjs.init === 'function') {
      try { emailjs.init('H0nWR3Ru-rgmCPM9B'); } catch (e) { console.warn('EmailJS init failed', e); }
    }
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    const navLinks = Array.from(document.querySelectorAll('.nav-links a, .mobile-nav a'));
    const languageToggles = Array.from(document.querySelectorAll('.language-switch'));
    const sections = Array.from(document.querySelectorAll('main section[id]'));
    const revealElements = document.querySelectorAll('[data-reveal]');
    const profileTerminal = document.querySelector('.hero-profile-terminal');

    const typedText = document.getElementById('typedText');
    const aboutTypedText = document.getElementById('aboutTypedText');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const openGalleryBtn = document.getElementById('openGalleryBtn');
    const galleryDialog = document.getElementById('galleryDialog');
    const closeGalleryBtn = document.getElementById('closeGalleryBtn');
    const folderList = document.getElementById('folderList');
    const galleryGrid = document.getElementById('galleryGrid');
    const galleryFolderName = document.getElementById('galleryFolderName');
    const galleryFolderCounter = document.getElementById('galleryFolderCounter');
    const galleryCount = document.getElementById('galleryCount');
    const galleryFolderCount = document.getElementById('galleryFolderCount');
    const gallerySearch = document.getElementById('gallerySearch');
    const galleryEmpty = document.getElementById('galleryEmpty');
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    const testimonialTrack = document.getElementById('testimonialTrack');
    const testimonialDots = document.getElementById('testimonialDots');
    const prevTestimonial = document.getElementById('prevTestimonial');
    const nextTestimonial = document.getElementById('nextTestimonial');

    const typeWords = ['websites', 'brand identity', 'digital experiences', 'social content'];

    const galleryFolders = [
      {
        key: 'logo',
        label: 'Logos',
        items: [
          { src: 'images/design%20gallery/logo1.png', title: 'Cricket Medal Badge', text: 'Bold badge identity for a sports award.' },
          { src: 'images/design%20gallery/logo2.png', title: 'Deepjyoti Sathi Sanjal', text: 'Community-focused logo identity.' }
        ]
      },
      {
        key: 'banners',
        label: 'Banners',
        items: [
          { src: 'images/design%20gallery/banner1.png', title: 'Program Banner', text: 'High-impact promotional banner with clear event hierarchy.' },
          { src: 'images/design%20gallery/banner2.png', title: 'Admission Banner', text: 'Friendly school admission campaign visual.' }
        ]
      },
      {
        key: 'certificates',
        label: 'Certificates',
        items: [
          { src: 'images/design%20gallery/certificate1.png', title: 'Volleyball Certificate', text: 'Clean recognition certificate for a sports event.' },
          { src: 'images/design%20gallery/certificate2.png', title: 'Cricket Certificate', text: 'Formal award layout with strong visual balance.' }
        ]
      },
      {
        key: 'birthday-frames',
        label: 'Birthday Frames',
        items: [
          { src: 'images/design%20gallery/Birthdayframe%20-malarani%20mobile%20client%20project.png', title: 'Birthday Frame', text: 'Festive portrait frame designed for a client celebration.' },
          { src: 'images/design%20gallery/frame--first%20blessing.png', title: 'First Blessing Frame', text: 'Warm, celebratory frame for a first blessing.' }
        ]
      },
      {
        key: 'flyers',
        label: 'Flyers',
        items: [
          { src: 'images/design%20gallery/flyer1.png', title: 'Retail Flyer', text: 'Product-focused flyer with clear promotional messaging.' },
          { src: 'images/design%20gallery/flyer2.png', title: 'Event Flyer', text: 'Promotional flyer built for quick visual communication.' }
        ]
      },
      {
        key: 'presentation',
        label: 'Presentations',
        items: [
          { src: 'images/design%20gallery/presentation1.png', title: 'Presentation Slide', text: 'Structured slide design with a clear visual hierarchy.' },
          { src: 'images/design%20gallery/presentation1.png', title: 'Pitch Deck Slide', text: 'A polished presentation visual for business storytelling.' }
        ]
      },
      {
        key: 'other',
        label: 'Other Work',
        items: [
          { src: 'images/design%20gallery/others1.png', title: 'Creative Composition', text: 'Experimental visual composition and layout study.' },
          { src: 'images/design%20gallery/others2.png', title: 'Visual Concept', text: 'A flexible graphic concept for digital communication.' }
        ]
      }
    ];

    let activeGalleryFolder = galleryFolders[0];
    let gallerySearchTerm = '';
    let galleryScrollY = 0;

    const testimonials = [
      { initials: 'MM', name: 'Malarani Mobile Centre', project: 'Work As A Design Partner To Design For Clients', quote: 'Working with Prashanta was easy from start to finish. He understood what we needed, delivered quickly, and made sure the website felt right for our business.', color: '#7C6FE0', avatar: 'images/testinomials/malarani%20mobile.png' },
      { initials: 'HS', name: 'Hansapur Public English Boarding School', project: 'Works As An IT Partner To Develop And Manage Websites And Social Media', quote: 'Prashanta made our school website clear, professional, and easy to use. He communicated well and delivered exactly what we needed.', color: '#1DB88E', avatar: 'images/testinomials/hansapur%20school.png' },
      { initials: 'SK', name: 'Shishir Khanal', project: 'Portfolio Website', quote: 'Prashanta listened to my ideas and turned them into a portfolio that feels clean, modern, and truly personal. I am very happy with the result.', color: '#E05C5C', avatar: 'https://www.khanal-shishir.com.np/shishir.jpeg' },
      { initials: 'PB', name: 'Prarambha Bashyal', project: 'Attendance Website', quote: 'The attendance system is simple to use and works smoothly for our daily records. Prashanta made the whole process clear and practical.', color: '#E05C5C', avatar: 'images/testinomials/prarambha%20bashyal.jpg' },
      { initials: 'SS', name: 'Saree Soul', project: 'Making Brand Identity', quote: 'Prashanta gave our brand a polished and memorable look. The designs feel thoughtful, consistent, and exactly right for our audience.', color: '#BA7517', avatar: 'images/testinomials/saree%20soul.jpg' },
      { initials: 'NC', name: 'Nasa Computer', project: 'Product Designing And Branding', quote: 'Prashanta brought fresh ideas to our product designs and branding. He was professional, creative, and easy to work with throughout the project.', color: '#639922', avatar: 'images/testinomials/nasa.jpg' }
    ];

    const testimonialCards = [];
    const testimonialCount = testimonials.length;
    let testimonialIndex = 0;
    let testimonialInterval = null;
    let testimonialHoverPaused = false;

    function createTestimonialCard(item) {
      const card = document.createElement('article');
      card.className = 'testimonial-card';
      card.innerHTML = `
        <div class="testimonial-stars" aria-label="5 out of 5 stars">â˜…â˜…â˜…â˜…â˜…</div>
        <p class="testimonial-quote">â€œ${item.quote}â€</p>
        <div class="testimonial-foot">
          <div class="avatar">
            <img src="${item.avatar}" alt="${item.name} logo" loading="lazy">
          </div>
          <div>
            <div class="testimonial-tag">${item.project}</div>
            <div class="testimonial-name">${item.name}</div>
          </div>
        </div>
      `;
      return card;
    }

    function buildTestimonials() {
      testimonialTrack.innerHTML = '';
      testimonials.forEach((item) => {
        const card = createTestimonialCard(item);
        testimonialTrack.appendChild(card);
        testimonialCards.push(card);
      });

      testimonialDots.innerHTML = '';
      testimonials.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = 'dot';
        dot.type = 'button';
        dot.setAttribute('aria-label', `Go to testimonial ${index + 1}`);
        dot.addEventListener('click', () => {
          testimonialIndex = index;
          updateCarousel(true);
          restartCarousel();
        });
        testimonialDots.appendChild(dot);
      });
    }

    function visibleCount() {
      return window.innerWidth < 768 ? 1 : 2;
    }

    function measureCardWidth() {
      const gap = 20;
      const count = visibleCount();
      const trackWidth = document.querySelector('.carousel-shell').clientWidth;
      const cardWidth = (trackWidth - gap * (count - 1)) / count;
      testimonialCards.forEach((card) => {
        card.style.width = `${cardWidth}px`;
      });
      return { cardWidth, gap };
    }

    function updateCarousel(animate = true) {
      const { cardWidth, gap } = measureCardWidth();
      const total = testimonialCards.length;
      const count = visibleCount();
      const safeIndex = Math.max(0, Math.min(testimonialIndex, total - count));
      testimonialIndex = safeIndex;
      testimonialTrack.style.transition = animate ? 'transform 0.5s ease' : 'none';
      testimonialTrack.style.transform = `translateX(-${safeIndex * (cardWidth + gap)}px)`;
      Array.from(testimonialDots.children).forEach((dot, index) => dot.classList.toggle('active', index === safeIndex));
    }

    function nextSlide() {
      const maxIndex = testimonialCount - visibleCount();
      testimonialIndex = testimonialIndex >= maxIndex ? 0 : testimonialIndex + 1;
      updateCarousel(true);
    }

    function prevSlide() {
      const maxIndex = testimonialCount - visibleCount();
      testimonialIndex = testimonialIndex <= 0 ? maxIndex : testimonialIndex - 1;
      updateCarousel(true);
    }

    function restartCarousel() {
      clearInterval(testimonialInterval);
      if (testimonialHoverPaused) {
        return;
      }
      testimonialInterval = setInterval(nextSlide, 4000);
    }

    function pauseCarousel() {
      testimonialHoverPaused = true;
      clearInterval(testimonialInterval);
    }

    function resumeCarousel() {
      if (!testimonialHoverPaused) {
        return;
      }
      testimonialHoverPaused = false;
      restartCarousel();
    }

    function initReveal() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });

      revealElements.forEach((element) => observer.observe(element));
    }

    function initTerminalScrollAnimation() {
      if (!profileTerminal || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const observer = new IntersectionObserver(([entry]) => {
        profileTerminal.classList.toggle('terminal-open', entry.isIntersecting);
        profileTerminal.classList.toggle('terminal-closed', !entry.isIntersecting);
      }, { threshold: 0.2 });

      observer.observe(profileTerminal);
    }

    function typeWriter() {
      let wordIndex = 0;
      let charIndex = 0;
      let deleting = false;

      const tick = () => {
        const word = typeWords[wordIndex];
        if (!deleting) {
          charIndex += 1;
          typedText.textContent = word.slice(0, charIndex);
          if (charIndex === word.length) {
            deleting = true;
            setTimeout(tick, 1200);
            return;
          }
        } else {
          charIndex -= 1;
          typedText.textContent = word.slice(0, charIndex);
          if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % typeWords.length;
          }
        }
        setTimeout(tick, deleting ? 35 : 70);
      };

      tick();
    }

    function typeAboutDetails() {
      if (!aboutTypedText) return;

      const details = [
        'name: Prashanta Bhusal',
        'role: graphic designer + web developer',
        'mission: make ideas clear and memorable',
        'status: learning, creating, improving'
      ];
      let detailIndex = 0;
      let charIndex = 0;
      let deleting = false;

      const tick = () => {
        const detail = details[detailIndex];
        if (!deleting) {
          charIndex += 1;
          aboutTypedText.textContent = detail.slice(0, charIndex);
          if (charIndex === detail.length) {
            deleting = true;
            setTimeout(tick, 1500);
            return;
          }
        } else {
          charIndex -= 1;
          aboutTypedText.textContent = detail.slice(0, charIndex);
          if (charIndex === 0) {
            deleting = false;
            detailIndex = (detailIndex + 1) % details.length;
          }
        }
        setTimeout(tick, deleting ? 24 : 55);
      };

      tick();
    }

    function initNavObserver() {
      let currentActiveId = null;
      let lastChange = 0;
      const navObserver = new IntersectionObserver((entries) => {
        const best = entries.reduce((a, b) => (a.intersectionRatio > b.intersectionRatio ? a : b));
        if (!best) return;
        const id = best.target.id;
        const now = Date.now();
        // only change when the best section is noticeably visible and it's different
        if (best.intersectionRatio > 0.18 && id !== currentActiveId && (now - lastChange) > 120) {
          currentActiveId = id;
          lastChange = now;
          navLinks.forEach((link) => {
            const isMatch = link.getAttribute('href') === `#${id}`;
            link.classList.toggle('active', isMatch);
          });
        }
      }, { threshold: [0, 0.12, 0.25, 0.5], rootMargin: '-10% 0px -30% 0px' });

      sections.forEach((section) => navObserver.observe(section));
    }

    function initHashNavigation() {
      if (window.location.hash) {
        history.replaceState(history.state, '', `${window.location.pathname}${window.location.search}`);
      }

      document.addEventListener('click', (event) => {
        if (!(event.target instanceof Element)) return;
        const link = event.target.closest('a[href^="#"]');
        if (!link || event.defaultPrevented || event.button !== 0 ||
            event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
            (link.target && link.target !== '_self') || link.hasAttribute('download')) return;

        const target = link.hash ? document.getElementById(decodeURIComponent(link.hash.slice(1))) : null;
        if (!target) return;

        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }

    function initScrollState() {
      const backToTop = document.getElementById('backToTop');
      const onScroll = () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
        backToTop.classList.toggle('show', window.scrollY > 420);
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
      backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    function initMobileNav() {
      menuToggle.addEventListener('click', () => {
        const open = mobileNav.classList.toggle('open');
        menuToggle.classList.toggle('active', open);
        menuToggle.setAttribute('aria-expanded', String(open));
      });

      mobileNav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          mobileNav.classList.remove('open');
          menuToggle.classList.remove('active');
          menuToggle.setAttribute('aria-expanded', 'false');
        });
      });
    }

    const nepaliTranslations = {
      'Graphic Designer': 'à¤—à¥à¤°à¤¾à¤«à¤¿à¤• à¤¡à¤¿à¤œà¤¾à¤‡à¤¨à¤°', 'Website Developer': 'à¤µà¥‡à¤¬à¤¸à¤¾à¤‡à¤Ÿ à¤µà¤¿à¤•à¤¾à¤¸à¤•à¤°à¥à¤¤à¤¾',
      "Hello, I'm Prashanta": 'à¤¨à¤®à¤¸à¥à¤¤à¥‡, à¤® à¤ªà¥à¤°à¤¶à¤¾à¤¨à¥à¤¤ à¤¹à¥à¤', 'Start a Project': 'à¤ªà¤°à¤¿à¤¯à¥‹à¤œà¤¨à¤¾ à¤¸à¥à¤°à¥ à¤—à¤°à¥à¤¨à¥à¤¹à¥‹à¤¸à¥',
      'Explore Work': 'à¤•à¤¾à¤® à¤¹à¥‡à¤°à¥à¤¨à¥à¤¹à¥‹à¤¸à¥', 'available for ideas': 'à¤µà¤¿à¤šà¤¾à¤°à¤•à¤¾ à¤²à¤¾à¤—à¤¿ à¤‰à¤ªà¤²à¤¬à¥à¤§',
      '// ABOUT ME': '// à¤®à¥‡à¤°à¥‹ à¤ªà¤°à¤¿à¤šà¤¯', 'Designing ideas that make an impact.': 'à¤ªà¥à¤°à¤­à¤¾à¤µ à¤ªà¤¾à¤°à¥à¤¨à¥‡ à¤µà¤¿à¤šà¤¾à¤°à¤¹à¤°à¥‚ à¤¡à¤¿à¤œà¤¾à¤‡à¤¨ à¤—à¤°à¥à¤¦à¥ˆà¥¤',
      'My Toolkit': 'à¤®à¥‡à¤°à¤¾ à¤‰à¤ªà¤•à¤°à¤£à¤¹à¤°à¥‚', 'Learning Path': 'à¤¶à¤¿à¤•à¥à¤·à¤¾à¤•à¥‹ à¤¯à¤¾à¤¤à¥à¤°à¤¾', '// EDUCATION': '// à¤¶à¤¿à¤•à¥à¤·à¤¾',
      '// EXPERIENCE': '// à¤…à¤¨à¥à¤­à¤µ', 'Experience Timeline': 'à¤…à¤¨à¥à¤­à¤µà¤•à¥‹ à¤¸à¤®à¤¯à¤°à¥‡à¤–à¤¾', '// SERVICES': '// à¤¸à¥‡à¤µà¤¾à¤¹à¤°à¥‚',
      'What I Offer': 'à¤® à¤•à¥‡ à¤ªà¥à¤°à¤¦à¤¾à¤¨ à¤—à¤°à¥à¤›à¥', 'Professional services tailored to your project.': 'à¤¤à¤ªà¤¾à¤ˆà¤‚à¤•à¥‹ à¤ªà¤°à¤¿à¤¯à¥‹à¤œà¤¨à¤¾à¤•à¤¾ à¤²à¤¾à¤—à¤¿ à¤µà¤¿à¤¶à¥‡à¤· à¤µà¥à¤¯à¤¾à¤µà¤¸à¤¾à¤¯à¤¿à¤• à¤¸à¥‡à¤µà¤¾à¤¹à¤°à¥‚à¥¤',
      'Graphic Design': 'à¤—à¥à¤°à¤¾à¤«à¤¿à¤• à¤¡à¤¿à¤œà¤¾à¤‡à¤¨', 'Logo Design': 'à¤²à¥‹à¤—à¥‹ à¤¡à¤¿à¤œà¤¾à¤‡à¤¨', 'Presentation Design': 'à¤ªà¥à¤°à¤¸à¥à¤¤à¥à¤¤à¤¿ à¤¡à¤¿à¤œà¤¾à¤‡à¤¨',
      'Web Development': 'à¤µà¥‡à¤¬ à¤µà¤¿à¤•à¤¾à¤¸', 'Social Media Management': 'à¤¸à¤¾à¤®à¤¾à¤œà¤¿à¤• à¤¸à¤žà¥à¤œà¤¾à¤² à¤µà¥à¤¯à¤µà¤¸à¥à¤¥à¤¾à¤ªà¤¨',
      'UI/UX Design': 'à¤¯à¥‚à¤†à¤ˆ/à¤¯à¥‚à¤à¤•à¥à¤¸ à¤¡à¤¿à¤œà¤¾à¤‡à¤¨', 'Custom Project': 'à¤µà¤¿à¤¶à¥‡à¤· à¤ªà¤°à¤¿à¤¯à¥‹à¤œà¤¨à¤¾', 'Inquire now': 'à¤…à¤¹à¤¿à¤²à¥‡ à¤¸à¥‹à¤§à¥à¤¨à¥à¤¹à¥‹à¤¸à¥',
      '// PORTFOLIO': '// à¤ªà¥‹à¤°à¥à¤Ÿà¤«à¥‹à¤²à¤¿à¤¯à¥‹', 'My Work': 'à¤®à¥‡à¤°à¤¾ à¤•à¤¾à¤®à¤¹à¤°à¥‚', 'All Work': 'à¤¸à¤¬à¥ˆ à¤•à¤¾à¤®',
      'Full Gallery': 'à¤ªà¥‚à¤°à¤¾ à¤—à¥à¤¯à¤¾à¤²à¤°à¥€', 'Open Graphic Gallery': 'à¤—à¥à¤°à¤¾à¤«à¤¿à¤• à¤—à¥à¤¯à¤¾à¤²à¤°à¥€ à¤–à¥‹à¤²à¥à¤¨à¥à¤¹à¥‹à¤¸à¥',
      '// PROCESS': '// à¤ªà¥à¤°à¤•à¥à¤°à¤¿à¤¯à¤¾', 'My Process': 'à¤®à¥‡à¤°à¥‹ à¤ªà¥à¤°à¤•à¥à¤°à¤¿à¤¯à¤¾', 'How every project comes to life.': 'à¤¹à¤°à¥‡à¤• à¤ªà¤°à¤¿à¤¯à¥‹à¤œà¤¨à¤¾ à¤•à¤¸à¤°à¥€ à¤ªà¥‚à¤°à¤¾ à¤¹à¥à¤¨à¥à¤›à¥¤',
      'Discuss': 'à¤›à¤²à¤«à¤²', 'Design': 'à¤¡à¤¿à¤œà¤¾à¤‡à¤¨', 'Deliver': 'à¤¹à¤¸à¥à¤¤à¤¾à¤¨à¥à¤¤à¤°à¤£',
      '// TESTIMONIALS': '// à¤ªà¥à¤°à¤¶à¤‚à¤¸à¤¾à¤ªà¤¤à¥à¤°', 'What Clients Say': 'à¤—à¥à¤°à¤¾à¤¹à¤•à¤¹à¤°à¥‚ à¤•à¥‡ à¤­à¤¨à¥à¤›à¤¨à¥',
      'Real feedback from real projects.': 'à¤µà¤¾à¤¸à¥à¤¤à¤µà¤¿à¤• à¤ªà¤°à¤¿à¤¯à¥‹à¤œà¤¨à¤¾à¤¬à¤¾à¤Ÿ à¤µà¤¾à¤¸à¥à¤¤à¤µà¤¿à¤• à¤ªà¥à¤°à¤¤à¤¿à¤•à¥à¤°à¤¿à¤¯à¤¾à¥¤',
      '// Contact': '// à¤¸à¤®à¥à¤ªà¤°à¥à¤•', "Let's Work Together": 'à¤¸à¤à¤—à¥ˆ à¤•à¤¾à¤® à¤—à¤°à¥Œà¤',
      "I'm always open to new projects, ideas, and collaborations.": 'à¤® à¤¨à¤¯à¤¾à¤ à¤ªà¤°à¤¿à¤¯à¥‹à¤œà¤¨à¤¾, à¤µà¤¿à¤šà¤¾à¤° à¤° à¤¸à¤¹à¤•à¤¾à¤°à¥à¤¯à¤•à¤¾ à¤²à¤¾à¤—à¤¿ à¤¸à¤§à¥ˆà¤ à¤¤à¤¯à¤¾à¤° à¤›à¥à¥¤',
      'Professional contact': 'à¤µà¥à¤¯à¤¾à¤µà¤¸à¤¾à¤¯à¤¿à¤• à¤¸à¤®à¥à¤ªà¤°à¥à¤•', 'Email Directly': 'à¤¸à¤¿à¤§à¥ˆ à¤‡à¤®à¥‡à¤² à¤—à¤°à¥à¤¨à¥à¤¹à¥‹à¤¸à¥',
      'Fill the Form': 'à¤«à¤¾à¤°à¤® à¤­à¤°à¥à¤¨à¥à¤¹à¥‹à¤¸à¥', 'Email': 'à¤‡à¤®à¥‡à¤²', 'Location': 'à¤¸à¥à¤¥à¤¾à¤¨',
      'Get In Touch': 'à¤¸à¤®à¥à¤ªà¤°à¥à¤• à¤—à¤°à¥à¤¨à¥à¤¹à¥‹à¤¸à¥', 'Navigation': 'à¤¨à¥‡à¤­à¤¿à¤—à¥‡à¤¸à¤¨', 'Services': 'à¤¸à¥‡à¤µà¤¾à¤¹à¤°à¥‚',
      'Home': 'à¤—à¥ƒà¤¹à¤ªà¥ƒà¤·à¥à¤ ', 'About': 'à¤ªà¤°à¤¿à¤šà¤¯', 'Education': 'à¤¶à¤¿à¤•à¥à¤·à¤¾', 'Contact': 'à¤¸à¤®à¥à¤ªà¤°à¥à¤•',
      'Designed and built in Nepal': 'à¤¨à¥‡à¤ªà¤¾à¤²à¤®à¤¾ à¤¡à¤¿à¤œà¤¾à¤‡à¤¨ à¤° à¤¨à¤¿à¤°à¥à¤®à¤¾à¤£ à¤—à¤°à¤¿à¤à¤•à¥‹', 'All Rights Reserved': 'à¤¸à¤°à¥à¤µà¤¾à¤§à¤¿à¤•à¤¾à¤° à¤¸à¥à¤°à¤•à¥à¤·à¤¿à¤¤',
      'I create': 'à¤® à¤¸à¤¿à¤°à¥à¤œà¤¨à¤¾ à¤—à¤°à¥à¤›à¥', 'brand': 'à¤¬à¥à¤°à¤¾à¤¨à¥à¤¡', 'websites': 'à¤µà¥‡à¤¬à¤¸à¤¾à¤‡à¤Ÿà¤¹à¤°à¥‚',
      'Graphic Designer': 'à¤—à¥à¤°à¤¾à¤«à¤¿à¤• à¤¡à¤¿à¤œà¤¾à¤‡à¤¨à¤°', 'Website Developer': 'à¤µà¥‡à¤¬à¤¸à¤¾à¤‡à¤Ÿ à¤µà¤¿à¤•à¤¾à¤¸à¤•à¤°à¥à¤¤à¤¾',
      'Designing ideas that make an impact.': 'à¤ªà¥à¤°à¤­à¤¾à¤µ à¤ªà¤¾à¤°à¥à¤¨à¥‡ à¤µà¤¿à¤šà¤¾à¤°à¤¹à¤°à¥‚ à¤¡à¤¿à¤œà¤¾à¤‡à¤¨ à¤—à¤°à¥à¤¦à¥ˆà¥¤',
      'Everyday tools I use to design and build modern web experiences.': 'à¤†à¤§à¥à¤¨à¤¿à¤• à¤µà¥‡à¤¬ à¤…à¤¨à¥à¤­à¤µ à¤¡à¤¿à¤œà¤¾à¤‡à¤¨ à¤° à¤¨à¤¿à¤°à¥à¤®à¤¾à¤£ à¤—à¤°à¥à¤¨ à¤®à¥ˆà¤²à¥‡ à¤ªà¥à¤°à¤¯à¥‹à¤— à¤—à¤°à¥à¤¨à¥‡ à¤¦à¥ˆà¤¨à¤¿à¤• à¤‰à¤ªà¤•à¤°à¤£à¤¹à¤°à¥‚à¥¤',
      'My journey from school basics to computer engineering and creative technology.': 'à¤µà¤¿à¤¦à¥à¤¯à¤¾à¤²à¤¯à¤•à¤¾ à¤†à¤§à¤¾à¤°à¤­à¥‚à¤¤ à¤œà¥à¤žà¤¾à¤¨à¤¦à¥‡à¤–à¤¿ à¤•à¤®à¥à¤ªà¥à¤¯à¥à¤Ÿà¤° à¤‡à¤¨à¥à¤œà¤¿à¤¨à¤¿à¤¯à¤°à¤¿à¤™ à¤° à¤¸à¤¿à¤°à¥à¤œà¤¨à¤¾à¤¤à¥à¤®à¤• à¤ªà¥à¤°à¤µà¤¿à¤§à¤¿à¤¸à¤®à¥à¤®à¤•à¥‹ à¤®à¥‡à¤°à¥‹ à¤¯à¤¾à¤¤à¥à¤°à¤¾à¥¤',
      'Completed': 'à¤ªà¥‚à¤°à¤¾ à¤­à¤¯à¥‹', 'Current': 'à¤¹à¤¾à¤²', 'Specialization: Computer Engineering': 'à¤µà¤¿à¤¶à¥‡à¤·à¤œà¥à¤žà¤¤à¤¾: à¤•à¤®à¥à¤ªà¥à¤¯à¥à¤Ÿà¤° à¤‡à¤¨à¥à¤œà¤¿à¤¨à¤¿à¤¯à¤°à¤¿à¤™',
      'Visit School â†’': 'à¤µà¤¿à¤¦à¥à¤¯à¤¾à¤²à¤¯ à¤¹à¥‡à¤°à¥à¤¨à¥à¤¹à¥‹à¤¸à¥ â†’', 'Participated in Tech Fairs': 'à¤Ÿà¥‡à¤• à¤®à¥‡à¤²à¤¾à¤®à¤¾ à¤¸à¤¹à¤­à¤¾à¤—à¥€',
      'Learning DBMS, Web Development & AI basics': 'DBMS, à¤µà¥‡à¤¬ à¤µà¤¿à¤•à¤¾à¤¸ à¤° AI à¤•à¤¾ à¤†à¤§à¤¾à¤°à¤­à¥‚à¤¤ à¤•à¥à¤°à¤¾ à¤¸à¤¿à¤•à¥à¤¦à¥ˆ',
      "I'm Prashanta Bhusal, a passionate Graphic Designer and Web Developer from Malarani-07, Arghakhanchi, Nepal.": 'à¤® à¤®à¤¾à¤²à¤¾à¤°à¤¾à¤¨à¥€-à¥¦à¥­, à¤…à¤°à¥à¤˜à¤¾à¤–à¤¾à¤à¤šà¥€, à¤¨à¥‡à¤ªà¤¾à¤²à¤•à¤¾ à¤‰à¤¤à¥à¤¸à¤¾à¤¹à¥€ à¤—à¥à¤°à¤¾à¤«à¤¿à¤• à¤¡à¤¿à¤œà¤¾à¤‡à¤¨à¤° à¤° à¤µà¥‡à¤¬ à¤µà¤¿à¤•à¤¾à¤¸à¤•à¤°à¥à¤¤à¤¾ à¤ªà¥à¤°à¤¶à¤¾à¤¨à¥à¤¤ à¤­à¥à¤¸à¤¾à¤² à¤¹à¥à¤à¥¤',
      'I am currently studying Grade 11 with a specialization in Computer Engineering at Kalika Manavgyan Secondary School while exploring real-life hardware and software projects.': 'à¤® à¤¹à¤¾à¤² à¤•à¤¾à¤²à¤¿à¤•à¤¾ à¤®à¤¾à¤¨à¤µà¤œà¥à¤žà¤¾à¤¨ à¤®à¤¾à¤§à¥à¤¯à¤®à¤¿à¤• à¤µà¤¿à¤¦à¥à¤¯à¤¾à¤²à¤¯à¤®à¤¾ à¤•à¤®à¥à¤ªà¥à¤¯à¥à¤Ÿà¤° à¤‡à¤¨à¥à¤œà¤¿à¤¨à¤¿à¤¯à¤°à¤¿à¤™ à¤µà¤¿à¤·à¤¯ à¤²à¤¿à¤à¤° à¤•à¤•à¥à¤·à¤¾ à¥§à¥§ à¤®à¤¾ à¤…à¤§à¥à¤¯à¤¯à¤¨ à¤—à¤°à¥à¤¦à¥ˆ à¤µà¤¾à¤¸à¥à¤¤à¤µà¤¿à¤• à¤¹à¤¾à¤°à¥à¤¡à¤µà¥‡à¤¯à¤° à¤° à¤¸à¤«à¥à¤Ÿà¤µà¥‡à¤¯à¤° à¤ªà¤°à¤¿à¤¯à¥‹à¤œà¤¨à¤¾ à¤–à¥‹à¤œà¥à¤¦à¥ˆ à¤›à¥à¥¤',
      'I love building beautiful websites and designing visual identities that leave a lasting impression. My goal is to help local businesses and startups grow through powerful design and clean web experiences.': 'à¤® à¤¸à¥à¤¨à¥à¤¦à¤° à¤µà¥‡à¤¬à¤¸à¤¾à¤‡à¤Ÿ à¤° à¤¦à¥€à¤°à¥à¤˜à¤•à¤¾à¤²à¥€à¤¨ à¤ªà¥à¤°à¤­à¤¾à¤µ à¤ªà¤¾à¤°à¥à¤¨à¥‡ à¤¦à¥ƒà¤¶à¥à¤¯ à¤ªà¤¹à¤¿à¤šà¤¾à¤¨ à¤¬à¤¨à¤¾à¤‰à¤¨ à¤®à¤¨ à¤ªà¤°à¤¾à¤‰à¤à¤›à¥à¥¤ à¤¶à¤•à¥à¤¤à¤¿à¤¶à¤¾à¤²à¥€ à¤¡à¤¿à¤œà¤¾à¤‡à¤¨ à¤° à¤¸à¤«à¤¾ à¤µà¥‡à¤¬ à¤…à¤¨à¥à¤­à¤µà¤®à¤¾à¤°à¥à¤«à¤¤ à¤¸à¥à¤¥à¤¾à¤¨à¥€à¤¯ à¤µà¥à¤¯à¤µà¤¸à¤¾à¤¯ à¤¤à¤¥à¤¾ à¤¸à¥à¤Ÿà¤¾à¤°à¥à¤Ÿà¤…à¤ªà¤²à¤¾à¤ˆ à¤…à¤˜à¤¿ à¤¬à¤¢à¤¾à¤‰à¤¨à¥ à¤®à¥‡à¤°à¥‹ à¤²à¤•à¥à¤·à¥à¤¯ à¤¹à¥‹à¥¤',
      "When I'm not coding or designing, I'm exploring AI, learning new tools, and participating in tech fairs.": 'à¤•à¥‹à¤¡à¤¿à¤™ à¤µà¤¾ à¤¡à¤¿à¤œà¤¾à¤‡à¤¨ à¤¨à¤—à¤°à¥à¤¦à¤¾ à¤® AI à¤–à¥‹à¤œà¥à¤›à¥, à¤¨à¤¯à¤¾à¤ à¤‰à¤ªà¤•à¤°à¤£ à¤¸à¤¿à¤•à¥à¤›à¥ à¤° à¤Ÿà¥‡à¤• à¤®à¥‡à¤²à¤¾à¤®à¤¾ à¤¸à¤¹à¤­à¤¾à¤—à¥€ à¤¹à¥à¤¨à¥à¤›à¥à¥¤',
      'Creative design solutions for flyers, posters, brochures, social media, and branding.': 'à¤«à¥à¤²à¤¾à¤¯à¤°, à¤ªà¥‹à¤¸à¥à¤Ÿà¤°, à¤¬à¥à¤°à¥‹à¤¸à¤°, à¤¸à¤¾à¤®à¤¾à¤œà¤¿à¤• à¤¸à¤žà¥à¤œà¤¾à¤² à¤° à¤¬à¥à¤°à¤¾à¤¨à¥à¤¡à¤¿à¤™à¤•à¤¾ à¤²à¤¾à¤—à¤¿ à¤¸à¤¿à¤°à¥à¤œà¤¨à¤¾à¤¤à¥à¤®à¤• à¤¡à¤¿à¤œà¤¾à¤‡à¤¨ à¤¸à¤®à¤¾à¤§à¤¾à¤¨à¥¤',
      'Custom logos, brand marks, icons, and identity packages tailored to your brand.': 'à¤¤à¤ªà¤¾à¤ˆà¤‚à¤•à¥‹ à¤¬à¥à¤°à¤¾à¤¨à¥à¤¡à¤…à¤¨à¥à¤¸à¤¾à¤° à¤¤à¤¯à¤¾à¤° à¤—à¤°à¤¿à¤à¤•à¤¾ à¤²à¥‹à¤—à¥‹, à¤¬à¥à¤°à¤¾à¤¨à¥à¤¡ à¤šà¤¿à¤¨à¥à¤¹, à¤†à¤‡à¤•à¤¨ à¤° à¤ªà¤¹à¤¿à¤šà¤¾à¤¨ à¤ªà¥à¤¯à¤¾à¤•à¥‡à¤œà¥¤',
      'Professional slide decks for education and business, crafted for maximum impact.': 'à¤¶à¤¿à¤•à¥à¤·à¤¾ à¤° à¤µà¥à¤¯à¤µà¤¸à¤¾à¤¯à¤•à¤¾ à¤²à¤¾à¤—à¤¿ à¤…à¤§à¤¿à¤•à¤¤à¤® à¤ªà¥à¤°à¤­à¤¾à¤µ à¤ªà¤¾à¤°à¥à¤¨à¥‡ à¤µà¥à¤¯à¤¾à¤µà¤¸à¤¾à¤¯à¤¿à¤• à¤ªà¥à¤°à¤¸à¥à¤¤à¥à¤¤à¤¿ à¤¸à¥à¤²à¤¾à¤‡à¤¡à¤¹à¤°à¥‚à¥¤',
      'Modern, responsive websites built with HTML, CSS, JS, and Tailwind CSS.': 'HTML, CSS, JS à¤° Tailwind CSS à¤¬à¤¾à¤Ÿ à¤¬à¤¨à¤¾à¤‡à¤à¤•à¤¾ à¤†à¤§à¥à¤¨à¤¿à¤• à¤° à¤‰à¤¤à¥à¤¤à¤°à¤¦à¤¾à¤¯à¥€ à¤µà¥‡à¤¬à¤¸à¤¾à¤‡à¤Ÿà¤¹à¤°à¥‚à¥¤',
      'Manage, grow, and engage your audience across Instagram and Facebook.': 'Instagram à¤° Facebook à¤®à¤¾ à¤¤à¤ªà¤¾à¤ˆà¤‚à¤•à¥‹ à¤¦à¤°à¥à¤¶à¤• à¤µà¥à¤¯à¤µà¤¸à¥à¤¥à¤¾à¤ªà¤¨, à¤µà¥ƒà¤¦à¥à¤§à¤¿ à¤° à¤¸à¤‚à¤²à¤—à¥à¤¨à¤¤à¤¾à¥¤',
      "Need something custom? Let's talk about your project and bring your ideas to life.": 'à¤•à¥‡à¤¹à¥€ à¤µà¤¿à¤¶à¥‡à¤· à¤šà¤¾à¤¹à¤¿à¤¨à¥à¤›? à¤¤à¤ªà¤¾à¤ˆà¤‚à¤•à¥‹ à¤ªà¤°à¤¿à¤¯à¥‹à¤œà¤¨à¤¾à¤¬à¤¾à¤°à¥‡ à¤•à¥à¤°à¤¾ à¤—à¤°à¥Œà¤ à¤° à¤¤à¤ªà¤¾à¤ˆà¤‚à¤•à¤¾ à¤µà¤¿à¤šà¤¾à¤°à¤²à¤¾à¤ˆ à¤œà¥€à¤µà¤¨à¥à¤¤ à¤¬à¤¨à¤¾à¤”à¤à¥¤',
      'How every project comes to life.': 'à¤¹à¤°à¥‡à¤• à¤ªà¤°à¤¿à¤¯à¥‹à¤œà¤¨à¤¾ à¤•à¤¸à¤°à¥€ à¤ªà¥‚à¤°à¤¾ à¤¹à¥à¤¨à¥à¤›à¥¤',
      'We talk about your goals, target audience, budget, and timeline. I listen carefully before a single pixel is moved.': 'à¤¹à¤¾à¤®à¥€ à¤¤à¤ªà¤¾à¤ˆà¤‚à¤•à¤¾ à¤²à¤•à¥à¤·à¥à¤¯, à¤²à¤•à¥à¤·à¤¿à¤¤ à¤¦à¤°à¥à¤¶à¤•, à¤¬à¤œà¥‡à¤Ÿ à¤° à¤¸à¤®à¤¯à¤¸à¥€à¤®à¤¾à¤¬à¤¾à¤°à¥‡ à¤•à¥à¤°à¤¾ à¤—à¤°à¥à¤›à¥Œà¤à¥¤ à¤à¤‰à¤Ÿà¤¾ à¤ªà¤¿à¤•à¥à¤¸à¥‡à¤² à¤ªà¤¨à¤¿ à¤¸à¤¾à¤°à¥à¤¨à¥à¤…à¤˜à¤¿ à¤® à¤§à¥à¤¯à¤¾à¤¨à¤ªà¥‚à¤°à¥à¤µà¤• à¤¸à¥à¤¨à¥à¤›à¥à¥¤',
      'I create mockups, iterate based on your feedback, and refine until the design feels exactly right for your brand.': 'à¤® à¤®à¥‹à¤•à¤…à¤ª à¤¬à¤¨à¤¾à¤‰à¤à¤›à¥, à¤¤à¤ªà¤¾à¤ˆà¤‚à¤•à¥‹ à¤ªà¥à¤°à¤¤à¤¿à¤•à¥à¤°à¤¿à¤¯à¤¾à¤…à¤¨à¥à¤¸à¤¾à¤° à¤¸à¥à¤§à¤¾à¤° à¤—à¤°à¥à¤›à¥ à¤° à¤¡à¤¿à¤œà¤¾à¤‡à¤¨ à¤¤à¤ªà¤¾à¤ˆà¤‚à¤•à¥‹ à¤¬à¥à¤°à¤¾à¤¨à¥à¤¡à¤•à¤¾ à¤²à¤¾à¤—à¤¿ à¤ à¥€à¤• à¤¨à¤²à¤¾à¤—à¥‡à¤¸à¤®à¥à¤® à¤ªà¤°à¤¿à¤·à¥à¤•à¥ƒà¤¤ à¤—à¤°à¥à¤›à¥à¥¤',
      'Clean files, live website, or both â€” delivered on time with a revision window and post-delivery support.': 'à¤¸à¤«à¤¾ à¤«à¤¾à¤‡à¤², à¤ªà¥à¤°à¤¤à¥à¤¯à¤•à¥à¤· à¤µà¥‡à¤¬à¤¸à¤¾à¤‡à¤Ÿ à¤µà¤¾ à¤¦à¥à¤µà¥ˆ â€” à¤¸à¤®à¤¯à¤®à¥ˆ à¤¸à¤‚à¤¶à¥‹à¤§à¤¨ à¤…à¤µà¤¸à¤° à¤° à¤¹à¤¸à¥à¤¤à¤¾à¤¨à¥à¤¤à¤°à¤£à¤ªà¤›à¤¿à¤•à¥‹ à¤¸à¤¹à¤¯à¥‹à¤—à¤¸à¤¹à¤¿à¤¤à¥¤',
      'I create memorable visual identities and thoughtful websites that help people and brands look confident, clear, and professional.': 'à¤®à¤¾à¤¨à¤¿à¤¸ à¤° à¤¬à¥à¤°à¤¾à¤¨à¥à¤¡à¤²à¤¾à¤ˆ à¤†à¤¤à¥à¤®à¤µà¤¿à¤¶à¥à¤µà¤¾à¤¸à¥€, à¤¸à¥à¤ªà¤·à¥à¤Ÿ à¤° à¤µà¥à¤¯à¤¾à¤µà¤¸à¤¾à¤¯à¤¿à¤• à¤¦à¥‡à¤–à¤¿à¤¨ à¤®à¤¦à¥à¤¦à¤¤ à¤—à¤°à¥à¤¨à¥‡ à¤¯à¤¾à¤¦à¤—à¤¾à¤° à¤¦à¥ƒà¤¶à¥à¤¯ à¤ªà¤¹à¤¿à¤šà¤¾à¤¨ à¤° à¤¸à¥‹à¤šà¤µà¤¿à¤šà¤¾à¤° à¤—à¤°à¤¿à¤à¤•à¤¾ à¤µà¥‡à¤¬à¤¸à¤¾à¤‡à¤Ÿà¤¹à¤°à¥‚ à¤® à¤¬à¤¨à¤¾à¤‰à¤à¤›à¥à¥¤',
      'A year-by-year timeline of growth in technology, design, leadership, and real-world work.': 'à¤ªà¥à¤°à¤µà¤¿à¤§à¤¿, à¤¡à¤¿à¤œà¤¾à¤‡à¤¨, à¤¨à¥‡à¤¤à¥ƒà¤¤à¥à¤µ à¤° à¤µà¤¾à¤¸à¥à¤¤à¤µà¤¿à¤• à¤•à¤¾à¤®à¤®à¤¾ à¤­à¤à¤•à¥‹ à¤µà¤°à¥à¤·à¤—à¤¤ à¤µà¤¿à¤•à¤¾à¤¸à¤•à¥‹ à¤¸à¤®à¤¯à¤°à¥‡à¤–à¤¾à¥¤',
      'Creative design solutions for flyers, posters, brochures, social media, and branding.': 'à¤«à¥à¤²à¤¾à¤¯à¤°, à¤ªà¥‹à¤¸à¥à¤Ÿà¤°, à¤¬à¥à¤°à¥‹à¤¸à¤°, à¤¸à¤¾à¤®à¤¾à¤œà¤¿à¤• à¤¸à¤žà¥à¤œà¤¾à¤² à¤° à¤¬à¥à¤°à¤¾à¤¨à¥à¤¡à¤¿à¤™à¤•à¤¾ à¤²à¤¾à¤—à¤¿ à¤¸à¤¿à¤°à¥à¤œà¤¨à¤¾à¤¤à¥à¤®à¤• à¤¡à¤¿à¤œà¤¾à¤‡à¤¨ à¤¸à¤®à¤¾à¤§à¤¾à¤¨à¥¤',
      'Professional services tailored to your project.': 'à¤¤à¤ªà¤¾à¤ˆà¤‚à¤•à¥‹ à¤ªà¤°à¤¿à¤¯à¥‹à¤œà¤¨à¤¾à¤…à¤¨à¥à¤¸à¤¾à¤° à¤¤à¤¯à¤¾à¤° à¤—à¤°à¤¿à¤à¤•à¤¾ à¤µà¥à¤¯à¤¾à¤µà¤¸à¤¾à¤¯à¤¿à¤• à¤¸à¥‡à¤µà¤¾à¤¹à¤°à¥‚à¥¤',
      'Explore selected projects, then open the full graphic design collection.': 'à¤›à¤¾à¤¨à¤¿à¤à¤•à¤¾ à¤ªà¤°à¤¿à¤¯à¥‹à¤œà¤¨à¤¾ à¤¹à¥‡à¤°à¥à¤¨à¥à¤¹à¥‹à¤¸à¥ à¤° à¤ªà¥‚à¤°à¤¾ à¤—à¥à¤°à¤¾à¤«à¤¿à¤• à¤¡à¤¿à¤œà¤¾à¤‡à¤¨ à¤¸à¤‚à¤—à¥à¤°à¤¹ à¤–à¥‹à¤²à¥à¤¨à¥à¤¹à¥‹à¤¸à¥à¥¤',
      'Browse brand visuals, banners, certificates, flyers, and presentation slides in one responsive gallery.': 'à¤‰à¤¤à¥à¤¤à¤°à¤¦à¤¾à¤¯à¥€ à¤—à¥à¤¯à¤¾à¤²à¤°à¥€à¤®à¤¾ à¤¬à¥à¤°à¤¾à¤¨à¥à¤¡ à¤¦à¥ƒà¤¶à¥à¤¯, à¤¬à¥à¤¯à¤¾à¤¨à¤°, à¤ªà¥à¤°à¤®à¤¾à¤£à¤ªà¤¤à¥à¤°, à¤«à¥à¤²à¤¾à¤¯à¤° à¤° à¤ªà¥à¤°à¤¸à¥à¤¤à¥à¤¤à¤¿ à¤¸à¥à¤²à¤¾à¤‡à¤¡à¤¹à¤°à¥‚ à¤¹à¥‡à¤°à¥à¤¨à¥à¤¹à¥‹à¤¸à¥à¥¤',
      'Working with Prashanta was easy from start to finish. He understood what we needed, delivered quickly, and made sure the website felt right for our business.': 'à¤¸à¥à¤°à¥à¤¦à¥‡à¤–à¤¿ à¤…à¤¨à¥à¤¤à¥à¤¯à¤¸à¤®à¥à¤® à¤ªà¥à¤°à¤¶à¤¾à¤¨à¥à¤¤à¤¸à¤à¤— à¤•à¤¾à¤® à¤—à¤°à¥à¤¨ à¤¸à¤œà¤¿à¤²à¥‹ à¤­à¤¯à¥‹à¥¤ à¤‰à¤¹à¤¾à¤à¤²à¥‡ à¤¹à¤¾à¤®à¥à¤°à¥‹ à¤†à¤µà¤¶à¥à¤¯à¤•à¤¤à¤¾ à¤¬à¥à¤à¥à¤¨à¥à¤­à¤¯à¥‹, à¤›à¤¿à¤Ÿà¥‹ à¤•à¤¾à¤® à¤¦à¤¿à¤¨à¥à¤­à¤¯à¥‹ à¤° à¤µà¥‡à¤¬à¤¸à¤¾à¤‡à¤Ÿ à¤¹à¤¾à¤®à¥à¤°à¥‹ à¤µà¥à¤¯à¤µà¤¸à¤¾à¤¯à¤•à¤¾ à¤²à¤¾à¤—à¤¿ à¤‰à¤ªà¤¯à¥à¤•à¥à¤¤ à¤¬à¤¨à¤¾à¤‰à¤¨à¥ à¤­à¤¯à¥‹à¥¤',
      'Prashanta made our school website clear, professional, and easy to use. He communicated well and delivered exactly what we needed.': 'à¤ªà¥à¤°à¤¶à¤¾à¤¨à¥à¤¤à¤²à¥‡ à¤¹à¤¾à¤®à¥à¤°à¥‹ à¤µà¤¿à¤¦à¥à¤¯à¤¾à¤²à¤¯à¤•à¥‹ à¤µà¥‡à¤¬à¤¸à¤¾à¤‡à¤Ÿ à¤¸à¥à¤ªà¤·à¥à¤Ÿ, à¤µà¥à¤¯à¤¾à¤µà¤¸à¤¾à¤¯à¤¿à¤• à¤° à¤ªà¥à¤°à¤¯à¥‹à¤— à¤—à¤°à¥à¤¨ à¤¸à¤œà¤¿à¤²à¥‹ à¤¬à¤¨à¤¾à¤‰à¤¨à¥à¤­à¤¯à¥‹à¥¤ à¤‰à¤¹à¤¾à¤à¤²à¥‡ à¤°à¤¾à¤®à¥à¤°à¥‹ à¤¸à¤‚à¤µà¤¾à¤¦ à¤—à¤°à¥à¤¨à¥à¤­à¤¯à¥‹ à¤° à¤¹à¤¾à¤®à¥€à¤²à¤¾à¤ˆ à¤šà¤¾à¤¹à¤¿à¤à¤•à¥‹ à¤•à¥à¤°à¤¾ à¤ à¥à¤¯à¤¾à¤•à¥à¤•à¥ˆ à¤¦à¤¿à¤¨à¥à¤­à¤¯à¥‹à¥¤',
      'Prashanta listened to my ideas and turned them into a portfolio that feels clean, modern, and truly personal. I am very happy with the result.': 'à¤ªà¥à¤°à¤¶à¤¾à¤¨à¥à¤¤à¤²à¥‡ à¤®à¥‡à¤°à¤¾ à¤µà¤¿à¤šà¤¾à¤° à¤¸à¥à¤¨à¥‡à¤° à¤¸à¤«à¤¾, à¤†à¤§à¥à¤¨à¤¿à¤• à¤° à¤µà¥à¤¯à¤•à¥à¤¤à¤¿à¤—à¤¤ à¤ªà¥‹à¤°à¥à¤Ÿà¤«à¥‹à¤²à¤¿à¤¯à¥‹ à¤¬à¤¨à¤¾à¤‰à¤¨à¥à¤­à¤¯à¥‹à¥¤ à¤¨à¤¤à¤¿à¤œà¤¾à¤¬à¤¾à¤Ÿ à¤® à¤§à¥‡à¤°à¥ˆ à¤–à¥à¤¸à¥€ à¤›à¥à¥¤',
      'The attendance system is simple to use and works smoothly for our daily records. Prashanta made the whole process clear and practical.': 'à¤‰à¤ªà¤¸à¥à¤¥à¤¿à¤¤à¤¿ à¤ªà¥à¤°à¤£à¤¾à¤²à¥€ à¤ªà¥à¤°à¤¯à¥‹à¤— à¤—à¤°à¥à¤¨ à¤¸à¤œà¤¿à¤²à¥‹ à¤› à¤° à¤¦à¥ˆà¤¨à¤¿à¤• à¤…à¤­à¤¿à¤²à¥‡à¤–à¤•à¤¾ à¤²à¤¾à¤—à¤¿ à¤¸à¤¹à¤œ à¤°à¥‚à¤ªà¤®à¤¾ à¤•à¤¾à¤® à¤—à¤°à¥à¤›à¥¤ à¤ªà¥à¤°à¤¶à¤¾à¤¨à¥à¤¤à¤²à¥‡ à¤¸à¤®à¥à¤ªà¥‚à¤°à¥à¤£ à¤ªà¥à¤°à¤•à¥à¤°à¤¿à¤¯à¤¾ à¤¸à¥à¤ªà¤·à¥à¤Ÿ à¤° à¤µà¥à¤¯à¤¾à¤µà¤¹à¤¾à¤°à¤¿à¤• à¤¬à¤¨à¤¾à¤‰à¤¨à¥à¤­à¤¯à¥‹à¥¤',
      'Prashanta gave our brand a polished and memorable look. The designs feel thoughtful, consistent, and exactly right for our audience.': 'à¤ªà¥à¤°à¤¶à¤¾à¤¨à¥à¤¤à¤²à¥‡ à¤¹à¤¾à¤®à¥à¤°à¥‹ à¤¬à¥à¤°à¤¾à¤¨à¥à¤¡à¤²à¤¾à¤ˆ à¤†à¤•à¤°à¥à¤·à¤• à¤° à¤¯à¤¾à¤¦à¤—à¤¾à¤° à¤°à¥‚à¤ª à¤¦à¤¿à¤¨à¥à¤­à¤¯à¥‹à¥¤ à¤¡à¤¿à¤œà¤¾à¤‡à¤¨à¤¹à¤°à¥‚ à¤¸à¥‹à¤šà¤µà¤¿à¤šà¤¾à¤° à¤—à¤°à¤¿à¤à¤•à¤¾, à¤à¤•à¤°à¥‚à¤ª à¤° à¤¹à¤¾à¤®à¥à¤°à¤¾ à¤¦à¤°à¥à¤¶à¤•à¤•à¤¾ à¤²à¤¾à¤—à¤¿ à¤ à¥à¤¯à¤¾à¤•à¥à¤•à¥ˆ à¤‰à¤ªà¤¯à¥à¤•à¥à¤¤ à¤›à¤¨à¥à¥¤',
      'Prashanta brought fresh ideas to our product designs and branding. He was professional, creative, and easy to work with throughout the project.': 'à¤ªà¥à¤°à¤¶à¤¾à¤¨à¥à¤¤à¤²à¥‡ à¤¹à¤¾à¤®à¥à¤°à¥‹ à¤‰à¤¤à¥à¤ªà¤¾à¤¦à¤¨ à¤¡à¤¿à¤œà¤¾à¤‡à¤¨ à¤° à¤¬à¥à¤°à¤¾à¤¨à¥à¤¡à¤¿à¤™à¤®à¤¾ à¤¨à¤¯à¤¾à¤ à¤µà¤¿à¤šà¤¾à¤° à¤²à¥à¤¯à¤¾à¤‰à¤¨à¥à¤­à¤¯à¥‹à¥¤ à¤‰à¤¹à¤¾à¤ à¤ªà¤°à¤¿à¤¯à¥‹à¤œà¤¨à¤¾à¤­à¤° à¤µà¥à¤¯à¤¾à¤µà¤¸à¤¾à¤¯à¤¿à¤•, à¤¸à¤¿à¤°à¥à¤œà¤¨à¤¾à¤¤à¥à¤®à¤• à¤° à¤¸à¤¹à¤•à¤¾à¤°à¥à¤¯ à¤—à¤°à¥à¤¨ à¤¸à¤œà¤¿à¤²à¥‹ à¤¹à¥à¤¨à¥à¤¹à¥à¤¨à¥à¤¥à¥à¤¯à¥‹à¥¤',
      'Logos': 'à¤²à¥‹à¤—à¥‹à¤¹à¤°à¥‚', 'Banners': 'à¤¬à¥à¤¯à¤¾à¤¨à¤°à¤¹à¤°à¥‚', 'Certificates': 'à¤ªà¥à¤°à¤®à¤¾à¤£à¤ªà¤¤à¥à¤°à¤¹à¤°à¥‚', 'Birthday Frames': 'à¤œà¤¨à¥à¤®à¤¦à¤¿à¤¨ à¤«à¥à¤°à¥‡à¤®à¤¹à¤°à¥‚',
      'Flyers': 'à¤«à¥à¤²à¤¾à¤¯à¤°à¤¹à¤°à¥‚', 'Presentations': 'à¤ªà¥à¤°à¤¸à¥à¤¤à¥à¤¤à¥€à¤¹à¤°à¥‚', 'Other Work': 'à¤…à¤¨à¥à¤¯ à¤•à¤¾à¤®',
      'Games': 'à¤–à¥‡à¤²à¤¹à¤°à¥‚', 'Websites': 'à¤µà¥‡à¤¬à¤¸à¤¾à¤‡à¤Ÿà¤¹à¤°à¥‚', 'Education': 'à¤¶à¤¿à¤•à¥à¤·à¤¾', 'Management': 'à¤µà¥à¤¯à¤µà¤¸à¥à¤¥à¤¾à¤ªà¤¨',
      'Interactive': 'à¤…à¤¨à¥à¤¤à¤°à¤•à¥à¤°à¤¿à¤¯à¤¾à¤¤à¥à¤®à¤•', 'Website': 'à¤µà¥‡à¤¬à¤¸à¤¾à¤‡à¤Ÿ', 'Portfolio': 'à¤ªà¥‹à¤°à¥à¤Ÿà¤«à¥‹à¤²à¤¿à¤¯à¥‹', 'Action': 'à¤à¤•à¥à¤¸à¤¨',
      'Play': 'à¤–à¥‡à¤²à¥à¤¨à¥à¤¹à¥‹à¤¸à¥', 'Live': 'à¤²à¤¾à¤‡à¤­', 'MOST POPULAR': 'à¤¸à¤¬à¥ˆà¤­à¤¨à¥à¤¦à¤¾ à¤²à¥‹à¤•à¤ªà¥à¤°à¤¿à¤¯',
      'Send Project Details â†’': 'à¤ªà¤°à¤¿à¤¯à¥‹à¤œà¤¨à¤¾à¤•à¥‹ à¤µà¤¿à¤µà¤°à¤£ à¤ªà¤ à¤¾à¤‰à¤¨à¥à¤¹à¥‹à¤¸à¥ â†’', 'Sending...': 'à¤ªà¤ à¤¾à¤‰à¤à¤¦à¥ˆ...',
      'Your Name': 'à¤¤à¤ªà¤¾à¤ˆà¤‚à¤•à¥‹ à¤¨à¤¾à¤®', 'Your Email': 'à¤¤à¤ªà¤¾à¤ˆà¤‚à¤•à¥‹ à¤‡à¤®à¥‡à¤²', 'Service Needed': 'à¤†à¤µà¤¶à¥à¤¯à¤• à¤¸à¥‡à¤µà¤¾',
      'Subject': 'à¤µà¤¿à¤·à¤¯', 'Tell me about your project': 'à¤†à¤«à¥à¤¨à¥‹ à¤ªà¤°à¤¿à¤¯à¥‹à¤œà¤¨à¤¾à¤¬à¤¾à¤°à¥‡ à¤¬à¤¤à¤¾à¤‰à¤¨à¥à¤¹à¥‹à¤¸à¥',
      'Project details': 'à¤ªà¤°à¤¿à¤¯à¥‹à¤œà¤¨à¤¾à¤•à¥‹ à¤µà¤¿à¤µà¤°à¤£', 'Submit': 'à¤ªà¤ à¤¾à¤‰à¤¨à¥à¤¹à¥‹à¤¸à¥', 'Message sent successfully.': 'à¤¸à¤¨à¥à¤¦à¥‡à¤¶ à¤¸à¤«à¤²à¤¤à¤¾à¤ªà¥‚à¤°à¥à¤µà¤• à¤ªà¤ à¤¾à¤‡à¤¯à¥‹à¥¤',
      'Available for Hire': 'à¤•à¤¾à¤®à¤•à¤¾ à¤²à¤¾à¤—à¤¿ à¤‰à¤ªà¤²à¤¬à¥à¤§', 'Crafting modern web experiences & creative visuals.': 'à¤†à¤§à¥à¤¨à¤¿à¤• à¤µà¥‡à¤¬ à¤…à¤¨à¥à¤­à¤µ à¤° à¤¸à¤¿à¤°à¥à¤œà¤¨à¤¾à¤¤à¥à¤®à¤• à¤¦à¥ƒà¤¶à¥à¤¯à¤¹à¤°à¥‚ à¤¨à¤¿à¤°à¥à¤®à¤¾à¤£ à¤—à¤°à¥à¤¦à¥ˆà¥¤'
      'What Clients Say': 'à¤—à¥à¤°à¤¾à¤¹à¤•à¤¹à¤°à¥‚ à¤•à¥‡ à¤­à¤¨à¥à¤›à¤¨à¥', 'Real feedback from real projects.': 'à¤µà¤¾à¤¸à¥à¤¤à¤µà¤¿à¤• à¤ªà¤°à¤¿à¤¯à¥‹à¤œà¤¨à¤¾à¤¬à¤¾à¤Ÿ à¤µà¤¾à¤¸à¥à¤¤à¤µà¤¿à¤• à¤ªà¥à¤°à¤¤à¤¿à¤•à¥à¤°à¤¿à¤¯à¤¾à¥¤',
      'Fast response:': 'à¤›à¤¿à¤Ÿà¥‹ à¤ªà¥à¤°à¤¤à¤¿à¤•à¥à¤°à¤¿à¤¯à¤¾:', 'Clear process:': 'à¤¸à¥à¤ªà¤·à¥à¤Ÿ à¤ªà¥à¤°à¤•à¥à¤°à¤¿à¤¯à¤¾:', 'Project-ready:': 'à¤ªà¤°à¤¿à¤¯à¥‹à¤œà¤¨à¤¾à¤•à¤¾ à¤²à¤¾à¤—à¤¿ à¤¤à¤¯à¤¾à¤°:',
      'usually within 24 hours.': 'à¤¸à¤¾à¤®à¤¾à¤¨à¥à¤¯à¤¤à¤¯à¤¾ à¥¨à¥ª à¤˜à¤£à¥à¤Ÿà¤¾à¤­à¤¿à¤¤à¥à¤°à¥¤', 'discuss, design, deliver.': 'à¤›à¤²à¤«à¤², à¤¡à¤¿à¤œà¤¾à¤‡à¤¨, à¤¹à¤¸à¥à¤¤à¤¾à¤¨à¥à¤¤à¤°à¤£à¥¤',
      'arrow_forward': 'à¤…à¤—à¤¾à¤¡à¤¿', 'north_east': 'à¤¬à¤¾à¤¹à¤¿à¤°', 'status: learning, creating, improving': 'à¤¸à¥à¤¥à¤¿à¤¤à¤¿: à¤¸à¤¿à¤•à¥à¤¦à¥ˆ, à¤¸à¤¿à¤°à¥à¤œà¤¨à¤¾ à¤—à¤°à¥à¤¦à¥ˆ, à¤¸à¥à¤§à¤¾à¤° à¤—à¤°à¥à¤¦à¥ˆ'
    };

    function translateTextNode(node) {
      const original = node._originalText || node.nodeValue.trim();
      node._originalText = original;
      if (!original || !/[A-Za-z]/.test(original)) return;
      let translated = nepaliTranslations[original];
      if (!translated) {
        translated = original
          .replace(/\/\/ ABOUT ME/g, '// à¤®à¥‡à¤°à¥‹ à¤ªà¤°à¤¿à¤šà¤¯')
          .replace(/Graphic Design|Logo Design|Presentation Design|Web Development|Social Media Management|UI\/UX Design|Custom Project|Services|Contact|About|Education|Home|Design|Discuss|Deliver|Email|Location|Graphic Designer|Website Developer|Websites|brand|I create/g, (word) => nepaliTranslations[word] || word);
      }
      if (translated !== original) {
        const nextValue = node.nodeValue.replace(node.nodeValue.trim(), translated);
        if (nextValue !== node.nodeValue) node.nodeValue = nextValue;
      }
    }

    function translateWholePage() {
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      const nodes = [];
      let node;
      while ((node = walker.nextNode())) nodes.push(node);
      nodes.forEach(translateTextNode);
      document.querySelectorAll('[aria-label]').forEach((element) => {
        if (element.getAttribute('aria-label') === 'Primary navigation') element.setAttribute('aria-label', 'à¤®à¥à¤–à¥à¤¯ à¤¨à¥‡à¤­à¤¿à¤—à¥‡à¤¸à¤¨');
      });
      document.querySelectorAll('input, textarea, select').forEach((element) => {
        if (element.placeholder && !element._originalPlaceholder) element._originalPlaceholder = element.placeholder;
        if (element._originalPlaceholder && nepaliTranslations[element._originalPlaceholder]) element.placeholder = nepaliTranslations[element._originalPlaceholder];
      });
    }

    function restoreEnglishPage() {
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      let node;
      while ((node = walker.nextNode())) {
        if (node._originalText) node.nodeValue = node._originalText;
      }
    }

    function initLanguageToggle() {
      const translatableLinks = Array.from(document.querySelectorAll('[data-en][data-ne]'));
      const setLanguage = (language) => {
        translatableLinks.forEach((link) => {
          link.textContent = link.dataset[language];
        });
        languageToggles.forEach((button) => {
          button.dataset.language = language === 'ne' ? 'en' : 'ne';
          button.innerHTML = language === 'ne' ? 'à¤¨à¥‡ <span>EN</span>' : 'EN <span>à¤¨à¥‡</span>';
          button.setAttribute('aria-label', language === 'ne' ? 'Switch to English' : 'à¤¨à¥‡à¤ªà¤¾à¤²à¥€à¤®à¤¾ à¤¬à¤¦à¤²à¥à¤¨à¥à¤¹à¥‹à¤¸à¥');
          button.setAttribute('aria-pressed', String(language === 'ne'));
        });
        document.body.classList.toggle('page-nepali', language === 'ne');
        if (language === 'ne') translateWholePage();
        else restoreEnglishPage();
        document.documentElement.lang = language === 'ne' ? 'ne' : 'en';
        try {
          localStorage.setItem('preferredLanguage', language);
        } catch (error) {
          console.warn('Language preference could not be saved', error);
        }
      };

      languageToggles.forEach((button) => {
        button.addEventListener('click', () => setLanguage(button.dataset.language));
      });

      let preferredLanguage = 'en';
      try {
        preferredLanguage = localStorage.getItem('preferredLanguage') === 'ne' ? 'ne' : 'en';
      } catch (error) {
        console.warn('Language preference could not be read', error);
      }
      setLanguage(preferredLanguage);
      const languageObserver = new MutationObserver(() => {
        if (document.documentElement.lang === 'ne') translateWholePage();
      });
      languageObserver.observe(document.body, { childList: true, subtree: true });
    }

    function initFilters() {
      const applyFilter = (filter) => {
        filterButtons.forEach((button) => {
          button.classList.toggle('active', button.dataset.filter === filter);
          button.setAttribute('aria-pressed', String(button.dataset.filter === filter));
        });

        projectCards.forEach((card) => {
          const matches = filter === 'All' || card.dataset.category === filter;
          if (card._filterHideTimer) {
            clearTimeout(card._filterHideTimer);
            card._filterHideTimer = null;
          }

          card.classList.remove('project-hidden', 'project-visible');
          card.style.display = matches ? 'flex' : 'none';
        });
      };

      filterButtons.forEach((button) => {
        button.setAttribute('aria-pressed', String(button.classList.contains('active')));
      });

      filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
          applyFilter(button.dataset.filter);
        });
      });

      applyFilter('All');
    }

    function renderGallery(folder) {
      if (!folderList || !galleryGrid || !galleryFolderName || !galleryEmpty) return;
      activeGalleryFolder = folder;
      galleryFolderName.textContent = folder.label;
      if (galleryFolderCount) {
        galleryFolderCount.textContent = String(galleryFolders.length);
      }
      const filteredItems = folder.items.filter((item) => {
        if (!gallerySearchTerm) return true;
        const haystack = `${item.title} ${item.text}`.toLowerCase();
        return haystack.includes(gallerySearchTerm);
      });
      if (galleryFolderCounter) {
        galleryFolderCounter.textContent = `${filteredItems.length} item${filteredItems.length === 1 ? '' : 's'}`;
      }
      if (galleryCount) {
        const total = galleryFolders.reduce((sum, item) => sum + item.items.length, 0);
        galleryCount.textContent = `${total} designs`;
      }
      folderList.querySelectorAll('.folder-btn').forEach((button) => {
        button.classList.toggle('active', button.dataset.folder === folder.key);
        button.setAttribute('aria-selected', String(button.dataset.folder === folder.key));
      });

      galleryGrid.innerHTML = '';
      filteredItems.forEach((item) => {
        const card = document.createElement('article');
        card.className = 'gallery-item';
        card.innerHTML = `
          <img src="${item.src}" alt="${item.title}">
          <div class="gallery-item-body">
            <h5 class="gallery-item-title">${item.title}</h5>
            <p class="gallery-item-text">${item.text}</p>
          </div>
        `;
        galleryGrid.appendChild(card);
      });

      const hasNoMatches = filteredItems.length === 0;
      galleryEmpty.textContent = gallerySearchTerm
        ? `No designs match â€œ${gallerySearchTerm}â€ in ${folder.label}.`
        : 'No designs added for this folder yet.';
      galleryEmpty.classList.toggle('show', hasNoMatches);
    }

    function lockGalleryBackground() {
      galleryScrollY = window.scrollY || document.documentElement.scrollTop || 0;
      document.documentElement.classList.add('gallery-lock');
      document.body.classList.add('gallery-lock');
      document.body.style.position = 'fixed';
      document.body.style.top = `-${galleryScrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
    }

    function unlockGalleryBackground() {
      document.documentElement.classList.remove('gallery-lock');
      document.body.classList.remove('gallery-lock');
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      window.scrollTo(0, galleryScrollY);
    }

    function initGalleryDialog() {
      if (!openGalleryBtn || !galleryDialog || !closeGalleryBtn || !folderList) return;

      folderList.innerHTML = galleryFolders.map((folder) => `
        <button class="folder-btn${folder.key === activeGalleryFolder.key ? ' active' : ''}" type="button" role="tab" data-folder="${folder.key}" aria-selected="${folder.key === activeGalleryFolder.key}">
          <span class="folder-icon" aria-hidden="true"></span>
          <span>${folder.label}</span>
        </button>
      `).join('');

      renderGallery(activeGalleryFolder);

      if (gallerySearch) {
        gallerySearch.addEventListener('input', () => {
          gallerySearchTerm = gallerySearch.value.trim().toLowerCase();
          renderGallery(activeGalleryFolder);
        });
      }

      openGalleryBtn.addEventListener('click', () => {
        lockGalleryBackground();
        if (typeof galleryDialog.showModal === 'function') {
          galleryDialog.showModal();
        } else {
          galleryDialog.setAttribute('open', '');
        }
        if (gallerySearch) {
          window.setTimeout(() => gallerySearch.focus(), 0);
        }
      });

      closeGalleryBtn.addEventListener('click', () => {
        galleryDialog.close();
      });

      galleryDialog.addEventListener('close', unlockGalleryBackground);

      folderList.addEventListener('click', (event) => {
        const button = event.target.closest('.folder-btn');
        if (!button) return;
        const folder = galleryFolders.find((item) => item.key === button.dataset.folder);
        if (folder) renderGallery(folder);
      });

      galleryDialog.addEventListener('click', (event) => {
        const dialogRect = galleryDialog.getBoundingClientRect();
        const isInDialog = dialogRect.top <= event.clientY && event.clientY <= dialogRect.bottom && dialogRect.left <= event.clientX && event.clientX <= dialogRect.right;
        if (!isInDialog) {
          galleryDialog.close();
        }
      });

      window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && galleryDialog.open) {
          galleryDialog.close();
        }
      });
    }

    function initContactForm() {
      if (!contactForm) return;
      contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(contactForm);
        const templateParams = {
          user_name: formData.get('user_name') || '',
          user_email: formData.get('user_email') || '',
          service: formData.get('service') || '',
          subject: formData.get('subject') || '',
          message: formData.get('message') || ''
        };

        const submitBtn = contactForm.querySelector('.form-submit');
        if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Sending...'; }

        // Send using EmailJS
        if (window.emailjs && typeof emailjs.send === 'function') {
          emailjs.send('service_00oryok', 'template_qhlrvct', templateParams)
            .then(() => {
              formSuccess.classList.add('show');
              contactForm.reset();
              if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Send Project Details â†’'; }
              setTimeout(() => formSuccess.classList.remove('show'), 5000);
            }, (error) => {
              console.error('EmailJS error', error);
              alert('Sorry â€” there was an error sending your message. Please try again or email directly.');
              if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Send Project Details â†’'; }
            });
        } else {
          // Fallback behaviour: show success but log warning
          console.warn('EmailJS not available, falling back to client-only behaviour');
          formSuccess.classList.add('show');
          contactForm.reset();
          if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Send Project Details â†’'; }
          setTimeout(() => formSuccess.classList.remove('show'), 5000);
        }
      });
    }

    function initTestimonials() {
      buildTestimonials();
      updateCarousel(false);
      restartCarousel();
      const testimonialShell = document.querySelector('.carousel-shell');
      testimonialShell.addEventListener('mouseenter', pauseCarousel);
      testimonialShell.addEventListener('mouseleave', resumeCarousel);
      prevTestimonial.addEventListener('click', () => { prevSlide(); restartCarousel(); });
      nextTestimonial.addEventListener('click', () => { nextSlide(); restartCarousel(); });
      window.addEventListener('resize', () => updateCarousel(false));
    }

    initReveal();
    initTerminalScrollAnimation();
    typeWriter();
    typeAboutDetails();
    initHashNavigation();
    initNavObserver();
    initScrollState();
    initMobileNav();
    initLanguageToggle();
    initFilters();
    initGalleryDialog();
    initContactForm();
    initTestimonials();
    // Focus form when Request a Quote is clicked in left column
    const ctaQuote = document.getElementById('ctaQuote');
    if (ctaQuote) {
      ctaQuote.addEventListener('click', (e) => {
        e.preventDefault();
        const form = document.getElementById('contactForm');
        const nameField = document.getElementById('user_name');
        if (form) { form.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
        setTimeout(() => { if (nameField) nameField.focus(); }, 420);
      });
    }
  
