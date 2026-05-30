import { siteConfig } from '../../data/config.js';
import { renderSkillPill } from '../components/skillPill.js';

export function renderSkills(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const categoriesHtml = siteConfig.skills.map((category, index) => {
        const delay = (index + 1) * 100;
        const skillsHtml = category.items.map(skill => renderSkillPill(skill)).join('');
        
        return `
            <div class="skill-category reveal delay-${delay}">
                <h3 class="skill-category-title">${category.category}</h3>
                <div class="skills-list">
                    ${skillsHtml}
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = `
        <div class="container">
            <div class="section-header reveal">
                <h2 class="section-title">Technical Arsenal</h2>
                <p class="section-subtitle">Technologies and tools I use to bring ideas to life</p>
            </div>
            <div class="skills-container">
                ${categoriesHtml}
            </div>
        </div>
    `;
}
