const changeViewDropdownItems = document.querySelectorAll('.layout__feature + ul li a');
const productsList = document.querySelector('.products__list');

changeViewDropdownItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        item.closest('ul').querySelector('.active').classList.remove('active');
        item.classList.add('active');
        let clickedItem = item.getAttribute('data-view');
        switch (clickedItem) {
            case 'grid-view':
                productsList.classList.remove('list-view');
                productsList.classList.remove('grid-view--no-title');
                break;
            case 'grid-view--no-title':
                productsList.classList.add('grid-view--no-title');
                productsList.classList.remove('list-view');
                break;
            case 'list-view':
                productsList.classList.add('list-view');
                productsList.classList.remove('grid-view--no-title');
                break;
        }
    });
});