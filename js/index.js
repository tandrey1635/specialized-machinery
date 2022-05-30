// Главный блок
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

// Главный слайдер
const slides = document.querySelectorAll('.slider')
    prev = document.querySelector('.arrow__left')
    next = document.querySelector('.arrow__right')
    
let slideIndex = 1
changeSlide()

function changeSlide(n) {
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
   
    slides.forEach(slide => {
        slide.style.display = 'none'
    })
    slides[slideIndex - 1].style.display = 'block'
}


function plusSlide(n) {
    changeSlide(slideIndex += n)
}

prev.addEventListener('click', () => {
    plusSlide(-1)
})

next.addEventListener('click', () => {
    plusSlide(1)
})


// Таймер 
const endTime = '2022-11-31'

function getTimeRemaining(endTime) {
    const totalTime = Date.parse(endTime) - Date.parse(new Date)
    const days = Math.floor(totalTime / (1000 * 60 * 60 * 24))
    const hours = Math.floor((totalTime / (1000 * 60 * 60) % 24))
    const minutes = Math.floor((totalTime / (1000 * 60)% 60))
    const seconds = Math.floor((totalTime / 1000) % 60)
    
    return {
        totalTime,
        days,
        hours,
        minutes,
        seconds
    }
}

function setClock(endTime) {
    const totalTime = document.querySelector('.main__timer')
    const days = document.querySelector('#days')
    const hours = document.querySelector('#hours')
    const minutes = document.querySelector('#minutes')
    const seconds = document.querySelector('#seconds')
    setInterval(updateClock, 1000)
    updateClock()
    function updateClock() {
        const totalTime =  getTimeRemaining(endTime)
       
        days.innerHTML =  totalTime.days
        hours.innerHTML = totalTime.hours
        minutes.innerHTML = totalTime.minutes
        seconds.innerHTML = totalTime.seconds
    }
}
setClock(endTime)


// Аренда
const catalogBox = document.querySelector('.catalog__box')

const modal = document.querySelector('.modal')
const iconOk = document.querySelector('.fa-check-circle')
const iconCancel = document.querySelector('.fa-times-circle')
const modalHeading = document.querySelector('.modal__heading')


// Доработать 
wrapper.addEventListener('click', (event) => {
    const target = event.target
    if (target.classList.contains('slider__btn')) {
        modal.classList.add('modal__active')
    }
})

catalogBox.addEventListener('click', (event) => {
   
    if (event.target.classList.contains('right__btn')) {
        modal.classList.add('modal__active')
    }
  /*  if () {
        event.target.textContent = 'Арендовано'
        event.target.style.cssText = 'background: forestgreen; color: #fff; border: 2px solid forestgreen'
   } 
   else if () {
        event.target.textContent = 'Отменено'
        event.target.style.cssText = 'background: red; color: #fff; border: 2px solid red'
   } */
   
})

function acceptArend() {
    iconOk.style.fontSize = '100px'
    modalHeading.textContent = 'Успешно Арендовано!'
    function closeModal() {
        iconOk.style.fontSize = '0'
        modal.classList.remove('modal__active')
        modalHeading.textContent = 'Вы действительно хотите арендовать эту технику?'
    }
    setTimeout(closeModal, 2000)
}

function cancelArend() {
    iconCancel.style.fontSize = '100px'
    modalHeading.textContent = 'Отмена!'
    function closeModal() {
        iconCancel.style.fontSize = '0'
        modal.classList.remove('modal__active')
        modalHeading.textContent = 'Вы действительно хотите арендовать эту технику?'
    }
    setTimeout(closeModal, 2000)
}

modal.addEventListener('click', (event) => {
    if (event.target.classList.contains('left__btn')) {
        acceptArend()
    }
    if (event.target.classList.contains('right__btn')) {
        cancelArend()
    }
    
})


// Табы 
const parentTabs = document.querySelector('.catalog__menu')
const tabs = document.querySelectorAll('.catalog__list')
const tabsItems = document.querySelectorAll('.catalog__items')


function hideTabs() {
    tabsItems.forEach(tab => {
        tab.style.display = 'none'
    })
}

function showTabs(i = 0) {
    tabsItems[i].style.display = 'block'
} 



function showAllTabs() {
    tabsItems.forEach(tab => {
        tab.style.display = 'block'
    })
}

hideTabs()
showTabs()

parentTabs.addEventListener('click', (event)=> {
    if (event.target.classList.contains('catalog__list')){
        tabs.forEach((tab, i) => {
            if (event.target == tab) {
                hideTabs()
                showTabs(i)
            }
        })
    }
})

// Слайдер популярная техника
const popularTechnicSlides = document.querySelectorAll('.popular__technic-slider')
popularTechnicLeftBtn = document.querySelector('.popular__technic-left_btn')
popularTechnicRightBtn = document.querySelector('.popular__technic-right_btn')

let popularTechnicSlideIndex = 1
changePopularTechnicSlides()

function changePopularTechnicSlides(n) {
    if (n > popularTechnicSlides.length) {
        popularTechnicSlideIndex = 1
    }
    if (n < 1) {
        popularTechnicSlideIndex = popularTechnicSlides.length
    }

    popularTechnicSlides.forEach(slide => {
        slide.classList.remove('active')
    })

    popularTechnicSlides[popularTechnicSlideIndex - 1].classList.add('active')
}
function plusPopularTechnicSlide(n) {
    changePopularTechnicSlides(popularTechnicSlideIndex += n)
}

popularTechnicLeftBtn.addEventListener('click', () => {
    plusPopularTechnicSlide(-1)
})

popularTechnicRightBtn.addEventListener('click', () => {
    plusPopularTechnicSlide(1)
})


// Слайдер отзывы
const revSlider = document.querySelectorAll('.reviews__slider')
const revBtnPrev = document.querySelector('.reviews-left_btn')
const revBtnNext = document.querySelector('.reviews-right_btn')

let revSliderIndex = 1
revСhangeSlide()

function revСhangeSlide(n) {
    if (n > revSlider.length) {
        revSliderIndex = 1
    }
    if (n < 1) {
        revSliderIndex = revSlider.length
    }
   
    revSlider.forEach(slide => {
        slide.style.display = 'none'
    })
    revSlider[revSliderIndex - 1].style.display = 'block'
}


function revPlusSlide(n) {
    revСhangeSlide(revSliderIndex += n)
}

revBtnPrev.addEventListener('click', () => {
    revPlusSlide(-1)
})

revBtnNext.addEventListener('click', () => {
    revPlusSlide(1)
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

