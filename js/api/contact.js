export function handleContactSubmit(event, formElement, toastElement) {
    event.preventDefault();
    
    toastElement.classList.add('show');
    formElement.reset();

    setTimeout(() => {
        toastElement.classList.remove('show');
    }, 3500);
}
