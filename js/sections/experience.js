import { siteConfig } from '../../data/config.js';

export function renderExperience(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const timelineHtml = siteConfig.experience.map((exp, index) => {
        const directionClass = index % 2 === 0 ? 'reveal-left' : 'reveal-right';
        return `
            <div class="timeline-item reveal ${directionClass}">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <div class="timeline-date">${exp.period}</div>
                    <h3 class="timeline-role">${exp.role}</h3>
                    <div class="timeline-company">${exp.company}</div>
                    <p class="timeline-desc">${exp.description}</p>
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = `
        <div class="container">
            <div class="section-header reveal">
                <h2 class="section-title">Experience</h2>
                <p class="section-subtitle">A timeline of my professional career</p>
            </div>
            <div class="timeline">
                ${timelineHtml}
            </div>
        </div>
    `;
}
