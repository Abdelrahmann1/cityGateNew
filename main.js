const slider = document.querySelector('.slider');
const container = document.querySelector('.slider-container');

let scrollSpeed = 1; // pixels per frame (higher = faster)
let isPaused = false;

function autoScroll() {
    if (!isPaused) {
        slider.scrollLeft += scrollSpeed;

        // When the first image fully scrolls out of view
        const firstImg = slider.querySelector('img');
        if (slider.scrollLeft >= firstImg.clientWidth + 10) {
            // Move that image to the end
            slider.appendChild(firstImg);
            // Reset scroll position to avoid jumps
            slider.scrollLeft -= firstImg.clientWidth + 10;
        }
    }
    requestAnimationFrame(autoScroll);
}

// Start the auto-scroll
autoScroll();

// Pause on hover
container.addEventListener('mouseenter', () => isPaused = true);
container.addEventListener('mouseleave', () => isPaused = false);

