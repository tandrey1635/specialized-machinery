function countdown() {
	const blockYears = document.querySelector('#years')
	const blockDays = document.querySelector('#days')
	const blockHours = document.querySelector('#hours')
	const blockMinutes = document.querySelector('#minutes')
	const blockSeconds = document.querySelector('#seconds')

	const lastDayAction = "2100-01-01"
	const lastDate = Date.parse(lastDayAction)

	function updateTimer() {
		const nowDate = Date.parse(new Date())
		const timeLeft = lastDate - nowDate

		if (timeLeft < 0) {
			blockYears.textContent = 0
			blockDays.textContent = 0
			blockHours.textContent = '00'
			blockMinutes.textContent = '00'
			blockSeconds.textContent = '00'
			return
    	}

		/* Если ненужно кол-во лет формула дней будет const days = Math.floor((timeLeft / (1000 * 60 * 60 * 24))) */
		const years = Math.floor((timeLeft) / (1000 * 60 * 60 * 24 * 365))
		const days = Math.floor(((timeLeft) % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24))
		const hours = Math.floor((timeLeft) % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
		const minutes = Math.floor((timeLeft) % (1000 * 60 * 60) / (1000 * 60))
		const seconds = Math.floor((timeLeft) % (1000 * 60) / 1000)

		blockYears.textContent = years
		blockDays.textContent = days
		blockHours.textContent = hours.toString().padStart(2, '0')
		blockMinutes.textContent = minutes.toString().padStart(2, '0')
		blockSeconds.textContent = seconds.toString().padStart(2, '0')
	}

	updateTimer()

	setInterval(updateTimer, 1000)
}

countdown()