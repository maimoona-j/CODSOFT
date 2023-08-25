const header = document.querySelector(".navbar");

window.onscroll = function () {
  var top = window.scrollY;
  if (top >= 100) {
    header.classList.add("navbarDark");
    header.style.backgroundColor = "blueviolet";
    header.style.boxShadow = "2px 4px 5px rgba(0, 0, 0, 0.2)";
  } else {
    header.classList.remove("navbarDark");
    header.style.backgroundColor = "";
    header.style.boxShadow = "";
  }
};

// text-animation

const container = document.querySelector(".animated-text");
const career = "a frontend developer";

let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  container.innerHTML = `<h1>${career.slice(0, characterIndex)}</h1>`;

  if (characterIndex === career.length) {
    characterIndex = 0;
  }

  setTimeout(updateText, 400);
}

// animation

document.addEventListener("DOMContentLoaded", function () {
  var animateLeftElements = document.querySelectorAll(".animate-left");

  function animateElements() {
    var windowHeight = window.innerHeight;

    for (var i = 0; i < animateLeftElements.length; i++) {
      var element = animateLeftElements[i];
      var position = element.getBoundingClientRect().top;

      if (position - windowHeight <= 0) {
        element.classList.add("animate-visible");
      } else {
        element.classList.remove("animate-visible");
      }
    }
  }

  animateElements();

  window.addEventListener("scroll", animateElements);
});
