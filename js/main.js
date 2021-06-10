$( document ).ready(function() {
//Avoid dropdown menu close on click inside
// $("#Dropdown").click(function(e){
//   e.stopPropagation();
// })
//side menu overlay
    $('#navbarSideButton').on('click', function() {
      $('#navbarSide').addClass('reveal')
    });
      // Open navbarSide when button is clicked
      $('#navbarSideButton').on('click', function() {
        $('#navbarSide').addClass('reveal');
        $('.overlay').show();
      });
    
      // Close navbarSide when the outside of menu is clicked
      $('.overlay').on('click', function(){
        $('#navbarSide').removeClass('reveal');
        $('.overlay').hide();
      });

  });
      //focus on first input in add new client modal

  // $('#addNew_client').on('shown.bs.modal', function() {
  //   $('client-name').focus();
  // })
  // function toggleClientsList(){
  //   var x = document.getElementById("clientList");
  //   var y =  document.getElementById('productsList');

  //   if (x.style.display === "none") {
  //     x.style.display = "block";
  //     y.style.display = 'none';

  //   } else {
  //     y.style.display = 'block';
  //     x.style.display = "none";
  //   }
  // }

    // Add client animation
  


  //toggle favourite icon 
  function swap(){
    let img1= document.getElementById('favauriteIcon1');
      img2= document.getElementById('favauriteIcon2');
      img1src=img1.src;
      img1.style.display='none'
      img2.style.display='block'
    // img1.src="imgs/client_icon.svg"
  }
  function Toggleswap(){
    let img1= document.getElementById('favauriteIcon1');
    img2= document.getElementById('favauriteIcon2');
    img1src=img1.src;
    img1.style.display='block'
    img2.style.display='none'
  }

  // let s  = document.getElementById('salesContainer ')
  // s.addEventListener('scroll',function(e){
  //   console.log(e);
  // })
