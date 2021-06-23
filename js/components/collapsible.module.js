const collapseToggles = document.querySelectorAll('.collapse__toggle:not(.services .collapse__toggle)');
const collapseContainers = document.querySelectorAll('.collapse__container');
const servicesCollapseToggles = document.querySelectorAll('.services .collapse__toggle');

collapseContainers.forEach(container => {
    window.addEventListener('load', () => {
        if (container.parentNode.classList.contains('collapsed')) {
            container.style.maxHeight = 0;
        } else {
            container.style.maxHeight = container.scrollHeight + 'px';
        }
    });
});

collapseToggles.forEach(collapseToggle => {
    collapseToggle.addEventListener('click', (e) => {
        e.preventDefault();

        const parentCollapsible = collapseToggle.closest('.collapsible');
        const siblingCollapseContainer = collapseToggle.parentNode.nextElementSibling;

        let getSiblings = function (elem) {
            // Setup siblings array and get the first sibling
            let siblings = [];
            let sibling = elem.parentNode.firstChild;

            // Loop through each sibling and push to the array
            while (sibling) {
                if (sibling.nodeType === 1 && sibling !== elem) {
                    siblings.push(sibling);
                }
                sibling = sibling.nextSibling
            }
            return siblings;
        };

        let siblings = getSiblings(parentCollapsible);

        for (let sibling of siblings) {
            if (sibling.classList.contains('collapsible')) {
                if (!sibling.classList.contains('collapsed')) {
                    sibling.classList.add('collapsed');
                    sibling.querySelector('.collapse__container').style.maxHeight = 0;
                    sibling.querySelector('.collapse__toggle').setAttribute('aria-expanded', 'false');
                }
            }
        }

        if (!parentCollapsible.classList.contains('collapsed')) {
            parentCollapsible.classList.add('collapsed');
            siblingCollapseContainer.style.maxHeight = 0;
            collapseToggle.setAttribute('aria-expanded', 'false');
        } else {
            parentCollapsible.classList.remove('collapsed');
            siblingCollapseContainer.style.maxHeight = siblingCollapseContainer.scrollHeight + 'px';
            collapseToggle.setAttribute('aria-expanded', 'true');
        }
    });
});

servicesCollapseToggles.forEach(servicesCollapseToggle => {
    servicesCollapseToggle.addEventListener('click', (e) => {
        e.preventDefault();
        const parentCollapsible = servicesCollapseToggle.closest('.collapsible');
        const siblingCollapseContainer = servicesCollapseToggle.parentNode.nextElementSibling;
        if (!parentCollapsible.classList.contains('collapsed')) {
            parentCollapsible.classList.add('collapsed');
            siblingCollapseContainer.style.maxHeight = 0;
            servicesCollapseToggle.setAttribute('aria-expanded', 'false');
            // siblingCollapseContainer.style.removeProperty('overflow-y');
        } else {
            parentCollapsible.classList.remove('collapsed');
            siblingCollapseContainer.style.maxHeight = siblingCollapseContainer.scrollHeight + 'px';
            servicesCollapseToggle.setAttribute('aria-expanded', 'true');
            // setTimeout(function () {
            //     siblingCollapseContainer.style.overflowY = 'auto';
            // }, 350);
        }
    });
});