window.onscroll = function showheader()
{
    let menu = document.querySelector('.header-menu');
    if(window.pageYOffset > 650){
        menu.classList.add('menu-fixed');// добавляем стиль(класс) в лист классов menu
       // bar__item.classList.add('bar__item__center');
    }
    else{
        menu.classList.remove('menu-fixed');//удаляем
    }
}