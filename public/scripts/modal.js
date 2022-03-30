export default function Modal() {
    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener('click', close)

    function open() {
        // Adicionar classe active para o modal
        // Add active class to the modal
        modalWrapper.classList.add('active')
    }

    function close() {
        // Remover classe active do modal
        // Remove active class from modal
        modalWrapper.classList.remove('active')
    }
    
    return{
        open,
        close
    }
}