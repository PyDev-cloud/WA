
document.addEventListener('DOMContentLoaded', function(){
  // IntersectionObserver for fade-slide-up elements
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
      }
    });
  }, {threshold: 0.18});
  document.querySelectorAll('.fade-slide-up').forEach(el => io.observe(el));

  // Header shadow on scroll
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 30){ header.style.boxShadow = '0 6px 24px rgba(7,21,40,0.12)'; }
    else { header.style.boxShadow = 'none'; }
  });

  // hero slow pan/zoom
  const heroImg = document.querySelector('.hero-img');
  let scale = 1.02;
  setInterval(() => {
    scale = scale === 1.02 ? 1.06 : 1.02;
    if(heroImg) heroImg.style.transform = 'scale(' + scale + ')';
  }, 9000);

  // Back to top button
  const btt = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 300) btt.classList.add('show'); else btt.classList.remove('show');
  });
  btt.addEventListener('click', () => { window.scrollTo({top:0,behavior:'smooth'}); });

  // Simple keyboard accessibility for BTT (Enter to activate)
  btt.addEventListener('keydown', (e) => { if(e.key === 'Enter') { window.scrollTo({top:0,behavior:'smooth'}); } });
});


// Smooth scroll for Back to Top
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Fade + Slide animation
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("in-view");
    });
  },
  { threshold: 0.2 }
);
document.querySelectorAll(".fade-slide-up").forEach(el => observer.observe(el));

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");
navToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open");
  navToggle.classList.toggle("active");
});
