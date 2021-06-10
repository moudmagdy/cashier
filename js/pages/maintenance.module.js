// import '../components/layoutTabs.module.js';
// // to enable popup and positioning popup 
// import '../components/modal.module.js';
// // to enbale menu in appbar
// import '../components/appBar-menu.module.js';
// // to enable function to get clicked client to get value and show in input in prdouct list 
// import clientListRenderer from './../components/client-list.module.js';
// // import './../components/sidemenu.module.js';

// clientListRenderer('salesInvoiceInAside','clientsListInAside','receiveDevice_input')


// // let tl3 = new TimelineMax({
// //     paused: true
// // });
// // let productsListContainer = document.querySelector('.products-list-container')
// // tl3.to(productsListContainer, 0.3, {
// //     opacity: '0'
// // })

// // // Start animation for All Cards in Homepage
// // let cards = document.querySelectorAll('.product-card');
// // let productItemInList = document.querySelectorAll('.product-item-in-list');
// // let tl1 = new TimelineMax({
// //     paused: true
// // });
// // tl1.fromTo(cards, 0.5, {
// //         opacity: 0,
// //         top: '5rem'
// //     }, {
// //         opacity: 1,
// //         top: '0rem',
// //         stagger: 0.08,
// //         ease: Back.easeOut.config(1.7)
// //     })
// //     .fromTo(productItemInList, 0.5, {
// //         opacity: 0,
// //         top: '5rem'
// //     }, {
// //         opacity: 1,
// //         top: '0rem',
// //         stagger: 0.08,
// //         ease: Back.easeOut.config(1.7)
// //     }, '-=1.5')
// // tl1.play()
// // cards.forEach(card => {
// //     card.addEventListener('click', () => card.classList.toggle('selected'))
// // })
// // checkout ANimation
// let checkout = document.querySelector('.checkout');
// let checkoutItems = document.querySelectorAll('.checkout-list--item');
// let total_final = document.querySelector('.checkout-list--item.total-final');
// let checkoutChartBtn = document.querySelector('.checkout-chart-btn');
// let checkoutTimeLine = new TimelineMax({
//     paused: true
// });
// checkoutTimeLine.to(checkout, 0.3, {
//     height: '42rem'
// })
// checkoutTimeLine.to(checkoutItems, 0.3, {
//     display: 'flex',
//     opacity: '1'
// });
// checkoutTimeLine.reverse()
// checkoutChartBtn.addEventListener('click', () => {
//     checkoutTimeLine.reversed(!checkoutTimeLine.reversed())
// });


// // New Functionlity
// let receiveDevice = document.getElementById('receiveDevice');
// let closeSideReceiveDevice = document.getElementById('closeSideReceiveDevice');



// // Receive device side nav animation
// let side_receiveDevice = document.querySelector('.side-receiveDevice')
// let overlay = document.querySelector('.overlay');


// let receiveDeveiceTimeline = new TimelineMax({
//     paused: true
// })

// receiveDeveiceTimeline.to(overlay, 0.3, {
//         display: 'block',
//         opacity: '1',
//         width: '100vw',
//     })
//     .to(side_receiveDevice, 0.3, {
//        left:'0%',
//     })



// receiveDevice.addEventListener('click', () => {
//     receiveDeveiceTimeline.play()
// })



// closeSideReceiveDevice.addEventListener('click',()=>{
//     receiveDeveiceTimeline.reverse();
// })








// // END Receive device side nav animation
// let filter = document.querySelectorAll('.filter ul li')
// const makeItActive = (clickedItem) => {
//     filter.forEach(ele => {
//         ele.classList.remove('active')
//     })
//     clickedItem.classList.add('active');
// }
// filter.forEach(ele => {
//     ele.addEventListener('click', () => {
//         makeItActive(ele)
//     })
// })






// // Two tabs animation Timeline
// let featuresBtns = document.querySelector('.features-btns');
// let activeRequests = document.querySelector('.activeRequests')
// let deliveredRequests = document.querySelector('.deliveredRequests');

// let deliverdTimeline = new TimelineMax({
//     paused: true
// });




// activeRequests.addEventListener('click', () => {
//     checkout.classList.add('active-request');
//     deliverdTimeline.reverse(0.99)

// })



// deliveredRequests.addEventListener('click', () => {
//     checkout.classList.remove('active-request');

//     deliverdTimeline.to(featuresBtns, 0.3, {
//         display: 'none'
//     });
//     deliverdTimeline.to('.total-payments--received', 0.3, {
//         display: 'none'
//     }, '-=0.3')
//     .to('.accordion-activeRequests--maintenanceInfo',0.3,{
//         display:'none',
//     }, '-=0.6')
//     .to('.accordion-deliverdRequests--maintenanceInfo',0.3,{
//         display:'block',
//     }, '-=0.3')
//     .to('.activeRequest-leftSide-oneTab',0.3,{
//         display:'none',
//     }, '-=0.3')

//     .to('.deliverdTabs-multitabs',0.3,{
//         display:'block'
//     })
//     .to('.finishOrderTabs',0.3,{
//         display:'none'
//     })
//     deliverdTimeline.play()

// })


// let finishMaintenanceInChekout = document.querySelector('.finishMaintenanceInChekout');
// let rejectDevice = document.querySelector('.finishMaintenance');
// let rejectDeviceTimeline = new TimelineMax({
//     paused: true
// });

// rejectDevice.addEventListener('click',()=>{
//     rejectDeviceTimeline.to('.activeRequest-leftSide-oneTab',0.3,{display:'none'})
//     .to('.finishOrderTabs',0.3,{
//         display:'block'
//     })
//     .to('.statusPopupOuter',0.3,{
//         opacity:'0',
//         display:'none'
//     })
//     rejectDeviceTimeline.to('.checkout.active-request.hideIt',0.3,{display:'none'},'-=0.3')

//     rejectDeviceTimeline.play()

// })



// let showStatusPopUpTl = new TimelineMax({
//     paused: true
// });
// finishMaintenanceInChekout.addEventListener('click',()=>{
//     showStatusPopUpTl.to('.statusPopup',0.3,{
//         display:'block',
//         opacity:1
//     })
//     showStatusPopUpTl.play()
// })







// // let invoiceInFinishOrder = document.querySelector('.invoiceInFinishOrder');
// // let statusPopupInOrder = document.querySelector('.statusPopup');
// // let invoiceInFinishOrderTl = new TimelineMax({paused:true})

// // invoiceInFinishOrder.addEventListener('click',()=>{

// //     statusPopupInOrder.classList.add('clientInvoiceInTabs')

// //     invoiceInFinishOrderTl.to('.checkout',0.2,{
// //         opacity:0,
// //         display:'none'
// //     })
// //     invoiceInFinishOrderTl.to('.statusPopup',0.2,{
// //         opacity:1,
// //         display:'block'
// //     })
// //     invoiceInFinishOrderTl.play()
// // })