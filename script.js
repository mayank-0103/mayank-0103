// Getting elements
const elem_1 = document.querySelector('#card1');
const elem_2 = document.querySelector('#card2');
const elem_3 = document.querySelector('#card3');
const elem_4 = document.querySelector('#card4');

function body_width() {
    document.body.style.width = (95/100*document.documentElement.clientWidth) + "px";
};

body_width();
window.onresize = body_width;

// Adding links to each of them
elem_1.addEventListener("click", function () {
    window.location.href = "https://mayank-0103.github.io/Calculator-M/";
})
elem_2.addEventListener("click", function () {
    window.location.href = "https://mayank-0103.github.io/Image-Gallery/";
})
elem_3.addEventListener("click", function () {
    window.location.href = "https://mayank-0103.github.io/Guess-the-number/";
})
elem_4.addEventListener("click", function () {
    window.location.href = "https://mayank-0103.github.io/tic-tac-toe/";
})
elem_5.addEventListener("click", function () {
    window.location.href = "https://github.com/mayank-0103";
})