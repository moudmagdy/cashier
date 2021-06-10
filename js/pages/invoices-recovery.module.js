import '../components/layoutTabs.module.js';
// to enable popup and positioning popup 
import '../components/modal.module.js';
// to enbale menu in appbar
import '../components/appBar-menu.module.js';
import './../components/sidemenu.module.js';


let tl3 = new TimelineMax({paused:true});
let productsListContainer = document.querySelector('.products-list-container')
tl3.to(productsListContainer,0.3,{opacity:'0'})


document.getElementById('btn--receive-cash').addEventListener('click',(e)=>{
    e.preventDefault()
    iziToast.show({
        title: 'تم بنجاح',
        message: 'تم استلام المبلغ بنجاح',
        color:'green',
        transitionIn:'fadeInUp',
    });
})





let selectAllBtn = document.getElementById('selectAllBtn');







// Start animation for All Cards in Homepage

let cards = document.querySelectorAll('.product-card');


let productItemInList = document.querySelectorAll('.product-item-in-list');

let tl1 = new TimelineMax({paused:true});


tl1.fromTo(cards,0.5,{opacity:0,top:'5rem'},{opacity:1,top:'0rem',stagger:0.08,ease:Back.easeOut.config(1.7)})
.fromTo(productItemInList,0.5,{opacity:0,top:'5rem'},{opacity:1,top:'0rem',stagger:0.08,ease:Back.easeOut.config(1.7)},'-=1.5')
tl1.play()


cards.forEach(card => {
    card.addEventListener('click',()=>{
        card.classList.toggle('selected')
    })
})


let selected = false;
selectAllBtn.addEventListener('click',()=>{
    if(selected === false){
        cards.forEach(card => {
            selected = true;
            card.classList.add('selected')
        })
    }else{
        cards.forEach(card => {
            selected = false;
            card.classList.remove('selected')
        })
    }
    selectAllBtn.classList.toggle('clicked')
})

