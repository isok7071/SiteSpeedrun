//обьявление кнопок карусели
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
//картинки слайдера
let slides = document.querySelectorAll(".slides img");
//счетчик
let i = 0;
//функция, переключаяшая слайды назад
prev.onclick = function(){
    slides[i].style.opacity = "0";
    slides[i].style.height = "0";
    i--;
    if(i<0){
        i = slides.length - 1;
    }
    slides[i].style.opacity = "1";
    slides[i].style.height = "250px";
}
//функция, переключаяшая слайды вперед
next.onclick = function(){
    slides[i].style.opacity = "0";
    slides[i].style.height = "0";
    i++;
    if(i>=slides.length){
        i = 0;
    }
    slides[i].style.opacity = "1";
    slides[i].style.height = "250px";
}