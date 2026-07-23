/* ============================================
   GOD OF WAR RAGNARÖK PORTFOLIO
   Main JavaScript - Core Engine
   ============================================ */

// ============================================
// PARTICLE SYSTEM - Atmospheric Effects
// ============================================
class ParticleSystem {
  constructor(canvasId, realmType = 'hub') {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.realmType = realmType;
    this.animationId = null;
    this.isActive = false;

    this.resize();
    this.init();

    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  init() {
    const count = this.getParticleCount();
    for (let i = 0; i < count; i++) {
      this.particles.push(this.createParticle());
    }
  }

  getParticleCount() {
    const width = window.innerWidth;
    if (width < 768) return 30;
    if (width < 1024) return 50;
    return 80;
  }

  createParticle() {
    const configs = {
      hub: {
        colors: ['rgba(212, 175, 55, ', 'rgba(100, 181, 246, ', 'rgba(255, 255, 255, '],
        speeds: [0.2, 0.5],
        sizes: [1, 3],
        opacity: [0.1, 0.6]
      },
      alfheim: {
        colors: ['rgba(100, 181, 246, ', 'rgba(212, 175, 55, ', 'rgba(255, 255, 255, '],
        speeds: [0.3, 0.8],
        sizes: [1, 4],
        opacity: [0.2, 0.7]
      },
      jotunheim: {
        colors: ['rgba(100, 181, 246, ', 'rgba(255, 255, 255, ', 'rgba(120, 144, 156, '],
        speeds: [0.5, 1.2],
        sizes: [2, 5],
        opacity: [0.3, 0.8]
      },
      svartalfheim: {
        colors: ['rgba(255, 107, 53, ', 'rgba(212, 175, 55, ', 'rgba(139, 69, 19, '],
        speeds: [0.4, 1.0],
        sizes: [1, 3],
        opacity: [0.2, 0.6]
      },
      vanaheim: {
        colors: ['rgba(102, 187, 106, ', 'rgba(139, 195, 74, ', 'rgba(255, 255, 255, '],
        speeds: [0.3, 0.7],
        sizes: [2, 4],
        opacity: [0.2, 0.7]
      },
      asgard: {
        colors: ['rgba(212, 175, 55, ', 'rgba(126, 87, 194, ', 'rgba(255, 255, 255, '],
        speeds: [0.2, 0.6],
        sizes: [1, 4],
        opacity: [0.3, 0.8]
      },
      midgard: {
        colors: ['rgba(100, 181, 246, ', 'rgba(255, 255, 255, ', 'rgba(120, 144, 156, '],
        speeds: [0.6, 1.5],
        sizes: [2, 6],
        opacity: [0.3, 0.9]
      }
    };

    const config = configs[this.realmType] || configs.hub;
    const colorBase = config.colors[Math.floor(Math.random() * config.colors.length)];

    return {
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
      size: Math.random() * (config.sizes[1] - config.sizes[0]) + config.sizes[0],
      speedX: (Math.random() - 0.5) * (config.speeds[1] - config.speeds[0]) + config.speeds[0],
      speedY: (Math.random() - 0.5) * (config.speeds[1] - config.speeds[0]) + config.speeds[0],
      opacity: Math.random() * (config.opacity[1] - config.opacity[0]) + config.opacity[0],
      colorBase: colorBase,
      life: Math.random() * 100,
      maxLife: 100 + Math.random() * 200
    };
  }

  update() {
    this.particles.forEach((p, i) => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.life++;

      // Wrap around
      if (p.x < 0) p.x = this.canvas.width;
      if (p.x > this.canvas.width) p.x = 0;
      if (p.y < 0) p.y = this.canvas.height;
      if (p.y > this.canvas.height) p.y = 0;

      // Reset if too old
      if (p.life > p.maxLife) {
        this.particles[i] = this.createParticle();
      }
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles.forEach(p => {
      const lifeRatio = p.life / p.maxLife;
      const alpha = p.opacity * (1 - Math.abs(lifeRatio - 0.5) * 2);

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = p.colorBase + alpha + ')';
      this.ctx.fill();

      // Glow effect for larger particles
      if (p.size > 2) {
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        this.ctx.fillStyle = p.colorBase + (alpha * 0.2) + ')';
        this.ctx.fill();
      }
    });
  }

  animate() {
    if (!this.isActive) return;
    this.update();
    this.draw();
    this.animationId = requestAnimationFrame(() => this.animate());
  }

  start() {
    if (this.isActive) return;
    this.isActive = true;
    this.animate();
  }

  stop() {
    this.isActive = false;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  changeRealm(realmType) {
    this.realmType = realmType;
    this.particles = [];
    this.init();
  }
}

// ============================================
// LOADING SCREEN
// ============================================
class RuneLoader {
  constructor() {
    this.loader = document.getElementById('rune-loader');
    this.progressBar = document.querySelector('.rune-progress-bar');
    this.init();
  }

  init() {
    // Simulate loading with progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(() => this.hide(), 500);
      }
      if (this.progressBar) {
        this.progressBar.style.width = progress + '%';
      }
    }, 200);
  }

  hide() {
    if (this.loader) {
      this.loader.classList.add('hidden');
      setTimeout(() => {
        this.loader.style.display = 'none';
        // Trigger door hint animation
        document.dispatchEvent(new CustomEvent('loaderComplete'));
      }, 800);
    }
  }
}

// ============================================
// STATS COUNTER ANIMATION
// ============================================
class StatsCounter {
  constructor() {
    this.stats = document.querySelectorAll('.stat-number[data-count]');
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animate(entry.target);
          this.observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    this.stats.forEach(stat => this.observer.observe(stat));
  }

  animate(element) {
    const target = parseInt(element.dataset.count);
    const duration = 2000;
    const start = performance.now();

    const update = (currentTime) => {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (easeOutExpo)
      const easeProgress = 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(easeProgress * target);

      element.textContent = current + (target > 10 ? '+' : '');

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = target + (target > 10 ? '+' : '');
      }
    };

    requestAnimationFrame(update);
  }
}

// ============================================
// SCROLL INDICATOR
// ============================================
class ScrollIndicator {
  constructor() {
    this.indicator = document.getElementById('scroll-indicator');
    this.lastScrollY = 0;
    this.init();
  }

  init() {
    window.addEventListener('scroll', () => this.handleScroll());
  }

  handleScroll() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 100) {
      this.indicator.classList.add('hidden');
    } else {
      this.indicator.classList.remove('hidden');
    }

    this.lastScrollY = currentScrollY;
  }
}

// ============================================
// PARALLAX EFFECT
// ============================================
class ParallaxEngine {
  constructor() {
    this.elements = document.querySelectorAll('[data-parallax]');
    this.init();
  }

  init() {
    window.addEventListener('scroll', () => this.update());
    window.addEventListener('mousemove', (e) => this.mouseMove(e));
  }

  update() {
    const scrollY = window.scrollY;
    this.elements.forEach(el => {
      const speed = parseFloat(el.dataset.parallax) || 0.5;
      el.style.transform = `translateY(${scrollY * speed}px)`;
    });
  }

  mouseMove(e) {
    const mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    const mouseY = (e.clientY / window.innerHeight - 0.5) * 2;

    document.querySelectorAll('.realm-bg').forEach(bg => {
      bg.style.transform = `translate(${mouseX * 10}px, ${mouseY * 10}px) scale(1.1)`;
    });
  }
}

// ============================================
// MOUSE GLOW EFFECT
// ============================================
class MouseGlow {
  constructor() {
    this.glow = document.createElement('div');
    this.glow.className = 'mouse-glow';
    this.glow.style.cssText = `
      position: fixed;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%);
      pointer-events: none;
      z-index: 5;
      transform: translate(-50%, -50%);
      transition: opacity 0.3s ease;
    `;
    document.body.appendChild(this.glow);

    document.addEventListener('mousemove', (e) => {
      this.glow.style.left = e.clientX + 'px';
      this.glow.style.top = e.clientY + 'px';
    });

    document.addEventListener('mouseleave', () => {
      this.glow.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
      this.glow.style.opacity = '1';
    });
  }
}

// ============================================
// CONTACT FORM HANDLER
// ============================================
class ContactForm {
  constructor() {
    this.form = document.getElementById('contact-form');
    if (this.form) {
      this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const btn = this.form.querySelector('.submit-btn');
    const originalText = btn.innerHTML;

    btn.innerHTML = '<span class="btn-rune">ᛋ</span><span class="btn-text">Sending Raven...</span><span class="btn-rune">ᛋ</span>';
    btn.disabled = true;

    // Simulate sending
    setTimeout(() => {
      btn.innerHTML = '<span class="btn-rune">ᛋ</span><span class="btn-text">Raven Sent!</span><span class="btn-rune">ᛋ</span>';
      btn.style.background = 'linear-gradient(135deg, #4caf50, #66bb6a)';

      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
        btn.disabled = false;
        this.form.reset();
      }, 2000);
    }, 1500);
  }
}

// ============================================
// NAVIGATION TOGGLE (Mobile)
// ============================================
class NavToggle {
  constructor() {
    this.toggle = document.getElementById('nav-toggle');
    this.navList = document.querySelector('.nav-realms');

    if (this.toggle && this.navList) {
      this.toggle.addEventListener('click', () => this.navList.classList.toggle('open'));

      // Close on link click
      document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => this.navList.classList.remove('open'));
      });
    }
  }
}

// ============================================
// PERFORMANCE MONITOR
// ============================================
class PerformanceMonitor {
  constructor() {
    this.fps = 0;
    this.frames = 0;
    this.lastTime = performance.now();
    this.init();
  }

  init() {
    const measure = () => {
      this.frames++;
      const currentTime = performance.now();

      if (currentTime >= this.lastTime + 1000) {
        this.fps = Math.round((this.frames * 1000) / (currentTime - this.lastTime));
        this.frames = 0;
        this.lastTime = currentTime;

        // Reduce particles if FPS is low
        if (this.fps < 30) {
          document.dispatchEvent(new CustomEvent('lowPerformance'));
        }
      }

      requestAnimationFrame(measure);
    };

    requestAnimationFrame(measure);
  }
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  // Initialize loader
  new RuneLoader();

  // Initialize particle system for hub
  window.particleSystem = new ParticleSystem('particle-canvas', 'hub');
  window.particleSystem.start();

  // Initialize stats counter
  new StatsCounter();

  // Initialize scroll indicator
  new ScrollIndicator();

  // Initialize parallax
  new ParallaxEngine();

  // Initialize mouse glow (desktop only)
  if (window.innerWidth > 768) {
    new MouseGlow();
  }

  // Initialize contact form
  new ContactForm();

  // Initialize nav toggle
  new NavToggle();

  // Initialize performance monitor
  new PerformanceMonitor();

  // Handle low performance
  document.addEventListener('lowPerformance', () => {
    if (window.particleSystem) {
      window.particleSystem.particles = window.particleSystem.particles.slice(0, 30);
    }
  });

  console.log('%cᚦ The Realms have loaded ᚦ', 'color: #d4af37; font-size: 16px; font-family: Cinzel;');
  console.log('%cWelcome, traveler. Your journey begins.', 'color: #b0bec5; font-size: 12px;');
});
