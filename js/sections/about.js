import { siteConfig } from '../../data/config.js';

export function renderAbout(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const statsHtml = siteConfig.about.stats.map(stat => `
        <div class="stat-card">
            <div class="stat-number">${stat.number}</div>
            <div class="stat-label">${stat.label}</div>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="container">
            <div class="about-grid">
                <div class="about-image reveal reveal-left"></div>
                <div class="about-content reveal reveal-right">
                    <div class="section-header" style="text-align: left; margin-bottom: 24px;">
                        <h2 class="section-title">About Me</h2>
                    </div>
                    <p class="about-text">
                        ${siteConfig.about.text}
                    </p>
                    <div class="stats-grid">
                        ${statsHtml}
                    </div>
                </div>
            </div>
        </div>
    `;
}
