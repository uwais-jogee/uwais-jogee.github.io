import React from "react";
import HeroSection from "/sections/hero-section"
import ExperienceSection from "/sections/experience-section";
import SkillsSection from "/sections/skills-section";
import ProjectsSection from "/sections/projects-section";
import {BlurFade} from "@/components/ui/blur-fade";
import ContactSection from "@/sections/contact-section";

export default function HomePage() {
    return (
        <main className="relative z-10">
            <HeroSection/>
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 flex flex-col gap-28 pb-40">
                <BlurFade inView={true} delay={0.2} duration={0.8}>
                    <SkillsSection/>
                </BlurFade>
                <BlurFade inView={true} delay={0.2} duration={0.8}>
                    <ProjectsSection/>
                </BlurFade>
                <BlurFade inView={true} delay={0.2} duration={0.8}>
                    <ExperienceSection/>
                </BlurFade>
                <BlurFade inView={true} delay={0.2} duration={0.8}>
                    <ContactSection/>
                </BlurFade>
            </div>
        </main>
    )
}