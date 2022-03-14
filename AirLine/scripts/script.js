
//Обьявление кнопок карусели
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
//изображения карусели
let images = document.querySelectorAll(".slides img");
//счетчик
let i = 0;
//при нажатии на кнопку скрываает активное изобрражение
//далее переключает на предыдущее по счету изображение
prev.onclick = function(){
    images[i].style.display = 'none';
    i--;

    //Если доходит до конца слайдов то карусель идет по кругу
    if(i<0){
        i = images.length - 1;
    }

    images[i].style.display = 'block';
}
//при нажатии на кнопку скрываает активное изобрражение
//далее переключает на следующее по счету изображение
next.onclick = function(){
    images[i].style.display = 'none';
    i++;
    //Если доходит до конца слайдов то карусель идет по кругу
    if(i>=images.length){
        i = 0;
    }
    images[i].style.display = 'block';
}