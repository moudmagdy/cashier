let changeViewBtn = document.querySelector('.features-btns--layout-view-btn');
let changeViewMenu = document.querySelector('.change-view-menu');
let changeViewMenuItems = document.querySelectorAll('.change-view-menu ul li');
let productCard = document.querySelectorAll('.product-card');
let productCardImage = document.querySelectorAll('.product-card .product-card--image');
let productCardTitle = document.querySelectorAll('.product-card .product-card--details-title');
let productCardMenuBtn = document.querySelectorAll('.product-card .product-card--btn');
let selectedCardBorder = document.querySelectorAll('.product-card--selected-card');
let productCardDesc = document.querySelectorAll('.product-card--details-price');
let productCardDetails = document.querySelectorAll('.product-card--details');
let allElementsInCard = document.querySelectorAll('.product-card *');

let running = false;

// Animation for Data view MENU
let menuTl = new TimelineMax({paused:true})
menuTl.fromTo(changeViewMenu, 0.1, {display: 'none', opacity: 0}, {display: 'block',opacity: 1,})
.fromTo(changeViewMenuItems, 0.3, {opacity: 0,top:'4rem',position:'relative'}, {position:'relative',opacity: 1,top:"0rem",stagger:0.1,ease:Back.easeOut.config(1.7)},'-=0.1')
menuTl.reverse()
changeViewBtn.addEventListener('click',()=>{menuTl.reversed(!menuTl.reversed())})
// END Animation for Data view MENU


// START GRIDVIEW TIMELINE
let listviewTimeline = new TimelineMax({paused:true})
listviewTimeline.to(productCard,0.1,{
    opacity:'0',
    // stagger:0.03
})
listviewTimeline.to(productCard,0,{
    width:'41.16em',
    height:'8em',
    flexDirection:'row'
})
.to(productCardMenuBtn,0,{left:'0',right:'auto'})
.to(selectedCardBorder,0,{left:'auto',right:'-11px'})
.to(productCardImage,0,{
    width:'34%',
    height:'100%'
})
.to(productCardTitle,0,{
    opacity:'0',
})
.to(productCardTitle,0,{
    display:'block',
    opacity:'1',
    fontSize:'1.6em'
})

listviewTimeline.to(productCard,0.2,{
    opacity:'1',
    stagger:0.06
})
// END GRIDVIEW TIMELINE



// START GRIDVIEW TIMELINE
let boxViewTimeline = new TimelineMax({paused:true})
boxViewTimeline.to(productCard,0.1,{
    opacity:0,
    // stagger:0.03
})
.to(productCardTitle,0,{
    display:'none'
})
.to(productCard,0,{
    height:'19.342em',
    width:'20.16em',
    flexDirection:'column',
})
.to(productCardImage,0,{
    height:'100%'
})
.to(productCardDesc,0,{
    marginBottom:'0px'
 })
.to(productCardDetails,0,{
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '28%'
})
.to(productCard,0.2,{
    opacity:1,
    stagger:0.06,
    
})
// END GRIDVIEW TIMELINE






changeViewMenuItems.forEach(ele => {
    ele.addEventListener('click',(e)=>{
        let clickedItem = e.currentTarget.getAttribute('data-view');
        menuTl.reverse(0.3);
        switch(clickedItem){
            case 'listview':
                running = true;
                allElementsInCard.forEach(el =>{el.removeAttribute('style');})
                productCard.forEach(card =>{
                    card.removeAttribute('style');
                    card.classList.remove('boxView')
                    card.classList.remove('gridview')
                    card.classList.add('listview')
                })
                listviewTimeline.play();
                running === true ? listviewTimeline.restart() : null;
            break;
            case 'boxView':
                running = true;
                allElementsInCard.forEach(el =>{el.removeAttribute('style');})
                productCard.forEach(card =>{
                    card.removeAttribute('style');
                    card.classList.remove('gridview')
                    card.classList.remove('listview')
                    card.classList.add('boxView')
                })
                boxViewTimeline.play();
                running === true ? boxViewTimeline.restart() : null;
            break;
            case 'gridview':
                if(running === true){
                    allElementsInCard.forEach(el =>{el.removeAttribute('style');})
                    productCard.forEach(card =>{card.removeAttribute('style');
                    card.classList.remove('listview')
                    card.classList.remove('boxView')
                    card.classList.add('gridview')})
                }else{running = false;}
            break;

        }
    })
  });
