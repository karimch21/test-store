const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: "fraction",
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperProducts = new Swiper('.swiper.products-slider', {
  loop: true,
  
  pagination: {
    el: '.swiper-pagination.products-slider__pagination',
    type: "fraction",
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const burgerMenu = document.querySelector('.burger-menu');
const hideMenu = document.querySelector('.header-main__hidden');

window.addEventListener('click', (e)=>{
  checkClickMenu(e);
})
burgerMenu.addEventListener('click', ()=>{
  switchBurger()
  switchMenu()
})

function checkClickMenu(e){
  const targetEl = e.target;

  if(targetEl){
    if(targetEl.closest('.burger-menu')){
      return
    }
    const menuItemLink = targetEl.closest('a');
    if(menuItemLink){
      if(menuItemLink.className.includes('link')){
        switchMenu()
        removeActiveClassBurger()
      }
    }
    if(!targetEl.closest('.hidden-menu') && burgerMenu.classList.contains('burger-menu--active')){
      switchMenu()
      removeActiveClassBurger()
    }
  }
}

function switchBurger(){
  burgerMenu.classList.toggle('burger-menu--active')
}

function removeActiveClassBurger(){
  burgerMenu.classList.remove('burger-menu--active')
}

function switchMenu(){
  hideMenu.classList.toggle('header-main__hidden--active')
}
