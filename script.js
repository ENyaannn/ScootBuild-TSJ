const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const pills = document.querySelectorAll(".pill");
const configCards = document.querySelectorAll(".config-card");
const revealItems = document.querySelectorAll(".reveal");
const heroArt = document.querySelector(".hero-art");
const tickers = document.querySelectorAll(".ticker");

const updateScrollProgress = () => {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
  document.documentElement.style.setProperty("--scroll-progress", `${progress}`);
};

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
    document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
    document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
  });
}

updateScrollProgress();
window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);

if (tickers.length > 0) {
  const setupTicker = (ticker) => {
    const inner = ticker.querySelector(".ticker-inner");
    const tracks = inner ? Array.from(inner.querySelectorAll(".ticker-track")) : [];
    const baseTrack = tracks[0];

    if (!inner || !baseTrack) {
      return;
    }

    Array.from(inner.querySelectorAll(".ticker-track[data-clone='true']")).forEach((clone) => clone.remove());

    const baseWidth = baseTrack.offsetWidth;
    const minimumWidth = ticker.offsetWidth * 2.5;
    let currentWidth = inner.scrollWidth;

    while (currentWidth < minimumWidth) {
      const clone = baseTrack.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      clone.dataset.clone = "true";
      inner.appendChild(clone);
      currentWidth = inner.scrollWidth;
    }

    inner.style.setProperty("--ticker-shift", `${baseWidth}px`);
  };

  tickers.forEach(setupTicker);
  window.addEventListener("resize", () => {
    tickers.forEach(setupTicker);
  });
}
