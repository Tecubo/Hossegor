let modal = null

const openModal = e => {
    e.preventDefault()
    const target = document.querySelector(e.target.getAttribute('href'))
    target.style.display = null
    modal = target
    modal.addEventListener('click', closeModal)
    modal.querySelector('.js-modal-close').addEventListener('click', closeModal)
    modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation)
}

const closeModal = e => {
    if (modal === null) return
    e.preventDefault()
    modal.style.display = 'none'
    modal.removeEventListener('click', closeModal)
    modal.querySelector('.js-modal-close').removeEventListener('click', closeModal)
    modal.querySelector('.js-modal-stop').removeEventListener('click', stopPropagation)
    modal = null
}

const stopPropagation = e => {
    e.stopPropagation()
}

document.querySelectorAll('.js-modal').forEach(Element => {
    Element.addEventListener('click', openModal)
})

window.addEventListener('keydown', e => {
    if (e.key === 'Escape' || e.key === 'Esc')
        closeModal(e)
})