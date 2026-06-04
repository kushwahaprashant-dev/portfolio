export const siteConfig = {
    meta: {
        title: "Full Stack Developer Portfolio",
        author: "Alex Carter",
        copyright: "© 2026. Designed and built with ❤️ by Prashant."
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
            { number: "2+", label: "Years Experience" },
            { number: "5+", label: "Projects Built" },
            { number: "5+", label: "Happy Clients" }
        ]
    },
    skills: [
        {
            category: "Frontend",
            items: ["React", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind CSS", "Material UI"]
        },
        {
            category: "Backend",
            items: ["Node.js", "Express", "REST APIs", "PhP"]
        },
        {
            category: "Database",
            items: ["MySQL"]
        },
        {
            category: "DevOps & Tools",
            items: ["Git"]
        }
    ],
    projects: [
        {
            title: "E-Commerce Platform",
            description: "A scalable headless e-commerce solution with inventory management, cart state, and Stripe payment processing.",
            longDescription: "A fully custom e-commerce solution designed from the ground up for high-performance and scalability. The architecture uses a headless approach, completely decoupling the React frontend from the Node.js backend. This allows for lightning-fast page loads and a seamless shopping experience.",
            features: [
                "Headless architecture for independent frontend/backend scaling",
                "Real-time inventory tracking and cart synchronization",
                "Secure payment processing integrated with Stripe API",
                "Comprehensive admin dashboard for order and product management"
            ],
            tags: ["React", "Node.js", "MongoDB"],
            gradient: "linear-gradient(135deg, #1e3a8a, #0f172a)",
            githubUrl: "#",
            liveUrl: "#"
        },
        {
            title: "Real-time Chat App",
            description: "A highly concurrent messaging platform featuring live typing indicators, group rooms, and unread notifications.",
            longDescription: "Built to demonstrate real-time WebSocket capabilities, this chat application supports multiple concurrent users, persistent chat history, and instant notifications. The backend relies on Express and Socket.io to manage active connections efficiently.",
            features: [
                "Live bi-directional communication using WebSockets",
                "Typing indicators and presence tracking (online/offline status)",
                "Group chat rooms with role-based access control",
                "End-to-end message persistence and unread counts"
            ],
            tags: ["Socket.io", "Express", "React"],
            gradient: "linear-gradient(135deg, #065f46, #022c22)",
            githubUrl: "#",
            liveUrl: "#"
        },
        {
            title: "Task Management SaaS",
            description: "A productivity suite for teams utilizing Kanban methodologies, calendar integration, and rich analytics.",
            longDescription: "A comprehensive project management tool aimed at agile teams. The application features a deeply interactive Kanban board with drag-and-drop capabilities, rich text descriptions, and real-time syncing across team members' devices.",
            features: [
                "Interactive drag-and-drop Kanban boards",
                "Full calendar view integration with deadline syncing",
                "Team collaboration features, comments, and file attachments",
                "Advanced performance analytics and time-tracking dashboard"
            ],
            tags: ["Next.js", "PostgreSQL", "Prisma"],
            gradient: "linear-gradient(135deg, #7e22ce, #3b0764)",
            githubUrl: "#",
            liveUrl: "#"
        },
        {
            title: "AI Image Generator",
            description: "A deep learning web app that interfaces with stable diffusion APIs to generate and edit high-res images from text.",
            longDescription: "An exploration into generative AI. This platform allows users to input natural language prompts and instantly generate unique, high-resolution images. It manages complex background tasks and asynchronous polling gracefully on the frontend.",
            features: [
                "Integration with Stable Diffusion text-to-image models",
                "Custom gallery to save, upvote, and share generated artwork",
                "Advanced image editing parameters (guidance scale, steps, seed)",
                "FastAPI backend for asynchronous processing of intensive ML tasks"
            ],
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
        email: "kushwaha.prashant.dev@gmail.com",
        github: "#",
        linkedin: "#",
        twitter: "#",
        // Paste your Google Apps Script Web App URL below:
        googleScriptUrl: "https://script.google.com/macros/s/AKfycbyKUzuYJZUN8ZHExUjpeeCaH7JWL_zb_8YTE0FI0zrA4ySeTRnyA9BQjDas4luWm7hh/exec"
    },
};
