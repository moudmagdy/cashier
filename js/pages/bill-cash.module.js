import './../components/layout-nav.module.js';
import '../components/appBar-menu.module.js';


document.getElementById('receive__cash__btn').addEventListener('click', (e) => {
    e.preventDefault()
    iziToast.show({
        title: 'تم بنجاح',
        message: 'تم استلام المبلغ بنجاح',
        color: 'green',
        transitionIn: 'fadeInUp',
    });
})


