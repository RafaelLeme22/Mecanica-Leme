function scrollTo(e) {
  // document.getElementById("stats").scrollIntoView({ behavior: "smooth" });
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
