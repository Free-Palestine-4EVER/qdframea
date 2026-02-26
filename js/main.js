/* ============================================
   QD Frames — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --- Sticky Navbar + Scroll Progress ---
  const navbar = document.querySelector('.navbar');
  const backToTop = document.getElementById('backToTop');
  const scrollProgress = document.getElementById('scrollProgress');
  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    // Back to top visibility
    if (backToTop) {
      if (window.scrollY > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }
    // Scroll progress bar
    if (scrollProgress) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      scrollProgress.style.width = scrollPercent + '%';
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --- Hero Parallax ---
  const heroBg = document.querySelector('.hero .hero-bg img');
  if (heroBg) {
    const heroSection = document.querySelector('.hero');
    const handleParallax = () => {
      const rect = heroSection.getBoundingClientRect();
      if (rect.bottom > 0) {
        const scrolled = -rect.top * 0.3;
        heroBg.style.transform = `translateY(${scrolled}px) scale(1.1)`;
      }
    };
    window.addEventListener('scroll', handleParallax, { passive: true });
    heroBg.style.transform = 'scale(1.1)';
  }

  // --- Back to Top ---
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Cookie Notice ---
  const cookieNotice = document.getElementById('cookieNotice');
  const cookieAccept = document.getElementById('cookieAccept');
  if (cookieNotice && !localStorage.getItem('cookiesAccepted')) {
    setTimeout(() => cookieNotice.classList.add('visible'), 1500);
  }
  if (cookieAccept) {
    cookieAccept.addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', 'true');
      cookieNotice.classList.remove('visible');
    });
  }

  // --- Mobile Nav Toggle ---
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navOverlay = document.querySelector('.nav-overlay');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('open');
      navOverlay.classList.toggle('show');
      document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });

    if (navOverlay) {
      navOverlay.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('open');
        navOverlay.classList.remove('show');
        document.body.style.overflow = '';
      });
    }

    // Close nav on link click (mobile)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('open');
        navOverlay.classList.remove('show');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Scroll Reveal (Intersection Observer) ---
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // --- Counter Animation ---
  const counters = document.querySelectorAll('[data-count]');
  
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const prefix = el.dataset.prefix || '';
        const duration = 2000;
        const start = performance.now();
        
        const animate = (now) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          // easeOutQuart
          const eased = 1 - Math.pow(1 - progress, 4);
          const current = Math.round(eased * target);
          el.textContent = prefix + current.toLocaleString() + suffix;
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        
        requestAnimationFrame(animate);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(el => counterObserver.observe(el));

  // --- Accordion ---
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const body = item.querySelector('.accordion-body');
      const isActive = item.classList.contains('active');
      
      // Close all
      document.querySelectorAll('.accordion-item.active').forEach(activeItem => {
        activeItem.classList.remove('active');
        activeItem.querySelector('.accordion-body').style.maxHeight = null;
      });
      
      // Open clicked (if not already open)
      if (!isActive) {
        item.classList.add('active');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });

  // --- Card Shine Effect ---
  const shineCards = document.querySelectorAll('.card-shine');
  shineCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', x + '%');
      card.style.setProperty('--mouse-y', y + '%');
    });
  });

  // --- Parallax Elements ---
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  
  if (parallaxElements.length > 0) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      parallaxElements.forEach(el => {
        const speed = parseFloat(el.dataset.parallax) || 0.5;
        const rect = el.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = window.innerHeight / 2;
        const offset = (elementCenter - viewportCenter) * speed * 0.1;
        el.style.transform = `translateY(${offset}px)`;
      });
    }, { passive: true });
  }

  // --- Mouse-tracking gradient on product cards ---
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      const img = card.querySelector('.product-card-img');
      if (img) {
        img.style.setProperty('--mx', x + '%');
        img.style.setProperty('--my', y + '%');
      }
    });
  });

  // --- Smooth number formatting for hero stats ---
  document.querySelectorAll('.hero-stat-value').forEach(el => {
    el.style.fontVariantNumeric = 'tabular-nums';
  });

  // --- Floating Particles ---
  createParticles();

  // --- Active Nav ---
  highlightActiveNav();
});

// --- Particle System ---
function createParticles() {
  const container = document.querySelector('.particles');
  if (!container) return;

  const numParticles = 30;
  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + '%';
    particle.style.width = (Math.random() * 2 + 1) + 'px';
    particle.style.height = particle.style.width;
    particle.style.animationDuration = (Math.random() * 20 + 15) + 's';
    particle.style.animationDelay = -(Math.random() * 20) + 's';
    particle.style.opacity = Math.random() * 0.15 + 0.03;
    container.appendChild(particle);
  }
}

// --- Highlight Active Nav Link ---
function highlightActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a:not(.btn)');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// --- Smooth reveal on page load ---
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
