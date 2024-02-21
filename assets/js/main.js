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
}