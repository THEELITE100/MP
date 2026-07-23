/* ============================================
   GOD OF WAR RAGNARÖK PORTFOLIO
   Three.js Yggdrasil Background Scene
   ============================================ */

class YggdrasilScene {
  constructor() {
    this.canvas = document.getElementById('three-canvas');
    if (!this.canvas || typeof THREE === 'undefined') {
      console.log('Three.js not available, skipping 3D scene');
      return;
    }

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.particles = null;
    this.branches = [];
    this.animationId = null;
    this.isActive = true;

    this.init();
  }

  init() {
    // Scene setup
    this.scene = new THREE.Scene();

    // Camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 30;

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x000000, 0);

    // Create scene elements
    this.createParticles();
    this.createFloatingRunes();
    this.createLightOrbs();

    // Event listeners
    window.addEventListener('resize', () => this.onResize());
    document.addEventListener('visibilitychange', () => this.onVisibilityChange());

    // Start animation
    this.animate();
  }

  createParticles() {
    const particleCount = window.innerWidth < 768 ? 200 : 500;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const colorPalette = [
      new THREE.Color(0xd4af37), // Gold
      new THREE.Color(0x64b5f6), // Frost blue
      new THREE.Color(0xff6b35), // Ember
      new THREE.Color(0xffffff)  // White
    ];

    for (let i = 0; i < particleCount; i++) {
      // Position
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;

      // Color
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      // Size
      sizes[i] = Math.random() * 2 + 0.5;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Custom shader material for glowing particles
    const material = new THREE.PointsMaterial({
      size: 0.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
  }

  createFloatingRunes() {
    const runeCount = 15;
    const runeGeometries = [
      new THREE.TorusGeometry(0.8, 0.1, 8, 16),
      new THREE.OctahedronGeometry(0.6),
      new THREE.TetrahedronGeometry(0.7)
    ];

    for (let i = 0; i < runeCount; i++) {
      const geometry = runeGeometries[Math.floor(Math.random() * runeGeometries.length)];
      const material = new THREE.MeshBasicMaterial({
        color: 0xd4af37,
        transparent: true,
        opacity: 0.3,
        wireframe: true
      });

      const rune = new THREE.Mesh(geometry, material);
      rune.position.set(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 30
      );
      rune.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      // Store animation data
      rune.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01,
          z: (Math.random() - 0.5) * 0.01
        },
        floatSpeed: Math.random() * 0.5 + 0.2,
        floatOffset: Math.random() * Math.PI * 2,
        originalY: rune.position.y
      };

      this.scene.add(rune);
      this.branches.push(rune);
    }
  }

  createLightOrbs() {
    const orbCount = 8;

    for (let i = 0; i < orbCount; i++) {
      const geometry = new THREE.SphereGeometry(0.3, 16, 16);
      const material = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0xd4af37 : 0x64b5f6,
        transparent: true,
        opacity: 0.4
      });

      const orb = new THREE.Mesh(geometry, material);
      const angle = (i / orbCount) * Math.PI * 2;
      const radius = 15 + Math.random() * 10;

      orb.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius * 0.5,
        (Math.random() - 0.5) * 20
      );

      orb.userData = {
        angle: angle,
        radius: radius,
        speed: 0.002 + Math.random() * 0.003,
        verticalOffset: Math.random() * Math.PI * 2
      };

      this.scene.add(orb);
      this.branches.push(orb);
    }
  }

  animate() {
    if (!this.isActive) return;

    this.animationId = requestAnimationFrame(() => this.animate());

    const time = Date.now() * 0.001;

    // Animate particles
    if (this.particles) {
      this.particles.rotation.y += 0.0003;
      this.particles.rotation.x += 0.0001;

      // Subtle wave effect
      const positions = this.particles.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(time + positions[i] * 0.1) * 0.01;
      }
      this.particles.geometry.attributes.position.needsUpdate = true;
    }

    // Animate runes
    this.branches.forEach(obj => {
      if (obj.userData.rotationSpeed) {
        obj.rotation.x += obj.userData.rotationSpeed.x;
        obj.rotation.y += obj.userData.rotationSpeed.y;
        obj.rotation.z += obj.userData.rotationSpeed.z;

        // Floating motion
        if (obj.userData.originalY !== undefined) {
          obj.position.y = obj.userData.originalY + 
            Math.sin(time * obj.userData.floatSpeed + obj.userData.floatOffset) * 2;
        }
      }

      // Orbital motion for orbs
      if (obj.userData.angle !== undefined) {
        obj.userData.angle += obj.userData.speed;
        obj.position.x = Math.cos(obj.userData.angle) * obj.userData.radius;
        obj.position.z = Math.sin(obj.userData.angle) * obj.userData.radius * 0.5;
        obj.position.y += Math.sin(time + obj.userData.verticalOffset) * 0.02;
      }
    });

    // Gentle camera movement based on mouse
    const targetX = (this.mouseX || 0) * 0.5;
    const targetY = (this.mouseY || 0) * 0.3;

    this.camera.position.x += (targetX - this.camera.position.x) * 0.02;
    this.camera.position.y += (targetY - this.camera.position.y) * 0.02;
    this.camera.lookAt(0, 0, 0);

    this.renderer.render(this.scene, this.camera);
  }

  onResize() {
    if (!this.camera || !this.renderer) return;

    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  onVisibilityChange() {
    if (document.hidden) {
      this.isActive = false;
      if (this.animationId) {
        cancelAnimationFrame(this.animationId);
      }
    } else {
      this.isActive = true;
      this.animate();
    }
  }

  // Mouse tracking for parallax
  setMousePosition(x, y) {
    this.mouseX = (x / window.innerWidth - 0.5) * 10;
    this.mouseY = (y / window.innerHeight - 0.5) * 10;
  }
}

// ============================================
// MOUSE TRACKING FOR THREE.JS
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  // Wait for Three.js to load
  const checkThree = setInterval(() => {
    if (typeof THREE !== 'undefined') {
      clearInterval(checkThree);

      const yggdrasil = new YggdrasilScene();

      // Mouse tracking
      document.addEventListener('mousemove', (e) => {
        if (yggdrasil) {
          yggdrasil.setMousePosition(e.clientX, e.clientY);
        }
      });

      window.yggdrasilScene = yggdrasil;
    }
  }, 100);

  // Timeout after 5 seconds if Three.js doesn't load
  setTimeout(() => clearInterval(checkThree), 5000);
});
