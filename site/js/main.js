// ============================================
// PRISMA CRISTAIS - JAVASCRIPT GLOBAL
// Funcionalidades do Site Institucional
// ============================================

document.addEventListener('DOMContentLoaded', function() {

  // ============================================
  // MENU MOBILE TOGGLE
  // ============================================
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const body = document.body;

  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      nav.classList.toggle('active');
      body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
          menuToggle.classList.remove('active');
          nav.classList.remove('active');
          body.style.overflow = '';
        }
      });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', function(event) {
      if (nav.classList.contains('active') &&
          !nav.contains(event.target) &&
          !menuToggle.contains(event.target)) {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
        body.style.overflow = '';
      }
    });
  }

  // ============================================
  // HEADER SCROLL EFFECT
  // ============================================
  const header = document.querySelector('.header');
  let lastScroll = 0;

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });

  // ============================================
  // ACTIVE NAVIGATION LINK
  // ============================================
  function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
      link.classList.remove('active');
      const linkPath = new URL(link.href).pathname;

      // Comparar paths
      if (linkPath === currentPath ||
          (currentPath.includes(linkPath) && linkPath !== '/home/')) {
        link.classList.add('active');
      }
    });
  }

  setActiveNavLink();

  // ============================================
  // SMOOTH SCROLL PARA ÂNCORAS
  // ============================================
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // Ignorar # vazio
      if (href === '#') {
        e.preventDefault();
        return;
      }

      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();
        const headerHeight = header.offsetHeight;
        const targetPosition = target.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ============================================
  // ANIMAÇÃO DE FADE IN AO SCROLL
  // ============================================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observar elementos que devem ter fade in
  const fadeElements = document.querySelectorAll('.card, .blog-card, .gallery-item, .contact-item');
  fadeElements.forEach(el => {
    observer.observe(el);
  });

  // ============================================
  // GALERIA - LIGHTBOX SIMPLES
  // ============================================
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (galleryItems.length > 0) {
    // Criar lightbox
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
      <div class="lightbox-content">
        <span class="lightbox-close">&times;</span>
        <img src="" alt="" class="lightbox-image">
        <div class="lightbox-caption"></div>
      </div>
    `;
    document.body.appendChild(lightbox);

    // Estilos do lightbox
    const style = document.createElement('style');
    style.textContent = `
      .lightbox {
        display: none;
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.95);
        animation: fadeIn 0.3s ease;
      }

      .lightbox.active {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .lightbox-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
        animation: zoomIn 0.3s ease;
      }

      .lightbox-image {
        max-width: 100%;
        max-height: 85vh;
        object-fit: contain;
      }

      .lightbox-close {
        position: absolute;
        top: -40px;
        right: 0;
        color: white;
        font-size: 40px;
        font-weight: bold;
        cursor: pointer;
        transition: color 0.3s ease;
      }

      .lightbox-close:hover {
        color: #15B6B8;
      }

      .lightbox-caption {
        color: white;
        text-align: center;
        padding: 15px;
        font-family: 'Montserrat', sans-serif;
      }

      @keyframes zoomIn {
        from {
          transform: scale(0.8);
          opacity: 0;
        }
        to {
          transform: scale(1);
          opacity: 1;
        }
      }
    `;
    document.head.appendChild(style);

    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const lightboxClose = lightbox.querySelector('.lightbox-close');

    // Abrir lightbox
    galleryItems.forEach(item => {
      item.addEventListener('click', function() {
        const img = this.querySelector('img');
        const caption = this.querySelector('.gallery-caption');

        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt;
        lightboxCaption.textContent = caption ? caption.textContent : img.alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    // Fechar lightbox
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });

    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // ============================================
  // FORMULÁRIO DE CONTATO - VALIDAÇÃO
  // ============================================
  const contactForm = document.querySelector('#contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Validação básica
      const name = this.querySelector('#name');
      const email = this.querySelector('#email');
      const subject = this.querySelector('#subject');
      const message = this.querySelector('#message');
      let isValid = true;

      // Limpar erros anteriores
      const errorMessages = this.querySelectorAll('.error-message');
      errorMessages.forEach(msg => msg.remove());

      // Validar nome
      if (name && name.value.trim() === '') {
        showError(name, 'Por favor, insira seu nome');
        isValid = false;
      }

      // Validar email
      if (email && email.value.trim() === '') {
        showError(email, 'Por favor, insira seu email');
        isValid = false;
      } else if (email && !isValidEmail(email.value)) {
        showError(email, 'Por favor, insira um email válido');
        isValid = false;
      }

      // Validar assunto
      if (subject && subject.value.trim() === '') {
        showError(subject, 'Por favor, insira o assunto');
        isValid = false;
      }

      // Validar mensagem
      if (message && message.value.trim() === '') {
        showError(message, 'Por favor, insira sua mensagem');
        isValid = false;
      }

      if (isValid) {
        // Enviar formulário para Formspree ou outro serviço
        const formData = new FormData(this);
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;

        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;

        // Aqui você pode usar fetch para enviar o formulário
        // Por enquanto, apenas simularemos o sucesso
        setTimeout(() => {
          showSuccessMessage();
          this.reset();
          submitButton.textContent = originalText;
          submitButton.disabled = false;
        }, 1500);
      }
    });

    function showError(input, message) {
      const errorDiv = document.createElement('div');
      errorDiv.className = 'error-message';
      errorDiv.style.color = '#EF4444';
      errorDiv.style.fontSize = '14px';
      errorDiv.style.marginTop = '5px';
      errorDiv.textContent = message;
      input.parentElement.appendChild(errorDiv);
      input.style.borderColor = '#EF4444';

      // Remover erro ao digitar
      input.addEventListener('input', function() {
        const error = this.parentElement.querySelector('.error-message');
        if (error) {
          error.remove();
          this.style.borderColor = '';
        }
      });
    }

    function isValidEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }

    function showSuccessMessage() {
      const successDiv = document.createElement('div');
      successDiv.className = 'success-message';
      successDiv.style.cssText = `
        background-color: #10B981;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        margin-top: 20px;
        text-align: center;
        animation: fadeIn 0.3s ease;
      `;
      successDiv.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
      contactForm.appendChild(successDiv);

      setTimeout(() => {
        successDiv.remove();
      }, 5000);
    }
  }

  // ============================================
  // LAZY LOADING DE IMAGENS
  // ============================================
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
  }

  // ============================================
  // CONTADOR DE CARACTERES PARA TEXTAREA
  // ============================================
  const textareas = document.querySelectorAll('textarea[maxlength]');

  textareas.forEach(textarea => {
    const maxLength = textarea.getAttribute('maxlength');
    const counter = document.createElement('div');
    counter.className = 'char-counter';
    counter.style.cssText = `
      text-align: right;
      font-size: 12px;
      color: #6B6B6B;
      margin-top: 5px;
    `;
    counter.textContent = `0 / ${maxLength}`;
    textarea.parentElement.appendChild(counter);

    textarea.addEventListener('input', function() {
      const currentLength = this.value.length;
      counter.textContent = `${currentLength} / ${maxLength}`;

      if (currentLength >= maxLength * 0.9) {
        counter.style.color = '#F59E0B';
      } else {
        counter.style.color = '#6B6B6B';
      }
    });
  });

  // ============================================
  // COPIAR PARA CLIPBOARD (para emails, telefones, etc)
  // ============================================
  const copyButtons = document.querySelectorAll('[data-copy]');

  copyButtons.forEach(button => {
    button.style.cursor = 'pointer';
    button.addEventListener('click', function() {
      const textToCopy = this.getAttribute('data-copy');

      navigator.clipboard.writeText(textToCopy).then(() => {
        // Feedback visual
        const originalText = this.textContent;
        this.textContent = 'Copiado!';
        this.style.color = '#10B981';

        setTimeout(() => {
          this.textContent = originalText;
          this.style.color = '';
        }, 2000);
      }).catch(err => {
        console.error('Erro ao copiar:', err);
      });
    });
  });

  // ============================================
  // PERFORMANCE - PRELOAD DE LINKS IMPORTANTES
  // ============================================
  const importantLinks = document.querySelectorAll('a[data-preload]');

  importantLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      const href = this.getAttribute('href');
      if (href && !href.startsWith('#')) {
        const preload = document.createElement('link');
        preload.rel = 'prefetch';
        preload.href = href;
        document.head.appendChild(preload);
      }
    }, { once: true });
  });

  // ============================================
  // ANALYTICS - TRACKING DE EVENTOS (preparado para GTM)
  // ============================================
  function trackEvent(category, action, label, value) {
    if (typeof dataLayer !== 'undefined') {
      dataLayer.push({
        'event': 'customEvent',
        'eventCategory': category,
        'eventAction': action,
        'eventLabel': label,
        'eventValue': value
      });
    }
  }

  // Track cliques no botão da loja
  const lojaButtons = document.querySelectorAll('.nav-link-loja, .btn-primary[href*="loja"]');
  lojaButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      trackEvent('Navigation', 'Click', 'Loja Online Button', 1);
    });
  });

  // Track cliques no WhatsApp
  const whatsappButtons = document.querySelectorAll('a[href*="whatsapp"], a[href*="wa.me"]');
  whatsappButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      trackEvent('Contact', 'Click', 'WhatsApp Button', 1);
    });
  });

  // Track submissão de formulário
  if (contactForm) {
    contactForm.addEventListener('submit', function() {
      trackEvent('Form', 'Submit', 'Contact Form', 1);
    });
  }

  // ============================================
  // CONSOLE LOG - MARCA D'ÁGUA
  // ============================================
  console.log(
    '%c✨ Prisma Cristais %c',
    'color: #15B6B8; font-size: 24px; font-weight: bold; font-family: Montserrat, sans-serif;',
    'color: #6B6B6B; font-size: 14px;'
  );
  console.log(
    '%cOnde cada pedra revela sua luz única',
    'color: #099D7F; font-size: 14px; font-style: italic;'
  );
  console.log(
    '%cDesenvolvido por FDJ Digital',
    'color: #2C2C2C; font-size: 12px;'
  );

});
