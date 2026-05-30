import { siteConfig } from '../../data/config.js';
import { renderProjectCard } from '../components/projectCard.js';
import { openProjectModal } from '../components/modal.js';

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

    // Attach click listeners to cards to open modal
    const cards = container.querySelectorAll('.project-card');
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Ignore if the user clicked one of the external links inside the card
            if (e.target.closest('a')) return;

            const index = card.getAttribute('data-index');
            if (index !== null) {
                openProjectModal(parseInt(index, 10));
            }
        });
    });
}
