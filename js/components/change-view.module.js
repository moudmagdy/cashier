const changeViewDropdownItems = document.querySelectorAll('.layout__feature + ul li a');
const productsList = document.querySelector('.products__list');
const products = document.querySelectorAll('.product');

function animateProducts() {
    let a = 0;
    products.forEach((product) => {
        setTimeout(function () {
            product.classList.add('animate__animated', 'animate__fadeInUp');
            product.style.opacity = '1';
        }, a);
        a = a + 100;

        product.addEventListener('animationend', () => {
            product.classList.remove('animate__animated', 'animate__fadeInUp');
        });
    });
}

window.addEventListener('load', animateProducts);

changeViewDropdownItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        item.closest('ul').querySelector('.active').classList.remove('active');
        item.classList.add('active');
        let clickedItem = item.getAttribute('data-view');
        products.forEach((product) => {
            product.removeAttribute('style');
        });
        switch (clickedItem) {
            case 'grid-view':
                productsList.classList.remove('list-view');
                productsList.classList.remove('grid-view--no-title');
                animateProducts();
                break;
            case 'grid-view--no-title':
                productsList.classList.add('grid-view--no-title');
                productsList.classList.remove('list-view');
                animateProducts();
                break;
            case 'list-view':
                productsList.classList.add('list-view');
                productsList.classList.remove('grid-view--no-title');
                animateProducts();
                break;
        }
    });
});