// 1was_galleryLoader.js

const b_i1btn = document.getElementById("b_i1");
const b_i2btn = document.getElementById("b_i2");
const b_i3btn = document.getElementById("b_i3");
const b_i4btn = document.getElementById("b_i4");
const b_i5btn = document.getElementById("b_i5");
const b_i6btn = document.getElementById("b_i6");
const b_i7btn = document.getElementById("b_i7");
const b_i8btn = document.getElementById("b_i8");
const b_i9btn = document.getElementById("b_i9");
const b_i10btn = document.getElementById("b_i10");
const b_i11btn = document.getElementById("b_i11");
const b_i12btn = document.getElementById("b_i12");
const b_i13btn = document.getElementById("b_i13");
const b_i14btn = document.getElementById("b_i14");
const b_i15btn = document.getElementById("b_i15");
const b_i16btn = document.getElementById("b_i16");
const b_i17btn = document.getElementById("b_i17");
const b_i18btn = document.getElementById("b_i18");
const b_i19btn = document.getElementById("b_i19");

const picture_title_disp = document.getElementById("picture-title")

const picture_titles = [
    "Fountain",
    "Bright Flower",
    "Underexposed Flower",
    "Green Garden from Above",
    "Overexposed Circle of Flowers",
    "Field of Plant Things",
    "Group of Round Cacti",
    "Overexposed Rose",
    "Unfocused Rose",
    "Group of Flowers",
    "Flat Cactus",
    "Mini Tree",
    "Group of Stacked Stones",
    "Group of Stacked Stones 2",
    "Colorful Boulder",
    "Lots of Cacti Circles",
    "Green and Black Borders",
    "Extravagent Bark Pattern",
    "Plethora of Lilac Flowers"
]

const maxImages = 19;
let imgNum = 0;
let index = 1;

const images = document.querySelectorAll('.imgs img');

    // Display the first image on startup
images[0].style.display = 'block';

function refreshImg() {
    images.forEach((image, i) => {
        if (i == imgNum) {
            image.style.display = 'block';
            index = i; // Update the global index variable
        } else {
            image.style.display = 'none';
        }
    });
    picture_title_disp.innerHTML = picture_titles[index]; 
}

b_i1btn.addEventListener('click', function() {
    imgNum = 0;
    refreshImg();
});

b_i2btn.addEventListener('click', function() {
    imgNum = 1;
    refreshImg();
});

b_i3btn.addEventListener('click', function() {
    imgNum = 2;
    refreshImg();
});

b_i4btn.addEventListener('click', function() {
    imgNum = 3;
    refreshImg();
});

b_i5btn.addEventListener('click', function() {
    imgNum = 4;
    refreshImg();
});

b_i6btn.addEventListener('click', function() {
    imgNum = 5;
    refreshImg();
});

b_i7btn.addEventListener('click', function() {
    imgNum = 6;
    refreshImg();
});

b_i8btn.addEventListener('click', function() {
    imgNum = 7;
    refreshImg();
});

b_i9btn.addEventListener('click', function() {
    imgNum = 8;
    refreshImg();
});

b_i10btn.addEventListener('click', function() {
    imgNum = 9;
    refreshImg();
});

b_i11btn.addEventListener('click', function() {
    imgNum = 10;
    refreshImg();
});

b_i12btn.addEventListener('click', function() {
    imgNum = 11;
    refreshImg();
});

b_i13btn.addEventListener('click', function() {
    imgNum = 12;
    refreshImg();
});

b_i14btn.addEventListener('click', function() {
    imgNum = 13;
    refreshImg();
});

b_i15btn.addEventListener('click', function() {
    imgNum = 14;
    refreshImg();
});

b_i16btn.addEventListener('click', function() {
    imgNum = 15;
    refreshImg();
});

b_i17btn.addEventListener('click', function() {
    imgNum = 16;
    refreshImg();
});

b_i18btn.addEventListener('click', function() {
    imgNum = 17;
    refreshImg();
});

b_i19btn.addEventListener('click', function() {
    imgNum = 18;
    refreshImg();
});

const backBtn = document.getElementById('back');
backBtn.addEventListener('click', function() {
    window.location.href = "../../sd.html";
});

console.log("Execute");
imgNum = 0;
refreshImg();