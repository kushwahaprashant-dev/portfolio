import { siteConfig } from '../../data/config.js';

export function renderFooter(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = `
        <div class="container">
            <p>${siteConfig.meta.copyright}</p>
        </div>
    `;
}
