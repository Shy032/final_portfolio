document.addEventListener('DOMContentLoaded', function() {
    const img = document.getElementById('reactive-image');

    img.addEventListener('mousemove', function(e) {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element.
        const y = e.clientY - rect.top;  // y position within the element.

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const deltaX = x - centerX;
        const deltaY = y - centerY;

        const percentX = deltaX / centerX;
        const percentY = deltaY / centerY;

        const maxRotation = 45; // Increase max rotation for more dramatic effect
        const rotateX = percentY * maxRotation * -1; // Negative for realistic parallax
        const rotateY = percentX * maxRotation;

        img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    img.addEventListener('mouseleave', function() {
        img.style.transform = 'none'; // Reset the transform when mouse leaves the image
    });

    // Reveal elements on scroll
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial call to reveal elements on load

    // Image stack slideshow
    const stackImages = document.querySelectorAll('.stack-image');
    let currentImageIndex = 0;

    const showNextImage = () => {
        stackImages[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % stackImages.length;
        stackImages[currentImageIndex].classList.add('active');
    };

    setInterval(showNextImage, 3000); // Change image every 3 seconds
});
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap carousel
    var myCarousel = document.querySelector('#carouselExampleIndicators');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 2000, // Set the interval to 2 seconds for auto-sliding
        wrap: true // Ensure the carousel loops continuously
    });
});
