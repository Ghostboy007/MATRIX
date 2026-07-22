// ==========================
// Navbar Background on Scroll
// ==========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.style.background = "rgba(5,8,22,0.9)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.35)";
        navbar.style.transition = "0.4s";

    } else {

        navbar.style.background = "rgba(255,255,255,0.08)";
        navbar.style.boxShadow = "none";
    }

});

// ==========================
// Fade Hero on Scroll
// ==========================

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    hero.style.opacity = 1 - window.scrollY / 700;

});

// ==========================
// Button Hover Animation
// ==========================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-4px) scale(1.03)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0px) scale(1)";

    });

});
// ==========================
// Scroll Reveal Animation
// ==========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".about-card").forEach(card=>{

    card.classList.add("hidden");

    observer.observe(card);

});

// ==========================
// Scroll Reveal Animation
// ==========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".about-card").forEach(card=>{

    card.classList.add("hidden");

    observer.observe(card);

});document.querySelectorAll(".domain-card").forEach(card=>{

    card.classList.add("hidden");

    observer.observe(card);

});// ==========================
// Counter Animation
// ==========================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = +counter.getAttribute("data-target");

            let count = 0;

            const speed = target / 100;

            const update = () => {

                if (count < target) {

                    count += speed;

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target + "+";

                }

            };

            update();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});     document.querySelectorAll(".stat-card").forEach(card => {

    card.classList.add("hidden");

    observer.observe(card);

});document.querySelectorAll(".team-card").forEach(card=>{

    card.classList.add("hidden");

    observer.observe(card);

});document.querySelectorAll(".contact-card").forEach(card=>{

    card.classList.add("hidden");

    observer.observe(card);

});