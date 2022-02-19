var cards = document.querySelectorAll(".sub-container");

var activeElement;

for (var card of cards) {
  card.addEventListener("click", setActiveElement);
}

var fetchActiveElement = function (elements) {
  for (var element of elements) {
    if (element.classList.contains("container-active")) {
      return element;
    }
  }

  return -1;
};

activeElement = fetchActiveElement(cards);

function setActiveElement(e) {
  var targetElement = e.target;
  if (targetElement.classList.contains("container-active")) {
    return;
  }
  activeElement.classList.remove("container-active");
  targetElement.classList.add("container-active");

  activeElement = targetElement;
}

console.log(activeElement);
