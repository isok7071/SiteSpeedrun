//кнопнки назад, вперед
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
//картинки слайдера
let slides = document.querySelectorAll(".slides img");
//счетчик для слайдера
let i = 0;
//переключение слайдов назад с анимацией
prev.onclick = function (){
    slides[i].style.opacity = "0";
    slides[i].style.height = "0";
    i--;
    //бесконечно листаем слайдер
    if(i<0){
        i = slides.length - 1;
    }
    slides[i].style.opacity = "1";
    slides[i].style.height = "200px";
}
//переключение слайдов вперед с анимацией
next.onclick = function (){
    slides[i].style.opacity = "0";
    slides[i].style.height = "0";
    i++;
    //бесконечно листаем слайдер
    if(i>=slides.length){
        i = 0;
    }
    slides[i].style.opacity = "1";
    slides[i].style.height = "200px";
}