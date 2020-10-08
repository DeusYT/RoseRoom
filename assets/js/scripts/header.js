/*menu open*/

const menuOpen = document.querySelector('#menu_open');
const menu = document.querySelector('#menu');
const menuClose = document.querySelector('#menu_close');
const modalHomePage = document.querySelector('#modal_home-page');
const modalCloseHomePage = document.querySelector('#popup_close_home-page');
const openPopupHomePage = document.querySelector('#popup_open_home-page');
const openPopupBasketPage = document.querySelector('#popup_open_basket-page');
const popupBasketPage = document.querySelector('#modal_basket-page');
const closePopupBasketPage = document.querySelector('#popup_close_basket-page');

function openModal(el, className) {
    if(!el.classList.contains(className)) {
        document.body.classList.add('scroll-hidden');
        el.classList.add(className);
    }
}

function closeModal(el, className) {
    if(el.classList.contains(className)) {
        el.classList.remove(className);
        document.body.classList.remove('scroll-hidden');
    }
}

menuOpen.addEventListener('click', function() {
    openModal(menu, 'menu_open');
});

menuClose.addEventListener('click', function() {
    closeModal(menu, 'menu_open');
});

openPopupHomePage.addEventListener('click', function() {
    openModal(modalHomePage, 'popup_open');
});

modalCloseHomePage.addEventListener('click', function() {
    closeModal(modalHomePage, 'popup_open');
});

openPopupBasketPage.addEventListener('click', function() {
    openModal(popupBasketPage, 'popup_open');
});

closePopupBasketPage.addEventListener('click', function() {
    closeModal(popupBasketPage, 'popup_open');
});

/*menu close*/


document.addEventListener('scroll', function(e) {
    e.preventDefault();
});