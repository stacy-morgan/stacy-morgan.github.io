// 12wany2_galleryLoader.js

const b_i1btn = document.getElementById("b_i1");
const b_i2btn = document.getElementById("b_i2");
const b_i3btn = document.getElementById("b_i3");

const picture_title_disp = document.getElementById("picture-title")
const picture_data_disp = document.getElementById("picture-data")

const picture_titles = [
    "Maid of the Mist",
    "Waterfall of Light",
    "Traffic Jam with a Cutoff",
    "Mini Farmland",
    "Festival",
]

/*" IMG_000<br>Aperture: f/0.0<br>Shutter speed: 0/0", */
const picture_data = [
    "IMG_0379<br>Aperture: f/6.3<br>Shutter speed: 1/80",
    "IMG_0380g<br>Aperture: f/3.5<br>Shutter speed: 1/60",
    "IMG_0392<br>Aperture: f/6.3<br>Shutter speed: 1/125",
    "IMG_0401<br>Aperture: f/3.5<br>Shutter speed: 1/60",
    "IMG_0404<br>Aperture: f/6.3<br>Shutter speed: 1/125",
]

const maxImages = 3;
let imgNum = 0;
let index = 1;

const images = document.querySelectorAll('.imgs img');

// Display the first image on startup
images[0].style.display = 'block';

function refreshImg() {
    images.forEach((image, i) => {
        if (i === imgNum) {
            image.style.display = 'block';
            index = i; // Update the global index variable
        } else {
            image.style.display = 'none';
        }
    });
    picture_data_disp.innerHTML = picture_data[index];
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

const backBtn = document.getElementById('back');
backBtn.addEventListener('click', function() {
    window.location.href = "../../../gallery/ny_c.html";
});

document.addEventListener("DOMContentLoaded", function () {
    refreshImg();
});