import { siteConfig } from '../../data/config.js';
import { renderProjectCard } from '../components/projectCard.js';

export function renderProjects(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const projectsHtml = siteConfig.projects.map((project, index) => renderProjectCard(project, index)).join('');

    container.innerHTML = `
        <div class="container">
            <div class="section-header reveal">
                <h2 class="section-title">Selected Projects</h2>
                <p class="section-subtitle">A showcase of my recent engineering work</p>
            </div>
            <div class="projects-grid">
                ${projectsHtml}
            </div>
        </div>
    `;
}
