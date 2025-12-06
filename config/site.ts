import { Github, Mail, ExternalLink } from 'lucide-react';
import { Icons } from '@/components/icons';

export const siteConfig = {
    details: {
        name: "Diziac",
        role: "Fullstack Developer",
        bio: "Разрабатываю инструменты, которые упрощают жизнь, и экспериментирую с генеративным вебом. Люблю JavaFX за мощь десктопа и Next.js за гибкость веба.",
        email: "tartaruscore@gmail.com",
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
            url: "https://itch.io",
            icon: Icons.ItchIo,
        },
        {
            name: "Telegram",
            url: "https://t.me",
            icon: Icons.Telegram,
        },
        {
            name: "Email",
            url: "tartaruscore@gmail.com",
            icon: Mail,
        },
    ],
    projects: [
        {
            title: "TxtConverter",
            description: "Профессиональная утилита для подготовки кода к анализу нейросетями. Сканирует папки, игнорирует мусор и собирает всё в один файл.",
            tech: [".NET10", "WPF", "C#"],
            repoLink: "https://github.com/oiuht54/TxtConverter",
            demoLink: null,
            featured: true,
            image: "",
        },
        {
            title: "TxtConverter-Legacy",
            description: "Профессиональная утилита для подготовки кода к анализу нейросетями. Сканирует папки, игнорирует мусор и собирает всё в один файл.",
            tech: ["Java 21", "JavaFX", "Maven"],
            repoLink: "https://github.com/oiuht54/TxtConverter-Legacy",
            demoLink: null,
            featured: false,
            // Если оставить image пустым (""), сайт попытается взять баннер с GitHub
            // Если хочешь свою картинку: положи файл в public и напиши "/my-image.jpg"
            image: "",
        },
        {
            title: "gemini-file-sync",
            description: "AI Studio Local Bridge — это инструмент для разработчиков, который соединяет Google AI Studio (Gemini) с вашей локальной файловой системой. Он избавляет от необходимости вручную копировать и вставлять файлы с кодом, сгенерированные нейросетью.",
            tech: ["NodeJS", "TumperMonkey"],
            repoLink: "https://github.com/oiuht54/gemini-file-sync",
            demoLink: null,
            featured: false,
            image: "",
        },
        {
            title: "Void Oracle",
            description: "Оракул на базе фракталов. Генерирует предсказания и синтезирует звук в реальном времени.",
            tech: ["Next.js", "Canvas API", "Web Audio API"],
            repoLink: "https://github.com/oiuht54/fortune-teller",
            demoLink: "https://fortune-teller-sigma.vercel.app/",
            featured: false,
            image: "", // Автоматически подтянет с GitHub
        },
        {
            title: "Portfolio Website",
            description: "Конкретно этот сайт. Минималистичное портфолио с Bento-сеткой и адаптивным дизайном.",
            tech: ["Next.js 14", "Tailwind CSS"],
            repoLink: "https://github.com/oiuht54/My-space",
            demoLink: null,
            featured: false,
            image: "", // Автоматически подтянет с GitHub
        },
    ]
};
