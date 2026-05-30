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

    // Helper to generate a random bright color for the border
    function getRandomColor() {
        const hue = Math.floor(Math.random() * 360);
        return `hsl(${hue}, 100%, 65%)`; // using HSL for guaranteed bright/vibrant colors
    }

    // Attach interactions to cards
    const cards = container.querySelectorAll('.project-card');
    cards.forEach(card => {
        // Random color on hover
        card.addEventListener('mouseenter', () => {
            const color = getRandomColor();
            card.style.setProperty('--hover-border-color', color);
            card.style.boxShadow = `0 10px 40px ${color.replace(')', ', 0.2)').replace('hsl', 'hsla')}`;
        });

        // Reset shadow on leave
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '';
        });

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
