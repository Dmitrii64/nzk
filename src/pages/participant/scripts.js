//mobile-menu
const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__links");

burger.addEventListener("click", () => {
  burger.classList.toggle("header__burger_open");
  menu.classList.toggle("header__links_open");
})

//popup

const logInButton = document.querySelector(".header__log");
const signInButton = document.querySelector(".header__button");
const popUp = document.querySelector("#registration");
const popUpContent = popUp.querySelector(".popup__content");
const body = document.querySelector("body");
const logInContent = `
<span class="popup__title">Вход</span>
<form class="popup__form">
  <input type="email" placeholder="Электронная почта">
  <div class="popup__form-password">
    <input type="password" placeholder="Пароль">
    <button class="popup__form-password-icon" type="button"><button>
  </div>
  <button class="button popup__button">ВОЙТИ</button>
  <span class="popup__line"></span>
  <ul class="popup__socials">
    <li class="popup__social">Войти через<a class="popup__social-icon popup__social-icon_ok"></a></li>
    <li class="popup__social">Войти через<a class="popup__social-icon popup__social-icon_vk"></a></li>
  </ul>
</form>`
const signInContent = `
<span class="popup__title">Регистрация</span>
<form class="popup__form">
  <input type="email" placeholder="Электронная почта">
  <div class="popup__form-password">
    <input type="password" placeholder="Пароль">
    <button class="popup__form-password-icon" type="button"><button>
  </div>
  <div class="popup__checkbox-wrapper">
    <input type="checkbox" id="agreement" checked>
    <label class="popup__checkbox-text" for="agreement">Я принимаю условия <a href="#">Пользовательского
              соглашения</a> и даю своё
            согласие НЗК на обработку моей персональной информации на условиях, определенных <a href="#">Политикой
              конфиденциальности</a>.</label>
  </div>
  <div class="popup__checkbox-wrapper">
    <input type="checkbox" id="news">
    <label class="popup__checkbox-text" for="news">Я не хочу получать рассылку новостей от НЗК</label>
  </div>
  <button class="button popup__button">ЗАРЕГИСТРИРОВАТЬСЯ</button>
  <p class="popup__form-description">Нажимая Зарегистрироваться, вы соглашаетесь с условиями использования.</p>
  <span class="popup__line"></span>
  <ul class="popup__socials">
    <li class="popup__social">Войти через<a class="popup__social-icon popup__social-icon_ok"></a></li>
    <li class="popup__social">Войти через<a class="popup__social-icon popup__social-icon_vk"></a></li>
  </ul>
</form>`

logInButton.addEventListener('click', () => {
  addPopUpContent(logInContent);
  openClosePassword()
});
signInButton.addEventListener('click', () => {
  addPopUpContent(signInContent);
  openClosePassword()
});

function openClosePassword() {
  let passwordInput = document.querySelector('.popup__form-password').querySelector('input');
  let passwordButton = document.querySelector('.popup__form-password-icon');

  passwordButton.addEventListener('click', () => {
    if (passwordInput.getAttribute('type') == 'password') {
      passwordButton.classList.add('popup__form-password-icon_visible');
      passwordInput.setAttribute('type', 'text');
    } else {
      passwordButton.classList.remove('popup__form-password-icon_visible');
      passwordInput.setAttribute('type', 'password');
    }
  })
}

function addPopUpContent(content) {
  popUp.classList.add('popup_open');
  body.classList.add("no-scroll")
  popUpContent.innerHTML = content;

  const closePopUp = popUp.querySelector(".popup__close");
  closePopUp.addEventListener('click', () => {
    popUp.classList.remove('popup_open');
    body.classList.remove("no-scroll")
    popUpContent.innerHTML = ""
  })
}