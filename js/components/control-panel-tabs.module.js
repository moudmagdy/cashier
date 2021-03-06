const controlPanelContainer = document.querySelector('.control-panel__tabs');
const controlPanelTabs = document.querySelectorAll('.control-panel__tabs a');
const selectedIndicator = document.querySelector('.selected__indicator');
const selectedTab = document.querySelector('.selected--tab');
const selectedTabLeftPosition = selectedTab.offsetLeft;
const selectedTabWidth = selectedTab.offsetWidth;

function loadIndicator() {
    if (typeof (controlPanelContainer) != 'undefined' && controlPanelContainer != null) {
        selectedIndicator.style.left = selectedTabLeftPosition + 'px';
        selectedIndicator.style.width = selectedTabWidth + 'px';
    }
}
window.addEventListener('load', loadIndicator);

window.addEventListener('resize', () => {
    if (typeof (controlPanelContainer) != 'undefined' && controlPanelContainer != null) {
        selectedIndicator.style.width = selectedTabWidth + 'px';
        selectedIndicator.style.transition = 'none';
    }
});

controlPanelTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const tabViewTarget = tab.getAttribute('data-tab');
        document.querySelector('[data-content].content--shown').classList.remove('content--shown');
        document.querySelector('[data-content="' + tabViewTarget + '"]').classList.add('content--shown');

        if (tabViewTarget == 'spare-parts') {
            document.querySelector('main').classList.add('spare-parts--shown');
        } else {
            document.querySelector('main').classList.remove('spare-parts--shown');
        }

        const tabLeftPosition = tab.offsetLeft;
        const tabWidth = tab.offsetWidth;
        selectedIndicator.style.left = tabLeftPosition + 'px';
        selectedIndicator.style.width = tabWidth + 'px';
        selectedIndicator.style.transition = 'left 0.3s ease-in-out';

        tab.closest('.control-panel__tabs').querySelector('.selected--tab').classList.remove('selected--tab');
        tab.classList.add('selected--tab');
    });
});

const sparePartsCloseBtn = document.querySelector('.close--btn');
if (sparePartsCloseBtn) {
    sparePartsCloseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('main').classList.remove('spare-parts--shown');
        document.querySelector('.control-panel__tabs .selected--tab').classList.remove('selected--tab');
        document.querySelector('.control-panel__content.content--shown').classList.remove('content--shown');
        document.querySelector('.control-panel__content').classList.add('content--shown');
        document.querySelector('.control-panel__tabs a').classList.add('selected--tab');
        loadIndicator();
    });
}