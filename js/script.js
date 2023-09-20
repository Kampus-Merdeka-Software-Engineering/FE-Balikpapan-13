const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
}

const swiper = new Swiper('.reviews-slider', {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    breakpoint: {
        540: {
            slidePerView: 1,
        },
        768: {
            slidePerView: 2,
        },
        1024: {
            slidePerView: 3,
        },
    },
});