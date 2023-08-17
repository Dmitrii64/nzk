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
  <input type="password" placeholder="Пароль">
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
  <input type="password" placeholder="Пароль">
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

logInButton.addEventListener('click', () => { addPopUpContent(logInContent) });
signInButton.addEventListener('click', () => { addPopUpContent(signInContent) });

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

//accordion
const nominations = document.querySelectorAll(".nominees__list");
nominations.forEach(list => {
  list.addEventListener("click", (event) => {
    let item = event.target.closest('.nominee__header');
    if (!item) return;
    item.closest('.nominee').classList.toggle("nominee_open");

    let activeCategory = item.closest('.nominee');
    let activeCategoryTitle = activeCategory.querySelector('.nominee__title').innerHTML;
    let activeCompanies = [];
    activeCategory.querySelectorAll('.nominee__item').forEach(item => activeCompanies.push(item.innerHTML))

    activeCategory.querySelector('.nominee__list').addEventListener('click', (event) => {
      let item = event.target.closest('.nominee__item');
      if (!item) return;

      const nominationPopUp = document.querySelector("#nomination");
      const nominationPopUpContent = nominationPopUp.querySelector(".popup__content");
      const content = `
      <p class="popup__nominees">${activeCategoryTitle}</p>
      <p class="popup__nominees-title">Проголосовать за компанию </p>
      <form class="popup__nominees-form">
      <button disabled class="button popup__nominees-button">Проголосовать</button>
      </form>`

      nominationPopUp.classList.add('popup_open');
      nominationPopUpContent.innerHTML = content;
      let popUpForm = nominationPopUpContent.querySelector('.popup__nominees-form');
      activeCompanies.forEach((item, i) => popUpForm.insertAdjacentHTML("afterbegin",
        `<div class="popup__nominees-input-wrapper">
          <input type="radio" id="company${i}" name="company">
          <label for="company${i}">${item}</label>
        </div>`))
      body.classList.add("no-scroll");

      let popUpButton= popUpForm.querySelector('.popup__nominees-button');
      popUpForm.addEventListener('click', (event) => {
        if (event.target && event.target.matches("input[type='radio']")) {
          popUpButton.removeAttribute('disabled')
        }
      });

      popUpButton.addEventListener('click', ()=>{
        nominationPopUpContent.innerHTML = `
        <p class="popup__nominees">${activeCategoryTitle}</p>
        <ul class="popup__nominees-rating"></ul>`
        let popRating = nominationPopUpContent.querySelector('.popup__nominees-rating');
        activeCompanies.forEach((item, i) => popRating.insertAdjacentHTML("beforeend",
        `<li class="popup__nominees-rating-item">
          <p class="popup__nominees-rating-title">${item}</p>
          <span class="popup__nominees-rating-value">${50-5*i}%</span>
          <div class="popup__nominees-rating-line">
            <span style="display:block; width: ${50-5*i}%; height: 14px; border-radius: 6px; background: #FF7A00; opacity: ${1-(0.1*i)}"></span>
          </div>
        </li>`))
      })

      const closePopUp = nominationPopUp.querySelector(".popup__close");
      closePopUp.addEventListener('click', () => {
        nominationPopUp.classList.remove('popup_open');
        body.classList.remove("no-scroll");
        nominationPopUpContent.innerHTML = '';
      })
    })
  })
})