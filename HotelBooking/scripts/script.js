let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

let slides = document.querySelectorAll(".slider img");

let i=0;

prev.onclick = function(){
    slides[i].style.width = "0";
    slides[i].style.opacity = "0";
    i--;

    if(i<0){
        i = slides.length - 1;
    }

    slides[i].style.width = "240px";
    slides[i].style.opacity = "1";
}

next.onclick = function(){
    slides[i].style.width = "0";
    slides[i].style.opacity = "0";
    i++;

    if(i>=slides.length){
       i=0;
    }

    slides[i].style.width = "240px";
    slides[i].style.opacity = "1";
}