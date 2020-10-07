 //Select DOM Items
const menuBtn = document.querySelector ( '.menu__btn' );
const menu = document.querySelector ( '.menu__navigation' );
const menuNav = document.querySelector ( '.menu__nav' );
const menuBranding = document.querySelector ( '.menu__branding' );
const navItems = document.querySelectorAll ( '.menu__nav li' );

//Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener( 'click',  toggleMenu );

function toggleMenu() {
  if( !showMenu ) {
    menuBtn.classList.add( 'close' );
    menu.classList.add( 'show' );
    menuNav.classList.add( 'show' );
    menuBranding.classList.add( 'show' );
    navItems.forEach( item => item.classList.add ( 'show' ) );

    //Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove( 'close' );
    menu.classList.remove( 'show' );
    menuNav.classList.remove( 'show' );
    menuBranding.classList.remove( 'show' );
    navItems.forEach( item => item.classList.remove ( 'show' ) );
    //Set Menu State
    showMenu = false;
  }
}


//SWIPER SLIDER - for desktop
var swiper = new Swiper('.swiper-container.desktop-slider', {
  slidesPerView: 3,
  loop: true,
  autoplay: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3
    },
  }
});
//SWIPER SLIDER - for mobile
var swiper = new Swiper('.swiper-container.mobile-slider', {
      effect: 'cube',
      grabCursor: false,
      loop: true,
      infinite: true,
      autoplay: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      pagination: {
        el: '.swiper-pagination',
      },
});