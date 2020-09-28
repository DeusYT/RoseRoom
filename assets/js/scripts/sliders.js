/* slider */
const slides = document.querySelectorAll('.slider__slide');
const slide_prev = document.querySelector('#slide_prev');
const slide_next = document.querySelector('#slide_next');
const dotsWrap = document.querySelector('.dots');
const dots = document.querySelectorAll('.dots__dot');

let slideIndex = 1;

showSlides(slideIndex);

function showSlides(n) {

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach((item) => item.style.opacity = 0);
    dots.forEach((item) => item.classList.remove('dots__dot_active'));

    slides[slideIndex - 1].style.opacity = 1;
    dots[slideIndex - 1].classList.add('dots__dot_active');
}

function plusSlide(n) {
   showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

slide_prev.addEventListener('click', function() {
    plusSlide(-1);
});

slide_next.addEventListener('click', function() {
    plusSlide(1);
});


dotsWrap.addEventListener('click', function(event){
    for (let i = 0; i < dots.length + 1; i++) {
        if (event.target.classList.contains('dots__dot') && event.target == dots[i-1]) {
            currentSlide(i);
        }
    }
});

/* slider */

/* review slider */

const review_prev = document.querySelector('#review-slide_prev');
const review_next = document.querySelector('#review-slide_next');
const line = document.querySelector('#line');


let left = 0;
let percent = 8;

function reviewSlide(idx) {
    const lineWidth = line.offsetWidth;
    const windowWidth = document.querySelector('#window').offsetWidth;
    const edge = lineWidth - windowWidth;
    let paddingEdge = (lineWidth*percent)/100;
    left = left + 285*idx;

    if(left < -(edge)) {
        left = 0;
    }

    if(left > 10) {
        left = -(edge - paddingEdge);
    }

    line.style.left = left +'px';
    console.log(edge);
}
 
review_next.addEventListener('click', function() {
    reviewSlide(-1)
});

review_prev.addEventListener('click', function() {
    reviewSlide(1)
});

window.addEventListener('resize', function() {
    line.style.left = 0;
})

/* review slider */

