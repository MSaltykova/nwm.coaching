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

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".legal-toggle");
  const legalPopup = document.querySelector(".legal-popup");

  toggleBtn.addEventListener("click", () => {
    legalPopup.classList.toggle("show");
    toggleBtn.textContent = legalPopup.classList.contains("show")
      ? "Legal notice ▲"
      : "Legal notice ▼";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const indicator = document.querySelector(".scroll-indicator");
  const nextSection = document.querySelector("#next-section");

  if (!indicator || !nextSection) return;

  // плавный скролл при клике
  indicator.addEventListener("click", (e) => {
    e.preventDefault(); // убираем стандартное поведение ссылки

    // корректируем позицию, если есть sticky nav
    const navHeight = document.querySelector(".nav-top")?.offsetHeight || 0;
    const sectionTop =
      nextSection.getBoundingClientRect().top + window.scrollY - navHeight;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
  });

  // опционально: скрывать стрелку после прокрутки
  window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight * 0.5) {
      indicator.style.opacity = "0";
      indicator.style.pointerEvents = "none";
    } else {
      indicator.style.opacity = "0.5";
      indicator.style.pointerEvents = "auto";
    }
  });
});
