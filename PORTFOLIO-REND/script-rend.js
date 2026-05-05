const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

function setActiveLink() {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
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

  if (window.scrollY < 100) {
    navLinks.forEach(link => link.classList.remove("active"));
    navLinks[0].classList.add("active");
  }
}

let scrollTimeout;

window.addEventListener("scroll", () => {
  clearTimeout(scrollTimeout);

  scrollTimeout = setTimeout(() => {
    setActiveLink();
  }, 150); // you can adjust (100–300)
});

// Run once on page load
window.addEventListener("load", setActiveLink);