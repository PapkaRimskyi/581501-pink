var tariff_slider = document.querySelector(".tariff__slider-container");
var tariff_general_button = document.querySelectorAll(".tariff__slider-button");
var tariff_button1 = document.querySelector(".tariff__slider-button1");
var tariff_button2 = document.querySelector(".tariff__slider-button2");
var tariff_button3 = document.querySelector(".tariff__slider-button3");
var tariff_table = document.querySelector(".tariff__table");

tariff_button1.addEventListener("click", function(evt) {
  evt.preventDefault();
  tariff_table.classList.remove("tariff__table-button2");
  tariff_table.classList.remove("tariff__table-button2");
  tariff_table.classList.add("tariff__table-button1");
  tariff_button2.classList.remove("slider__button--active");
  tariff_button3.classList.remove("slider__button--active");
  tariff_button1.classList.add("slider__button--active");
});

tariff_button2.addEventListener("click", function(evt) {
  evt.preventDefault();
  tariff_table.classList.remove("tariff__table-button1");
  tariff_table.classList.remove("tariff__table-button3");
  tariff_table.classList.add("tariff__table-button2");
  tariff_button1.classList.remove("slider__button--active");
  tariff_button3.classList.remove("slider__button--active");
  tariff_button2.classList.add("slider__button--active");
});

tariff_button3.addEventListener("click", function(evt) {
  evt.preventDefault();
  tariff_table.classList.remove("tariff__table-button1");
  tariff_table.classList.remove("tariff__table-button2");
  tariff_table.classList.add("tariff__table-button3");
  tariff_button1.classList.remove("slider__button--active");
  tariff_button2.classList.remove("slider__button--active");
  tariff_button3.classList.add("slider__button--active");
});
