const mainMenu = document.querySelector('.main-menu');
const mainMenuToggles = document.querySelectorAll('.main-menu__toggle');
const menuNav = mainMenu.querySelector('nav');
const menuNavElementsLength = menuNav.querySelectorAll('a').length;
// const theRestNavElments = menuNav.querySelectorAll('a:nth-last-child(-n+' + (menuNavElementsLength - 8) + ')');
const theRestNavElments = menuNav.querySelectorAll('a:nth-child(+n+8)');

mainMenuToggles.forEach(mainMenuToggle => {
  mainMenuToggle.addEventListener('click', (e) => {
    e.preventDefault();
    mainMenu.classList.toggle('main-menu--opened');
  });
});

function createSubmenu() {
  const newSubmenu = document.createElement('div');
  newSubmenu.classList.add('submenu');
  const newSubmenuToggle = document.createElement('a');
  newSubmenuToggle.setAttribute('href', '#');
  newSubmenuToggle.innerHTML = '<svg width="10" height="2" viewBox="0 0 10 2"><path d="M10,1c0,0.6-0.4,1-1,1S8,1.6,8,1s0.4-1,1-1S10,0.4,10,1z M6,1c0,0.6-0.4,1-1,1S4,1.6,4,1s0.4-1,1-1 S6,0.4,6,1z M2,1c0,0.6-0.4,1-1,1S0,1.6,0,1s0.4-1,1-1S2,0.4,2,1z"></path></svg>';
  newSubmenu.appendChild(newSubmenuToggle);
  const submenuContent = document.createElement('div');
  submenuContent.classList.add('submenu__content');
  newSubmenu.appendChild(submenuContent);
  menuNav.appendChild(newSubmenu);

  if (menuNavElementsLength > 8) {
    theRestNavElments.forEach(element => {
      const clonedElement = element.cloneNode(true);
      // element.remove();
      submenuContent.appendChild(clonedElement);
    });
  }

  newSubmenuToggle.addEventListener('click', (e) => {
    e.preventDefault();
    newSubmenu.classList.toggle('submenu-shown');
  });
}

window.addEventListener('load', createSubmenu);