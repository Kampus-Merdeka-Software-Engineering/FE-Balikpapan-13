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

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'Mengenal Komponen Pembentuk Brand',
        'name': 'footage1.mp4',
        'duration': '2:47',
    },
    {
        'id': 'a2',
        'title': 'Strategi Komunikasi Brand',
        'name': 'footage5.mp4',
        'duration': '2:45',
    },
    {
        'id': 'a3',
        'title': 'Merancang Brand Activation',
        'name': 'footage1.mp4',
        'duration': '2:47',
    },
];

data.forEach((video, i)=> {
    let video_element = `
        <div class="video" data-id="${video.id}">
            <img src="img/circle-play-solid.svg">
            <p>${i + 1}. </p>
            <h3 class="title">${video.title}</h3>
            <p class="time">${video.duration}</p>
        </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
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
    
        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});
