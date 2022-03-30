import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')



// Botão marcar como lido, abrir modal
// Mark as read button, open modal

const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
    button.addEventListener('click', handleClick)
})

// Botão delete, abrir modal
// Delete button, open modal


const deleteButtons = document.querySelectorAll('.actions a.delete')


deleteButtons.forEach(button => {
    button.addEventListener('click', (event) => handleClick(event, false))
})

function handleClick(event, check = true) {
    event.preventDefault()

    const text = check ? 'Marcar como lida esta' : 'Excluir'
    const text2 = check ? 'Tem certeza que você deseja marcar como lida' : 'Tem certeza que você deseja excluir'
    const slug = check ? 'check' : 'delete'
    const roomId = document.querySelector('#room-id').dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector('.modal form')
    form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = `${text} pergunta`
    modalDescription.innerHTML = `${text2} esta pergunta?`

    modalButton.innerHTML = check ? 'Sim, marcar como lida' : 'Sim, excluir'

    check ? modalButton.classList.remove('red') : modalButton.classList.add('red')

    modal.open()
}
