const faqz = document.querySelectorAll(".faqs")

faqz.forEach(faqs => {
    faqs.addEventListener('click', () => {
        faqs.classList.toggle('active');
    });
});