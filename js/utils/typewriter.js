export function initTypewriter(elementId, phrases) {
    const typewriterElement = document.getElementById(elementId);
    if (!typewriterElement) return;

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    const typingSpeed = 80;
    const deletingSpeed = 40;
    const delayBetweenPhrases = 2000;

    function typeWriter() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeDelay = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typeDelay = delayBetweenPhrases;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeDelay = 500;
        }

        setTimeout(typeWriter, typeDelay);
    }
    
    setTimeout(typeWriter, 1000);
}
