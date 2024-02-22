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

// swiper home

let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: 'auto', 
    centeredSlides: "auto",

    autoplay: {
        delay:3000,
        disableOnInteraction: false,

    },

    breakpoints: {
        1220: {
            spaceBetween: -32,
        }
    }
})