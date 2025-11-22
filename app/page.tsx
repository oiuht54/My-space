import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/config/site";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Вспомогательная функция для получения ссылки на картинку
const getProjectImage = (project: typeof siteConfig.projects[0]) => {
    if (project.image) return project.image;

    if (project.repoLink && project.repoLink.includes("github.com")) {
        const parts = project.repoLink.split("/");
        const user = parts[parts.length - 2];
        const repo = parts[parts.length - 1];
        return `https://opengraph.githubassets.com/1/${user}/${repo}`;
    }

    return null;
};

export default function Home() {
    const featuredProject = siteConfig.projects.find(p => p.featured) || siteConfig.projects[0];
    const otherProjects = siteConfig.projects.filter(p => p !== featuredProject);

    const featuredImage = getProjectImage(featuredProject);

    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-indigo-500/30 selection:text-white">
            <Navbar />

            <main className="container mx-auto max-w-screen-2xl px-6 md:px-12 py-8 md:py-12">

                {/* --- HERO GRID SECTION --- */}
                <section className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-12 lg:mb-24">

                    {/* 1. LEFT CARD: PROFILE */}
                    <div className="lg:col-span-3 bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 md:p-12 flex flex-col relative overflow-hidden group min-h-[500px]">
                        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

                        <div className="z-10 flex flex-col md:flex-row gap-8 items-start md:items-center mb-6">
                            <div className="relative w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-2xl overflow-hidden border-4 border-neutral-800 shadow-2xl">
                                <Image
                                    src={siteConfig.details.avatar}
                                    alt={siteConfig.details.name}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <div>
                                <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight">
                                    {siteConfig.details.name}
                                </h1>
                                <p className="text-xl text-neutral-500">
                                    {siteConfig.details.role}
                                </p>
                            </div>
                        </div>

                        <p className="text-lg text-neutral-400 max-w-2xl leading-relaxed z-10 mb-12">
                            {siteConfig.details.bio}
                        </p>

                        <div className="flex flex-wrap gap-4 mt-auto z-10">
                            {siteConfig.socials.map((social, idx) => (
                                <Link
                                    key={idx}
                                    href={social.url}
                                    target="_blank"
                                    className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-400 hover:bg-white hover:text-black hover:border-transparent transition-all duration-300 hover:scale-110"
                                    title={social.name}
                                >
                                    <social.icon className="w-6 h-6" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* 2. RIGHT CARD: FEATURED PROJECT */}
                    <div className="lg:col-span-2 bg-neutral-900 border border-neutral-800 rounded-3xl flex flex-col relative overflow-hidden group hover:border-neutral-700 transition-colors h-full min-h-[500px]">

                        {/* Картинка сверху (БЕЗ кнопки) */}
                        <div className="relative w-full h-64 md:h-72 bg-neutral-950 border-b border-white/5 overflow-hidden">
                            {featuredImage ? (
                                <Image
                                    src={featuredImage}
                                    alt={featuredProject.title}
                                    fill
                                    className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-neutral-950">
                                    <span className="text-4xl font-black text-white/5 tracking-widest">PROJECT</span>
                                </div>
                            )}

                            {/* Бейдж оставляем на картинке, он обычно читается нормально */}
                            <div className="absolute top-4 left-4 inline-flex items-center rounded-full bg-black/50 backdrop-blur-md px-3 py-1 text-xs font-medium text-white border border-white/10 z-10">
                                ⭐️ Featured Project
                            </div>
                        </div>

                        {/* КОНТЕНТ СНИЗУ */}
                        <div className="p-8 flex flex-col flex-1">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-3xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                                    {featuredProject.title}
                                </h3>

                                {/* КНОПКА ПЕРЕЕХАЛА СЮДА */}
                                {featuredProject.repoLink && (
                                    <Link
                                        href={featuredProject.repoLink}
                                        target="_blank"
                                        className="p-3 bg-neutral-800 rounded-full text-neutral-300 hover:bg-white hover:text-black transition-colors shrink-0"
                                    >
                                        <ArrowUpRight className="w-5 h-5" />
                                    </Link>
                                )}
                            </div>

                            <p className="text-neutral-400 text-base mb-6 leading-relaxed flex-1">
                                {featuredProject.description}
                            </p>

                            <div className="flex flex-wrap gap-2 pt-4 mt-auto border-t border-white/5">
                                {featuredProject.tech.map((t, i) => (
                                    <span key={i} className="text-xs uppercase tracking-wider text-neutral-500 font-medium bg-neutral-950/50 px-2 py-1 rounded border border-neutral-800">
                        {t}
                      </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- OTHER PROJECTS GRID --- */}
                <section id="projects" className="mb-20">
                    <h2 className="text-2xl font-bold text-white mb-8 pl-1">Все проекты</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {otherProjects.map((project, idx) => {
                            const projectImage = getProjectImage(project);

                            return (
                                <div
                                    key={idx}
                                    className="group relative flex flex-col rounded-2xl border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900 transition-all hover:-translate-y-1 duration-300 overflow-hidden"
                                >
                                    <div className="relative w-full h-48 bg-neutral-950 border-b border-neutral-800 overflow-hidden">
                                        {projectImage ? (
                                            <Image
                                                src={projectImage}
                                                alt={project.title}
                                                fill
                                                className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <span className="font-bold text-neutral-700 text-4xl">{project.title[0]}</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors pr-4">{project.title}</h3>
                                            <div className="flex gap-2 shrink-0">
                                                {project.repoLink && (
                                                    <Link href={project.repoLink} target="_blank" className="text-neutral-500 hover:text-white transition-colors">
                                                        <Github className="w-4 h-4" />
                                                    </Link>
                                                )}
                                                {project.demoLink && (
                                                    <Link href={project.demoLink} target="_blank" className="text-neutral-500 hover:text-white transition-colors">
                                                        <ExternalLink className="w-4 h-4" />
                                                    </Link>
                                                )}
                                            </div>
                                        </div>

                                        <p className="text-neutral-400 text-sm mb-6 flex-1 line-clamp-3">{project.description}</p>

                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {project.tech.slice(0, 3).map((t, i) => (
                                                <span key={i} className="text-[10px] uppercase tracking-wider text-neutral-500 font-medium bg-neutral-950/50 px-2 py-1 rounded border border-neutral-800">
                            {t}
                          </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

            </main>

            <footer id="contact" className="border-t border-neutral-900 py-10 bg-neutral-950">
                <div className="container mx-auto max-w-screen-2xl px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-md bg-neutral-800 overflow-hidden relative">
                            <Image src={siteConfig.details.avatar} alt="mini avatar" fill className="object-cover" />
                        </div>
                        <p className="text-sm text-neutral-500">
                            © {new Date().getFullYear()} {siteConfig.details.name}
                        </p>
                    </div>

                    <a href={`mailto:${siteConfig.details.email}`} className="text-sm text-neutral-500 hover:text-white transition-colors">
                        {siteConfig.details.email}
                    </a>
                </div>
            </footer>
        </div>
    );
}