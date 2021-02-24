"use strict";

$(document).ready(function () {
  $(".menu-burger-btn").click(function (event) {
    $(".menu-burger-btn, .menu__list").toggleClass("active");
  });
});
$(".carousel").slick({
  dots: true
});
$(".staff-list").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1
});