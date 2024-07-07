// gallery_imgLoader.js

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
const b_i20btn = document.getElementById("b_i20");

const picture_title_disp = document.getElementById("picture-title")
const picture_data_disp = document.getElementById("picture-data")

const picture_titles = [
    "Maid of the Mist",
    "Waterfall of Light",
    "Traffic Jam with a Cutoff",
    "Mini Farmland",
    "Festival",
    "Night Markets",
    "Gazebo",
    "Miniature Starbucks!",
    "Possible Clock Tower",
    "Modern Gathering Area",
    "Highway Traffic",
    "Parked Car",
    "Toronto Sign",
    "Highway & Tow Truck",
    "Skyline",
    "Cut Off Highway",
    "Bridge and Sky",
    "Big Bridge & Gathering",
    "Empty Turnpike",
    "Carnival & Hot Air Balloons"
]

/* "IMG_000<br>Aperture: f/0.0<br>Shutter speed: 0/0", */
const picture_data = [
    "IMG_0379<br>Aperture: f/6.3<br>Shutter speed: 1/80",
    "IMG_0380g<br>Aperture: f/3.5<br>Shutter speed: 1/60",
    "IMG_0392<br>Aperture: f/6.3<br>Shutter speed: 1/125",
    "IMG_0401<br>Aperture: f/3.5<br>Shutter speed: 1/60",
    "IMG_0404<br>Aperture: f/6.3<br>Shutter speed: 1/125",
    "IMG_0412<br>Aperture: f/4.0<br>Shutter speed: 1/50",
    "IMG_0419<br>Aperture: f/6.3<br>Shutter speed: 1/15",
    "IMG_0445<br>Aperture: f/6.3<br>Shutter speed: 1/160",
    "IMG_0446<br>Aperture: f/3.5<br>Shutter speed: 1/60",
    "IMG_0454<br>Aperture: f/3.5<br>Shutter speed: 1/80",
    "IMG_0477<br>Aperture: f/6.3<br>Shutter speed: 1/20",
    "IMG_0498<br>Aperture: f/7.1<br>Shutter speed: 1/160",
    "IMG_0512<br>Aperture: f/7.1<br>Shutter speed: 1/160",
    "IMG_0533<br>Aperture: f/7.1<br>Shutter speed: 1/160",
    "IMG_0537<br>Aperture: f/4.0<br>Shutter speed: 1/60",
    "IMG_0569<br>Aperture: f/5.0<br>Shutter speed: 1/100",
    "IMG_0597<br>Aperture: f/3.5<br>Shutter speed: 1/60",
    "IMG_0610<br>Aperture: f/6.3<br>Shutter speed: 1/80",
    "IMG_0636<br>Aperture: f/3.5<br>Shutter speed: 1/60",
    "IMG_0647<br>Aperture: f/3.5<br>Shutter speed: 1/60",
]

const maxImages = 20;
let imgNum = 0;
let index = 1;

const images = document.querySelectorAll('.imgs img');

    // Display the first image on startup
images[0].style.display = 'block';

function refreshImg() {
    console.log(picture_data_disp);
    images.forEach((image, i) => {
        if (i == imgNum) {
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

b_i20btn.addEventListener('click', function() {
    imgNum = 19;
    refreshImg();
});

const backBtn = document.getElementById('back');
backBtn.addEventListener('click', function() {
    window.location.href = "../../../destinations/toronto.html";
});

refreshImg();