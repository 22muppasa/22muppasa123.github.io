// Smooth Scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in on Scroll
const fadeInElements = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
    entries, 
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

fadeInElements.forEach(fadeInElement => {
    appearOnScroll.observe(fadeInElement);
});

// Hover effect on skills
const skillItems = document.querySelectorAll('.skills ul li');

skillItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = "translateX(10px)";
        item.style.transition = "transform 0.3s ease-in-out";
    });
    
    item.addEventListener('mouseout', () => {
        item.style.transform = "translateX(0)";
    });
});
