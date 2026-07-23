/* ============================================
   GOD OF WAR RAGNARÖK PORTFOLIO
   Navigation JavaScript - Realm Transitions
   ============================================ */

class RealmNavigator {
  constructor() {
    this.currentRealm = 'hub';
    this.isTransitioning = false;
    this.nav = document.getElementById('realm-nav');
    this.transition = document.getElementById('realm-transition');
    this.doorContainer = document.getElementById('main-door');
    this.yggdrasilHub = document.getElementById('yggdrasil-hub');
    this.doorLeft = document.getElementById('door-left');
    this.doorRight = document.getElementById('door-right');

    this.init();
  }

  init() {
    // Door click handler
    if (this.doorContainer) {
      this.doorContainer.addEventListener('click', () => this.openDoor());
    }

    // Realm node clicks (Yggdrasil branches)
    document.querySelectorAll('.realm-node').forEach(node => {
      node.addEventListener('click', (e) => {
        const target = node.dataset.target;
        if (target) this.travelToRealm(target);
      });
    });

    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.dataset.realm;
        if (target) this.travelToRealm(target);
      });
    });

    // Small door exits
    document.querySelectorAll('.realm-door-exit').forEach(exit => {
      exit.addEventListener('click', () => {
        const target = exit.dataset.target;
        if (target) this.travelToRealm(target);
      });
    });

    // Show nav after loader completes
    document.addEventListener('loaderComplete', () => {
      setTimeout(() => this.nav.classList.add('visible'), 500);
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => this.handleKeyboard(e));

    // URL hash handling
    window.addEventListener('hashchange', () => this.handleHash());
    this.handleHash();
  }

  openDoor() {
    if (this.doorContainer.classList.contains('opened')) return;

    // Play door sound effect (if audio enabled)
    this.playSound('door');

    // Add opened class for CSS animation
    this.doorContainer.classList.add('opened');

    // Hide hint
    const hint = this.doorContainer.querySelector('.door-hint');
    if (hint) {
      gsap.to(hint, { opacity: 0, duration: 0.5 });
    }

    // Show Yggdrasil hub after door animation
    setTimeout(() => {
      this.doorContainer.style.display = 'none';
      this.yggdrasilHub.classList.remove('hidden');

      // Animate in with GSAP
      gsap.fromTo(this.yggdrasilHub, 
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
      );

      // Animate branches
      gsap.fromTo('.realm-node', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out', delay: 0.3 }
      );

      // Animate tree trunk
      gsap.fromTo('.tree-trunk',
        { scaleY: 0, transformOrigin: 'bottom' },
        { scaleY: 1, duration: 1, ease: 'power2.out', delay: 0.2 }
      );

    }, 1500);
  }

  travelToRealm(realmId) {
    if (this.isTransitioning || this.currentRealm === realmId) return;
    this.isTransitioning = true;

    const targetSection = document.getElementById(realmId);
    if (!targetSection) {
      this.isTransitioning = false;
      return;
    }

    // Play transition sound
    this.playSound('travel');

    // Show transition overlay
    this.showTransition(() => {
      // Hide current realm
      const currentSection = document.querySelector('.realm.active');
      if (currentSection) {
        currentSection.classList.remove('active');
      }

      // Update particle system
      if (window.particleSystem) {
        window.particleSystem.changeRealm(realmId);
      }

      // Show target realm
      targetSection.classList.add('active');

      // Update navigation
      this.updateNav(realmId);

      // Update current realm
      this.currentRealm = realmId;

      // Update URL hash
      window.history.pushState(null, null, `#${realmId}`);

      // Hide transition
      this.hideTransition(() => {
        this.isTransitioning = false;

        // Animate realm content
        this.animateRealmContent(realmId);

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });
  }

  showTransition(callback) {
    if (!this.transition) {
      callback();
      return;
    }

    this.transition.classList.add('active');

    // Animate runes
    const runes = this.transition.querySelectorAll('.trans-rune');
    gsap.fromTo(runes,
      { opacity: 0, scale: 0, rotation: -180 },
      { 
        opacity: 1, 
        scale: 1, 
        rotation: 0,
        duration: 0.4, 
        stagger: 0.1, 
        ease: 'back.out(1.7)'
      }
    );

    // Animate bifrost line
    const bifrost = this.transition.querySelector('.transition-bifrost');
    gsap.fromTo(bifrost,
      { opacity: 0, scaleX: 0 },
      { opacity: 1, scaleX: 1, duration: 0.6, ease: 'power2.inOut', delay: 0.3 }
    );

    setTimeout(callback, 1200);
  }

  hideTransition(callback) {
    if (!this.transition) {
      callback();
      return;
    }

    // Fade out
    gsap.to(this.transition, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        this.transition.classList.remove('active');
        this.transition.style.opacity = '';
        callback();
      }
    });
  }

  animateRealmContent(realmId) {
    const section = document.getElementById(realmId);
    if (!section) return;

    // Header animation
    const header = section.querySelector('.realm-header');
    if (header) {
      gsap.fromTo(header,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );
    }

    // Content animations based on realm
    const animations = {
      about: () => {
        gsap.fromTo('.about-portrait',
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 0.8, delay: 0.2, ease: 'power2.out' }
        );
        gsap.fromTo('.about-text > *',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, delay: 0.3, ease: 'power2.out' }
        );
      },
      experience: () => {
        gsap.fromTo('.timeline-item',
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.7, stagger: 0.2, delay: 0.2, ease: 'power2.out' }
        );
      },
      projects: () => {
        gsap.fromTo('.project-card',
          { opacity: 0, y: 40, rotateX: 10 },
          { opacity: 1, y: 0, rotateX: 0, duration: 0.7, stagger: 0.15, delay: 0.2, ease: 'power2.out' }
        );
      },
      research: () => {
        gsap.fromTo('.research-branch',
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.7, stagger: 0.2, delay: 0.2, ease: 'power2.out' }
        );
      },
      certification: () => {
        gsap.fromTo('.cert-pedestal',
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, delay: 0.2, ease: 'power2.out' }
        );
      },
      contact: () => {
        gsap.fromTo('.contact-form-container',
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.8, delay: 0.2, ease: 'power2.out' }
        );
        gsap.fromTo('.contact-info',
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, duration: 0.8, delay: 0.3, ease: 'power2.out' }
        );
      }
    };

    if (animations[realmId]) {
      animations[realmId]();
    }
  }

  updateNav(realmId) {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.dataset.realm === realmId);
    });
  }

  handleKeyboard(e) {
    const realms = ['hub', 'about', 'experience', 'projects', 'research', 'certification', 'contact'];
    const currentIndex = realms.indexOf(this.currentRealm);

    switch(e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        if (currentIndex < realms.length - 1) {
          this.travelToRealm(realms[currentIndex + 1]);
        }
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        if (currentIndex > 0) {
          this.travelToRealm(realms[currentIndex - 1]);
        }
        break;
      case 'Escape':
        if (this.currentRealm !== 'hub') {
          this.travelToRealm('hub');
        }
        break;
    }
  }

  handleHash() {
    const hash = window.location.hash.slice(1);
    if (hash && hash !== this.currentRealm) {
      // If door hasn't been opened yet, open it first
      if (this.currentRealm === 'hub' && this.doorContainer && !this.doorContainer.classList.contains('opened')) {
        this.openDoor();
        setTimeout(() => this.travelToRealm(hash), 2000);
      } else {
        this.travelToRealm(hash);
      }
    }
  }

  playSound(type) {
    // Placeholder for sound effects
    // In production, you would play actual audio files
    // const audio = new Audio(`assets/sounds/${type}.mp3`);
    // audio.volume = 0.3;
    // audio.play().catch(() => {});
  }
}

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================
class ScrollAnimator {
  constructor() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          this.animateElement(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    this.observeElements();
  }

  observeElements() {
    document.querySelectorAll('.timeline-item, .project-card, .research-branch, .cert-pedestal').forEach(el => {
      this.observer.observe(el);
    });
  }

  animateElement(element) {
    // Add subtle parallax on scroll
    element.style.transform = 'translateY(0)';
    element.style.opacity = '1';
  }
}

// ============================================
// PROJECT CARD INTERACTIONS
// ============================================
class ProjectCards {
  constructor() {
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('mouseenter', (e) => this.handleMouseEnter(e, card));
      card.addEventListener('mouseleave', (e) => this.handleMouseLeave(e, card));
      card.addEventListener('mousemove', (e) => this.handleMouseMove(e, card));
    });
  }

  handleMouseEnter(e, card) {
    const frame = card.querySelector('.project-frame');
    if (frame) {
      frame.style.transition = 'transform 0.1s ease';
    }
  }

  handleMouseLeave(e, card) {
    const frame = card.querySelector('.project-frame');
    if (frame) {
      frame.style.transition = 'transform 0.5s ease';
      frame.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
    }
  }

  handleMouseMove(e, card) {
    const frame = card.querySelector('.project-frame');
    if (!frame) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / centerY * -10;
    const rotateY = (x - centerX) / centerX * 10;

    frame.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }
}

// ============================================
// CERTIFICATION SHIELD INTERACTIONS
// ============================================
class CertShields {
  constructor() {
    document.querySelectorAll('.cert-shield').forEach(shield => {
      shield.addEventListener('mouseenter', () => {
        gsap.to(shield, {
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      shield.addEventListener('mouseleave', () => {
        gsap.to(shield, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });
  }
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  // Initialize realm navigator
  window.realmNavigator = new RealmNavigator();

  // Initialize scroll animator
  new ScrollAnimator();

  // Initialize project cards
  new ProjectCards();

  // Initialize cert shields
  new CertShields();

  // Handle initial hash
  if (window.location.hash) {
    setTimeout(() => {
      window.realmNavigator.handleHash();
    }, 2500);
  }
});
