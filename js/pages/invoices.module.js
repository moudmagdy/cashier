import '../components/layoutTabs.module.js';
// to enable popup and positioning popup 
import '../components/modal.module.js';
// to enbale menu in appbar
import '../components/appBar-menu.module.js';
// to enable function to get clicked client to get value and show in input in prdouct list 
// import './../components/client-list.module.js'
import './../components/sidemenu.module.js';

let tl3 = new TimelineMax({paused:true});
let productsListContainer = document.querySelector('.products-list-container')
tl3.to(productsListContainer,0.3,{opacity:'0'})

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






// checkout ANimation


let checkout = document.querySelector('.checkout');
let checkoutItems = document.querySelectorAll('.checkout-list--item');
let total_final = document.querySelector('.checkout-list--item.total-final');
let checkoutChartBtn = document.querySelector('.checkout-chart-btn');

let checkoutTimeLine = new TimelineMax({paused:true});


checkoutTimeLine.to(checkout,0.3,{height:'42rem'})
checkoutTimeLine.to(checkoutItems,0.3,{display:'flex',opacity:'1'});


checkoutTimeLine.reverse()


checkoutChartBtn.addEventListener('click',()=>{
    checkoutTimeLine.reversed(!checkoutTimeLine.reversed())
})
