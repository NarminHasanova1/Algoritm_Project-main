const counterUp = window.counterUp.default

const callback = entries => {
    entries.forEach(entry => {
        const el = entry.target
        if (entry.isIntersecting && !el.classList.contains('is-visible')) {
            counterUp(el, {
                duration: 1000,
                delay: 16,
            })
            el.classList.add('is-visible')
        }
    })
}

const IO = new IntersectionObserver(callback, { threshold: 1 })

const counters = document.querySelectorAll('.counter')
counters.forEach(el => {
    IO.observe(el)

})
