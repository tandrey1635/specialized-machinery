function animateCounter(finish) {
    const counterBoxes = document.querySelectorAll('.about__header')

    counterBoxes.forEach(function(counterBox, index) {
        let counter = 0
        let end = finish ? finish[index] : parseInt(counterBox.textContent.replace(/\s/g, '')) || 0
        let slowStep = 1
        let middleStep = 11
        let fastStep = 111
        let superFastStep = 1111

        function startClock() {
            counterBox.textContent = 0

            const showCounter = setInterval(function() {
                if (counter < end) {
                    if (counter < 10) {
                        counter += slowStep
                    } else if (counter < 100) {
                        counter += middleStep
                    } else if (counter < 1000) {
                        counter += fastStep
                    } else {
                        counter += superFastStep
                    }
                } else {
                    counter = end
                    clearInterval(showCounter)
                }

                counterBox.textContent = counter
            }, 100)
        }

        startClock()
    })
}