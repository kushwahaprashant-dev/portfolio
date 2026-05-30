import { siteConfig } from '../../data/config.js';

export async function handleContactSubmit(event, formElement, toastElement) {
    event.preventDefault();
    
    const url = siteConfig.contact.googleScriptUrl;
    const toastSpan = toastElement.querySelector('span');
    
    if (!url || url === "") {
        alert("Action Required: Please paste your Google Apps Script URL into data/config.js");
        return;
    }

    const formData = new FormData(formElement);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject') || 'No Subject',
        message: formData.get('message')
    };

    // Validation
    if (!data.name || !data.email || !data.message) {
        toastSpan.textContent = "Please fill out all required fields.";
        toastElement.classList.add('show');
        setTimeout(() => toastElement.classList.remove('show'), 3500);
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        toastSpan.textContent = "Please enter a valid email address.";
        toastElement.classList.add('show');
        setTimeout(() => toastElement.classList.remove('show'), 3500);
        return;
    }

    const submitBtn = formElement.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    
    try {
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Use text/plain to avoid CORS preflight issues with Google Apps Script
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'text/plain;charset=utf-8',
            }
        });

        const result = await response.json();

        if (result.success) {
            toastSpan.textContent = "Message sent successfully!";
            toastElement.classList.add('show');
            formElement.reset();
        } else {
            toastSpan.textContent = result.error || "Oops! There was a problem sending your message.";
            toastElement.classList.add('show');
        }
    } catch (error) {
        toastSpan.textContent = "Network error. Please try again later.";
        toastElement.classList.add('show');
    } finally {
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
        
        setTimeout(() => {
            toastElement.classList.remove('show');
        }, 3500);
    }
}
