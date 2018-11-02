var tariff_slider = document.querySelector(".tariff__slider-container");
var tariff_general_button = document.querySelectorAll(".tariff__slider-button");
var tariff_button1 = document.querySelector(".tariff__slider-button1");
var tariff_button2 = document.querySelector(".tariff__slider-button2");
var tariff_button3 = document.querySelector(".tariff__slider-button3");
var tariff_table = document.querySelector(".tariff__table");
var review_slider = document.querySelector(".review__slider-container");
var review_button1 = document.querySelector(".review__slider-button1");
var review_button2 = document.querySelector(".review__slider-button2");
var review_button3 = document.querySelector(".review__slider-button3");
var review_container = document.querySelector(".review__text-container");
var review_container1 = document.querySelector(".review__text-container1");
var review_container2 = document.querySelector(".review__text-container2");
var review_container3 = document.querySelector(".review__text-container3");
var arrow_left = document.querySelector(".review__button--previous");
var arrow_right = document.querySelector(".review__button--next");
var big_form = document.querySelector(".big-form__form");
var first_name = document.querySelector("[name=first-name]");
var last_name = document.querySelector("[name=last-name]");
var email = document.querySelector("[name=email]");
var form_popup_fail = document.querySelector(".form-popup--fail");

tariff_button1.addEventListener("click", function(evt) {
  evt.preventDefault();
  tariff_table.classList.remove("tariff__table-button2");
  tariff_table.classList.remove("tariff__table-button3");
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

review_button1.addEventListener("click", function(evt) {
  evt.preventDefault();
  review_container2.classList.add("review__text-container--hidden");
  review_container3.classList.add("review__text-container--hidden");
  review_container1.classList.remove("review__text-container--hidden");
  review_button2.classList.remove("slider__button--active");
  review_button3.classList.remove("slider__button--active");
  review_button1.classList.add("slider__button--active");
});

review_button2.addEventListener("click", function(evt) {
  evt.preventDefault();
  review_container1.classList.add("review__text-container--hidden");
  review_container3.classList.add("review__text-container--hidden");
  review_container2.classList.remove("review__text-container--hidden");
  review_button1.classList.remove("slider__button--active");
  review_button3.classList.remove("slider__button--active");
  review_button2.classList.add("slider__button--active");
});

review_button3.addEventListener("click", function(evt) {
  evt.preventDefault();
  review_container1.classList.add("review__text-container--hidden");
  review_container2.classList.add("review__text-container--hidden");
  review_container3.classList.remove("review__text-container--hidden");
  review_button1.classList.remove("slider__button--active");
  review_button2.classList.remove("slider__button--active");
  review_button3.classList.add("slider__button--active");
});

big_form.addEventListener("submit", function(evt) {
  if (!first_name.value || !last_name.value || !email.value) {
    evt.preventDefault();
    form_popup_fail.classList.add("form-popup--display");
    console.log("Заполните пустые поля");
  }
});
