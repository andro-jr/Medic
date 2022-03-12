window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 160)
})



var slideImg = document.getElementById("slideImg");

var images = new Array(
    "../images/slider_img1.jpg",
    "../images/slider_img2.jpg",
    "../images/slider_img3.jpg",
    "../images/slider_img4.jpg"
);
var len = images.length;
var i = 0;

function slider() {
    if (i > len - 1) {
        i = 0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()', 5000)
}



let acc = document.getElementsByClassName('faq_box');
let j;
let l = acc.length;
for (j = 0; j < l; j++) {
    acc[j].addEventListener('click', function () {
        this.classList.toggle('active');
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        }
        else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    })

}