import './../components/layoutTabs.module.js';
import '../components/appBar-menu.module.js';


document.getElementById('btn--receive-cash').addEventListener('click',(e)=>{
    e.preventDefault()
    iziToast.show({
        title: 'تم بنجاح',
        message: 'تم استلام المبلغ بنجاح',
        color:'green',
        transitionIn:'fadeInUp',
    });
})


