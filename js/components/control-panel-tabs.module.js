const cpTabs = document.querySelectorAll('.control-panel__tabs a');
const selectedIndicator = document.querySelector('.selected__indicator');
const selectedTab = document.querySelector('.selected--tab');
const selectedTabLeftPosition = selectedTab.offsetLeft;
const selectedTabWidth = selectedTab.offsetWidth;

function restyleIndicator() {
    selectedIndicator.style.left = selectedTabLeftPosition + 'px';
    selectedIndicator.style.width = selectedTabWidth + 'px';
}

window.addEventListener('load', restyleIndicator);
window.addEventListener('resize', restyleIndicator);

cpTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const tabLeftPosition = tab.offsetLeft;
        const tabWidth = tab.offsetWidth;
        selectedIndicator.style.left = tabLeftPosition + 'px';
        selectedIndicator.style.width = tabWidth + 'px';

        // const tabDataAttr = tab.dataset.tab;
        // const activeTabParent = document.querySelector('.layout__tab__content[data-tab="' + tabDataAttr + '"]');


        tab.closest('.control-panel__tabs').querySelector('.selected--tab').classList.remove('selected--tab');
        tab.classList.add('selected--tab');


        // let getSiblings = function (elem) {
        //     // Setup siblings array and get the first sibling
        //     let siblings = [];
        //     let sibling = elem.parentNode.firstChild;

        //     // Loop through each sibling and push to the array
        //     while (sibling) {
        //         if (sibling.nodeType === 1 && sibling !== elem) {
        //             siblings.push(sibling);
        //         }
        //         sibling = sibling.nextSibling
        //     }
        //     return siblings;
        // };

        // let siblings = getSiblings(activeTabParent);

        // for (let sibling of siblings) {
        //     sibling.classList.remove('selected--tab')
        // }

        // document.querySelector('.layout__tab__content[data-tab="' + tabDataAttr + '"]').classList.add('selected--tab');
    });
});