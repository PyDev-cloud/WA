const faqItems = document.querySelectorAll(".faq-item");
 faqItems.forEach(e => { let t = e.querySelector(".faq-header");
     t.addEventListener("click", () => { 
        faqItems.forEach(t => { t !== e && t.classList.remove("active") }), e.classList.toggle("active") }) });