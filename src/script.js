var navElement = document.getElementById("navElement");

var toggle = true;
const menu = document.getElementById("menu-mobile");
const slide = document.getElementById("slide");
const menuBtn = document.getElementById("menu-btn");
function toggleSlideMenu() {
  if (toggle) {
    menu.style.width = "100vw";
    menuBtn.classList.add("open");
    toggle = !toggle;
  } else if (!toggle) {
    menuBtn.classList.remove("open");
    menu.style.width = "0vw";
    toggle = !toggle;
  }
}

window.onscroll = function () {
  let yPosition = window.scrollY;
  if (yPosition > 580) {
    navElement.classList.add("nav-scroll-color");
  } else {
    navElement.classList.remove("nav-scroll-color");
  }
};

function scrollToSection(e) {
  menuBtn.classList.remove("open");
  menu.style.width = "0vw";
  toggle = false;
  document
    .getElementById(e.getAttribute("href").substr(1))
    .scrollIntoView({ behavior: "smooth" });
}

window.onload = function () {
  document.addEventListener("scroll", controlStatsNumbers);
};

function isVisible() {
  elementTop = document.getElementById("stats");
  var rect = elementTop.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;
  return elemTop < window.innerHeight && elemBottom >= 0;
}

function controlStatsNumbers() {
  if (isVisible()) {
    animateValue("stats-one-number", 100, 50);
    animateValue("stats-two-number", 100, 60);
    animateValue("stats-three-number", 100, 70);
  }
}

function animateValue(id, target, timer) {
  var obj = document.getElementById(id);
  var current = obj.innerHTML;

  var idInterval = setInterval(function () {
    if (target == current) {
      clearInterval(idInterval);
    } else {
      obj.innerHTML = ++current;
    }
  }, timer);
}

const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

// Buttons
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");

// Counter
let counter = 1;
let size = carouselImages[0].clientWidth;

carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";

// Button Listeners

nextButton.addEventListener("click", () => {
  if (size == 0) {
    size = carouselImages[0].clientWidth;
  }
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
});

prevButton.addEventListener("click", () => {
  if (size == 0) {
    size = carouselImages[0].clientWidth;
  }
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
});

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
  }
  if (carouselImages[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});
