const triggerOpen = document.querySelectorAll('[trigger-button]');
const triggerClose = document.querySelectorAll('[close-button]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < triggerOpen.length; i++) {
    let currentId = triggerOpen[i].dataset.target;
    let targetEl = document.querySelector(`#${currentId}`);

    const openData = function () {
        targetEl.classList.remove('active');
        overlay.classList.remove('active');
    };

    triggerOpen[i].addEventListener('click', function () {
        targetEl.classList.add('active');
        overlay.classList.add('active');
    });

    if (targetEl) {
        targetEl.querySelector('[close-button]').addEventListener('click', openData);
    }

    overlay.addEventListener('click', openData);
}


// monile-menu submenu
const submenu=document.querySelectorAll('.child-trigger');
submenu.forEach((menu) => menu.addEventListener('click',function(e){
    e.preventDefault();
    submenu.forEach((item)=>item !=this?item.closest('.has-child').classList.remove('active'):null)
    if(this.closest('.has-child').classList!='active'){
        this.closest('.has-child').classList.toggle('active');
    }
}))


// slider
const swiper = new Swiper('.sliderbox', {
    loop: true,
    effect: 'fade',
    autoHeight: true, // Fix the typo here
    
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
    },
});

// caaroust
const carousel = new Swiper('.carouselbox', {
    spaceBetween: 30,
    slidesPerView: 'auto',
    centeredSlides: true,
  
    // If you need pagination
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
  
    breakpoints: {
      481: {
        slidesPerView: 2,
        slidePerGroup:1,
        centeredSlides: false,
      },
      640: {
        slidesPerView: 3,
        slidePerGroup:3,
        centeredSlides: false,
      },
      992: {
        slidesPerView: 4,
        slidePerGroup:4,

        centeredSlides: false,
      },
    }
  });
  
  
