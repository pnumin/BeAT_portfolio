const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const topButton = document.querySelector(".to-top");
const toggleTopButton = () => {
  topButton?.classList.toggle("visible", window.scrollY > 500);
};
window.addEventListener("scroll", toggleTopButton, { passive: true });
toggleTopButton();

topButton?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const selector = link.getAttribute("href");
    const target = selector && selector !== "#" ? document.querySelector(selector) : null;
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
