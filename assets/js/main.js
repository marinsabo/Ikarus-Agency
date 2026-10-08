/* Ikarus Agency - Main JS */

document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle ---
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileBtn.innerHTML = '<i class="fa fa-bars"></i>';
            } else {
                navLinks.classList.add('active');
                mobileBtn.innerHTML = '<i class="fa fa-times"></i>';
            }
        });

        // Close menu when a link is clicked
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileBtn.innerHTML = '<i class="fa fa-bars"></i>';
            });
        });
    }

    // --- Accordion ---
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');

        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all others
            accordionItems.forEach(i => i.classList.remove('active'));

            // Toggle current
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // --- Navbar Scroll Effect ---
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(5, 5, 5, 0.9)';
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
        } else {
            navbar.style.background = 'rgba(5, 5, 5, 0.5)';
            navbar.style.boxShadow = 'none';
        }
    });

    // --- Hero Mouse Effect ---
    const hero = document.querySelector('.hero');
    const heroBg = document.querySelector('.hero-background');

    if (hero && heroBg) {
        hero.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = hero.getBoundingClientRect();
            const x = (e.clientX - left) / width;
            const y = (e.clientY - top) / height;

            // Update CSS variables for the glow position
            heroBg.style.setProperty('--mouse-x', `${x * 100}%`);
            heroBg.style.setProperty('--mouse-y', `${y * 100}%`);
        });
    }

});
