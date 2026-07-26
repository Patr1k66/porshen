// ── Utilities ──────────────────────────────────────────────────────────────

function formatPrice(price, unit) {
  const formatted = new Intl.NumberFormat('ru-RU').format(price);
  return unit ? `${unit} ${formatted} ₽` : `${formatted} ₽`;
}

function getSocialIcon(icon) {
  const icons = {
    vk: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.08 14.27h-1.46c-.55 0-.72-.44-1.71-1.42-.86-.83-1.24-.94-1.46-.94-.3 0-.38.09-.38.52v1.3c0 .37-.12.59-1.09.59-1.6 0-3.38-.97-4.63-2.78-1.88-2.64-2.4-4.63-2.4-4.77 0-.21.09-.4.52-.4h1.46c.39 0 .54.18.69.6.76 2.18 2.03 4.09 2.55 4.09.2 0 .28-.09.28-.6V9.34c-.06-1-.58-1.09-.58-1.49 0-.18.15-.36.39-.36h2.3c.33 0 .45.18.45.57v3.06c0 .33.15.45.24.45.2 0 .36-.12.73-.49 1.13-1.27 1.94-3.24 1.94-3.24.11-.21.28-.4.67-.4h1.46c.44 0 .53.23.44.57-.18.84-1.93 3.36-1.93 3.36-.15.25-.21.36 0 .64.15.21.66.64 1 1.04.64.72 1.13 1.33 1.26 1.75.12.4-.09.61-.52.61z"/></svg>',
    telegram: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>',
    whatsapp: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.883 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>'
  };
  return icons[icon] || '';
}

// ── Header ─────────────────────────────────────────────────────────────────

function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('site-header--scrolled', window.scrollY > 20);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ── Mobile menu ────────────────────────────────────────────────────────────

function initMobileMenu() {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.site-nav');
  const overlay = document.querySelector('.site-nav-overlay');
  if (!burger || !nav) return;

  const closeMenu = () => {
    burger.classList.remove('burger--open');
    nav.classList.remove('site-nav--open');
    overlay?.classList.remove('site-nav-overlay--open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  const openMenu = () => {
    burger.classList.add('burger--open');
    nav.classList.add('site-nav--open');
    overlay?.classList.add('site-nav-overlay--open');
    burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  burger.addEventListener('click', () => {
    if (burger.classList.contains('burger--open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay?.addEventListener('click', closeMenu);

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}

// ── Smooth scroll ──────────────────────────────────────────────────────────

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href');
      if (!id || id === '#') return;

      const target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// ── Scroll animations ──────────────────────────────────────────────────────

function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach((el) => observer.observe(el));
}

// ── Price list ─────────────────────────────────────────────────────────────

function renderPriceList() {
  const container = document.getElementById('price-list');
  if (!container || typeof PRICES === 'undefined') return;
  if (container.dataset.rendered === 'true') return;
  container.dataset.rendered = 'true';

  const grouped = PRICES.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  container.innerHTML = '';

  Object.entries(grouped).forEach(([category, items]) => {
    const categoryEl = document.createElement('div');
    categoryEl.className = 'price-list__category';
    categoryEl.textContent = category;
    container.appendChild(categoryEl);

    items.forEach((item) => {
      const row = document.createElement('div');
      row.className = 'price-list__row';
      row.setAttribute('role', 'row');

      row.innerHTML = `
        <span class="price-list__name" role="cell">${item.name}</span>
        <span class="price-list__price" role="cell">${formatPrice(item.price, item.unit)}</span>
      `;

      container.appendChild(row);
    });
  });
}

// ── Gallery ────────────────────────────────────────────────────────────────

function initGallery() {
  const track = document.getElementById('gallery-track');
  const prevBtn = document.getElementById('gallery-prev');
  const nextBtn = document.getElementById('gallery-next');
  const dotsContainer = document.getElementById('gallery-dots');
  const caption = document.getElementById('gallery-caption');
  const gallery = document.getElementById('gallery');

  if (!track || typeof GALLERY === 'undefined' || !GALLERY.length) return;
  if (track.dataset.initialized === 'true') return;
  track.dataset.initialized = 'true';

  let currentIndex = 0;
  let touchStartX = 0;

  track.innerHTML = GALLERY.map((item, index) => `
    <li class="gallery__slide">
      <img
        src="${item.src}"
        alt="${item.alt}"
        width="480"
        height="320"
        loading="${index === 0 ? 'eager' : 'lazy'}"
      >
    </li>
  `).join('');

  dotsContainer.innerHTML = GALLERY.map((_, index) => `
    <button
      class="gallery__dot${index === 0 ? ' gallery__dot--active' : ''}"
      type="button"
      role="tab"
      aria-label="Слайд ${index + 1}"
      aria-selected="${index === 0}"
      data-index="${index}"
    ></button>
  `).join('');

  const dots = dotsContainer.querySelectorAll('.gallery__dot');

  function goToSlide(index) {
    currentIndex = (index + GALLERY.length) % GALLERY.length;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    caption.textContent = GALLERY[currentIndex].caption;

    dots.forEach((dot, i) => {
      dot.classList.toggle('gallery__dot--active', i === currentIndex);
      dot.setAttribute('aria-selected', i === currentIndex);
    });
  }

  prevBtn?.addEventListener('click', () => goToSlide(currentIndex - 1));
  nextBtn?.addEventListener('click', () => goToSlide(currentIndex + 1));

  dots.forEach((dot) => {
    dot.addEventListener('click', () => goToSlide(Number(dot.dataset.index)));
  });

  gallery?.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') goToSlide(currentIndex - 1);
    if (e.key === 'ArrowRight') goToSlide(currentIndex + 1);
  });

  gallery?.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  gallery?.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) {
      goToSlide(diff > 0 ? currentIndex + 1 : currentIndex - 1);
    }
  }, { passive: true });

  goToSlide(0);
}

// ── Booking form ───────────────────────────────────────────────────────────

function validatePhone(phone) {
  const digits = phone.replace(/\D/g, '');
  return digits.length === 11 && (digits.startsWith('7') || digits.startsWith('8'));
}

function setFieldError(input, errorEl, message) {
  if (message) {
    input.classList.add('form-input--error');
    errorEl.textContent = message;
  } else {
    input.classList.remove('form-input--error');
    errorEl.textContent = '';
  }
}

function validateBookingForm() {
  const form = document.getElementById('booking-form');
  if (!form) return false;

  const nameInput = form.elements.name;
  const phoneInput = form.elements.phone;
  const nameError = document.getElementById('booking-name-error');
  const phoneError = document.getElementById('booking-phone-error');

  let valid = true;
  const name = nameInput.value.trim();

  if (name.length < 2) {
    setFieldError(nameInput, nameError, FORM_CONFIG.messages.validationName);
    valid = false;
  } else {
    setFieldError(nameInput, nameError, '');
  }

  if (!validatePhone(phoneInput.value.trim())) {
    setFieldError(phoneInput, phoneError, FORM_CONFIG.messages.validationPhone);
    valid = false;
  } else {
    setFieldError(phoneInput, phoneError, '');
  }

  return valid;
}

function setFormLoading(loading) {
  const submitBtn = document.getElementById('booking-submit');
  if (!submitBtn) return;

  submitBtn.disabled = loading;
  submitBtn.textContent = loading ? 'Отправка...' : 'Отправить заявку';
}

function showFormStatus(type, message) {
  const status = document.getElementById('booking-status');
  if (!status) return;

  status.hidden = false;
  status.className = `booking-form__status booking-form__status--${type}`;
  status.textContent = message;
}

function hideFormStatus() {
  const status = document.getElementById('booking-status');
  if (!status) return;
  status.hidden = true;
  status.textContent = '';
}

async function submitBooking(data) {
  const { endpoint, method, headers, accessKey, subject } = FORM_CONFIG;

  if (!endpoint || !accessKey) {
    console.info('[Booking mock]', data);
    await new Promise((resolve) => setTimeout(resolve, 800));
    return { ok: true };
  }

  const payload = {
    access_key: accessKey,
    subject: subject || 'Новая заявка',
    name: data.name,
    phone: data.phone,
    from_name: data.name,
    message: [
      'Новая заявка с сайта ПОРШЕНЬ',
      '',
      `Имя: ${data.name}`,
      `Телефон: ${data.phone}`,
      `Дата: ${new Date(data.submittedAt).toLocaleString('ru-RU')}`
    ].join('\n')
  };

  const response = await fetch(endpoint, {
    method,
    headers,
    body: JSON.stringify(payload)
  });

  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    const errorBody = await response.text();
    console.error('[Booking error] Non-JSON response:', errorBody);
    throw new Error('Submit failed: invalid response');
  }

  const result = await response.json();

  if (!response.ok || !result.success) {
    console.error('[Booking error]', response.status, result);
    throw new Error(result.message || 'Submit failed');
  }

  return result;
}

function initBookingForm() {
  const form = document.getElementById('booking-form');
  if (!form) return;

  form.elements.name.addEventListener('input', () => {
    setFieldError(form.elements.name, document.getElementById('booking-name-error'), '');
  });

  form.elements.phone.addEventListener('input', () => {
    setFieldError(form.elements.phone, document.getElementById('booking-phone-error'), '');
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    hideFormStatus();

    if (!validateBookingForm()) return;

    if (!FORM_CONFIG.accessKey) {
      showFormStatus('error', FORM_CONFIG.messages.notConfigured);
      return;
    }

    const data = {
      name: form.elements.name.value.trim(),
      phone: form.elements.phone.value.trim(),
      submittedAt: new Date().toISOString()
    };

    setFormLoading(true);

    try {
      await submitBooking(data);
      showFormStatus('success', FORM_CONFIG.messages.success);
      form.reset();
    } catch {
      showFormStatus('error', FORM_CONFIG.messages.error);
    } finally {
      setFormLoading(false);
    }
  });
}

// ── Footer ─────────────────────────────────────────────────────────────────

function initFooter() {
  if (typeof CONTACTS === 'undefined') return;

  const contactsList = document.getElementById('footer-contacts-list');
  const socialList = document.getElementById('footer-social-list');

  if (contactsList) {
    contactsList.innerHTML = `
      <li>
        <a href="${CONTACTS.phoneHref}" class="site-footer__link">
          <svg class="site-footer__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          ${CONTACTS.phone}
        </a>
      </li>
      <li>
        <a href="${CONTACTS.emailHref}" class="site-footer__link">
          <svg class="site-footer__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          ${CONTACTS.email}
        </a>
      </li>
      <li class="site-footer__address">
        <svg class="site-footer__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        ${CONTACTS.address}
      </li>
    `;
  }

  if (socialList) {
    socialList.innerHTML = CONTACTS.social.map((item) => `
      <li>
        <a
          href="${item.href}"
          class="social-links__item"
          aria-label="${item.name}"
          target="_blank"
          rel="noopener noreferrer"
        >${getSocialIcon(item.icon)}</a>
      </li>
    `).join('');
  }
}

// ── App init ───────────────────────────────────────────────────────────────

function initApp() {
  if (window.__porshenInitialized) return;
  window.__porshenInitialized = true;

  initHeader();
  initMobileMenu();
  initSmoothScroll();
  initScrollAnimations();
  renderPriceList();
  initGallery();
  initBookingForm();
  initFooter();
}

document.addEventListener('DOMContentLoaded', initApp);
