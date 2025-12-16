document.addEventListener("DOMContentLoaded", () => {
  // About → центрируем hero
  const aboutLink = document.getElementById("about-link");
  const heroSection = document.querySelector(".hero");

  if (aboutLink && heroSection) {
    aboutLink.addEventListener("click", (e) => {
      e.preventDefault();

      const heroRect = heroSection.getBoundingClientRect();
      const heroTop = heroRect.top + window.pageYOffset;
      const heroHeight = heroRect.height;
      const windowHeight = window.innerHeight;

      window.scrollTo({
        top: heroTop - windowHeight / 2 + heroHeight / 2,
        behavior: "smooth",
      });
    });
  }

  // Nav становится чуть шире при начале скролла
  const nav = document.querySelector(".nav-top");
  if (!nav) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      nav.classList.add("is-wide");
    } else {
      nav.classList.remove("is-wide");
    }
  });
});
