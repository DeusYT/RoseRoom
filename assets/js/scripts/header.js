/*menu open*/

const menuOpen = document.querySelector('#menu_open');
const menu = document.querySelector('#menu');
const menuClose = document.querySelector('#menu_close');
const modalHomePage = document.querySelector('#modal_home-page');
const modalCloseHomePage = document.querySelector('#popup_close_home-page');
const openPopupHomePage = document.querySelector('#popup_open_home-page');

function openModal(el, className) {
    if(!el.classList.contains(className)) {
        el.classList.add(className);
    }
}

function closeModal(el, className) {
    if(el.classList.contains(className)) {
        el.classList.remove(className);
    }
}

menuOpen.addEventListener('click', function() {
    openModal(menu, 'menu_open');
});

menuClose.addEventListener('click', function() {
    closeModal(menu, 'menu_open');
});

openPopupHomePage.addEventListener('click', function() {
    openModal(modalHomePage, 'popup_open')
});

modalCloseHomePage.addEventListener('click', function() {
    closeModal(modalHomePage, 'popup_open');
})

/*menu close*/


