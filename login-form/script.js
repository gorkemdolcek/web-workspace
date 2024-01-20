const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
});
wrapper.classList.add('active-popup');


btnLogin-popup.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});


document.querySelector('.home-button').addEventListener('click', function() {
    // Yeni sayfaya yönlendirme işlemi
    window.location.href = 'yeni_sayfa.html';
});
