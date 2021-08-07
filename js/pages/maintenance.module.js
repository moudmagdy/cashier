import '../components/main-menu.module.js';
import '../components/layout-tabs.module.js';
import '../components/collapsible.module.js';
import '../components/control-panel-tabs.module.js';
// import '../components/change-view.module.js';

const pageLoader = document.querySelector('.page-preloader');

function closePageLoader() {
    pageLoader.classList.add('page-loaded');
}

window.addEventListener('load', closePageLoader);


const receiveDeviceBtn = document.querySelector('.receive-device--btn');
const controlPanel = document.querySelector('.page__layout > .control-panel');
const closeBtn = controlPanel.querySelector('.control-panel__close-btn');

receiveDeviceBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('body').classList.add('control-panel--shown');
});

closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('body').classList.remove('control-panel--shown');
});