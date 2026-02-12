import "./style.css";

/* =========================
   Performance & SEO optimizations
   ========================= */

// Lazy loading for images (SEO & Performance)
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll("img[data-src]").forEach((img) => {
    imageObserver.observe(img);
  });
}

// Critical performance metrics for Core Web Vitals
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.entryType === "largest-contentful-paint") {
      console.log("LCP candidate:", entry.startTime);
    }
  }
});
observer.observe({ type: "largest-contentful-paint", buffered: true });

/* =========================
   Mobile menu (simple toggle)
   ========================= */
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn?.addEventListener("click", () => {
  nav?.classList.toggle("is-open");
});

document.addEventListener("click", (e) => {
  if (!nav || !menuBtn) return;
  const t = e.target;
  if (
    nav.classList.contains("is-open") &&
    !nav.contains(t) &&
    !menuBtn.contains(t)
  ) {
    nav.classList.remove("is-open");
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") nav?.classList.remove("is-open");
});

/* =========================
   Demo form (prevent submit)
   =========================
document.getElementById("demoForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Demo: Form gönderimi kapalı.");
});
*/

/* =========================
   Lightbox (reusable)
   ========================= */
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbClose = document.getElementById("lbClose");

function openLightbox(src) {
  if (!lightbox || !lbImg) return;
  lbImg.src = src;
  lightbox.style.display = "flex";
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  if (!lightbox || !lbImg) return;
  lightbox.style.display = "none";
  lightbox.setAttribute("aria-hidden", "true");
  lbImg.src = "";
}

// Vaziyet planı gibi .gItem button’lar
document.querySelectorAll(".gItem").forEach((btn) => {
  btn.addEventListener("click", () => {
    const full = btn.dataset.full;
    if (full) openLightbox(full);
  });
});

lbClose?.addEventListener("click", closeLightbox);
lightbox?.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

/* =========================
   Footer year
   ========================= */
const yilEl = document.getElementById("yil");
if (yilEl) yilEl.textContent = new Date().getFullYear();

/* =========================
   Slider arrows (FIX)
   HTML: data-dir, data-target
   ========================= */
function getSliderMoveBy(sliderEl) {
  const track = sliderEl.querySelector(".photoTrack");
  const first = sliderEl.querySelector(".photoTrack img");
  if (!track || !first) return 0;

  const styles = window.getComputedStyle(track);
  const gap = parseFloat(styles.columnGap || styles.gap || "0") || 0;

  const visibleCount =
    window.innerWidth > 1100 ? 5 : window.innerWidth > 700 ? 3 : 1;

  const cardW = first.getBoundingClientRect().width;
  return (cardW + gap) * visibleCount;
}

document.addEventListener("click", (e) => {
  // BUTON: <button class="sliderBtn" data-dir="1" data-target="aSlider">
  const btn = e.target.closest(".sliderBtn[data-dir][data-target]");
  if (!btn) return;

  const dir = Number(btn.dataset.dir || "0");
  const targetId = btn.dataset.target;
  if (!dir || !targetId) return;

  const slider = document.getElementById(targetId);
  if (!slider) {
    console.warn("Slider bulunamadı:", targetId);
    return;
  }

  const moveBy = getSliderMoveBy(slider);
  if (!moveBy) return;

  slider.scrollBy({ left: dir * moveBy, behavior: "smooth" });
});

/* =========================
   Slider image click -> Lightbox
   (proje/a/c sliderlarının hepsi)
   ========================= */
document.addEventListener("click", (e) => {
  const img = e.target.closest(".photoSlider .photoTrack img");
  if (!img) return;
  openLightbox(img.getAttribute("src"));
});
