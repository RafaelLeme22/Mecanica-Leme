var navElement = document.getElementById("navElement");
var toggle = true;
const menu = document.getElementById("menu-mobile");
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
    .getElementById(e.getAttribute("data-direct").substr(1))
    .scrollIntoView({ behavior: "smooth" });
}

window.onload = function () {
  document.addEventListener("scroll", controlStatsNumbers);
};

function isVisible() {
  let elementTop = document.getElementById("stats");
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

carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

// Button Listeners

nextButton.addEventListener("click", () => {
  if (size === 0) {
    size = carouselImages[0].clientWidth;
  }
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

prevButton.addEventListener("click", () => {
  if (size === 0) {
    size = carouselImages[0].clientWidth;
  }
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (carouselImages[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});

// SERVICES CAROUSEL

const carouselSlide2 = document.querySelector(".carousel-slide-services");
const carouselImages2 = document.querySelectorAll(".get-to-carousel");

const carouselSlide3 = document.querySelector(".images-carousel-services");
const carouselImages3 = document.querySelectorAll(
  ".images-carousel-services img"
);

// Buttons
const nextButton2 = document.querySelector("#prevButton2");
const prevButton2 = document.querySelector("#nextButton2");

// Counter
let counter2 = 1;
let counter3 = 1;
let size2 = carouselImages2[0].clientWidth;
let size3 = carouselImages3[0].clientWidth;

carouselSlide2.style.transform = "translateX(" + -size2 * counter2 + "px)";
carouselSlide3.style.transform = "translateX(" + -size3 * counter3 + "px)";

// Button Listeners

prevButton2.addEventListener("click", () => {
  if (size2 == 0) {
    size2 = carouselImages2[0].clientWidth;
  }
  if (size3 == 0) {
    size3 = carouselImages3[0].clientWidth;
  }
  if (counter2 >= carouselImages2.length - 1) return;
  carouselSlide2.style.transition = "transform 0.4s ease-in-out";
  carouselSlide3.style.transition = "transform 0.4s ease-in-out";
  counter2++;
  counter3++;
  carouselSlide2.style.transform = "translateX(" + -size2 * counter2 + "px)";
  carouselSlide3.style.transform = "translateX(" + -size3 * counter3 + "px)";
});

nextButton2.addEventListener("click", () => {
  if (size2 == 0) {
    size2 = carouselImages2[0].clientWidth;
  }
  if (size3 == 0) {
    size3 = carouselImages3[0].clientWidth;
  }
  if (counter2 <= 0) return;
  carouselSlide2.style.transition = "transform 0.4s ease-in-out";
  carouselSlide3.style.transition = "transform 0.4s ease-in-out";
  counter2--;
  counter3--;
  carouselSlide2.style.transform = "translateX(" + -size2 * counter2 + "px)";
  carouselSlide3.style.transform = "translateX(" + -size3 * counter3 + "px)";
});

carouselSlide2.addEventListener("transitionend", () => {
  if (carouselImages2[counter2].id === "lastClone2") {
    carouselSlide2.style.transition = "none";
    counter2 = carouselImages2.length - 2;
    carouselSlide2.style.transform = "translateX(" + -size2 * counter2 + "px)";
  }
  if (carouselImages2[counter2].id === "firstClone2") {
    carouselSlide2.style.transition = "none";
    counter2 = carouselImages2.length - counter2;
    carouselSlide2.style.transform = "translateX(" + -size2 * counter2 + "px)";
  }
});

carouselSlide3.addEventListener("transitionend", () => {
  if (carouselImages3[counter3].id === "lastClone3") {
    carouselSlide3.style.transition = "none";
    counter3 = carouselImages3.length - 2;
    carouselSlide3.style.transform = "translateX(" + -size3 * counter3 + "px)";
  }
  if (carouselImages3[counter3].id === "firstClone3") {
    carouselSlide3.style.transition = "none";
    counter3 = carouselImages3.length - counter3;
    carouselSlide3.style.transform = "translateX(" + -size3 * counter3 + "px)";
  }
});
