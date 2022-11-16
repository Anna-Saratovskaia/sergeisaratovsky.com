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

const removeFromArray = function (arr, nums) {
  let newArr = [];
  for (let el of arr) {
    console.log(el);
    for (let i = 0; i < nums.length; i++) {
      console.log(i, nums.length);
      if (el != nums[i]) {
        newArr.push(el);
        console.log(newArr);
      }
    }
  }
  return newArr;
};
console.log(removeFromArray([1, 2, 3, 4], [1, 2]));
