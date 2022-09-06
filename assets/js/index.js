 
 function menuShow() {
    let menuMobile = document.querySelector('.listmenu');
    if(menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    }else {
        menuMobile.classList.add('open');
    }
 }
 