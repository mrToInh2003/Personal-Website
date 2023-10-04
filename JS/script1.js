function scrollToElement(elementSelector, instance = 0) {
  // Select all elements that match the given selector
  const elements = document.querySelectorAll(elementSelector);
  // Check if there are elements matching the selector and if the requested instance exists
  if (elements.length > instance) {
    // Scroll to the specified instance of the element
    elements[instance].scrollIntoView({ behavior: "smooth" });
  }
}

const link1 = document.getElementById("link1");

const link2 = document.getElementById("link2");

link1.addEventListener("click", () => {
  scrollToElement(".header");
});
link2.addEventListener("click", () => {
  scrollToElement(".column");
});
window.onload = function () {
  const headerElement = document.querySelector(".header");
  headerElement.addEventListener("animationiteration", function () {
    this.style.animationPlayState = "paused";
    setTimeout(() => {
      this.style.animationPlayState = "running";
    }, 0);
  });
};

function showCard(index) {
  var cards = document.querySelectorAll(".slideshow .card");
  var buttons = document.querySelectorAll(".navigation button");

  cards.forEach(function (card) {
    card.classList.remove("active");
  });

  buttons.forEach(function (button) {
    button.classList.remove("active");
  });

  cards[index - 1].classList.add("active");
  buttons[index - 1].classList.add("active");
}
