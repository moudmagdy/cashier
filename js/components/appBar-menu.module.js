let appbar_menu_btn = document.querySelector('.appbar-menu-btn');
let appbar_menu = document.querySelector('.appbar-menu');
let appbar_menuItems = document.querySelectorAll('.appbar-menu ul li');


let tl = new TimelineMax({
    paused: true
});
tl.fromTo(appbar_menu, 0.1, {
    display: 'none',
    opacity: 0
}, {
    display: 'block',
    opacity: 1,
  
})
.fromTo(appbar_menuItems, 0.3, {

    opacity: 0,
    top:'4rem',
    position:'relative'
}, {
    position:'relative',
    opacity: 1,
    top:"0rem",
    stagger:0.1,
    ease:Back.easeOut.config(1.7)
  
},'-=0.1')
tl.reverse()
appbar_menu_btn.addEventListener('click', () => {
    tl.reversed(!tl.reversed())
})


let itemsClick = document.querySelectorAll('.appbar-menu ul li');

itemsClick.forEach(element => {
    element.addEventListener('click',()=>{
    tl.reverse(0.9)
        
    })
});
// let layoutContainerRight = document.querySelector('.layout-right--container'); 
// let invoice = document.querySelector('#salesInvoice'); 
// layoutContainerRight.addEventListener('click',()=>{
//     tl.reverse(0.5)

// })
// invoice.addEventListener('click',()=>{
//     tl.reverse(0.5)

// })