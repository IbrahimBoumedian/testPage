// Add an effect to header on scolling
let header = document.querySelector("header");
window.addEventListener("scroll", (e) => {
  header.classList.toggle("sticky", window.scrollY > 100);
});
// Show nav menu in mobile
const menuIcon = document.querySelector("header .nav-menu");
let nav = document.querySelector("header nav");
menuIcon.addEventListener("click", (e) => {
  nav.classList.toggle("active");
  if (nav.classList.contains("active")) {
    menuIcon.setAttribute("name", "close-outline");
    
  } else {
    menuIcon.setAttribute("name", "menu-outline");
  }
});

// Add active class to nav links
const navLinks = Array.from(document.querySelectorAll("header nav .nav-link , header .btns > a"));
navLinks.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    nav.classList.remove("active");
    menuIcon.setAttribute("name", "menu-outline");
    navLinks.forEach((element) => {
      element.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});


// Fac Section  Accordion  
var acc = document.getElementsByClassName("accordion");
var i;
var len = acc.length;
for (i = 0; i < len; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
