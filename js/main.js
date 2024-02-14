let nav = document.querySelector(".nav");
let menu = document.querySelector(".menu");
let closes = document.querySelector(".close");
menu.addEventListener("click", () => {
  nav.classList.add("active");
});
closes.addEventListener("click", () => {
  nav.classList.remove("active");
});
// header
let header = document.querySelector("header");
document.addEventListener("scroll", () => {
  header.classList.toggle("active", window.scrollY > 10);
});
// choose
let liChoose = document.querySelectorAll(".liChoose li");
liChoose.forEach(e => {
  e.addEventListener("click", () => {
    liChoose.forEach(x => {
      x.classList.remove("active");
    });
    e.classList.add("active");
  });
});

// navList
let allNavList = document.querySelectorAll(".navList li a");
let section = document.querySelectorAll("section");
document.addEventListener("scroll", () => {
  section.forEach(sec => {
    let top = window.scrollY,
      offset = sec.offsetTop - 80,
      height = sec.offsetHeight,
      id = sec.getAttribute("id");
    if (top > offset && top < offset + height) {
      document
        .querySelector(".navList li a[href*=" + id + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".navList li a[href*=" + id + "]")
        .classList.remove("active");
    }
  });
});
// dark Mode
let moon = document.querySelector(".moon i");
moon.addEventListener("click", function () {
  if (moon.classList.contains("bx-moon")) {
    this.classList.replace("bx-moon", "bx-sun");
  } else {
    this.classList.replace("bx-sun", "bx-moon");
  }
});
