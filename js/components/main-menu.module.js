const windowHeight = window.innerHeight;
const mainMenu = document.querySelector('.main-menu');
const mainMenuToggles = document.querySelectorAll('.main-menu__toggle');
const headerMainMenuToggle = document.querySelector('.page__layout header > .main-menu__toggle');
const menuNav = document.querySelector('.main-menu nav');
const menuNavItem = document.querySelectorAll('.main-menu nav > a');
const menuNavItemsLength = menuNavItem.length;

mainMenuToggles.forEach(mainMenuToggle => {
    mainMenuToggle.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('body').classList.toggle('main-menu--opened');
    });
});

function closeMainMenu(e) {
    if (!headerMainMenuToggle.contains(e.target) && (!mainMenu.contains(e.target))) {
        document.querySelector('body').classList.remove('main-menu--opened');
    }
}


function createSubmenu() {
    const navMenuItemHeight = 76;
    const navMaximumOccupancy = Math.floor(menuNav.offsetHeight / navMenuItemHeight);
    const theRestNavElments = document.querySelectorAll('.main-menu nav > a:nth-child(+n+' + navMaximumOccupancy + ')');
    if (menuNavItemsLength > navMaximumOccupancy) {
        const subMenu = document.createElement('div');
        const subMenuToggle = document.createElement('a');
        const subMenuContent = document.createElement('div');

        if (!menuNav.querySelector('.submenu')) {
            subMenu.classList.add('submenu');
            subMenuToggle.setAttribute('href', '#');
            subMenuToggle.innerHTML = '<svg width="10" height="2" viewBox="0 0 10 2"><path d="M10,1c0,0.6-0.4,1-1,1S8,1.6,8,1s0.4-1,1-1S10,0.4,10,1z M6,1c0,0.6-0.4,1-1,1S4,1.6,4,1s0.4-1,1-1 S6,0.4,6,1z M2,1c0,0.6-0.4,1-1,1S0,1.6,0,1s0.4-1,1-1S2,0.4,2,1z"></path></svg>';
            subMenu.appendChild(subMenuToggle);
            subMenuContent.classList.add('submenu__content');
            subMenu.appendChild(subMenuContent);
            menuNav.appendChild(subMenu);

            subMenuToggle.addEventListener('click', (e) => {
                e.preventDefault();
                subMenu.classList.toggle('submenu-shown');
            });

            menuNavItem.forEach(item => {
                item.classList.remove('d-none');
            });

            theRestNavElments.forEach(element => {
                const clonedElements = element.cloneNode(true);
                subMenuContent.appendChild(clonedElements);
                // element.remove();
                element.classList.add('d-none');
            });

        }
        else {
            menuNavItem.forEach(item => {
                item.classList.remove('d-none');
            });

            document.querySelector('.submenu__content').innerHTML = '';

            console.log(theRestNavElments)
            theRestNavElments.forEach(element => {
                const clonedElements = element.cloneNode(true);
                document.querySelector('.submenu__content').appendChild(clonedElements);
                element.classList.add('d-none');
            });
        }
    }
}
function updateSubmenu() {
    if (window.innerHeight != windowHeight) {
        console.log(window.innerHeight);
        let subMenuContent = menuNav.querySelector('.submenu__content');
        if (menuNav.querySelector('.submenu')) {
            subMenuContent.innerHTML = '';
            theRestNavElments.forEach(element => {
                subMenuContent.appendChild(element.cloneNode(true));
                element.classList.add('d-none');
                // element.remove();
            });
        }
        // menuNav.querySelectorAll('a').forEach(item => {
        //     item.classList.remove('d-none');
        // });
        // while (subMenuContent.firstChild) {
        //     subMenuContent.firstChild.remove();
        // }
    }
    // menuNav.querySelectorAll('a').forEach(item => {
    //     item.classList.remove('d-none');
    // });
    // while (subMenuContent.firstChild) {
    //     subMenuContent.firstChild.remove();
    // }
    // subMenuContent.innerHTML = '';
}
document.addEventListener('click', (e) => document.querySelector('body').classList.contains('main-menu--opened') ? closeMainMenu(e) : "");
window.addEventListener('load', createSubmenu);
window.addEventListener('resize', createSubmenu);