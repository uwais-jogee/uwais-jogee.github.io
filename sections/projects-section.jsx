"use client";

import React from 'react';
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Card, CardContent, CardDescription, CardTitle} from "@/components/ui/card";
import {ShineBorder} from "@/components/ui/shine-border";
import Image from "next/legacy/image";
import {Icons} from "@/components/ui/icons";
import {TechIconSmall} from "@/components/layout/tech-icon-small";

export default function ProjectsSection() {
    return (
        <section id="projects" className="w-full">
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">Projects</h2>
            <div>
                <Carousel opts={{slidesToScroll: 1}}>
                    <CarouselContent className="pt-16 pb-12 px-1">

                        {/*Placement Management System*/}
                        <CarouselItem className="md:basis-1/2">
                            <Card
                                className="relative overflow-hidden w-full p-0.5 gap-5.5 transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg">
                                <ShineBorder shineColor={["#22d3ee", "#10b981"]}/>
                                {/*Image container*/}
                                <div className="relative w-full h-64 rounded-t-lg overflow-hidden">
                                    <Image src="/images/placement-management-system.png"
                                           alt="Screenshot of Placement Management System"
                                           layout="fill"
                                           objectFit="cover"
                                           className=""
                                    />
                                </div>
                                {/*Title and Description container*/}
                                <div className="mx-4">
                                    <CardTitle
                                        className="text-xl sm:text-2xl font-bold text-neutral-800 dark:text-neutral-100 pb-3">
                                        Placement Management System
                                    </CardTitle>
                                    <CardContent className="pb-6">
                                        <div className="flex flex-col gap-3">
                                            <CardDescription className="text-sm md:text-base">
                                                A web application for universities and students to manage and oversee
                                                the industrial placement process. Key placement related tasks including
                                                placement authorisation requests, communication, tutor visit scheduling,
                                                and placement data management are centralised and automated to improve
                                                efficiency and reduce the administrative burden.
                                            </CardDescription>
                                            <div className="flex flex-wrap gap-3">
                                                <TechIconSmall name="Java" icon={Icons.java}/>
                                                <TechIconSmall name="Spring" icon={Icons.spring}/>
                                                <TechIconSmall name="Thymeleaf" icon={Icons.thymeleaf}/>
                                                <TechIconSmall name="Tailwind CSS" icon={Icons.tailwind}/>
                                                <TechIconSmall name="JavaScript" icon={Icons.javaScript}/>
                                            </div>
                                        </div>
                                    </CardContent>
                                </div>
                            </Card>
                        </CarouselItem>

                        {/*Airbnb Price Prediction Machine Learning Model*/}
                        <CarouselItem className="md:basis-1/2">
                            <Card
                                className="relative overflow-hidden w-full p-0.5 gap-5.5 transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg">
                                <ShineBorder shineColor={["#22d3ee", "#10b981"]}/>
                                {/*Image container*/}
                                <div className="relative w-full h-64 rounded-t-lg overflow-hidden">
                                    <Image src="/images/airbnb-price-prediction-ml-model.png"
                                           alt="Screenshot of Airbnb Price Prediction Machine Learning Model"
                                           layout="fill"
                                           objectFit="cover"
                                           className=""
                                    />
                                </div>
                                {/*Title and Description container*/}
                                <div className="mx-4">
                                    <CardTitle
                                        className="text-xl sm:text-2xl font-bold text-neutral-800 dark:text-neutral-100 pb-3">
                                        Airbnb Price Prediction Machine Learning Model
                                    </CardTitle>
                                    <CardContent className="pb-6">
                                        <div className="flex flex-col gap-3">
                                            <CardDescription className="text-sm md:text-base">
                                                Co-developed a machine learning model to predict nightly Airbnb property
                                                prices after exploring and cleansing the large dataset. Implemented
                                                feature encoding, normalisation, and a Random Forest regression model
                                                tuned with Randomised Search Cross-Validation to minimise overfitting.
                                                Applied K-Means clustering to group properties and improve performance
                                                through cluster-based regression models.
                                            </CardDescription>
                                            <div className="flex flex-wrap gap-3">
                                                <TechIconSmall name="Python" icon={Icons.python}/>
                                            </div>
                                        </div>
                                    </CardContent>
                                </div>
                            </Card>
                        </CarouselItem>

                        {/*Personal Portfolio Website*/}
                        <CarouselItem className="md:basis-1/2">
                            <Card
                                className="relative overflow-hidden w-full p-0.5 gap-5.5 transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg">
                                <ShineBorder shineColor={["#22d3ee", "#10b981"]}/>
                                {/*Image container*/}
                                <div className="relative w-full h-64 rounded-t-lg overflow-hidden">
                                    <Image src="/images/personal-portfolio-website.png"
                                           alt="Screenshot of Personal Portfolio Website"
                                           layout="fill"
                                           objectFit="cover"
                                           className=""
                                    />
                                </div>
                                {/*Title and Description container*/}
                                <div className="mx-4">
                                    <CardTitle
                                        className="text-xl sm:text-2xl font-bold text-neutral-800 dark:text-neutral-100 pb-3">
                                        Personal Portfolio Website
                                    </CardTitle>
                                    <CardContent className="pb-6">
                                        <div className="flex flex-col gap-3">
                                            <CardDescription className="text-sm md:text-base">
                                                A modern, responsive portfolio website built to showcase my projects,
                                                skills, and experience.
                                            </CardDescription>
                                            <div className="flex flex-wrap gap-3">
                                                <TechIconSmall name="JavaScript" icon={Icons.javaScript}/>
                                                <TechIconSmall name="Next.js" icon={Icons.nextjs}/>
                                                <TechIconSmall name="Tailwind CSS" icon={Icons.tailwind}/>
                                            </div>
                                        </div>
                                    </CardContent>
                                </div>
                            </Card>
                        </CarouselItem>

                        {/*Petition Platform*/}
                        <CarouselItem className="md:basis-1/2">
                            <Card
                                className="relative overflow-hidden w-full p-0.5 gap-5.5 transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg">
                                <ShineBorder shineColor={["#22d3ee", "#10b981"]}/>
                                {/*Image container*/}
                                <div className="relative w-full h-64 rounded-t-lg overflow-hidden">
                                    <Image src="/"
                                           alt="Screenshot of Petition Platform"
                                           layout="fill"
                                           objectFit="cover"
                                           className=""
                                    />
                                </div>
                                {/*Title and Description container*/}
                                <div className="mx-4">
                                    <CardTitle
                                        className="text-xl sm:text-2xl font-bold text-neutral-800 dark:text-neutral-100 pb-3">
                                        Petition Platform
                                    </CardTitle>
                                    <CardContent className="pb-6">
                                        <div className="flex flex-col gap-3">
                                            <CardDescription className="text-sm md:text-base">
                                            </CardDescription>
                                            <div className="flex flex-wrap gap-3">
                                                <TechIconSmall name="Java" icon={Icons.java}/>
                                                <TechIconSmall name="Spring" icon={Icons.spring}/>
                                                <TechIconSmall name="JavaScript" icon={Icons.javaScript}/>
                                                <TechIconSmall name="Bootstrap" icon={Icons.bootstrap}/>
                                                <TechIconSmall name="Postman" icon={Icons.postman}/>
                                            </div>
                                        </div>
                                    </CardContent>
                                </div>
                            </Card>
                        </CarouselItem>

                        {/*Stock Market Simulator*/}
                        <CarouselItem className="md:basis-1/2">
                            <Card
                                className="relative overflow-hidden w-full p-0.5 gap-5.5 transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg">
                                <ShineBorder shineColor={["#22d3ee", "#10b981"]}/>
                                {/*Image container*/}
                                <div className="relative w-full h-64 rounded-t-lg overflow-hidden">
                                    <Image src="/"
                                           alt="Screenshot of Stock Market Simulator"
                                           layout="fill"
                                           objectFit="cover"
                                           className=""
                                    />
                                </div>
                                {/*Title and Description container*/}
                                <div className="mx-4">
                                    <CardTitle
                                        className="text-xl sm:text-2xl font-bold text-neutral-800 dark:text-neutral-100 pb-3">
                                        Stock Market Simulator
                                    </CardTitle>
                                    <CardContent className="pb-6">
                                        <div className="flex flex-col gap-3">
                                            <CardDescription className="text-sm md:text-base">
                                            </CardDescription>
                                            <div className="flex flex-wrap gap-3">
                                                <TechIconSmall name="C++" icon={Icons.cpp}/>
                                            </div>
                                        </div>
                                    </CardContent>
                                </div>
                            </Card>
                        </CarouselItem>

                        {/*Task Management Application*/}
                        <CarouselItem className="md:basis-1/2">
                            <Card
                                className="relative overflow-hidden w-full p-0.5 gap-5.5 transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg">
                                <ShineBorder shineColor={["#22d3ee", "#10b981"]}/>
                                {/*Image container*/}
                                <div className="relative w-full h-64 rounded-t-lg overflow-hidden">
                                    <Image src="/"
                                           alt="Screenshot of Task Management Application"
                                           layout="fill"
                                           objectFit="cover"
                                           className=""
                                    />
                                </div>
                                {/*Title and Description container*/}
                                <div className="mx-4">
                                    <CardTitle
                                        className="text-xl sm:text-2xl font-bold text-neutral-800 dark:text-neutral-100 pb-3">
                                        Task Management Application
                                    </CardTitle>
                                    <CardContent className="pb-6">
                                        <div className="flex flex-col gap-3">
                                            <CardDescription className="text-sm md:text-base">
                                            </CardDescription>
                                            <div className="flex flex-wrap gap-3">
                                                <TechIconSmall name="HTML" icon={Icons.html}/>
                                                <TechIconSmall name="CSS" icon={Icons.css}/>
                                                <TechIconSmall name="JavaScript" icon={Icons.javaScript}/>
                                            </div>
                                        </div>
                                    </CardContent>
                                </div>
                            </Card>
                        </CarouselItem>

                        {/*Connect 4 Game with AI Opponent*/}
                        <CarouselItem className="md:basis-1/2">
                            <Card
                                className="relative overflow-hidden w-full p-0.5 gap-5.5 transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg">
                                <ShineBorder shineColor={["#22d3ee", "#10b981"]}/>
                                {/*Image container*/}
                                <div className="relative w-full h-64 rounded-t-lg overflow-hidden">
                                    <Image src="/"
                                           alt="Screenshot of Connect 4 Game with AI Opponent"
                                           layout="fill"
                                           objectFit="cover"
                                           className=""
                                    />
                                </div>
                                {/*Title and Description container*/}
                                <div className="mx-4">
                                    <CardTitle
                                        className="text-xl sm:text-2xl font-bold text-neutral-800 dark:text-neutral-100 pb-3">
                                        Connect 4 Game with AI Opponent
                                    </CardTitle>
                                    <CardContent className="pb-6">
                                        <div className="flex flex-col gap-3">
                                            <CardDescription className="text-sm md:text-base">
                                            </CardDescription>
                                            <div className="flex flex-wrap gap-3">
                                                <TechIconSmall name="Python" icon={Icons.python}/>
                                            </div>
                                        </div>
                                    </CardContent>
                                </div>
                            </Card>
                        </CarouselItem>

                    </CarouselContent>
                    <div className="flex items-center justify-center gap-6">
                        <CarouselPrevious className="relative inset-auto size-10 md:size-13 hover:cursor-pointer"/>
                        <CarouselNext className="relative inset-auto size-10 md:size-13 hover:cursor-pointer"/>
                    </div>
                </Carousel>
            </div>
        </section>
    );
}