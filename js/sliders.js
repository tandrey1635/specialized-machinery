function initialSlider(sliders, leftBtn, rightBtn, autoplay = false) {
	const slider = document.querySelectorAll(sliders)
	const sliderBtnLeft = document.querySelector(leftBtn)
	const sliderBtnRight = document.querySelector(rightBtn)

	let slideIndex = 0
	let intervalId

	function showSlide(n) {
		if (n >= slider.length) {
			slideIndex = 0
		}

		if (n < 0) {
			slideIndex = slider.length - 1
		}

		slider.forEach(function(slide) {
			slide.classList.remove('active')
		})

		slider[slideIndex].classList.add('active')
	}

	showSlide(slideIndex)

	function changeSlide(n) {
		showSlide(slideIndex += n)
	}

	function startAutoplay() {
		if (autoplay) {
			intervalId = setInterval(function() {
				slider.forEach(function(slide) {
					slide.classList.remove('change-slide-left')
					slide.classList.add('change-slide-right')
				})
				changeSlide(1)
			}, 5000)
		}
	}

	startAutoplay()

	sliderBtnLeft.addEventListener('click', function() {
		clearInterval(intervalId)
		slider.forEach(function(slide) {
			slide.classList.remove('change-slide-right')
			slide.classList.add('change-slide-left')
		})
		changeSlide(-1)
		startAutoplay()
	})

	sliderBtnRight.addEventListener('click', function() {
		clearInterval(intervalId)
		slider.forEach(function(slide) {
			slide.classList.remove('change-slide-left')
			slide.classList.add('change-slide-right')
		})
		changeSlide(1)
		startAutoplay()
	})
}

initialSlider('.promo__slider', '.promo__slider__arrow__left', '.promo__slider__arrow__right', true)
initialSlider('.popular__technic__slider', '.popular__technic__slider__arrow__left', '.popular__technic__slider__arrow__right')
initialSlider('.reviews__slider', '.reviews__slider__arrow__left', '.reviews__slider__arrow__right')