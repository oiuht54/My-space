import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// Контейнер для всей сетки
export const BentoGrid = ({
                              className,
                              children,
                          }: {
    className?: string;
    children?: ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto w-full",
                className
            )}
        >
            {children}
        </div>
    );
};

// Отдельная карточка
export const BentoGridItem = ({
                                  className,
                                  title,
                                  description,
                                  header,
                                  icon,
                                  link,
                              }: {
    className?: string;
    title?: string | ReactNode;
    description?: string | ReactNode;
    header?: ReactNode;
    icon?: ReactNode;
    link?: string;
}) => {
    const ContentWrapper = link ? "a" : "div";

    return (
        <motion.div
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-zinc-900 bg-white border border-transparent justify-between flex flex-col space-y-4 border-zinc-200 dark:border-zinc-800",
                className
            )}
        >
            {/* Если есть ссылка, оборачиваем контент, чтобы карточка была кликабельной */}
            <ContentWrapper href={link} target={link ? "_blank" : undefined} className="h-full flex flex-col justify-between">
                {header}
                <div className="group-hover/bento:translate-x-2 transition duration-200">
                    {icon}
                    <div className="font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                        {title}
                    </div>
                    <div className="font-normal text-neutral-600 text-xs dark:text-neutral-300">
                        {description}
                    </div>
                </div>
            </ContentWrapper>
        </motion.div>
    );
};