document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS library (scroll animations)
  AOS.init({
    duration: 900,       // Smooth transition
    easing: "ease-in-out",
    once: true           // Animate only once per element
  });

  // Smooth Scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });

  // Animate feature cards with staggered delay
  const featureCards = document.querySelectorAll(".feature-card");
  featureCards.forEach((card, index) => {
    card.setAttribute("data-aos", "fade-up");
    card.setAttribute("data-aos-delay", index * 150); // Staggered animation
  });

  // Animate work steps cards
  const workCards = document.querySelectorAll(".work-card");
  workCards.forEach((card, index) => {
    card.setAttribute("data-aos", "zoom-in");
    card.setAttribute("data-aos-delay", index * 200);
  });

  // Add smooth hover animation to buttons
  const buttons = document.querySelectorAll(".button-primary, .button-secondary, .cta-btn");
  buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
      btn.style.transition = "all 0.3s ease-in-out";
      btn.style.transform = "scale(1.05)";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "scale(1)";
    });
  });
});
