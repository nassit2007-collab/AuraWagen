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
    const minPrice = parseInt(document.getElementById('min-price').value) || 0;
    const maxPrice = parseInt(document.getElementById('max-price').value) || Infinity;

    document.querySelectorAll('.car-card').forEach(card => {
        const cardBrand = card.dataset.brand;
        const cardPrice = parseInt(card.dataset.price);

        const brandMatch = brand === 'all' || cardBrand === brand;
        const priceMatch = cardPrice >= minPrice && cardPrice <= maxPrice;

        if (brandMatch && priceMatch) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});