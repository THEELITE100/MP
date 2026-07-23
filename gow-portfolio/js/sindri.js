/* ============================================
   GOD OF WAR RAGNARÖK PORTFOLIO
   Sindri Chatbot JavaScript
   ============================================ */

class SindriChatbot {
  constructor() {
    this.container = document.getElementById('sindri-container');
    this.toggle = document.getElementById('sindri-toggle');
    this.chat = document.getElementById('sindri-chat');
    this.closeBtn = document.getElementById('chat-close');
    this.messagesContainer = document.getElementById('chat-messages');
    this.input = document.getElementById('chat-input');
    this.sendBtn = document.getElementById('chat-send');
    this.suggestions = document.querySelectorAll('.suggestion-btn');

    this.isOpen = false;
    this.isTyping = false;
    this.conversationHistory = [];

    this.responses = {
      greetings: [
        "Ah! A traveler! *adjusts apron* Welcome to my shop!",
        "Well, well, well! Look who wandered into the Nine Realms!",
        "*polishes a mystical artifact* Need something forged? Or just here to chat?",
        "Welcome, welcome! Sindri's shop is always open for curious minds!"
      ],
      about: [
        "This here is Alfheim, the Realm of Light! It's where you learn about the traveler—their skills, their story, their very essence!",
        "Alfheim shines with the light of knowledge. Here you'll find the traveler's portrait, their stats, and all the tools in their arsenal!",
        "In Alfheim, we celebrate the individual. Look at those skills—quite the collection, isn't it? Almost as fine as my own craftsmanship!"
      ],
      experience: [
        "Jotunheim! The land of giants and ancient paths. This is where the traveler's journey is carved into the very stone of time!",
        "Each mark on that timeline is a battle won, a challenge overcome. The traveler has walked through fire and ice alike!",
        "Jotunheim teaches us that every journey has its peaks and valleys. The traveler's path is marked with wisdom earned through trial!"
      ],
      projects: [
        "Svartalfheim! My home realm! *puffs chest* This is where the real magic happens—artifacts forged with precision and passion!",
        "Look at these creations! The Leviathan Axe of e-commerce, the Guardian Shield of cybersecurity—each one a masterpiece!",
        "In Svartalfheim, we don't just build—we forge legends. These projects would make even Brok jealous! ...Not that I'd ever admit that to his face."
      ],
      research: [
        "Vanaheim, the realm of growth and nature. Here the traveler plants seeds of knowledge that bloom into mighty trees of wisdom!",
        "Research is like tending a garden—it requires patience, care, and the occasional sacrifice to the Norns. The results are worth it!",
        "From neural runes to digital frost, the traveler's research spans realms of possibility. Truly impressive scholarship!"
      ],
      certifications: [
        "Asgard! The golden halls where only the worthy are recognized. These shields represent trials passed and honors earned!",
        "Each shield is a testament to skill verified by the highest authorities. The traveler has proven themselves time and again!",
        "AWS, TensorFlow, React—these are not mere trinkets. They are the marks of a warrior who has trained with the masters!"
      ],
      contact: [
        "Midgard, the realm of mortals. Here you can send a raven to reach the traveler across any distance!",
        "The contact form is enchanted—your message will fly faster than Huginn and Muninn themselves!",
        "Whether by email, LinkedIn, or GitHub, the traveler is always reachable. No realm is too far for true connection!"
      ],
      navigation: [
        "Simply click on any realm node in the World Tree, or use the navigation runes at the top. You can also use your arrow keys!",
        "The small doors at the top of each realm will take you back to Yggdrasil. From there, any realm is within reach!",
        "Press Escape at any time to return to the hub. The World Tree connects all paths!"
      ],
      sindri: [
        "I am Sindri! Master smith of the Nine Realms, purveyor of fine magical goods, and occasional chatbot! *laughs nervously*",
        "Some call me the greatest smith who ever lived. Others call me... well, Brok calls me things I won't repeat. But I am Sindri!",
        "I forge weapons, I forge friendships, and now I forge conversations! What can I help you with today?"
      ],
      default: [
        "Hmm, that's an interesting question. Let me think... *taps chin*",
        "The Norns didn't weave that particular answer into my threads, but I'd say: keep exploring!",
        "I'm a smith, not a seer! But my intuition says you're on the right path.",
        "*adjusts gloves* That's beyond even my considerable expertise. Try exploring the realms for more clues!",
        "Fascinating! Truly fascinating. You know, that reminds me of the time I forged Mjolnir... well, part of it anyway."
      ]
    };

    this.init();
  }

  init() {
    // Toggle chat
    if (this.toggle) {
      this.toggle.addEventListener('click', () => this.toggleChat());
    }

    // Close chat
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.closeChat());
    }

    // Send message
    if (this.sendBtn) {
      this.sendBtn.addEventListener('click', () => this.sendMessage());
    }

    // Input enter key
    if (this.input) {
      this.input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') this.sendMessage();
      });
    }

    // Suggestion buttons
    this.suggestions.forEach(btn => {
      btn.addEventListener('click', () => {
        const query = btn.dataset.query;
        if (query) {
          this.addUserMessage(query);
          this.generateResponse(query);
        }
      });
    });

    // Welcome message after a delay
    setTimeout(() => {
      if (!this.isOpen) {
        this.showPing();
      }
    }, 5000);
  }

  toggleChat() {
    if (this.isOpen) {
      this.closeChat();
    } else {
      this.openChat();
    }
  }

  openChat() {
    this.isOpen = true;
    this.chat.classList.add('open');
    this.hidePing();

    // Focus input
    setTimeout(() => {
      if (this.input) this.input.focus();
    }, 300);

    // Animate avatar
    const avatar = this.toggle.querySelector('.sindri-avatar');
    if (avatar) {
      avatar.style.animation = 'none';
      avatar.style.transform = 'scale(1.1)';
      setTimeout(() => {
        avatar.style.transform = 'scale(1)';
      }, 200);
    }
  }

  closeChat() {
    this.isOpen = false;
    this.chat.classList.remove('open');
  }

  showPing() {
    const ping = this.toggle.querySelector('.sindri-ping');
    if (ping) ping.style.display = 'block';
  }

  hidePing() {
    const ping = this.toggle.querySelector('.sindri-ping');
    if (ping) ping.style.display = 'none';
  }

  addUserMessage(text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message user-message';
    messageDiv.innerHTML = `<p>${this.escapeHtml(text)}</p>`;
    this.messagesContainer.appendChild(messageDiv);
    this.scrollToBottom();

    this.conversationHistory.push({ role: 'user', text });
  }

  addSindriMessage(text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message sindri-message';
    messageDiv.innerHTML = `<p>${text}</p>`;
    this.messagesContainer.appendChild(messageDiv);
    this.scrollToBottom();

    this.conversationHistory.push({ role: 'sindri', text });
  }

  showTyping() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message sindri-message typing';
    typingDiv.id = 'typing-indicator';
    typingDiv.innerHTML = `
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    `;
    this.messagesContainer.appendChild(typingDiv);
    this.scrollToBottom();
  }

  hideTyping() {
    const typing = document.getElementById('typing-indicator');
    if (typing) typing.remove();
  }

  scrollToBottom() {
    if (this.messagesContainer) {
      this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }
  }

  sendMessage() {
    if (!this.input || this.isTyping) return;

    const text = this.input.value.trim();
    if (!text) return;

    this.input.value = '';
    this.addUserMessage(text);
    this.generateResponse(text);
  }

  generateResponse(userText) {
    if (this.isTyping) return;
    this.isTyping = true;

    const lowerText = userText.toLowerCase();
    let responseCategory = 'default';

    // Determine response category
    if (lowerText.match(/hello|hi|hey|greetings|welcome/)) {
      responseCategory = 'greetings';
    } else if (lowerText.match(/about|alfheim|who|yourself|bio/)) {
      responseCategory = 'about';
    } else if (lowerText.match(/experience|jotunheim|work|job|career|timeline/)) {
      responseCategory = 'experience';
    } else if (lowerText.match(/project|svartalfheim|work|artifact|forge|build/)) {
      responseCategory = 'projects';
    } else if (lowerText.match(/research|vanaheim|paper|study|learn|knowledge/)) {
      responseCategory = 'research';
    } else if (lowerText.match(/certification|asgard|shield|award|honor|badge/)) {
      responseCategory = 'certifications';
    } else if (lowerText.match(/contact|midgard|email|reach|message|raven/)) {
      responseCategory = 'contact';
    } else if (lowerText.match(/navigate|move|go|travel|how|where|help/)) {
      responseCategory = 'navigation';
    } else if (lowerText.match(/sindri|you|smith|dwarf|who are you/)) {
      responseCategory = 'sindri';
    }

    // Show typing indicator
    this.showTyping();

    // Calculate typing delay based on response length
    const responses = this.responses[responseCategory];
    const response = responses[Math.floor(Math.random() * responses.length)];
    const delay = Math.min(1000 + response.length * 15, 3000);

    setTimeout(() => {
      this.hideTyping();
      this.addSindriMessage(response);
      this.isTyping = false;
    }, delay);
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Context-aware responses based on current realm
  setContext(realm) {
    const contextMessages = {
      about: "You're currently in Alfheim, the Realm of Light. This is where the traveler's essence shines brightest!",
      experience: "Jotunheim surrounds you now. Feel the weight of ancient stone and the wisdom of giants in every timeline entry.",
      projects: "Welcome to Svartalfheim! My home! *beams with pride* Look at these magnificent artifacts the traveler has forged!",
      research: "Vanaheim's nature magic flows around you. The research here grows like Yggdrasil's own branches!",
      certification: "Asgard's golden light bathes these shields. Each one represents a trial passed, a standard met!",
      contact: "Midgard feels... familiar, doesn't it? Here is where mortals reach out across the realms."
    };

    if (contextMessages[realm] && this.isOpen) {
      setTimeout(() => {
        this.addSindriMessage(contextMessages[realm]);
      }, 1000);
    }
  }
}

// ============================================
// SINDRI EYE TRACKING (follows mouse)
// ============================================
class SindriEyeTracker {
  constructor() {
    this.eyes = document.querySelectorAll('.sindri-eye, .sindri-eye-mini');
    this.init();
  }

  init() {
    document.addEventListener('mousemove', (e) => this.track(e));
  }

  track(e) {
    this.eyes.forEach(eye => {
      const rect = eye.getBoundingClientRect();
      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height / 2;

      const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
      const distance = Math.min(2, Math.hypot(e.clientX - eyeCenterX, e.clientY - eyeCenterY) / 50);

      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;

      eye.style.transform = `translate(${x}px, ${y}px)`;
    });
  }
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  window.sindri = new SindriChatbot();
  new SindriEyeTracker();

  // Listen for realm changes to provide context
  document.addEventListener('realmChanged', (e) => {
    if (window.sindri) {
      window.sindri.setContext(e.detail.realm);
    }
  });
});
