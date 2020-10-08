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

openPopupBasketPage.addEventListener('click', function() {
    openModal(popupBasketPage, 'popup_open');
});

closePopupBasketPage.addEventListener('click', function() {
    closeModal(popupBasketPage, 'popup_open');
});