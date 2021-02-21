"use strict";

var burgerButton = document.querySelector(".menu-burger-btn");
console.log(burgerButton);
burgerButton.addEventListener("click", function (event) {
  console.log(event, this);
});