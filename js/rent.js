const wrapper = document.querySelector('.wrapper')


// header fixed 

const headerFixed = document.querySelector('.block__header')
const headerFixedMobile = document.querySelector('.header__top__mobile')
const headerMenuMobile = document.querySelector('.header__bottom__mobile')

window.addEventListener('scroll', () => {
    if (window.pageYOffset  >= 200) {
        headerFixed.classList.add('active')
        headerFixedMobile.classList.add('active')
    }
    else {
        headerFixedMobile.classList.remove('active')
        headerFixed.classList.remove('active')
        
    }
})




// мобильное меню

wrapper.addEventListener('click', (event) => {
    if (event.target.classList.contains('block__burger')|| (event.target.classList.contains('block__burger-line'))) {
        headerMenuMobile.classList.toggle('mobile-active')
        document.body.style.overflow = 'hidden'
    }
    if (!headerMenuMobile.classList.contains('mobile-active')) {
        document.body.style.overflow = 'auto'
    }
     
})


// Стрелка Вверх
const arrowUp = document.querySelector('.up-arrow')

window.addEventListener('scroll', () => {
    if (window.pageYOffset  >= 500) {
        arrowUp.style.display = 'flex'
    }
    else {

        arrowUp.style.display = 'none'
    }
})

arrowUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})













// Темная тема 
const changeTheme = document.querySelector('.switcher__input')

if (localStorage.getItem('darkTheme') === 'true') {
    document.body.classList.add('dark__theme')
    changeTheme.checked = true
}

changeTheme.addEventListener('change', () => {
   
    if (localStorage.getItem('darkTheme') === 'true') {
        localStorage.removeItem('darkTheme')
        document.body.classList.remove('dark__theme')
    }
    else {
        localStorage.setItem('darkTheme', 'true')
        document.body.classList.add('dark__theme')
    }
  
})


// Темная тема мобильная версия
const changeThemeMobile = document.querySelector('.switcher__input-mobile')

if (localStorage.getItem('darkTheme') === 'true') {
    document.body.classList.add('dark__theme')
    changeThemeMobile.checked = true
}

changeThemeMobile.addEventListener('change', () => {
   
    if (localStorage.getItem('darkTheme') === 'true') {
        localStorage.removeItem('darkTheme')
        document.body.classList.remove('dark__theme')
    }
    else {
        localStorage.setItem('darkTheme', 'true')
        document.body.classList.add('dark__theme')
    }
  
})