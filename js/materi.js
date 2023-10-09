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

const keyValue = window.location.search;
const urlParam = new URLSearchParams(keyValue);
const param = urlParam.get('id_course');

const dbVidio = `http://localhost:3000/vidio/${param}`;

fetch(dbVidio)
    .then((res) => res.json())
    .then((vidios) => {
        //menampilkan playlist materi
        let listVidio = "";

        vidios.forEach((vidio, i) => {
            listVidio += `
            <div class="video" id="${vidio.id_vidio}">
                <img src="img/circle-play-solid.svg">
                <p>${i + 1}. </p>
                <h3 class="title">${vidio.nama_vidio}</h3>
                <p class="time">${vidio.duration}</p>
            </div>
    `;})
    
    document.querySelector('.video-playlist .videos').innerHTML = listVidio;

    let videos = document.querySelectorAll('.video');
    console.log(videos)
    videos[0].classList.add('active');
    videos[0].querySelector('img').src = 'img/circle-pause-solid.svg';
    
    videos.forEach(selected_video => {
        selected_video.onclick = () => {
    
            for(all_video of videos) {
                all_video.classList.remove('active');
                all_video.querySelector('img').src = 'img/circle-play-solid.svg';
            }
    
            selected_video.classList.add('active');
            selected_video.querySelector('img').src = 'img/circle-pause-solid.svg';
        
            let selectedVideoId = selected_video.getAttribute('id');
            let match_video = vidios.find(vidio => vidio.id_vidio == selectedVideoId);
            document.querySelector('.main-video video').src = `match_video${match_video.link_vidio}`;
            document.querySelector('.main-video .title').innerHTML = `match_video${match_video.nama_vidio}`;

        };

});


});
