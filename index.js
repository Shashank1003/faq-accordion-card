let answers = document.querySelectorAll(".answer");
let questions = document.querySelectorAll(".question");
let arrows = document.querySelectorAll(".arrow");
let arrow_img = document.querySelectorAll(".arrow-img")
// alert(buttons[2]);

let count = new Array(5).fill(1);

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", function () {
        if (count[i] % 2 !== 0) {
            answers[i].style.display = "block";
            count[i]++;
            questions[i].classList.remove("beforeClick");
            questions[i].classList.add("afterClick");
            arrow_img[i].src = "images/icon-arrow-up.svg";
        } else {
            answers[i].style.display = "none";
            count[i]++;
            questions[i].classList.remove("afterClick");
            questions[i].classList.add("beforeClick");
            arrow_img[i].src = "images/icon-arrow-down.svg";
        }
    });

}

for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener("click", function () {
        if (count[i] % 2 !== 0) {
            answers[i].style.display = "block";
            count[i]++;
            questions[i].classList.remove("beforeClick");
            questions[i].classList.add("afterClick");
            arrow_img[i].src = "images/icon-arrow-up.svg";
        } else {
            answers[i].style.display = "none";
            count[i]++;
            questions[i].classList.remove("afterClick");
            questions[i].classList.add("beforeClick");
            arrow_img[i].src = "images/icon-arrow-down.svg";
        }
    });

}

let screenSize = document.documentElement.clientWidth;
let content = document.querySelector(".content");
let images = document.querySelector(".images");
let box = document.querySelector(".orange-box");
console.log(content);

window.addEventListener("resize", sizeChange);
sizeChange();


function sizeChange() {
    let screenSize = document.documentElement.clientWidth;
    if (screenSize < 768) {
        images.classList.remove("col-6");
        content.classList.remove("col-6");
        content.classList.add("col-12");
        images.classList.add("col-12");
        box.src = "images/illustration-woman-online-mobile.svg";
    } else {
        images.classList.remove("col-12");
        images.classList.add("col-6");
        content.classList.remove("col-12");
        content.classList.add("col-6");
        box.src = "images/illustration-box-desktop.svg";
    }
}