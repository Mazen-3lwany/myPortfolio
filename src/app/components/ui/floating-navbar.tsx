"use client";
import React, { useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../lib/utils";
import Link from "next/link";

// Define the type for navItem
interface NavItem {
    link: string;
    name: string;
    icon: React.ReactNode;
}

interface FloatingNavProps {
  navItems: NavItem[]; // Array of navItems
  className?: string; // Optional className
}

export const FloatingNav: React.FC<FloatingNavProps> = ({ navItems, className }) => {
    const { scrollYProgress } = useScroll();

    const [visible, setVisible] = useState(false);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        // Ensure that current is a number and getPrevious is defined
        if (typeof current === "number" && scrollYProgress.getPrevious() !== undefined) {
            const direction = current - scrollYProgress.getPrevious()!;

            if (scrollYProgress.get() < 0.05) {
                setVisible(false);
            } else {
                if (direction < 0) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            }
        }
    });

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: -100,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                className={cn(
                    "text-white flex max-w-fit fixed top-10 inset-x-0 mx-auto rounded-2xl dark:bg-black backdrop-blur-3xl bg-black/70 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] p-5 items-center justify-center space-x-4",
                    className
                )}
            >
                {navItems.map((navItem, idx) => (
                    <Link
                        key={`link=${idx}`}
                        href={navItem.link}
                        className={cn(
                            "relative dark:text-neutral-50 items-center flex space-x-1 dark:hover:text-neutral-300 hover:text-neutral-500"
                        )}
                    >
                        <span className="block sm:hidden">{navItem.icon}</span>
                        <span className="hidden sm:block text-sm">{navItem.name}</span>
                    </Link>
                ))}
            </motion.div>
        </AnimatePresence>
    );
};
