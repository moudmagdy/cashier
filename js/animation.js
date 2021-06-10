$('#removeClientName').fadeOut();

  const fadeOut = ele => {
    let fadeOut = new TimelineMax();
    fadeOut.to(ele,0.5,{opacity:'0',display:'none'})
  }
  const fadeIn = ele => {
    let fadeIn = new TimelineMax();
    fadeIn.to(ele,0.5,{opacity:'1',display:'block'})
  }

  let client_title = document.getElementById('client_title');

  let tl = new TimelineMax();

  let sidebarItems = document.querySelectorAll('.sidebar ul li');
  let salesCard = document.querySelectorAll('.salesContainer .card');
  let divider = document.querySelectorAll('.divider');
  let billdivider = document.querySelectorAll('.billdivider');
  let clientContainer = document.getElementsByClassName('.clientContainer');
  let billDetails = document.querySelectorAll('.billDetails');
  let productsList = document.getElementById('productsList');
  let clientList = document.getElementById('clientList');
  let listOfUsers = document.querySelectorAll('#list-of-Users li');
  let headerAddClient = document.getElementsByClassName('.headerAddClient');
  let dropdownClient = document.getElementById('dropdownClient');
  let bill = document.getElementsByClassName('bill');
  let bgBills = document.getElementById('bg-bills');
  let closeClientsList = document.getElementById('closeClientsList');


  tl.fromTo(sidebarItems, 0.5, { opacity: 0,position:'relative',right:'-70px'}, {opacity: 1,position:'relative',right:0,stagger: 0.1})
  .fromTo(salesCard, 0.3, {opacity: 0,position:'relative',bottom:'-20px'}, {opacity: 1,position:'relative',bottom:0,stagger: 0.1},'-=1')
  .fromTo(divider, 0.5, {opacity: 0,position:'relative',width:'0'}, {opacity: 1,position:'relative',width:'100%',stagger: 0.1},'-=2.5')
  .fromTo(billdivider, 0.5, {opacity: 0,position:'relative',width:'0'}, {opacity: 1,position:'relative',width:'100%',stagger: 0.1},'-=1.5')
  .fromTo(clientContainer, 0.5, {opacity: 0,top:'100px'}, {opacity: 1,top:'56px'},'-=4.45')
  .fromTo(billDetails, 0.5, {opacity: 0,position:'relative',bottom:'-20px'}, {opacity: 1,position:'relative',bottom:0,stagger: 0.1},'-=4.45')


  $('#lang').on('click',function(){
      $('body').toggleClass('ltr');
      tl.restart()
  })


    // add client list animation
  let tl2 = new TimelineMax({paused:true});
  tl2.to(productsList,0.3,{opacity:'0',display:'none'})
  tl2.fromTo(clientList,0.3,{display:'none',opacity:'0'},{display:'block',opacity:1})
  tl2.fromTo(listOfUsers,0.3,{display:'none',opacity:'0',bottom:'-30px'},{display:'block',opacity:1,bottom:'0px',stagger:0.1},'-=0.3')
  tl2.fromTo(headerAddClient,0.3,{opacity:0,top:'40px'},{opacity:1,top:"4px"},'-=1.6')


  dropdownClient.addEventListener('click',()=>{
    tl2.play();
    fadeOut(bill)
    bgBills.classList.add('fullAddClientScreen')
  })

  // $('#dropdownClient').on('click',function(){
  //   tl2.play();
  //   $('.bill').fadeOut();
  //   $('.bg-bills').addClass('fullAddClientScreen')
  // });


  closeClientsList.addEventListener('click',()=>{
    bgBills.classList.remove('fullAddClientScreen')
    tl2.reverse(0.7);
    tl.restart()
    setTimeout(function(){
      fadeIn(bill)
    },500)
  })




  listOfUsers.forEach(element => {
      element.addEventListener('click',()=>{
        let userNametext = $( this ).find('#name').text();
        let userPhone = $( this ).find('#userPhone').text();
        dropdownClient.style.backgroundColor='#e3f3ff';
        $('#removeClientName').fadeIn();
        client_title.innerText= userNametext +" - "+ userPhone
        tl2.reverse(0.7);
        fadeIn(bill)
        dropdownClient.classList.add('stopClick')
      })
  });

  // // to get clicke item value from add client 
  // $( "#list-of-Users li" ).each(function( index ) {
  //   $(this).on('click',function(){
  //     let userNametext = $( this ).find('#name').text();
  //     let userPhone = $( this ).find('#userPhone').text();
  //     dropdownClient.style.backgroundColor='#e3f3ff';
  //     $('#removeClientName').fadeIn();
  //     client_title.innerText= userNametext +" - "+ userPhone
  //     tl2.reverse(0.7);
  //     fadeIn(bill)
  //     dropdownClient.classList.add('stopClick')

  //     // if(client_title.innerText !== 'اضف عميل'){
  //     //   console.log('has value');
  //     //   dropdownClient.addClass('stopClick')
  //     // }else{
  //     //   console.log('not has value');
  //     // }
  //   })
  // });





  let tl3 = new TimelineMax();
  tl3.fromTo('.billdropdown .item-content',0.5,{opacity: 0,position:'relative',bottom:'-30px'}, {opacity: 1,position:'relative',bottom:0,stagger: 0.1})
  tl3.reversed(true);
  $('#menuIcon').on('click',function(){
    tl3.reversed(!tl3.reversed());
  })
  // Dropdownmenu animation 



  $('.cash-button').on('click',function(){
    iziToast.show({
      title: 'تمت العمليه بنجاح',
      message: 'تم تسجيل فاتورتك بنجاح',
      color:'green',
      transitionIn:'fadeInUp',
  });
  let tl4 = new TimelineMax();
  tl4.fromTo('.divider', 0.5, {opacity: 0,position:'relative',width:'0'}, {opacity: 1,position:'relative',width:'100%',stagger: 0.1},'-=2.5')
  tl4.fromTo('.billDetails', 0.5, {opacity: 0,position:'relative',bottom:'-20px'}, {opacity: 1,position:'relative',bottom:0,stagger: 0.1},'-=4.45')
  tl4.reverse(0.7);

  })

  
  // to get clicke item value from add client 
  $( ".billDetails .productNameText" ).each(function( index ) {
      let gettingTitleValue = this.innerText;
      tippy(this, {
        onShow(instance) {
          instance.setContent(gettingTitleValue);
          const box = instance.popper.firstElementChild;
          box.classList.add('tippyStyle');
        },
        allowHTML: true,
        animation: 'scale'  
      })
  });


// reset input after click close button
$('#removeClientName').on('click',function(){
  client_title.innerText= 'اضف عميل';
  if(client_title.innerText === 'اضف عميل'){
   $('#removeClientName').fadeOut();
  dropdownClient.classList.remove('stopClick')

  }

})





