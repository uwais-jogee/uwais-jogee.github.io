"use client";
import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export default function SkillsSection() {
    return (
        <section id="skills" className="w-full">
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pt-16">
                <div className="p-0.5 relative rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-500">
                    <Card className="relative overflow-hidden w-full h-full gap-6">
                        <CardHeader>
                            <CardTitle
                                className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100">Languages</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-6">
                                <i className="devicon-python-plain-wordmark text-neutral-800 dark:text-neutral-200 text-4xl sm:text-5xl hover:scale-110 transition-transform duration-200"></i>
                                <i className="devicon-java-plain-wordmark text-neutral-800 dark:text-neutral-200 text-4xl sm:text-5xl hover:scale-110 transition-transform duration-200"></i>
                                <i className="devicon-cplusplus-plain text-neutral-800 dark:text-neutral-200 text-4xl sm:text-5xl hover:scale-110 transition-transform duration-200"></i>
                                <i className="devicon-azuresqldatabase-plain text-neutral-800 dark:text-neutral-200 text-4xl sm:text-5xl hover:scale-110 transition-transform duration-200"></i>
                                <i className="devicon-html5-plain-wordmark text-neutral-800 dark:text-neutral-200 text-4xl sm:text-5xl hover:scale-110 transition-transform duration-200"></i>
                                <i className="devicon-css3-plain-wordmark text-neutral-800 dark:text-neutral-200 text-4xl sm:text-5xl hover:scale-110 transition-transform duration-200"></i>
                                <i className="devicon-javascript-plain text-neutral-800 dark:text-neutral-200 text-4xl sm:text-5xl hover:scale-110 transition-transform duration-200"></i>
                                <i className="devicon-bash-plain text-neutral-800 dark:text-neutral-200 text-4xl sm:text-5xl hover:scale-110 transition-transform duration-200"></i>
                                <i className="devicon-powershell-plain text-neutral-800 dark:text-neutral-200 text-4xl sm:text-5xl hover:scale-110 transition-transform duration-200"></i>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="p-0.5 relative rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-500">
                    <Card className="relative overflow-hidden w-full h-full gap-6">
                        <CardHeader>
                            <CardTitle
                                className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100">Frameworks
                                & Libraries</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-4">
                                <i className="devicon-spring-original-wordmark text-neutral-800 dark:text-neutral-200 text-4xl sm:text-5xl hover:scale-110 transition-transform duration-200"></i>
                                <i className="devicon-react-original-wordmark text-neutral-800 dark:text-neutral-200 text-4xl sm:text-5xl hover:scale-110 transition-transform duration-200"></i>
                                <i className="devicon-nextjs-plain text-neutral-800 dark:text-neutral-200 text-4xl sm:text-5xl hover:scale-110 transition-transform duration-200"></i>
                                <i className="devicon-nodejs-plain-wordmark text-neutral-800 dark:text-neutral-200 text-4xl sm:text-5xl hover:scale-110 transition-transform duration-200"></i>
                                <i className="devicon-bootstrap-plain-wordmark text-neutral-800 dark:text-neutral-200 text-4xl sm:text-5xl hover:scale-110 transition-transform duration-200"></i>
                                <i className="devicon-tailwindcss-original text-neutral-800 dark:text-neutral-200 text-4xl sm:text-5xl hover:scale-110 transition-transform duration-200"></i>
                                <i className="devicon-thymeleaf-plain text-neutral-800 dark:text-neutral-200 text-4xl sm:text-5xl hover:scale-110 transition-transform duration-200"></i>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="p-0.5 relative rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-500">
                    <Card className="relative overflow-hidden w-full h-full gap-6">
                        <CardHeader>
                            <CardTitle
                                className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100">Platforms
                                & Tools</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-4">
                                <i className="devicon-git-plain text-neutral-800 dark:text-neutral-200 text-4xl sm:text-5xl hover:scale-110 transition-transform duration-200"></i>
                                <i className="devicon-docker-plain-wordmark text-neutral-800 dark:text-neutral-200 text-4xl sm:text-5xl hover:scale-110 transition-transform duration-200"></i>
                                <i className="devicon-android-plain text-neutral-800 dark:text-neutral-200 text-4xl sm:text-5xl hover:scale-110 transition-transform duration-200"></i>
                                <i className="devicon-azure-plain text-neutral-800 dark:text-neutral-200 text-4xl sm:text-5xl hover:scale-110 transition-transform duration-200"></i>
                                <i className="devicon-googlecloud-plain text-neutral-800 dark:text-neutral-200 text-4xl sm:text-5xl hover:scale-110 transition-transform duration-200"></i>
                                <i className="devicon-jira-plain-wordmark text-neutral-800 dark:text-neutral-200 text-4xl sm:text-5xl hover:scale-110 transition-transform duration-200"></i>
                                <i className="devicon-confluence-plain-wordmark text-neutral-800 dark:text-neutral-200 text-4xl sm:text-5xl hover:scale-110 transition-transform duration-200"></i>
                                <i className="devicon-postman-plain text-neutral-800 dark:text-neutral-200 text-4xl sm:text-5xl hover:scale-110 transition-transform duration-200"></i>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}