import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')



// Botão marcar como lido, abrir modal
// Mark as read button, open modal

const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
    button.addEventListener('click', event => {       
       modal.open()
    })
})

// Botão delete, abrir modal
// Delete button, open modal


const deleteButtons = document.querySelectorAll('.actions a.delete')


deleteButtons.forEach(button => {
    button.addEventListener('click', event => {       
        modal.open()
     })
})
