import { siteConfig } from '../../data/config.js';

export function initModal() {
    const container = document.getElementById('modal-container');
    if (!container) return;

    container.innerHTML = `
        <div class="modal-overlay" id="project-modal">
            <div class="modal-content" id="modal-content-body">
                <!-- Content injected dynamically -->
            </div>
        </div>
    `;

    const overlay = document.getElementById('project-modal');

    // Close on background click
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('open')) {
            closeModal();
        }
    });
}

export function openProjectModal(projectIndex) {
    const project = siteConfig.projects[projectIndex];
    if (!project) return;

    const contentBody = document.getElementById('modal-content-body');
    const overlay = document.getElementById('project-modal');

    const tagsHtml = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');
    const checkIcon = `<svg class="feature-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;

    contentBody.innerHTML = `
        <button class="modal-close" id="modal-close-btn" aria-label="Close modal">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"></path></svg>
        </button>
        <div class="modal-header-img" style="background: ${project.gradient};"></div>
        <div class="modal-body">
            <h2 class="modal-title">${project.title}</h2>
            <div class="modal-tags">
                ${tagsHtml}
            </div>
            <div class="modal-desc">
                <p style="margin-bottom: 32px;">${project.longDescription || project.description}</p>
                ${project.features ? `
                    <h3 style="margin-bottom: 16px; font-size: 20px; color: var(--text-main); font-weight: 600;">Key Features</h3>
                    <ul class="feature-list">
                        ${project.features.map(f => `<li class="feature-item">${checkIcon}<span>${f}</span></li>`).join('')}
                    </ul>
                ` : ''}
            </div>
            <div class="modal-actions">
                <a href="${project.liveUrl}" class="btn btn-primary" target="_blank">View Live Demo</a>
                <a href="${project.githubUrl}" class="btn btn-secondary" target="_blank">Source Code</a>
            </div>
        </div>
    `;

    // Attach close listener to newly created button
    document.getElementById('modal-close-btn').addEventListener('click', closeModal);

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

export function closeModal() {
    const overlay = document.getElementById('project-modal');
    if (overlay) {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
    }
}
