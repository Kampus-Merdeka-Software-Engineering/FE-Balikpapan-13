const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", windowscrollY > 0);
});