const WEDDING_DATE = new Date("2026-11-27T10:00:00+01:00");
const RSVP_DEADLINE = new Date("2026-08-10T23:59:59+01:00");

const galleryImages = [
  "Harold & Somadina/WhatsApp Image 2026-07-17 at 14.45.02.jpeg",
  "Harold & Somadina/WhatsApp Image 2026-07-17 at 14.45.02 (1).jpeg",
  "Harold & Somadina/WhatsApp Image 2026-07-17 at 14.45.02 (2).jpeg",
  "Harold & Somadina/WhatsApp Image 2026-07-17 at 14.45.02 (3).jpeg",
  "Harold & Somadina/WhatsApp Image 2026-07-17 at 14.45.02 (4).jpeg",
  "Harold & Somadina/WhatsApp Image 2026-07-17 at 14.45.03.jpeg",
  "Harold & Somadina/WhatsApp Image 2026-07-17 at 14.45.03 (1).jpeg",
  "Harold & Somadina/WhatsApp Image 2026-07-17 at 14.45.03 (2).jpeg",
  "Harold & Somadina/WhatsApp Image 2026-07-17 at 14.45.03 (3).jpeg",
  "Harold & Somadina/WhatsApp Image 2026-07-17 at 14.45.03 (4).jpeg",
  "Harold & Somadina/WhatsApp Image 2026-07-17 at 14.45.04.jpeg",
  "Harold & Somadina/WhatsApp Image 2026-07-17 at 14.45.04 (1).jpeg",
  "Harold & Somadina/Igba Nkwu/IMG_3104.PNG",
  "Harold & Somadina/Igba Nkwu/IMG_3105.PNG",
  "Harold & Somadina/Igba Nkwu/IMG_3106.PNG",
  "Harold & Somadina/Igba Nkwu/IMG_3107.JPEG",
  "Harold & Somadina/Igba Nkwu/IMG_3108.JPEG",
  "Harold & Somadina/Igba Nkwu/IMG_3109.JPEG"
];

// Stable, permanent labels shown at the top of the photo viewer. These are
// tied to the photo itself (not to its position in the shuffled filmstrip),
// so a given photo always shows the same title no matter the browse order.
const galleryTitles = {
  "Harold & Somadina/WhatsApp Image 2026-07-17 at 14.45.02.jpeg": "Image 01",
  "Harold & Somadina/WhatsApp Image 2026-07-17 at 14.45.02 (1).jpeg": "Image 02",
  "Harold & Somadina/WhatsApp Image 2026-07-17 at 14.45.02 (2).jpeg": "Image 03",
  "Harold & Somadina/WhatsApp Image 2026-07-17 at 14.45.02 (3).jpeg": "Image 04",
  "Harold & Somadina/WhatsApp Image 2026-07-17 at 14.45.02 (4).jpeg": "Image 05",
  "Harold & Somadina/WhatsApp Image 2026-07-17 at 14.45.03.jpeg": "Image 06",
  "Harold & Somadina/WhatsApp Image 2026-07-17 at 14.45.03 (1).jpeg": "Image 07",
  "Harold & Somadina/WhatsApp Image 2026-07-17 at 14.45.03 (2).jpeg": "Image 08",
  "Harold & Somadina/WhatsApp Image 2026-07-17 at 14.45.03 (3).jpeg": "Image 09",
  "Harold & Somadina/WhatsApp Image 2026-07-17 at 14.45.03 (4).jpeg": "Image 10",
  "Harold & Somadina/WhatsApp Image 2026-07-17 at 14.45.04.jpeg": "Image 11",
  "Harold & Somadina/WhatsApp Image 2026-07-17 at 14.45.04 (1).jpeg": "Image 12",
  "Harold & Somadina/Igba Nkwu/IMG_3104.PNG": "Igba Nkwu",
  "Harold & Somadina/Igba Nkwu/IMG_3105.PNG": "Igba Nkwu",
  "Harold & Somadina/Igba Nkwu/IMG_3106.PNG": "Igba Nkwu",
  "Harold & Somadina/Igba Nkwu/IMG_3107.JPEG": "Igba Nkwu",
  "Harold & Somadina/Igba Nkwu/IMG_3108.JPEG": "Igba Nkwu",
  "Harold & Somadina/Igba Nkwu/IMG_3109.JPEG": "Igba Nkwu"
};

function getPhotoTitle(src) {
  return galleryTitles[src] || "";
}

// The Harold & Somadina folder holds full-resolution camera originals
// (2-5MB+ each). Pre-optimized derivatives live alongside them so the
// gallery grid, scattered polaroids, and viewer never have to load a
// multi-megabyte file just to show a photo: a ~400px-wide thumbnail for
// small display sizes, and a ~1600px-wide "large" version for the main
// viewer stage. galleryImages itself stays the canonical list of
// original paths (used as stable identifiers), and these two helpers
// map an original path to its optimized counterpart.
function toThumbSrc(src) {
  const rel = src.replace("Harold & Somadina/", "").replace(/\.[^./]+$/, "");
  return `assets/gallery-thumb/${rel}.jpg`;
}

function toLargeSrc(src) {
  const rel = src.replace("Harold & Somadina/", "").replace(/\.[^./]+$/, "");
  return `assets/gallery-large/${rel}.jpg`;
}

document.addEventListener("DOMContentLoaded", () => {
  setupEnvelopeGate();
  setupNavigation();
  setupCountdown();
  setupGallery();
  setupLightbox();
  setupStoryPhotoViewer();
  setupFaqs();
  setupCopyButtons();
  setupRsvpDeadline();
  setupReveal();
});

function setupEnvelopeGate() {
  const gate = document.querySelector("[data-envelope-gate]");
  if (!gate) return;

  const root = document.documentElement;
  const target = gate.dataset.gateTarget || "home.html";

  root.classList.add("gate-active");

  const openGate = () => {
    if (gate.classList.contains("is-leaving")) return;
    gate.classList.add("is-leaving");
    // The actual cross-page fade is handled natively by the browser's
    // view-transition crossfade (see @view-transition in styles.css),
    // so we navigate right away instead of fading out manually first.
    window.location.href = target;
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
  const uniqueImages = [...new Set(galleryImages)];

  if (!gallery) return;

  gallery.innerHTML = uniqueImages.map((src, index) => (
    `<button class="gallery-item" type="button" data-lightbox-index="${index}" aria-label="Open gallery image ${index + 1}">
      <img src="${toThumbSrc(src)}" alt="Somadina and Ofure wedding photo ${index + 1}" loading="lazy">
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
    image.src = toLargeSrc(uniqueImages[currentIndex]);
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
    image.src = toLargeSrc(uniqueImages[currentIndex]);
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

function setupStoryPhotoViewer() {
  const viewer = document.querySelector("[data-photo-viewer]");
  if (!viewer) return;

  const openBtn = document.querySelector("[data-open-viewer]");
  const scatterButtons = document.querySelectorAll("[data-viewer-src]");
  const stage = viewer.querySelector("[data-viewer-image]");
  const titleEl = viewer.querySelector("[data-viewer-title]");
  const strip = viewer.querySelector("[data-viewer-strip]");
  const closeBtn = viewer.querySelector("[data-viewer-close]");
  const prevBtn = viewer.querySelector("[data-viewer-prev]");
  const nextBtn = viewer.querySelector("[data-viewer-next]");

  // Shuffle a copy of the shared gallery list (Fisher-Yates) so the
  // filmstrip order is randomized fresh each time the page loads.
  const viewerImages = [...new Set(galleryImages)];
  for (let i = viewerImages.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [viewerImages[i], viewerImages[j]] = [viewerImages[j], viewerImages[i]];
  }

  let currentIndex = 0;

  strip.innerHTML = viewerImages.map((src, index) => (
    `<button class="viewer-thumb" type="button" data-thumb-index="${index}" aria-label="View photo ${index + 1}">
      <img src="${toThumbSrc(src)}" alt="" loading="lazy">
    </button>`
  )).join("");

  const thumbs = strip.querySelectorAll("[data-thumb-index]");

  const render = () => {
    const src = viewerImages[currentIndex];
    stage.src = toLargeSrc(src);
    stage.alt = `Somadina and Ofure wedding photo ${currentIndex + 1}`;
    if (titleEl) titleEl.textContent = getPhotoTitle(src);
    thumbs.forEach((thumb) => thumb.classList.remove("active"));
    const activeThumb = thumbs[currentIndex];
    if (activeThumb) {
      activeThumb.classList.add("active");
      activeThumb.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  };

  const openAt = (index) => {
    currentIndex = ((index % viewerImages.length) + viewerImages.length) % viewerImages.length;
    render();
    viewer.classList.add("open");
    viewer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const openBySrc = (src) => {
    const index = viewerImages.indexOf(src);
    openAt(index === -1 ? 0 : index);
  };

  const closeViewer = () => {
    viewer.classList.remove("open");
    viewer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  const move = (direction) => openAt(currentIndex + direction);

  if (openBtn) openBtn.addEventListener("click", () => openAt(0));

  scatterButtons.forEach((button) => {
    button.addEventListener("click", () => openBySrc(button.dataset.viewerSrc));
  });

  strip.addEventListener("click", (event) => {
    const thumb = event.target.closest("[data-thumb-index]");
    if (thumb) openAt(Number(thumb.dataset.thumbIndex));
  });

  closeBtn.addEventListener("click", closeViewer);
  prevBtn.addEventListener("click", () => move(-1));
  nextBtn.addEventListener("click", () => move(1));
  viewer.addEventListener("click", (event) => {
    if (event.target === viewer) closeViewer();
  });

  document.addEventListener("keydown", (event) => {
    if (!viewer.classList.contains("open")) return;
    if (event.key === "Escape") closeViewer();
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
