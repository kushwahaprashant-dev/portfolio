import { siteConfig } from '../../data/config.js';
import { initTypewriter } from '../utils/typewriter.js';

export function renderHero(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
        <div class="hero-bg"></div>
        <div class="container hero-content">
            <h1 class="hero-title reveal">${siteConfig.hero.title}</h1>
            <div class="hero-subtitle-container reveal delay-100">
                I am a <span class="hero-subtitle" id="typewriter"></span><span class="type-cursor">|</span>
            </div>
            <p class="hero-bio reveal delay-200">
                ${siteConfig.hero.bio}
            </p>
            <div class="hero-ctas reveal delay-300">
                <a href="#projects" class="btn btn-primary">View My Work</a>
                <a href="#contact" class="btn btn-secondary">Download Resume</a>
            </div>
        </div>
    `;

    initTypewriter('typewriter', siteConfig.hero.typewriterPhrases);
}
