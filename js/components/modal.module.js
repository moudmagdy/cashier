let getAlltargetsBtn = document.querySelectorAll('[data-target-modal]');

let tl = new TimelineMax({paused: true });
let popOpened = false;

getAlltargetsBtn.forEach(element => {

    element.addEventListener('click', (e) => {
        if(popOpened === false){
        let x;
        let y;
        if (e.pageX || e.pageY) {
            x = e.pageX;
            y = e.pageY;
        } else {
            x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }

        let getData = element.getAttribute('data-target-modal');
        // let get the pop up name
        let popUpName = document.querySelector('.' + getData);
        let overlay = document.querySelector('.overlay');
        tl.to(popUpName, 0, { top: y,left: x})
        .fromTo(popUpName, 0.3, {display: 'none',opacity: 0}, {display: 'block',opacity: 1,onComplete:()=>{popOpened = true;}})
        .fromTo(overlay, 0.3, {display: 'none',opacity: 0}, {display: 'block',opacity: 1},'-=0.3')
        tl.play();
        }

    })
});

let close_popup = document.querySelectorAll('.cancel-submit-btn');

close_popup.forEach(element => {
    element.addEventListener('click',()=>{
        console.log('close btn clicked!');
        tl.reverse(0.3);
        tl.eventCallback("onReverseComplete", ()=>{
            tl.clear();
        });
        popOpened = false;
    })
});
