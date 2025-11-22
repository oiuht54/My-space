import { Github, Mail, ExternalLink } from 'lucide-react';
import { Icons } from '@/components/icons';

export const siteConfig = {
    details: {
        name: "Alex Dev", // Твое имя (можешь поменять на никнейм oiuht54, если хочешь)
        role: "Fullstack Developer",
        bio: "Разрабатываю инструменты, которые упрощают жизнь, и экспериментирую с генеративным вебом. Люблю JavaFX за мощь десктопа и Next.js за гибкость веба.",
        email: "alex@example.com",
        avatar: "/avatar.jpg",
    },
    socials: [
        {
            name: "GitHub",
            url: "https://github.com/oiuht54",
            icon: Github,
        },
        {
            name: "Itch.io",
            url: "https://itch.io", // Если есть профиль, вставь ссылку, иначе можно убрать
            icon: Icons.ItchIo,
        },
        {
            name: "Telegram",
            url: "https://t.me", // Твой телеграм
            icon: Icons.Telegram,
        },
        {
            name: "Email",
            url: "mailto:alex@example.com",
            icon: Mail,
        },
    ],
    projects: [
        {
            title: "TxtConverter",
            description: "Профессиональная утилита для подготовки исходного кода проектов к анализу нейросетями (LLM). Сканирует папки, игнорирует мусор и собирает всё в один оптимизированный файл.",
            tech: ["Java 21", "JavaFX", "Maven"],
            repoLink: "https://github.com/oiuht54/TxtConverter",
            demoLink: null,
            featured: true, // Показывается в большой карточке справа
        },
        {
            title: "Void Oracle",
            description: "Экспериментальный оракул на базе фракталов и цепей Маркова. Генерирует предсказания, визуализирует множества Жюлиа и синтезирует процедурный звук в реальном времени.",
            tech: ["Next.js", "Canvas API", "Web Audio API"],
            repoLink: "https://github.com/oiuht54/fortune-teller",
            demoLink: "https://fortune-teller-sigma.vercel.app/",
            featured: false,
        },
        {
            title: "Portfolio Website",
            description: "Этот самый сайт. Минималистичное портфолио с Bento-сеткой, адаптивным дизайном и темной темой.",
            tech: ["Next.js 14", "Tailwind CSS", "Framer Motion"],
            repoLink: "https://github.com/oiuht54/portfolio", // Заменишь на ссылку когда запушишь этот проект
            demoLink: null,
            featured: false,
        },
    ]
};