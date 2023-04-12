const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAnAttribte('data-target')
        const c = +counter.innerText

        cont increment = target / 200

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCouter, 1)
        } else {
            counter.innerText = target
        }
    }
})