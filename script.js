/* hero section */
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.hero-slide');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let currentIndex = 0;

    function showSlide(index) {
        const slider = document.querySelector('.hero-slider');
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);

    setInterval(nextSlide, 10000);
});

/* Cart Section */
document.addEventListener('DOMContentLoaded', () => {
    const pizzaTypeDropdown = document.getElementById('pizza-type');
    const pizzaPreview = document.getElementById('pizza-preview');
    const reorderBtn = document.querySelector('.reorder-btn');

    const pizzaImages = {
        bbq_chicken: 'images/bbq_chicken.jpg',
        pepperoni: 'images/pepperoni.jpg',
        meat_deluxe: 'images/meat_deluxe.jpg',
        veggie: 'images/veggie.jpg',
        hawaiian: 'images/hawaiian.jpg',
        margherita: 'images/margherita.jpg',
        buffalo_chicken: 'images/buffalo_chicken.jpg',
        supreme: 'images/supreme.jpg',
        four_cheese: 'images/four_cheese.jpg'
    };

    pizzaTypeDropdown.addEventListener('change', (event) => {
        const selectedPizza = event.target.value;
        pizzaPreview.src = pizzaImages[selectedPizza];
    });

    reorderBtn.addEventListener('click', () => {
        // Logic to prefill the form with favorite values
        document.getElementById('pizza-size').value = 'large';
        document.getElementById('pizza-type').value = 'bbq_chicken';
        document.getElementById('crust-type').value = 'stuffed';
        document.getElementById('mushroom').checked = true;
        pizzaPreview.src = pizzaImages['bbq_chicken'];
    });
});

/* Checkout Section */
function createOrder() {
    const payNowBtn = document.querySelector('.pay-now-btn');
    payNowBtn.innerHTML = '<i class="material-icons">hourglass_empty</i> Creating order...';
    payNowBtn.disabled = true;

    setTimeout(() => {
        alert('Order placed successfully!');
        payNowBtn.innerHTML = 'Pay Now';
        payNowBtn.disabled = false;
        window.location.href = 'index.html';
    }, 3000);
}