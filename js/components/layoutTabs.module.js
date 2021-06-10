let tabBtnMain = document.querySelectorAll('.main-layout-tab-btn');
let subTabBtn = document.querySelectorAll('.clients-tabs-btn');
let asideClientTabs = document.querySelectorAll('.asideClientTabs');
let asideClientTabs2 = document.querySelectorAll('.clients-tabs-btn2');



const layoutTabs = (e, layoutContainer, tabsBtn) => {
  e.preventDefault();
  let getContent = document.querySelectorAll(`${layoutContainer}`);
  let getTabs = document.querySelectorAll(`${tabsBtn}`);
  getTabs.forEach(ele => {
    ele.classList.remove('active');
  });
  getContent.forEach(element => {
    element.classList.remove('active')
  });

  let clickItem = e.currentTarget.getAttribute('data-target-id');
  let clickItemHash = '#' + clickItem;
  let getLayout = document.querySelector(clickItemHash);
  getLayout.classList.add('active')
  e.currentTarget.classList.add('active')


}

asideClientTabs.forEach(node => {
  node.addEventListener('click', function (e) {
    layoutTabs(e, '.aside-tab-content', '.asideClientTabs')
  })
});

tabBtnMain.forEach(node => {
  node.addEventListener('click', function (e) {
    layoutTabs(e, '.layout-container', '.main-layout-tab-btn')
  })
});

subTabBtn.forEach(node => {
  node.addEventListener('click', function (e) {
    layoutTabs(e, '.customers-tab-content', '.clients-tabs-btn')
  })
});

subTabBtn.forEach(node => {
  node.addEventListener('click', function (e) {
    layoutTabs(e, '.deviceInfo-tab-content', '.layout-tabs--buttons')
  })
});


asideClientTabs2.forEach(node => {
  node.addEventListener('click', function (e) {
    layoutTabs(e, '.order-tab-content', '.clients-tabs-btn2')
  })
});





// layoutTabs function take 2 parameter



// 1 - Event
// 2 - Tab Content class name
// 3 - take Tabs btn class name 

// if you have more than One layout tabs please don't forget to add custom class for every one in html and in call function in js
// same class to btns
// same class to content