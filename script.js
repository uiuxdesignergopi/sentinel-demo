document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  const cards = document.querySelectorAll(".feature-card");

  const reveal = (el) => {
    el.classList.add("visible");
  };

  const options = { threshold: 0.2 };
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        reveal(e.target);
        obs.unobserve(e.target);
      }
    });
  }, options);

  sections.forEach(s => observer.observe(s));
  cards.forEach(c => observer.observe(c));
});
