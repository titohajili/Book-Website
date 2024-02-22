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

  window.addEventListener('scroll', shadowHeader)