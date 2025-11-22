"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Github } from "lucide-react";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
            <div className="container mx-auto max-w-screen-2xl flex h-16 items-center justify-between px-6 md:px-12">

                {/* Логотип / Имя */}
                <div className="flex">
                    <Link href="/" className="flex items-center space-x-2 font-bold text-xl text-neutral-100">
                        {siteConfig.details.name}
                    </Link>
                </div>

                {/* Центральная навигация удалена */}

                {/* Иконка GitHub справа */}
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