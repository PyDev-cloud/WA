document.addEventListener("DOMContentLoaded", function () {
    let e = new IntersectionObserver(e => { e.forEach(e => { e.isIntersecting && e.target.classList.add("in-view") }) }, { threshold: .18 });
    document.querySelectorAll(".fade-slide-up").forEach(o => e.observe(o)); let o = document.getElementById("siteHeader");
    window.addEventListener("scroll", () => { window.scrollY > 30 ? o.style.boxShadow = "0 6px 24px rgba(7,21,40,0.12)" : o.style.boxShadow = "none" });
    let t = document.querySelector(".hero-img"), s = 1.02;
    setInterval(() => { s = 1.02 === s ? 1.06 : 1.02, t && (t.style.transform = "scale(" + s + ")") }, 9e3); let l = document.getElementById("backToTop");
    window.addEventListener("scroll", () => { window.scrollY > 300 ? l.classList.add("show") : l.classList.remove("show") }), l.addEventListener("click", () => { window.scrollTo({ top: 0, behavior: "smooth" }) }), l.addEventListener("keydown", e => { "Enter" === e.key && window.scrollTo({ top: 0, behavior: "smooth" }) })
});
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => { window.scrollY > 400 ? backToTop.classList.add("show") : backToTop.classList.remove("show") }),
    backToTop.addEventListener("click", () => { window.scrollTo({ top: 0, behavior: "smooth" }) });
const observer = new IntersectionObserver(e => { e.forEach(e => { e.isIntersecting && e.target.classList.add("in-view") }) },
    { threshold: .2 }); document.querySelectorAll(".fade-slide-up").forEach(e => observer.observe(e));
const navToggle = document.getElementById("navToggle"), mainNav = document.getElementById("mainNav");


navToggle.addEventListener("click", () => { mainNav.classList.toggle("open"), navToggle.classList.toggle("active") });