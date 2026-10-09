function handleBurgerMenuNavigation() {
	const wrapper = document.querySelector('.wrapper')
    const burgerMenuBtn = document.querySelector('.burger__menu')
    const burgerMenuLine = document.querySelectorAll('.burger__menu__line')
    const burgerMenu = document.querySelector('.header__nav')

	if (!burgerMenuBtn) return

	function changeActiveClass(selector) {
		selector.forEach(function(selector) {
            selector.classList.toggle('active__line')
        })
	}

    burgerMenuBtn.addEventListener('click', function() {
        burgerMenu.classList.toggle('header__mobile__active')
		document.body.classList.toggle('overflow')
		changeActiveClass(burgerMenuLine)
    })

	wrapper.addEventListener('click', function(e) {
		if (e.target.classList.contains('header__nav__link')) {
			burgerMenu.classList.remove('header__mobile__active')
			document.body.classList.remove('overflow')
			changeActiveClass(burgerMenuLine)
		}
	})
}

handleBurgerMenuNavigation()