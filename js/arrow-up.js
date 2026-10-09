const arrowUp = document.querySelector('.arrow__up')

function showArrowUp() {
	window.addEventListener('scroll', function() {
		if (window.pageYOffset >= 200) {
			arrowUp.classList.add('active')
		}
		else {
			arrowUp.classList.remove('active')
		}
	})

	arrowUp.addEventListener('click', function() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	})
}

showArrowUp()