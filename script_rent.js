// SLIDER
document.querySelectorAll('.car-card').forEach(card => {
    const slides = card.querySelectorAll('.slide');
    const prev = card.querySelector('.prev');
    const next = card.querySelector('.next');
    let current = 0;

    next.addEventListener('click', () => {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    });

    prev.addEventListener('click', () => {
        slides[current].classList.remove('active');
        current = (current - 1 + slides.length) % slides.length;
        slides[current].classList.add('active');
    });
});

// FILTER
document.querySelector('.filter-btn').addEventListener('click', () => {
    const brand = document.querySelector('.filter-brand').value;

    document.querySelectorAll('.car-card').forEach(card => {
        const cardBrand = card.dataset.brand;
        const brandMatch = brand === 'all' || cardBrand === brand;
        card.style.display = brandMatch ? 'block' : 'none';
    });
});