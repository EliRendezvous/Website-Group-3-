const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

function setActiveLink() {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });

  // Home active at top
  if (window.scrollY < 120) {
    navLinks.forEach(link => link.classList.remove("active"));
    navLinks[0].classList.add("active");
  }
}


// ✅ DELAY (Debounce → prevents fast switching)
let scrollTimeout;

window.addEventListener("scroll", () => {
  clearTimeout(scrollTimeout);

  scrollTimeout = setTimeout(() => {
    setActiveLink();
  }, 180); // you can tweak (150–250)
});

// Run on page load
window.addEventListener("load", setActiveLink);