"use client";
import React from 'react';
import {Timeline} from "@/components/ui/timeline";
import {Icons} from "@/components/ui/icons";
import {ExperienceLogo} from "@/components/layout/experience-logo";

export default function ExperienceSection() {

    const data = [
        {
            title: "October 2025 - Present",
            content: (
                <div>
                    <div className="flex items-center gap-6 sm:gap-12">
                        <ExperienceLogo name="AtkinsRéalis" icon={Icons.atkinsRealis}/>
                        <div>
                            <h3 className="text-base sm:text-xl font-bold">Graduate Software Engineer</h3>
                            <h4 className="text-sm sm:text-lg font-semibold">AtkinsRéalis</h4>
                        </div>
                    </div>
                    <p className="mt-4 sm:mt-6 mb-8 text-sm sm:text-base text-neutral-900 dark:text-neutral-100">
                        Developing impactful software solutions by applying technical expertise, problem-solving skills, and collaborative teamwork to address real-world client challenges.
                    </p>
                </div>
            ),
        },
        {
            title: "November 2021 - August 2025",
            content: (
                <div>
                    <div className="flex items-center gap-6 sm:gap-12">
                        <ExperienceLogo name="Currys" icon={Icons.currys}/>
                        <div>
                            <h3 className="text-base sm:text-xl font-bold">Sales Colleague</h3>
                            <h4 className="text-sm sm:text-lg font-semibold">Currys</h4>
                        </div>
                    </div>
                    <p className="mt-4 sm:mt-6 mb-8 text-sm sm:text-base text-neutral-900 dark:text-neutral-100">
                        Applied strong communication and technical problem-solving skills to meet customer needs while providing excellent customer service.
                    </p>
                </div>
            ),
        },
        {
            title: "July 2023 - August 2023",
            content: (
                <div>
                    <div className="flex items-center gap-6 sm:gap-12">
                        <ExperienceLogo name="Aldi" icon={Icons.aldi}/>
                        <div>
                            <h3 className="text-base sm:text-xl font-bold">National IT Placement</h3>
                            <h4 className="text-sm sm:text-lg font-semibold">Aldi</h4>
                        </div>
                    </div>
                    <p className="mt-4 sm:mt-6 mb-8 text-sm sm:text-base text-neutral-900 dark:text-neutral-100">
                        Provided critical IT support for stores nationwide by resolving incidents across POS, back-office, and mobile systems, while also contributing to data-driven vendor analysis and IT process improvement projects.
                    </p>
                </div>
            ),
        },
        {
            title: "September 2021 - July 2026",
            content: (
                <div>
                    <div className="flex items-center gap-6 sm:gap-12">
                        <ExperienceLogo name="University of Leicester" icon={Icons.uol}/>
                        <div>
                            <h3 className="text-base sm:text-xl font-bold">BSc Computer Science</h3>
                            <h4 className="text-sm sm:text-lg font-semibold">University of Leicester</h4>
                        </div>
                    </div>
                    <p className="mt-4 sm:mt-6 mb-8 text-sm sm:text-base text-neutral-900 dark:text-neutral-100">
                        Achieved First-Class Honours, with key modules including Advanced Programming, Big Data & Predictive Analytics, Operating Systems & Networking, and Technology & Innovation Management.
                    </p>
                </div>
            ),
        }
    ]

    return (
        <section id="experience" className="w-full">
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">Experience</h2>
            <div className="relative w-full overflow-clip">
                <Timeline data={data}/>
            </div>
        </section>
    );
}