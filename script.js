// POPAP MENU
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//SLAIDER//
const prevBtn_slider = document.getElementById('left__bt');
const nextBtn_slider = document.getElementById('right__bt');
let slider_img_id = document.getElementById('img__slider');

prevBtn_slider.addEventListener('click', prevBtn_img);
nextBtn_slider.addEventListener('click', nextBtn_img);



const imageUrls = ['img/izum.jpg','img/izum1.jpg','img/izum2.jpg','img/izum3.jpg'];

let currentImgIndex = 0;

slider_img_id.src = imageUrls[currentImgIndex];
prevBtn_slider.disabled=true;


function prevBtn_img() {
currentImgIndex--;
if (currentImgIndex === 0) {
	prevBtn_slider.disabled = true;
}
if (currentImgIndex === 1) {
	prevBtn_slider.disabled=false;
}
slider_img_id.src = imageUrls[currentImgIndex];
nextBtn_slider.disabled=false;
}

function nextBtn_img() {
currentImgIndex++;
if (currentImgIndex === ( imageUrls.length - 1) ){
nextBtn_slider.disabled = true;
}
// imageUrls.add('animated');
if (currentImgIndex === ( imageUrls.length) ){
nextBtn_slider.disabled = true;
}
slider_img_id.src = imageUrls[currentImgIndex];
	prevBtn_slider.disabled=false;
}
