const WEDDING_DATE = new Date("2026-11-27T10:00:00+01:00");
const RSVP_DEADLINE = new Date("2026-08-10T23:59:59+01:00");

const galleryImages = [
  "Harold & Somadina/JH Intro-64.jpg",
  "Harold & Somadina/JH Intro-96.jpg",
  "Harold & Somadina/JH Intro-98.jpg",
  "Harold & Somadina/JH Intro-61.jpg",
  "Harold & Somadina/JH Intro-62.jpg",
  "Harold & Somadina/JH Intro-63.jpg",
  "Harold & Somadina/JH Intro-104.jpg",
  "Harold & Somadina/JH Intro-127.jpg",
  "Harold & Somadina/JH Intro-101.jpg",
  "Harold & Somadina/JH Intro-95.jpg",
  "Harold & Somadina/JH Intro-128.jpg",
  "Harold & Somadina/JH Intro-102.jpg",
  "Harold & Somadina/JH Intro-103.jpg",
  "Harold & Somadina/JH Intro-235.jpg",
  "Harold & Somadina/JH Intro-234.jpg",
  "Harold & Somadina/JH Intro-233.jpg",
  "Harold & Somadina/JH Intro-255.jpg",
  "Harold & Somadina/JH Intro-254.jpg",
  "Harold & Somadina/JH Intro-251.jpg",
  "Harold & Somadina/JH Intro-229.jpg",
  "Harold & Somadina/JH Intro-228.jpg",
  "Harold & Somadina/JH Intro-227.jpg",
  "Harold & Somadina/JH Intro-232.jpg",
  "Harold & Somadina/JH Intro-231.jpg",
  "Harold & Somadina/JH Intro-230.jpg",
  "Harold & Somadina/JH Intro-330.jpg",
  "Harold & Somadina/JH Intro-339.jpg",
  "Harold & Somadina/JH Intro-338.jpg",
  "Harold & Somadina/JH Intro-337.jpg",
  "Harold & Somadina/JH Intro-342.jpg",
  "Harold & Somadina/JH Intro-101.jpg",
  "Harold & Somadina/JH Intro-102.jpg",
  "Harold & Somadina/JH Intro-103.jpg",
  "Harold & Somadina/JH Intro-104.jpg",
  "Harold & Somadina/JH Intro-127.jpg",
  "Harold & Somadina/JH Intro-128.jpg",
  "Harold & Somadina/JH Intro-137.jpg",
  "Harold & Somadina/JH Intro-161.jpg",
  "Harold & Somadina/JH Intro-162.jpg",
  "Harold & Somadina/JH Intro-163.jpg",
  "Harold & Somadina/JH Intro-164.jpg",
  "Harold & Somadina/JH Intro-165.jpg",
  "Harold & Somadina/JH Intro-166.jpg",
  "Harold & Somadina/JH Intro-167.jpg",
  "Harold & Somadina/JH Intro-168.jpg",
  "Harold & Somadina/JH Intro-169.jpg",
  "Harold & Somadina/JH Intro-170.jpg",
  "Harold & Somadina/JH Intro-171.jpg",
  "Harold & Somadina/JH Intro-172.jpg",
  "Harold & Somadina/JH Intro-173.jpg",
  "Harold & Somadina/JH Intro-174.jpg",
  "Harold & Somadina/JH Intro-175.jpg",
  "Harold & Somadina/JH Intro-176.jpg",
  "Harold & Somadina/JH Intro-177.jpg",
  "Harold & Somadina/JH Intro-178.jpg",
  "Harold & Somadina/JH Intro-179.jpg",
  "Harold & Somadina/JH Intro-180.jpg",
  "Harold & Somadina/JH Intro-181.jpg",
  "Harold & Somadina/JH Intro-182.jpg",
  "Harold & Somadina/JH Intro-183.jpg",
  "Harold & Somadina/JH Intro-184.jpg",
  "Harold & Somadina/JH Intro-185.jpg",
  "Harold & Somadina/JH Intro-186.jpg",
  "Harold & Somadina/JH Intro-187.jpg",
  "Harold & Somadina/JH Intro-188.jpg",
  "Harold & Somadina/JH Intro-216.jpg",
  "Harold & Somadina/JH Intro-217.jpg",
  "Harold & Somadina/JH Intro-218.jpg",
  "Harold & Somadina/JH Intro-219.jpg",
  "Harold & Somadina/JH Intro-220.jpg",
  "Harold & Somadina/JH Intro-221.jpg",
  "Harold & Somadina/JH Intro-222.jpg",
  "Harold & Somadina/JH Intro-223.jpg",
  "Harold & Somadina/JH Intro-224.jpg",
  "Harold & Somadina/JH Intro-225.jpg",
  "Harold & Somadina/JH Intro-226.jpg",
  "Harold & Somadina/JH Intro-227.jpg",
  "Harold & Somadina/JH Intro-228.jpg",
  "Harold & Somadina/JH Intro-229.jpg",
  "Harold & Somadina/JH Intro-230.jpg",
  "Harold & Somadina/JH Intro-231.jpg",
  "Harold & Somadina/JH Intro-232.jpg",
  "Harold & Somadina/JH Intro-233.jpg",
  "Harold & Somadina/JH Intro-234.jpg",
  "Harold & Somadina/JH Intro-235.jpg",
  "Harold & Somadina/JH Intro-250.jpg",
  "Harold & Somadina/JH Intro-251.jpg",
  "Harold & Somadina/JH Intro-252.jpg",
  "Harold & Somadina/JH Intro-253.jpg",
  "Harold & Somadina/JH Intro-254.jpg",
  "Harold & Somadina/JH Intro-255.jpg",
  "Harold & Somadina/JH Intro-330.jpg",
  "Harold & Somadina/JH Intro-331.jpg",
  "Harold & Somadina/JH Intro-332.jpg",
  "Harold & Somadina/JH Intro-333.jpg",
  "Harold & Somadina/JH Intro-334.jpg",
  "Harold & Somadina/JH Intro-335.jpg",
  "Harold & Somadina/JH Intro-336.jpg",
  "Harold & Somadina/JH Intro-337.jpg",
  "Harold & Somadina/JH Intro-338.jpg",
  "Harold & Somadina/JH Intro-339.jpg",
  "Harold & Somadina/JH Intro-340.jpg",
  "Harold & Somadina/JH Intro-341.jpg",
  "Harold & Somadina/JH Intro-342.jpg",
  "Harold & Somadina/WhatsApp Image 2026-06-24 at 17.33.22 (1).jpeg",
  "Harold & Somadina/WhatsApp Image 2026-06-24 at 17.33.22 (2).jpeg",
  "Harold & Somadina/WhatsApp Image 2026-06-24 at 17.33.22.jpeg",
  "Harold & Somadina/WhatsApp Image 2026-06-24 at 17.33.23 (1).jpeg",
  "Harold & Somadina/WhatsApp Image 2026-06-24 at 17.33.23 (2).jpeg",
  "Harold & Somadina/WhatsApp Image 2026-06-24 at 17.33.23 (3).jpeg",
  "Harold & Somadina/WhatsApp Image 2026-06-24 at 17.33.23.jpeg",
  "Harold & Somadina/WhatsApp Image 2026-06-24 at 17.33.24 (1).jpeg",
  "Harold & Somadina/WhatsApp Image 2026-06-24 at 17.33.24 (2).jpeg",
  "Harold & Somadina/WhatsApp Image 2026-06-24 at 17.33.24 (3).jpeg",
  "Harold & Somadina/WhatsApp Image 2026-06-24 at 17.33.24.jpeg",
  "Harold & Somadina/WhatsApp Image 2026-06-24 at 17.33.25.jpeg",
  "Harold & Somadina/WhatsApp Image 2026-06-25 at 08.37.07.jpeg",
  "Harold & Somadina/WhatsApp Image 2026-06-25 at 08.37.08 (1).jpeg",
  "Harold & Somadina/WhatsApp Image 2026-06-25 at 08.37.08 (2).jpeg",
  "Harold & Somadina/WhatsApp Image 2026-06-25 at 08.37.08 (3).jpeg",
  "Harold & Somadina/WhatsApp Image 2026-06-25 at 08.37.08.jpeg",
  "Harold & Somadina/WhatsApp Image 2026-06-25 at 08.37.09 (1).jpeg",
  "Harold & Somadina/WhatsApp Image 2026-06-25 at 08.37.09 (2).jpeg",
  "Harold & Somadina/WhatsApp Image 2026-06-25 at 08.37.09.jpeg",
  "Harold & Somadina/WhatsApp Image 2026-06-25 at 08.37.10 (1).jpeg",
  "Harold & Somadina/WhatsApp Image 2026-06-25 at 08.37.10 (2).jpeg",
  "Harold & Somadina/WhatsApp Image 2026-06-25 at 08.37.10 (3).jpeg",
  "Harold & Somadina/WhatsApp Image 2026-06-25 at 08.37.10.jpeg"
];

document.addEventListener("DOMContentLoaded", () => {
  setupEnvelopeGate();
  setupNavigation();
  setupCountdown();
  setupGallery();
  setupLightbox();
  setupFaqs();
  setupCopyButtons();
  setupRsvpDeadline();
  setupReveal();
});

function setupEnvelopeGate() {
  const gate = document.querySelector("[data-envelope-gate]");
  if (!gate) return;

  const STORAGE_KEY = "envelopeOpened";
  const root = document.documentElement;

  if (sessionStorage.getItem(STORAGE_KEY) === "1") {
    gate.setAttribute("hidden", "");
    return;
  }

  root.classList.add("gate-active");

  const openGate = () => {
    if (gate.classList.contains("is-leaving")) return;
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* private browsing or storage disabled: gate simply reshows on next load */
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    gate.classList.add("is-leaving");
    root.classList.remove("gate-active");
    setTimeout(() => gate.setAttribute("hidden", ""), prefersReducedMotion ? 0 : 600);
  };

  gate.addEventListener("click", openGate);
  gate.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openGate();
    }
  });
}

function setupNavigation() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const links = document.querySelectorAll(".nav-links a");
  const currentPage = location.pathname.split("/").pop() || "index.html";

  links.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
    link.addEventListener("click", () => document.body.classList.remove("menu-open"));
  });

  if (toggle) {
    toggle.addEventListener("click", () => {
      const isOpen = document.body.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }
}

function setupCountdown() {
  const countdown = document.querySelector("[data-countdown]");
  if (!countdown) return;

  const units = {
    days: countdown.querySelector("[data-days]"),
    hours: countdown.querySelector("[data-hours]"),
    minutes: countdown.querySelector("[data-minutes]"),
    seconds: countdown.querySelector("[data-seconds]")
  };

  const update = () => {
    const diff = Math.max(WEDDING_DATE.getTime() - Date.now(), 0);
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff / 3600000) % 24);
    const minutes = Math.floor((diff / 60000) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    units.days.textContent = days;
    units.hours.textContent = String(hours).padStart(2, "0");
    units.minutes.textContent = String(minutes).padStart(2, "0");
    units.seconds.textContent = String(seconds).padStart(2, "0");
  };

  update();
  setInterval(update, 1000);
}

function setupGallery() {
  const gallery = document.querySelector("[data-gallery]");
  const preview = document.querySelector("[data-gallery-preview]");
  const uniqueImages = [...new Set(galleryImages)];

  if (preview) {
    preview.innerHTML = uniqueImages.slice(0, 4).map((src) => (
      `<img src="${src}" alt="Somadina and Ofure gallery preview" loading="lazy">`
    )).join("");
  }

  if (!gallery) return;

  gallery.innerHTML = uniqueImages.map((src, index) => (
    `<button class="gallery-item" type="button" data-lightbox-index="${index}" aria-label="Open gallery image ${index + 1}">
      <img src="${src}" alt="Somadina and Ofure wedding photo ${index + 1}" loading="lazy">
    </button>`
  )).join("");
}

function setupLightbox() {
  const gallery = document.querySelector("[data-gallery]");
  const lightbox = document.querySelector("[data-lightbox]");
  if (!gallery || !lightbox) return;

  const image = lightbox.querySelector("img");
  const close = lightbox.querySelector("[data-lightbox-close]");
  const prev = lightbox.querySelector("[data-lightbox-prev]");
  const next = lightbox.querySelector("[data-lightbox-next]");
  const uniqueImages = [...new Set(galleryImages)];
  let currentIndex = 0;

  const open = (index) => {
    currentIndex = index;
    image.src = uniqueImages[currentIndex];
    image.alt = `Somadina and Ofure wedding photo ${currentIndex + 1}`;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  const renderImage = () => {
    image.src = uniqueImages[currentIndex];
    image.alt = `Somadina and Ofure wedding photo ${currentIndex + 1}`;
  };

  const move = (direction) => {
    currentIndex = (currentIndex + direction + uniqueImages.length) % uniqueImages.length;
    renderImage();
  };

  gallery.addEventListener("click", (event) => {
    const button = event.target.closest("[data-lightbox-index]");
    if (button) open(Number(button.dataset.lightboxIndex));
  });

  close.addEventListener("click", closeLightbox);
  prev.addEventListener("click", () => move(-1));
  next.addEventListener("click", () => move(1));
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("open")) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") move(-1);
    if (event.key === "ArrowRight") move(1);
  });
}

function setupFaqs() {
  document.querySelectorAll("[data-faq-question]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const isOpen = item.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });
}

function setupCopyButtons() {
  const toast = document.querySelector("[data-toast]");
  document.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      const value = button.dataset.copy;
      try {
        await navigator.clipboard.writeText(value);
      } catch {
        const input = document.createElement("input");
        input.value = value;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        input.remove();
      }
      if (toast) {
        toast.textContent = "Account number copied";
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 2200);
      }
    });
  });
}

function setupRsvpDeadline() {
  const rsvpPage = document.querySelector("[data-rsvp-page]");
  if (!rsvpPage) return;

  if (Date.now() > RSVP_DEADLINE.getTime()) {
    rsvpPage.classList.add("rsvp-closed");
  }
}

function setupReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach((element) => observer.observe(element));
}
