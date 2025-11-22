import { Github, Mail } from 'lucide-react'; // Оставляем стандартные
import { Icons } from '@/components/icons'; // Наши кастомные

export const siteConfig = {
    details: {
        name: "Alex Dev",
        role: "Frontend Developer",
        bio: "Привет! Я занимаюсь веб-разработкой. Создаю быстрые и удобные интерфейсы. Люблю разбираться в новых технологиях и решать сложные задачи.",
        email: "alex@example.com",
        avatar: "/avatar.jpg",
    },
    socials: [
        {
            name: "GitHub",
            url: "https://github.com",
            icon: Github,
        },
        {
            name: "Itch.io",
            url: "https://itch.io",
            icon: Icons.ItchIo, // Используем новую иконку
        },
        {
            name: "Telegram",
            url: "https://t.me",
            icon: Icons.Telegram, // Используем новую иконку
        },
        {
            name: "Email",
            url: "mailto:alex@example.com",
            icon: Mail,
        },
    ],
    projects: [
        // ... твой список проектов (без изменений)
        {
            title: "Project Alpha (Featured)",
            description: "Платформа для аналитики данных с дашбордом в реальном времени. Самый крутой проект.",
            tech: ["React", "D3.js", "Tailwind"],
            repoLink: "https://github.com",
            demoLink: "https://example.com",
            featured: true,
        },
        {
            title: "Beta App",
            description: "Мобильное приложение для трекинга привычек. Синхронизация между устройствами.",
            tech: ["React Native", "Firebase"],
            repoLink: "https://github.com",
            demoLink: null,
            featured: false,
        },
        {
            title: "Gamma UI",
            description: "Библиотека UI компонентов. Полностью типизирована и доступна.",
            tech: ["Vue", "SCSS", "Rollup"],
            repoLink: "https://github.com",
            demoLink: "https://example.com",
            featured: false,
        },
        {
            title: "Delta Service",
            description: "Микросервис для обработки платежей.",
            tech: ["Go", "gRPC"],
            repoLink: "https://github.com",
            demoLink: null,
            featured: false,
        },
    ]
};