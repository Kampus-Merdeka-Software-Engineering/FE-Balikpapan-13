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

// fetch('http://localhost:3000/course')
//     .then((res) => res.json())
//     .then((courses) => {
//         // menampilkan data
//         let listCourse = "";

//         courses.forEach((course) => {
//             listCourse += `
//             <div class="row">
//                 <img src="${course.image_course }">
//                 <div onclick="window.location.href='materi.html?id_course=${course.id_course}';" class="courses-text">
//                     <h3>${course.name_course}</h3>
//                     <h5>${course.kategori_course}</h5>
//                     <h6>${course.vidio_course} Video Lessons</h6>
//                     <div class="rating">
//                         <div class="star">
//                             <a href="#"><i class="fa-solid fa-star"></i></a>
//                             <a href="#"><i class="fa-solid fa-star"></i></a>
//                             <a href="#"><i class="fa-solid fa-star"></i></a>
//                             <a href="#"><i class="fa-solid fa-star"></i></a>
//                             <a href="#"><i class="fa-solid fa-star"></i></a>
//                         </div>
//                         <div class="review">
//                             <p>(99+ Reviews)</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             `
//         })

//         // masukkan data ke dalam DOM
//         document.querySelector(".courses-content").innerHTML = listCourse;
//     })
    
const swiper = new Swiper('.testimonial', {
    slidesPerView: 3,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
      },

    breakpoints: {
        540: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
});