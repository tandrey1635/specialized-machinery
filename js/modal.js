function showModal() {
	const body = document.querySelector('body')
	const modal = document.querySelector('.modal')
	const modalTitle = document.querySelector('.modal__title')
	const modalText = document.querySelector('.modal__text')
	const modalImg = document.querySelector('.modal__img img')
	const modalPrice = document.querySelector('.modal__text_price')
	const modalBtns = document.querySelector('.modal__block__btns')

	if (!modal) return

	function addClass(selector, className) {
		selector.classList.add(className)
	}

	function removeClass(selector, className) {
		selector.classList.remove(className)
	}

	function hideModalContent() {
		addClass(modalPrice, 'hide')
		addClass(modalBtns, 'hide')
		addClass(modal.firstElementChild, 'auto-height')
	}

	function resetModal() {
		setTimeout(function() {
			removeClass(modal, 'show')
			removeClass(modalPrice, 'hide')
			removeClass(modalBtns, 'hide')
			removeClass(body, 'overflow')
			removeClass(modal.firstElementChild, 'auto-height')
			modalText.textContent = 'Вы действительно хотите арендовать эту технику?'
		}, 1000)
	}

	body.addEventListener('click', function(e) {
		if (e.target.classList.contains('catalog__btn_right') || (e.target.classList.contains('btn__rent'))) {
			addClass(modal, 'show')
			addClass(body, 'overflow')

			const technic = e.target.closest('.promo__slider') || e.target.closest('.popular__technic__slider') || e.target.closest('.catalog__item')
			const technicImg = technic.querySelector('.promo__slider__img img') || technic.querySelector('.popular__technic__slider__img img') || technic.querySelector('.catalog__img img')
			const technicTitle = technic.querySelector('.promo__slider__name') || technic.querySelector('.popular__technic__name') || technic.querySelector('.catalog__heading')
			const technicPrice = technic.querySelector('.promo__slider__price') || technic.querySelector('.popular__technic__price') || technic.querySelector('.catalog__price')

			modalImg.src = technicImg.src
			modalImg.alt = technicImg.alt
			modalTitle.textContent = technicTitle.textContent
			modalPrice.textContent = technicPrice.textContent
		}

		if (e.target.classList.contains('btn__modal_yes')) {
			modalText.textContent = 'Успешно Арендовано!'
			hideModalContent()
			resetModal()
		}

		if (e.target.classList.contains('btn__modal_no')) {
			modalText.textContent = 'Отменено пользователем'
			hideModalContent()
			resetModal()
		}
	})
}

showModal()