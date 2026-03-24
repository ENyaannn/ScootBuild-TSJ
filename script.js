const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const pills = document.querySelectorAll(".pill");
const configCards = document.querySelectorAll(".config-card");
const revealItems = document.querySelectorAll(".reveal");
const heroArt = document.querySelector(".hero-art");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

pills.forEach((pill) => {
  pill.addEventListener("click", () => {
    const filter = pill.dataset.filter;

    pills.forEach((button) => button.classList.remove("is-active"));
    pill.classList.add("is-active");

    configCards.forEach((card) => {
      const categories = card.dataset.category || "";
      const showCard = filter === "all" || categories.includes(filter);
      card.classList.toggle("is-hidden", !showCard);
    });
  });
});

if (revealItems.length > 0) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  revealItems.forEach((item) => revealObserver.observe(item));
}

if (heroArt) {
  window.addEventListener("pointermove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 12;
    const y = (event.clientY / window.innerHeight - 0.5) * 12;
    heroArt.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  });
}
