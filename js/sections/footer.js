import { siteConfig } from '../../data/config.js';

export function renderFooter(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const { contact, meta } = siteConfig;

    // SVG Icons
    const githubIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`;
    const linkedinIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`;
    const twitterIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>`;
    const emailIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`;

    container.innerHTML = `
        <div class="footer-glass">
            <div class="container footer-content">
                <div class="footer-brand">
                    <h3 class="footer-title">${meta.title}</h3>
                    <p class="footer-desc">Crafting scalable web applications with elegant, user-centric interfaces.</p>
                </div>
                
                <div class="footer-links-grid">
                    <div class="footer-column">
                        <h4>Navigation</h4>
                        <div class="footer-nav">
                            <a href="#hero">Home</a>
                            <a href="#about">About</a>
                            <a href="#skills">Skills</a>
                        </div>
                    </div>
                    <div class="footer-column">
                        <h4>Explore</h4>
                        <div class="footer-nav">
                            <a href="#projects">Projects</a>
                            <a href="#experience">Experience</a>
                            <a href="#contact">Contact</a>
                        </div>
                    </div>
                    <div class="footer-column">
                        <h4>Connect</h4>
                        <div class="footer-socials">
                            ${contact.github && contact.github !== '#' ? `<a href="${contact.github}" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="GitHub">${githubIcon}</a>` : `<a href="https://github.com" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="GitHub">${githubIcon}</a>`}
                            ${contact.linkedin && contact.linkedin !== '#' ? `<a href="${contact.linkedin}" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="LinkedIn">${linkedinIcon}</a>` : `<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="LinkedIn">${linkedinIcon}</a>`}
                            ${contact.twitter && contact.twitter !== '#' ? `<a href="${contact.twitter}" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="Twitter">${twitterIcon}</a>` : `<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="Twitter">${twitterIcon}</a>`}
                            <a href="mailto:${contact.email}" class="social-btn" aria-label="Email">${emailIcon}</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                <div class="container footer-bottom-content">
                    <p class="copyright">${meta.copyright}</p>
                </div>
            </div>
        </div>
    `;
}
