"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Github } from "lucide-react";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
            <div className="container mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
                {/* Логотип / Имя */}
                <div className="mr-4 flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2 font-bold text-neutral-100">
                        {siteConfig.details.name}
                    </Link>
                </div>

                {/* Ссылки (скролл по ID) */}
                <nav className="flex items-center space-x-6 text-sm font-medium text-neutral-300">
                    <Link href="#about" className="transition-colors hover:text-white">
                        Обо мне
                    </Link>
                    <Link href="#skills" className="transition-colors hover:text-white">
                        Навыки
                    </Link>
                    <Link href="#projects" className="transition-colors hover:text-white">
                        Проекты
                    </Link>
                </nav>

                {/* Иконка GitHub справа */}
                <div className="flex items-center">
                    <Link
                        href={siteConfig.socials[0].url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-neutral-400 hover:text-white transition-colors"
                    >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}