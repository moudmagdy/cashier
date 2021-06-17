const mainMenu = document.querySelector('.main-menu');
const mainMenuToggles = document.querySelectorAll('.main-menu__toggle');

mainMenuToggles.forEach(mainMenuToggle => {
  mainMenuToggle.addEventListener('click', (e) => {
    e.preventDefault();
    mainMenu.classList.toggle('main-menu--opened');
  });
});