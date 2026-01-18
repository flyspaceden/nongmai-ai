const toggleButton = document.querySelector(".nav-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

if (toggleButton && mobileMenu) {
  toggleButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });
}

const revealTargets = document.querySelectorAll(".reveal");

if (revealTargets.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealTargets.forEach((target) => observer.observe(target));
}

window.addEventListener("load", () => {
  document.body.classList.add("page-loaded");
});
