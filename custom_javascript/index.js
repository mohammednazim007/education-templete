const show_hidden = document.querySelector('.show_hidden')
const btn = document.querySelector('#modalBtn')

window.onload = () => {
    mainFn()
}
const mainFn = () => {
    btn.addEventListener('click', () => {
        show_hidden.classList.toggle('hidden')
    })    
}
