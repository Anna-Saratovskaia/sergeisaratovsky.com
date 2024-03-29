"use strict";

let body = document.querySelector("body");
let fullModalText = document.querySelector(".full-text-container");
let readMoreBtns = document.querySelectorAll(".read-more");
let closeModalBtns = document.querySelectorAll(".close-modal");
let overlay = document.querySelector(".overlay");

for (let i = 0; i < readMoreBtns.length; i++) {
  readMoreBtns[i].addEventListener("click", function () {
    fullModalText.classList.remove("hidden");
    overlay.classList.remove("hidden");
    body.classList.add("body.modal-open");
  });
}

function closeModal() {
  fullModalText.classList.add("hidden");
  overlay.classList.add("hidden");
  body.classList.remove("body.modal-open");
}

for (let i = 0; i < closeModalBtns.length; i++) {
  closeModalBtns[i].addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !fullModalText.classList.contains("hidden")) {
      closeModal();
    }
  });
}

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
const navEl = document.querySelector(".page-header nav");

const btnMobileNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".page-header");

btnMobileNavEl.addEventListener("click", function () {
  document.body.classList.toggle("nav-open");
});

navEl.addEventListener("click", function () {
  document.body.classList.remove("nav-open");
});

let openTestimonials = document.querySelectorAll(".testimonials__mobile h4");
let textTestimonials = document.querySelectorAll(".testimonials__text-mobile");

for (let i = 0; i < openTestimonials.length; i++) {
  openTestimonials[i].addEventListener("click", function () {
    textTestimonials[i].classList.toggle("active");
  });
}
