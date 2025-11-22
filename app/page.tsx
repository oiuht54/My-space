import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/config/site";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-neutral-700 selection:text-white">
            <Navbar />

            <main className="container mx-auto max-w-5xl px-4 py-10">

                {/* --- HERO SECTION --- */}
                <section id="about" className="py-20 md:py-32 flex flex-col items-start gap-6">
                    <div className="inline-block rounded-lg bg-neutral-900 px-3 py-1 text-sm text-neutral-400 border border-neutral-800">
                        Доступен для работы
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-white">
                        {siteConfig.details.name}
                    </h1>
                    <p className="max-w-[42rem] leading-normal text-neutral-400 sm:text-xl sm:leading-8">
                        {siteConfig.details.bio}
                    </p>
                    <div className="flex gap-4 mt-4">
                        <Link
                            href="#projects"
                            className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-neutral-950 shadow transition-colors hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50"
                        >
                            Смотреть проекты
                        </Link>
                        <Link
                            href={siteConfig.socials.find(s => s.name === "GitHub")?.url || "/"}
                            target="_blank"
                            className="inline-flex h-10 items-center justify-center rounded-md border border-neutral-800 bg-neutral-950 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-neutral-900 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950"
                        >
                            <Github className="mr-2 h-4 w-4" />
                            GitHub
                        </Link>
                    </div>
                </section>

                {/* --- SKILLS SECTION --- */}
                <section id="skills" className="py-16 border-t border-neutral-900">
                    <h2 className="text-3xl font-bold tracking-tight text-white mb-12">Навыки</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {siteConfig.skills.map((group, idx) => (
                            <div key={idx} className="space-y-4">
                                <h3 className="text-xl font-semibold text-neutral-100">{group.category}</h3>
                                <ul className="space-y-2">
                                    {group.items.map((item, i) => (
                                        <li key={i} className="flex items-center text-neutral-400">
                                            <div className="mr-2 h-1.5 w-1.5 rounded-full bg-neutral-700" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- PROJECTS SECTION --- */}
                <section id="projects" className="py-16 border-t border-neutral-900">
                    <h2 className="text-3xl font-bold tracking-tight text-white mb-12">Избранные проекты</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {siteConfig.projects.map((project, idx) => (
                            <div
                                key={idx}
                                className="group relative flex flex-col overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 transition-colors hover:bg-neutral-900 hover:border-neutral-700"
                            >
                                {/* Имитация картинки проекта (градиент) */}
                                <div className="h-48 w-full bg-gradient-to-br from-neutral-800 to-neutral-900 group-hover:from-neutral-800 group-hover:to-neutral-800 transition-colors flex items-center justify-center">
                                    <span className="text-4xl opacity-10 font-bold">{project.title[0]}</span>
                                </div>

                                <div className="flex flex-1 flex-col p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-neutral-400 mb-4 flex-1">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="inline-flex items-center rounded-md bg-neutral-800 px-2 py-1 text-xs font-medium text-neutral-300 ring-1 ring-inset ring-neutral-700/50">
                        {t}
                      </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4 mt-auto">
                                        {project.repoLink && (
                                            <Link
                                                href={project.repoLink}
                                                target="_blank"
                                                className="flex items-center text-sm font-medium text-neutral-400 hover:text-white transition-colors"
                                            >
                                                <Github className="mr-2 h-4 w-4" /> Code
                                            </Link>
                                        )}
                                        {project.demoLink && (
                                            <Link
                                                href={project.demoLink}
                                                target="_blank"
                                                className="flex items-center text-sm font-medium text-neutral-400 hover:text-white transition-colors"
                                            >
                                                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </main>

            {/* --- FOOTER --- */}
            <footer className="border-t border-neutral-900 py-12 bg-neutral-950">
                <div className="container mx-auto max-w-5xl px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-lg font-semibold text-white">{siteConfig.details.name}</p>
                        <p className="text-sm text-neutral-500">{siteConfig.details.role}</p>
                    </div>

                    <div className="flex gap-6">
                        {siteConfig.socials.map((social, idx) => (
                            <Link
                                key={idx}
                                href={social.url}
                                target="_blank"
                                className="text-neutral-500 hover:text-white transition-colors"
                            >
                                <social.icon className="h-5 w-5" />
                                <span className="sr-only">{social.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    );
}