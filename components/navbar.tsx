"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Github } from "lucide-react";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
            {/* Изменили max-w-6xl на max-w-[90%] или max-w-screen-2xl для ширины */}
            <div className="container mx-auto max-w-screen-2xl flex h-16 items-center justify-between px-6 md:px-12">

                <div className="mr-4 flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2 font-bold text-xl text-neutral-100">
                        {siteConfig.details.name}
                    </Link>
                </div>

                <nav className="flex items-center space-x-6 text-sm font-medium text-neutral-300">
                    <Link href="#projects" className="transition-colors hover:text-white">
                        Проекты
                    </Link>
                    <Link href="#contact" className="transition-colors hover:text-white">
                        Контакты
                    </Link>
                </nav>

                <div className="flex items-center">
                    <Link
                        href={siteConfig.socials[0].url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-neutral-400 hover:text-white transition-colors"
                    >
                        <Github className="h-6 w-6" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}