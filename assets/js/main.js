//======SEARCH========
const searchButton = document.getElementById('search-button')
const saearchClose = document.getElementById('search-close')
const searchContent = document.getElementById('search-content')

if(searchButton){
    searchButton.addEventListener('click', () =>{
        searchContent.classList.add('show-search')
    })
}

if(saearchClose){
    saearchClose.addEventListener('click', () =>{
        searchContent.classList.remove('show-search')
    })
};

//===== LOGIN =======

const loginButton = document.getElementById('login-button')
const loginClose = document.getElementById('login-close')
const loginContent = document.getElementById('login-content')

if(loginButton){
    loginButton.addEventListener('click', () =>{
        loginContent.classList.add('show-login')
    })
}

if(loginClose){
    loginClose.addEventListener('click', () =>{
        loginContent.classList.remove('show-login')
    })
};

// swipeezz

let swiperHome = new Swiper('.home__swiper', {
    spaceBetween : -24,
    loop: true,
    grabCursor : true,
    slidesPerView:'auto',
    centeredSlides: 'auto',

    autoplay:{
        delay:3000,
        disableOnInteraction: false,

    },

    breakpoints: {
        1220: {
            spaceBetween: -32,
        }
    }
  });


  const shadowHeader = () => {
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
  }

  window.addEventListener('scroll', shadowHeader);



  //================== FEATURED SWIPER ==============

  
let swiperFeatured = new Swiper('.featured__swiper', {
    spaceBetween : 16,
    loop: true,
    grabCursor : true,
    slidesPerView:'auto',
    centeredSlides: 'auto',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    breakpoints: {
        1150: {
           slidesPerView: 3,
           centeredSlides: false,
        }
    }
  });

  //============NEW===========


  let swiperNew = new Swiper('.new__swiper', {
    spaceBetween : 16,
    loop: true,
    slidesPerView:'auto',

    breakpoints: {
        1150: {
           slidesPerView: 3,
        }
    }
  });

  //==========testimonial======

   
let swiperTestimonial = new Swiper('.testimonial__swiper', {
    spaceBetween : 16,
    loop: true,
    grabCursor : true,
    slidesPerView:'auto',
    centeredSlides: 'auto',

    breakpoints: {
        1150: {
           slidesPerView: 3,
           centeredSlides: false,
        }
    }
  });

  //SCROLL UP

  const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up');

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                : scrollUp.classList.remove('show-scroll')
  }

  window.addEventListener('scroll', scrollUp)
 
  const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link')
        } else {
            sectionClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)


//=====THEME DARK===

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'


const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ?  'ri-moon-line' : 'ri-sun-line'

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () =>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

//=====================SCROLL  REVEAL ANIMATION =============

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,

})

sr.reveal(`.home__data, .featured__container, .new__container
            .join__data, .testimonial__container, .footer`)
sr.reveal(`.home__images`, {delay: 600})
sr.reveal(`.services__card`, {interval: 100})
sr.reveal(`.discount__data`, {origin: 'left'})
sr.reveal(`.discount__images`, {origin: 'right'})