function initialIntersectionObserver(block) {
	/* Целевой элемент, который будет наблюдаться */
	const targets = document.querySelectorAll(block)

	let options = {
		root: null, // Элемент, который выступает в роли области просмотра для target (предок целевого элемента или null для viewport)
		// элемент, который ожидает пересечения элемента-цели
		rootMargin: '0px', // Отступы вокруг root
		threshold: 1 // `0` — сработает даже при пересечении на один пиксель; - `1` — сработает только при полном появлении элемента в наблюдаемой области; `[0, 0.5, 1]` — колбэк сработает три раза: сначала при попадании хотя бы одного пикселя элемента в область наблюдения, затем на половине элемента и ещё один раз, когда элемент окажется полностью в области наблюдения.
	}

	const callback = (entries, observer /* Необязательный параметр: unobserve(элемент) — убирает элемент из списка наблюдаемых, disconnect() — останавливает наблюдения за всеми элементами) */) => {
		entries.forEach(function(entry) {
			const {
			time, // Время, когда произошло пересечение (ReadOnly)
			rootBounds, // Для корня наблюдателя пересечения (ReadOnly)
			boundingClientRect, // Для целевого объекта наблюдателя пересечения
			intersectionRect, // Для видимой части целевого объекта наблюдателя пересечения (ReadOnly)
			target, // Элемент, за которым следит наблюдатель и оповещает о его вхождении в root
			isIntersecting, // true, когда наблюдаемый элемент хотя бы на 1 пиксель пересекает наблюдаемую область
			isVisible, // Виден ли целевой элемент учитывая (не скрыт ли элемент CSS-свойствами, такими как visibility: hidden или opacity: 0)
			intersectionRatio // доля пересечения от 0 до 1. Если элемент полностью в наблюдаемой области, то значение будет 1, а если наполовину — 0.5
		} = entry

            if (isIntersecting) {
				/* Вставить код того что нужно отслеживать */
				animateCounter()
            }
        })
	}

	const observer = new IntersectionObserver(callback, options)

	/* Целевой элемент, который будет наблюдаться */
	targets.forEach(function(section) {
        observer.observe(section)
    })
}

initialIntersectionObserver('.about')