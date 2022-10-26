"use strict";

// CAROUSEL

// window.addEventListener("DOMContentLoaded", () => {
//   const rightBtnEl = document.querySelector(".btn-right");
//   const leftBtnEl = document.querySelector(".btn-left");

//   const slider = document.querySelector(".carousel-slide");
//   const testimonialBoxEl = document.querySelectorAll(".testimonial-box");

//   let counter = 0;
//   const stepSize = testimonialBoxEl[0].clientWidth;
//   console.log(stepSize);

//   slider.style.transform = "translateX(" + `${-stepSize * counter}px)`;

//   rightBtnEl.addEventListener("click", () => {
//     counter >= testimonialBoxEl.length - 1 ? (counter = -1) : null;

//     slider.classList.add("transform-animation");
//     counter++;

//     slider.style.transform = "translateX(" + `${-stepSize * counter}px)`;
//   });

//   leftBtnEl.addEventListener("click", () => {
//     counter <= 0 ? (counter = testimonialBoxEl.length) : null;

//     slider.classList.add("transform-animation");
//     counter--;

//     slider.style.transform = "translateX(" + `${-stepSize * counter}px)`;
//   });
// });

//MODAL WINDOW

let body = document.querySelector("body");
let fullBioText = document.querySelector(".full-bio-container");
let bioBtn = document.querySelector(".read-more");
let philosophyBtn = document.querySelector(".teaching-philosophy");
let fullPhilosophyText = document.querySelector(".full-philosophy-container");
let closeModalBtns = document.querySelectorAll(".close-modal");
console.log(closeModalBtns);

let overlay = document.querySelector(".overlay");

bioBtn.addEventListener("click", function () {
  fullBioText.classList.remove("hidden");
  overlay.classList.remove("hidden");
  body.classList.add("body.modal-open");
});

philosophyBtn.addEventListener("click", function () {
  fullPhilosophyText.classList.remove("hidden");
  overlay.classList.remove("hidden");
  body.classList.add("body.modal-open");
});

function closeModal() {
  fullBioText.classList.add("hidden");
  fullPhilosophyText.classList.add("hidden");
  overlay.classList.add("hidden");
  body.classList.remove("body.modal-open");
}

for (let i = 0; i < closeModalBtns.length; i++) {
  closeModalBtns[i].addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !fullBioText.classList.contains("hidden")) {
      closeModal();
    }
    if (
      event.key === "Escape" &&
      !fullPhilosophyText.classList.contains("hidden")
    ) {
      closeModal();
    }
  });
}

