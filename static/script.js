// ═══════════════════════════════════════════
//   DEEPAK VASUDEVAN — PORTFOLIO SCRIPTS
// ═══════════════════════════════════════════

/* ─── CUSTOM CURSOR ─── */
const dot = document.getElementById('cursor-dot');
const outline = document.getElementById('cursor-outline');

let mouseX = 0, mouseY = 0;
let outlineX = 0, outlineY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  dot.style.left = mouseX + 'px';
  dot.style.top = mouseY + 'px';
});

function animateOutline() {
  outlineX += (mouseX - outlineX) * 0.15;
  outlineY += (mouseY - outlineY) * 0.15;
  outline.style.left = outlineX + 'px';
  outline.style.top = outlineY + 'px';
  requestAnimationFrame(animateOutline);
}
animateOutline();

document.querySelectorAll('a, button, .glass, input, textarea').forEach(el => {
  el.addEventListener('mouseenter', () => {
    outline.style.width = '50px';
    outline.style.height = '50px';
    outline.style.opacity = '0.8';
  });
  el.addEventListener('mouseleave', () => {
    outline.style.width = '34px';
    outline.style.height = '34px';
    outline.style.opacity = '0.5';
  });
});

// Hide cursor on mobile
if ('ontouchstart' in window) {
  dot.style.display = 'none';
  outline.style.display = 'none';
}

/* ─── TYPING ANIMATION ─── */
const phrases = [
  'Data Engineer',
  'ETL Developer',
  'Pipeline Architect',
  'PySpark Developer',
  'dbt + Airflow Dev',
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById('typed-text');

function type() {
  const current = phrases[phraseIndex];

  if (isDeleting) {
    typedEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === current.length) {
    isDeleting = true;
    setTimeout(type, 2000);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(type, 400);
    return;
  }

  const speed = isDeleting ? 60 : 90;
  setTimeout(type, speed);
}

setTimeout(type, 800);

/* ─── NAVBAR SCROLL ─── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/* ─── MOBILE NAV TOGGLE ─── */
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navCta = document.querySelector('.nav-cta');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.style.display === 'flex';
  if (isOpen) {
    navLinks.style.display = 'none';
    navCta.style.display = 'none';
  } else {
    navLinks.style.cssText = `
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 68px;
      left: 0;
      right: 0;
      background: rgba(3, 7, 18, 0.97);
      border-bottom: 1px solid rgba(99, 179, 255, 0.12);
      padding: 20px 24px;
      gap: 20px;
    `;
    navCta.style.cssText = `
      display: block;
      margin: 0 24px 16px;
      text-align: center;
      position: absolute;
      top: 68px;
      left: 0;
      right: 0;
      margin-top: ${phrases.length * 60}px;
    `;
  }
});

// Close nav on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.style.display = 'none';
    navCta.style.display = 'none';
  });
});

/* ─── SCROLL REVEAL ANIMATIONS ─── */
const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Add fade-up to key elements
const animElements = document.querySelectorAll(
  '.glass, .project-card, .cert-card, .info-card, .timeline-content, .section-header'
);

animElements.forEach((el, i) => {
  el.classList.add('fade-up');
  el.style.transitionDelay = `${(i % 4) * 80}ms`;
  observer.observe(el);
});

/* ─── ACTIVE NAV LINK ON SCROLL ─── */
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop <= 120) {
      current = section.getAttribute('id');
    }
  });

  navLinkEls.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = 'var(--neon)';
    }
  });
});

/* ─── CONTACT FORM ─── */
function handleFormSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const original = btn.textContent;
  btn.textContent = '✓ Message Sent!';
  btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
  btn.style.boxShadow = '0 0 24px rgba(34, 197, 94, 0.4)';
  btn.disabled = true;
  e.target.reset();

  setTimeout(() => {
    btn.textContent = original;
    btn.style.background = '';
    btn.style.boxShadow = '';
    btn.disabled = false;
  }, 3500);

  // NOTE: To actually send emails, integrate Formspree:
  // Change form action to https://formspree.io/f/YOUR_FORM_ID
  // and remove the onsubmit handler
}

/* ─── SMOOTH SCROLL FOR ANCHOR LINKS ─── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ─── STAT COUNTER ANIMATION ─── */
function animateCounter(el, target, suffix = '') {
  const isText = isNaN(parseInt(target));
  if (isText) return;

  const num = parseInt(target);
  const duration = 1800;
  const steps = 50;
  const increment = num / steps;
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= num) {
      current = num;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current) + suffix;
  }, duration / steps);
}

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const numEl = entry.target.querySelector('.stat-num');
      if (numEl && !numEl.dataset.animated) {
        numEl.dataset.animated = 'true';
        const text = numEl.textContent;
        const match = text.match(/^([\d.]+)(.*)$/);
        if (match) {
          animateCounter(numEl, match[1], match[2]);
        }
      }
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-item').forEach(el => {
  statObserver.observe(el);
});

/* ─── GLITCH EFFECT ON HOVER (TITLE) ─── */
const heroNames = document.querySelectorAll('.hero-name');
heroNames.forEach(name => {
  name.addEventListener('mouseenter', () => {
    name.style.animation = 'none';
    setTimeout(() => {
      name.style.animation = '';
    }, 10);
  });
});

console.log('%c Deepak Vasudevan | Portfolio ', 'background: #38bdf8; color: #030712; font-size: 14px; font-weight: bold; padding: 6px 12px; border-radius: 4px;');
console.log('%c PL/SQL Developer → Data Engineer ', 'color: #a78bfa; font-size: 12px;');
