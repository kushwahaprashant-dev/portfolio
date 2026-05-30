export const siteConfig = {
    meta: {
        title: "Full Stack Developer Portfolio",
        author: "Alex Carter",
        copyright: "© 2024. Designed and built with ❤️ by Alex Carter."
    },
    hero: {
        title: "Full Stack Developer",
        typewriterPhrases: ["React Developer", "Node.js Engineer", "UI/UX Enthusiast", "Problem Solver"],
        bio: "Building robust, scalable web applications with elegant user interfaces. I bridge the gap between design and engineering to create seamless digital experiences."
    },
    about: {
        text: "I'm a software engineer deeply passionate about building exceptional products. With a strong foundation in modern web technologies, I focus on crafting scalable architectures and intuitive interfaces. Whether it's architecting a robust backend API or perfecting a micro-interaction on the frontend, I obsess over the details that make an application truly great.",
        imageUrl: "", // Handled by CSS gradient in this version, could add URL here later
        stats: [
            { number: "3+", label: "Years Experience" },
            { number: "20+", label: "Projects Built" },
            { number: "10+", label: "Happy Clients" }
        ]
    },
    skills: [
        {
            category: "Frontend",
            items: ["React", "Next.js", "TypeScript", "HTML/CSS"]
        },
        {
            category: "Backend",
            items: ["Node.js", "Express", "Python", "REST APIs", "GraphQL"]
        },
        {
            category: "Database",
            items: ["MongoDB", "PostgreSQL", "MySQL"]
        },
        {
            category: "DevOps & Tools",
            items: ["Git", "Docker", "AWS"]
        }
    ],
    projects: [
        {
            title: "E-Commerce Platform",
            description: "A scalable headless e-commerce solution with inventory management, cart state, and Stripe payment processing.",
            tags: ["React", "Node.js", "MongoDB"],
            gradient: "linear-gradient(135deg, #1e3a8a, #0f172a)",
            githubUrl: "#",
            liveUrl: "#"
        },
        {
            title: "Real-time Chat App",
            description: "A highly concurrent messaging platform featuring live typing indicators, group rooms, and unread notifications.",
            tags: ["Socket.io", "Express", "React"],
            gradient: "linear-gradient(135deg, #065f46, #022c22)",
            githubUrl: "#",
            liveUrl: "#"
        },
        {
            title: "Task Management SaaS",
            description: "A productivity suite for teams utilizing Kanban methodologies, calendar integration, and rich analytics.",
            tags: ["Next.js", "PostgreSQL", "Prisma"],
            gradient: "linear-gradient(135deg, #7e22ce, #3b0764)",
            githubUrl: "#",
            liveUrl: "#"
        },
        {
            title: "AI Image Generator",
            description: "A deep learning web app that interfaces with stable diffusion APIs to generate and edit high-res images from text.",
            tags: ["Python", "FastAPI", "React"],
            gradient: "linear-gradient(135deg, #b91c1c, #450a0a)",
            githubUrl: "#",
            liveUrl: "#"
        }
    ],
    experience: [
        {
            period: "2022 - Present",
            role: "Senior Software Engineer",
            company: "Acme Technologies",
            description: "Leading a product team to architect scalable cloud-native microservices. Mentored junior developers and improved CI/CD pipeline efficiency by 40%."
        },
        {
            period: "2020 - 2022",
            role: "Full Stack Developer",
            company: "Nexus Digital Studio",
            description: "Developed high-performance web applications for enterprise clients. Transitioned legacy monolithic apps to modern React/Node.js stacks."
        },
        {
            period: "2018 - 2020",
            role: "Frontend Web Developer",
            company: "StartUp Hub Co.",
            description: "Built interactive UI components using Vue.js and CSS animations. Collaborated closely with UI/UX designers to implement pixel-perfect designs."
        }
    ],
    contact: {
        email: "hello@example.com",
        github: "#",
        linkedin: "#",
        twitter: "#"
    }
};
