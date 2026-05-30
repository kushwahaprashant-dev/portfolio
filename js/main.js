import { renderNavbar, initNavbarInteractions } from './components/navbar.js';
import { renderHero } from './sections/hero.js';
import { renderAbout } from './sections/about.js';
import { renderSkills } from './sections/skills.js';
import { renderProjects } from './sections/projects.js';
import { renderExperience } from './sections/experience.js';
import { renderContact } from './sections/contact.js';
import { renderFooter } from './sections/footer.js';
import { initScrollReveal } from './utils/animations.js';
import { initModal } from './components/modal.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Render all sections sequentially
    renderNavbar('navbar');
    renderHero('hero');
    renderAbout('about');
    renderSkills('skills');
    renderProjects('projects');
    renderExperience('experience');
    renderContact('contact');
    renderFooter('footer');

    // 2. Initialize side-effects / interactions
    initNavbarInteractions();
    initModal(); // Setup the modal HTML structure and global listeners
    
    // We need a small timeout for the DOM to settle before observing
    setTimeout(initScrollReveal, 100);
});
