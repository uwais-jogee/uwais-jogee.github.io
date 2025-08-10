"use client";
import React from 'react';
import {Icons} from "@/components/ui/icons";

export default function ContactSection() {
    return (
        <section id="contact" className="w-full">
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 text-center">Get in Touch</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 pt-16">
                <button className="p-[3px] relative text-base sm:text-lg w-60 sm:w-65">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-emerald-500 rounded-lg" />
                    <a href="mailto:uwaisjogee@outlook.com" className="px-6 py-2  bg-white dark:bg-black rounded-[6px] relative group transition duration-200 dark:text-white hover:bg-transparent dark:hover:bg-transparent active:bg-transparent dark:active:bg-transparent flex justify-center">
                        <span className="flex items-center gap-2 font-semibold">
                            <Icons.email className="size-5 " />
                            Email Me
                        </span>
                    </a>
                </button>
                <button  className="p-[3px] relative text-base sm:text-lg w-60 sm:w-65">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-emerald-500 rounded-lg" />
                    <a href="mailto:uwaisjogee@outlook.com" className="px-6 py-2  bg-white dark:bg-black rounded-[6px] relative group transition duration-200 dark:text-white hover:bg-transparent dark:hover:bg-transparent active:bg-transparent dark:active:bg-transparent flex justify-center">
                        <span className="flex items-center gap-2 font-semibold">
                            <Icons.linkedin className="size-5 sm:size-6" />
                            Connect on LinkedIn
                        </span>
                    </a>
                </button>
            </div>
        </section>
    );
}