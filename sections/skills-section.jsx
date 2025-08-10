"use client";
import React from 'react';
import {ShineBorder} from "@/components/ui/shine-border";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Icons} from "@/components/ui/icons";
import {TechIcon} from "@/components/layout/tech-icon";

export default function SkillsSection() {
    return (
        <section id="skills" className="w-full">
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pt-16">
                <Card className="relative overflow-hidden w-full gap-6">
                    <ShineBorder shineColor={["#22d3ee", "#10b981"]}/>
                    <CardHeader>
                        <CardTitle
                            className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100">Languages</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-4">
                            <TechIcon name="Python" icon={Icons.python}/>
                            <TechIcon name="Java" icon={Icons.java}/>
                            <TechIcon name="C++" icon={Icons.cpp}/>
                            <TechIcon name="SQL" icon={Icons.sql}/>
                            <TechIcon name="HTML" icon={Icons.html}/>
                            <TechIcon name="CSS" icon={Icons.css}/>
                            <TechIcon name="JavaScript" icon={Icons.javaScript}/>
                            <TechIcon name="Bash" icon={Icons.bash}/>
                            <TechIcon name="Powershell" icon={Icons.powershell}/>
                        </div>
                    </CardContent>
                </Card>
                <Card className="relative overflow-hidden w-full gap-6">
                    <ShineBorder shineColor={["#22d3ee", "#10b981"]}/>
                    <CardHeader>
                        <CardTitle
                            className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100">Frameworks
                            & Libraries</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-4">
                            <TechIcon name="React" icon={Icons.react}/>
                            <TechIcon name="Next.js" icon={Icons.nextjs}/>
                            <TechIcon name="Node.js" icon={Icons.nodejs}/>
                            <TechIcon name="Bootstrap" icon={Icons.bootstrap}/>
                            <TechIcon name="Tailwind CSS" icon={Icons.tailwind}/>
                            <TechIcon name="Spring" icon={Icons.spring}/>
                            <TechIcon name="Thymeleaf" icon={Icons.thymeleaf}/>
                        </div>
                    </CardContent>
                </Card>
                <Card className="relative overflow-hidden w-full gap-6">
                    <ShineBorder shineColor={["#22d3ee", "#10b981"]}/>
                    <CardHeader>
                        <CardTitle
                            className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100">Platforms
                            & Tools</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-4">
                            <TechIcon name="Git" icon={Icons.git}/>
                            <TechIcon name="Docker" icon={Icons.docker}/>
                            <TechIcon name="Android" icon={Icons.android}/>
                            <TechIcon name="Azure" icon={Icons.azure}/>
                            <TechIcon name="Google Cloud" icon={Icons.googleCloud}/>
                            <TechIcon name="Jira" icon={Icons.jira}/>
                            <TechIcon name="Confluence" icon={Icons.confluence}/>
                            <TechIcon name="Postman" icon={Icons.postman}/>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}