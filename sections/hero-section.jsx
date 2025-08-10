"use client";
import React from 'react';
import Image from "next/legacy/image";
import {BlurFade} from "@/components/ui/blur-fade";
import {Icons} from "@/components/ui/icons";

export default function HeroSection() {
    return (
        <section id="hero"
                 className="flex flex-col min-h-screen mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 pb-21 pt-16 justify-center">
            <div className="grid grid-cols-1 md:grid-cols-[7fr_3fr] gap-x-22 gap-y-12 items-center">
                <div className="flex flex-col text-center md:text-left gap-8 sm:gap-12">
                    <h1 className="text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 pb-2 sm:pb-4">
                        <BlurFade delay={0.2} duration={0.8}>
                            Uwais Jogee
                        </BlurFade>
                    </h1>
                    <h3 className="sm:text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-200">
                        <BlurFade delay={1} duration={0.8} direction="up">
                            A recent Computer Science graduate and aspiring Software Engineer, with a passion for
                            building intuitive solutions to real-world problems.
                        </BlurFade>
                    </h3>
                    <BlurFade delay={1} duration={0.8} direction="up">
                        <div className="flex gap-4 justify-center sm:justify-start">
                            <button className="p-[3px] relative">
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-emerald-500 rounded-lg"/>
                                <a href="mailto:uwaisjogee@outlook.com"
                                   className="px-6 py-2  bg-white dark:bg-black rounded-[6px] relative group transition duration-200 dark:text-white hover:bg-transparent dark:hover:bg-transparent active:bg-transparent dark:active:bg-transparent flex justify-center">
                        <span className="flex items-center gap-2">
                            <Icons.email className="size-5 sm:size-8"/>
                        </span>
                                </a>
                            </button>
                            <button className="p-[3px] relative">
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-emerald-500 rounded-lg"/>
                                <a href="www.linkedin.com/in/uwais-jogee"
                                   className="px-6 py-2  bg-white dark:bg-black rounded-[6px] relative group transition duration-300 dark:text-white hover:bg-transparent dark:hover:bg-transparent active:bg-transparent dark:active:bg-transparent flex justify-center">
                                    <span className="flex items-center gap-2">
                                        <Icons.linkedin className="size-5 sm:size-8"/>
                                    </span>
                                </a>
                            </button>
                        </div>
                    </BlurFade>
                </div>
                <div className="relative flex justify-center">
                    <BlurFade delay={0.2} duration={0.8}>
                        <div
                            className="absolute -z-10 translate-x-4 translate-y-4 w-54 h-78 sm:w-72 md:h-104 lg:w-90 lg:h-130 overflow-hidden shadow-lg bg-gradient-to-br from-cyan-400 to-emerald-500"></div>
                        <div
                            className="relative w-54 h-78 sm:w-72 md:h-104 lg:w-90 lg:h-130 overflow-hidden shadow-xl">
                            <Image
                                src="/images/portfolio-image.jpg"
                                alt="Profile Picture"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </BlurFade>
                </div>
            </div>
        </section>
    )
}