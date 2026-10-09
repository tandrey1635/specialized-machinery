function changeTheme(selector, btn, key, value) {
	const modal = document.querySelector(selector)
	const onLocalStorage = document.querySelector(btn)

	if (!onLocalStorage) return

	if (localStorage.getItem(key) == value) {
		modal.setAttribute('data-theme', 'dark-theme')
		onLocalStorage.checked = true
	}

	onLocalStorage.addEventListener('change', function() {
		if (onLocalStorage.checked) {
			modal.setAttribute('data-theme', 'dark-theme')
			localStorage.setItem(key, value)
		}

		else {
            modal.removeAttribute('data-theme')
            localStorage.removeItem(key)
        }
	})
}

changeTheme('body', '.header__switcher__input', 'dark-theme', 'yes')