const links = document.querySelectorAll('.nav-link')
const sections = document.querySelectorAll('.glass')

let active = '#home'

links.forEach(link => {
    link.addEventListener("click", e => {
        sections.forEach(section => {
            section.classList.remove('show')
        })

        const prevEl = document.querySelector(active)

        prevEl.classList.add("hidden")

        active = e.target.dataset.target

        const targetEl = document.querySelector(active)

        if (!targetEl.classList.contains('show')) {
            targetEl.classList.add('show')
        }
    })
})