export function renderSkillPill(skill) {
    const name = typeof skill === 'string' ? skill : skill.name;
    const iconHtml = skill.icon ? `<i class="${skill.icon}"></i>` : '';
    return `<span class="skill-pill">${iconHtml}<span class="skill-name">${name}</span></span>`;
}
