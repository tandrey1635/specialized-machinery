function showAllAccordeon(selectorWrapper, parentSelector) {
    const accordeonWrapper = document.querySelector(selectorWrapper)
	const accordeonItems = document.querySelectorAll('.accordeon__item')
    const accordeonBtn = document.querySelector('.inner__page__btn')

    if (!accordeonWrapper) return
    if (!accordeonBtn) return

	const isAnyOpen = function() {
		return Array.from(accordeonItems).some(function(item) {
			return item.classList.contains('accordeon-active-icon')
		})
	}

    function updateBtnText() {
		const anyOpen = isAnyOpen()

		if (anyOpen) {
			accordeonBtn.textContent = 'Свернуть все'
		}

		else {
			accordeonBtn.textContent = 'Развернуть все'
		}
    }

    accordeonWrapper.addEventListener('click', function(e) {
        const accordeonItem = e.target.closest(parentSelector)
        if (!accordeonItem) return

        const accordeonDescription = accordeonItem.nextElementSibling
        if (!accordeonDescription) return

        accordeonItem.classList.toggle('accordeon-active-icon')
        accordeonDescription.classList.toggle('accordeon-active')
        updateBtnText()
    })

    accordeonBtn.addEventListener('click', function() {
        const anyOpen = isAnyOpen()

        accordeonItems.forEach(function(accordeonItem) {
            const accordeonDescription = accordeonItem.nextElementSibling
            if (!accordeonDescription) return

            if (anyOpen) {
                accordeonItem.classList.remove('accordeon-active-icon')
                accordeonDescription.classList.remove('accordeon-active')
            } else {
                accordeonItem.classList.add('accordeon-active-icon')
                accordeonDescription.classList.add('accordeon-active')
            }
        })

        updateBtnText()
    })

    updateBtnText()
}

showAllAccordeon('.accordeon__wrapper', '.accordeon__item')