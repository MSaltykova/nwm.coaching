document.addEventListener("DOMContentLoaded", () => {
  /* =========================
       ABOUT → центрируем hero
       ========================= */
  const aboutLink = document.getElementById("about-link");
  const heroSection = document.querySelector(".hero");

  if (aboutLink && heroSection) {
    aboutLink.addEventListener("click", (e) => {
      e.preventDefault();

      const heroRect = heroSection.getBoundingClientRect();
      const heroTop = heroRect.top + window.scrollY;
      const heroHeight = heroRect.height;
      const windowHeight = window.innerHeight;

      window.scrollTo({
        top: heroTop - windowHeight / 2 + heroHeight / 2,
        behavior: "smooth",
      });
    });
  }

  /* =========================
       NAV → расширение при скролле
       ========================= */
  const nav = document.querySelector(".nav-top");

  /* =========================
       LEGAL NOTICE TOGGLE
       ========================= */
  const legalToggle = document.querySelector(".legal-toggle");
  const legalPopup = document.querySelector(".legal-popup");

  if (legalToggle && legalPopup) {
    legalToggle.addEventListener("click", () => {
      const isOpen = legalPopup.classList.toggle("show");
      legalToggle.textContent = isOpen ? "Legal notice ▲" : "Legal notice ▼";
    });
  }
});
