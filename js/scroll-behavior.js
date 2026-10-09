function scrollBehavior() {
    const links = document.querySelectorAll('[href^="#"]')

    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault()
            const blockID = link.getAttribute('href').slice(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })

    })
}

scrollBehavior()