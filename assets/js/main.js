/**
 * DB Tech Solutions — Main JavaScript
 * Handles: scroll animations, mobile nav, header scroll effect, contact form demo
 */

(function () {
    'use strict';

    // =========================================================================
    //  1. Scroll-based fade-in animations (IntersectionObserver)
    // =========================================================================
    function initScrollAnimations() {
        const targets = document.querySelectorAll(
            '.feature-card, .testimonial-card, .resource-item, .mini-card, ' +
            '.hero-text, .hero-media, .about-text, .about-visual, ' +
            '.contact-info, .contact-form, .section-header'
        );

        if (!targets.length) return;

        // Add base classes for animation
        targets.forEach(function (el, i) {
            el.classList.add('fade-in');
            // Stagger cards within their grids
            const parent = el.parentElement;
            if (parent && (parent.classList.contains('features-grid') ||
                parent.classList.contains('testimonials-grid') ||
                parent.classList.contains('resources-list') ||
                parent.classList.contains('about-card-stack'))) {
                const siblings = Array.from(parent.children);
                const index = siblings.indexOf(el);
                if (index < 6) {
                    el.classList.add('delay-' + (index + 1));
                }
            }
        });

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -40px 0px'
        });

        targets.forEach(function (el) {
            observer.observe(el);
        });
    }

    // =========================================================================
    //  2. Header scroll effect
    // =========================================================================
    function initHeaderScroll() {
        var header = document.getElementById('site-header');
        if (!header) return;

        var scrolled = false;

        function onScroll() {
            var shouldBeScrolled = window.scrollY > 20;
            if (shouldBeScrolled !== scrolled) {
                scrolled = shouldBeScrolled;
                header.classList.toggle('scrolled', scrolled);
            }
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    // =========================================================================
    //  3. Mobile navigation toggle
    // =========================================================================
    function initMobileNav() {
        var toggle = document.getElementById('nav-toggle');
        var nav = document.getElementById('main-nav');
        if (!toggle || !nav) return;

        // Create overlay
        var overlay = document.createElement('div');
        overlay.className = 'nav-overlay';
        document.body.appendChild(overlay);

        function openNav() {
            nav.classList.add('open');
            overlay.classList.add('active');
            toggle.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden';
        }

        function closeNav() {
            nav.classList.remove('open');
            overlay.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }

        toggle.addEventListener('click', function () {
            var isOpen = nav.classList.contains('open');
            if (isOpen) {
                closeNav();
            } else {
                openNav();
            }
        });

        overlay.addEventListener('click', closeNav);

        // Close nav on link click
        nav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', closeNav);
        });

        // Close on Escape key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && nav.classList.contains('open')) {
                closeNav();
            }
        });
    }

    // =========================================================================
    //  4. Smooth scroll for anchor links
    // =========================================================================
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(function (link) {
            link.addEventListener('click', function (e) {
                var href = this.getAttribute('href');
                if (href === '#') return;

                var target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    // =========================================================================
    //  5. Contact form demo handler
    // =========================================================================
    function initContactForm() {
        var form = document.getElementById('contact-form');
        if (!form) return;

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            var submitBtn = document.getElementById('contact-submit');
            var originalText = submitBtn.textContent;

            // Simulate submission
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';

            setTimeout(function () {
                submitBtn.textContent = '✅ ¡Mensaje enviado!';
                submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                submitBtn.style.boxShadow = '0 4px 14px rgba(16, 185, 129, 0.35)';

                setTimeout(function () {
                    form.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = '';
                    submitBtn.style.background = '';
                    submitBtn.style.boxShadow = '';
                }, 2500);
            }, 1200);
        });
    }

    // =========================================================================
    //  6. Active nav link highlighting on scroll
    // =========================================================================
    function initActiveNav() {
        var sections = document.querySelectorAll('main section[id]');
        var navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
        if (!sections.length || !navLinks.length) return;

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var id = entry.target.getAttribute('id');
                    navLinks.forEach(function (link) {
                        link.style.color = '';
                        link.style.background = '';
                        if (link.getAttribute('href') === '#' + id) {
                            link.style.color = 'var(--primary)';
                        }
                    });
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '-80px 0px -50% 0px'
        });

        sections.forEach(function (section) {
            observer.observe(section);
        });
    }

    // =========================================================================
    //  Initialize all modules
    // =========================================================================
    document.addEventListener('DOMContentLoaded', function () {
        initScrollAnimations();
        initHeaderScroll();
        initMobileNav();
        initSmoothScroll();
        initContactForm();
        initActiveNav();
    });
})();
