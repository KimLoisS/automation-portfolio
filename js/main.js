/* ============================================
   KIM SANGIL — AUTOMATION PORTFOLIO
   main.js — All interactions live here
   ============================================ */

// ── Smooth scroll for nav links ──────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ── Navbar background on scroll ──────────────
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(10, 10, 15, 0.98)';
    } else {
        nav.style.background = 'rgba(10, 10, 15, 0.85)';
    }
});

// ── Animate cards on scroll into view ────────
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .cert-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Vanta Fog background, with automatic fallback to the CSS blob
// on mobile, reduced-motion preference, or if the library fails to load
function initVantaBackground() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;
    const vantaContainer = document.getElementById('vanta-bg');

    if (!vantaContainer || prefersReducedMotion || isMobile) {
        return;
    }

    if (typeof VANTA === 'undefined') {
        return;
    }

    VANTA.FOG({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0x6c63ff,
        midtoneColor: 0x12121a,
        lowlightColor: 0x0a0a0f,
        baseColor: 0x0a0a0f,
        blurFactor: 0.6,
        speed: 1.2,
        zoom: 1
    });
}

document.addEventListener('DOMContentLoaded', initVantaBackground);