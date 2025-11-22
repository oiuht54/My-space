import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export const siteConfig = {
    details: {
        name: "Alex Dev",
        role: "Frontend Developer",
        bio: "Привет! Я занимаюсь веб-разработкой. Создаю быстрые и удобные интерфейсы. Люблю разбираться в новых технологиях и решать сложные задачи.",
        email: "alex@example.com",
    },
    socials: [
        {
            name: "GitHub",
            url: "https://github.com",
            icon: Github,
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com",
            icon: Linkedin,
        },
        {
            name: "Twitter",
            url: "https://twitter.com",
            icon: Twitter,
        },
        {
            name: "Email",
            url: "mailto:alex@example.com",
            icon: Mail,
        },
    ],
    // Теперь навыки сгруппированы
    skills: [
        {
            category: "Frontend",
            items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML/CSS"]
        },
        {
            category: "Backend",
            items: ["Node.js", "PostgreSQL", "Prisma", "Express", "Supabase"]
        },
        {
            category: "Tools & DevOps",
            items: ["Git", "Docker", "WebStorm", "Figma", "Vercel"]
        }
    ],
    projects: [
        {
            title: "Project Alpha",
            description: "Платформа для аналитики данных с дашбордом в реальном времени. Поддерживает графики, экспорт отчетов и темную тему.",
            tech: ["React", "D3.js", "Tailwind"],
            repoLink: "https://github.com",
            demoLink: "https://example.com",
        },
        {
            title: "Beta App",
            description: "Мобильное приложение для трекинга привычек. Синхронизация между устройствами и оффлайн режим.",
            tech: ["React Native", "Firebase"],
            repoLink: "https://github.com",
            demoLink: null, // Если нет демо
        },
        {
            title: "Gamma UI",
            description: "Библиотека UI компонентов. Полностью типизирована и доступна (a11y). Используется во внутренних продуктах.",
            tech: ["Vue", "SCSS", "Rollup"],
            repoLink: "https://github.com",
            demoLink: "https://example.com",
        },
    ]
};