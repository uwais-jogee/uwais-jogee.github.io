"use client";

import React from 'react';
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Card, CardContent, CardDescription, CardTitle} from "@/components/ui/card";
import Image from "next/image";

export default function ProjectsSection() {
    return (
        <section id="projects" className="w-full">
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">Projects</h2>
            <div>
                <Carousel opts={{slidesToScroll: 1}}>
                    <CarouselContent className="py-16 gap-10">
                        {/*Placement Management System*/}
                        <CarouselItem className="md:basis-1/2">
                            <div className="p-0.5 relative rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-500">
                                <Card
                                    className="relative overflow-hidden w-full h-full p-0">
                                    {/*Image container*/}
                                    <div className="relative w-full h-72 rounded-t-lg overflow-hidden">
                                        <Image src="/images/placement-management-system.jpg"
                                               alt="Screenshot of Placement Management System"
                                               fill
                                               className="object-cover"
                                               loading="eager"
                                        />
                                        <div
                                            className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-card to-transparent pointer-events-none"/>
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
                                                    A full-stack web application for universities and students to manage
                                                    and oversee
                                                    the industrial placement process. Key placement related tasks
                                                    including
                                                    placement authorisation requests, communication, tutor visit
                                                    scheduling,
                                                    and placement data management are centralised and automated to
                                                    improve
                                                    efficiency and reduce the administrative burden.
                                                </CardDescription>
                                                <div className="flex flex-wrap gap-4 pt-3">
                                                    <i className="devicon-java-plain-wordmark text-neutral-800 dark:text-neutral-200 text-3xl sm:text-4xl hover:scale-110 transition-transform duration-200"></i>
                                                    <i className="devicon-spring-original-wordmark text-neutral-800 dark:text-neutral-200 text-3xl sm:text-4xl hover:scale-110 transition-transform duration-200"></i>
                                                    <i className="devicon-thymeleaf-plain text-neutral-800 dark:text-neutral-200 text-3xl sm:text-4xl hover:scale-110 transition-transform duration-200"></i>
                                                    <i className="devicon-tailwindcss-original text-neutral-800 dark:text-neutral-200 text-3xl sm:text-4xl hover:scale-110 transition-transform duration-200"></i>
                                                    <i className="devicon-javascript-plain text-neutral-800 dark:text-neutral-200 text-3xl sm:text-4xl hover:scale-110 transition-transform duration-200"></i>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </div>
                                </Card>
                            </div>
                        </CarouselItem>

                        {/*Airbnb Price Prediction Machine Learning Model*/}
                        <CarouselItem className="md:basis-1/2">
                            <div className="p-0.5 relative rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-500">
                                <Card
                                    className="relative overflow-hidden w-full h-full p-0">
                                    {/*Image container*/}
                                    <div className="relative w-full h-72 rounded-t-lg overflow-hidden">
                                        <Image src="/images/airbnb-price-prediction-ml-model.jpg"
                                               alt="Screenshot of Airbnb Price Prediction Machine Learning Model"
                                               fill
                                               className="object-cover"
                                               loading="eager"
                                        />
                                        <div
                                            className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-card to-transparent pointer-events-none"/>
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
                                                    A machine learning project for predicting nightly Airbnb prices,
                                                    featuring Random Forest regression optimised with Randomised Search
                                                    Cross-Validation and improved performance through cluster-based
                                                    modeling
                                                    using K-Means clustering.
                                                </CardDescription>
                                                <div className="flex flex-wrap gap-4 pt-3">
                                                    <i className="devicon-python-plain-wordmark text-neutral-800 dark:text-neutral-200 text-3xl sm:text-4xl hover:scale-110 transition-transform duration-200"></i>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </div>
                                </Card>
                            </div>
                        </CarouselItem>

                        {/*Personal Portfolio Website*/}
                        <CarouselItem className="md:basis-1/2">
                            <div className="p-0.5 relative rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-500">
                                <Card
                                    className="relative overflow-hidden w-full h-full p-0">
                                    {/*Image container*/}
                                    <div className="relative w-full h-72 rounded-t-lg overflow-hidden">
                                        <Image src="/images/personal-portfolio-website.jpg"
                                               alt="Screenshot of Personal Portfolio Website"
                                               fill
                                               className="object-cover"
                                               loading="eager"
                                        />
                                        <div
                                            className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-card to-transparent pointer-events-none"/>
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
                                                    A modern, responsive portfolio website built to showcase my
                                                    projects,
                                                    skills, and experience.
                                                </CardDescription>
                                                <div className="flex flex-wrap gap-4 pt-3">
                                                    <i className="devicon-javascript-plain text-neutral-800 dark:text-neutral-200 text-3xl sm:text-4xl hover:scale-110 transition-transform duration-200"></i>
                                                    <i className="devicon-nextjs-plain text-neutral-800 dark:text-neutral-200 text-3xl sm:text-4xl hover:scale-110 transition-transform duration-200"></i>
                                                    <i className="devicon-react-original-wordmark text-neutral-800 dark:text-neutral-200 text-3xl sm:text-4xl hover:scale-110 transition-transform duration-200"></i>
                                                    <i className="devicon-tailwindcss-original text-neutral-800 dark:text-neutral-200 text-3xl sm:text-4xl hover:scale-110 transition-transform duration-200"></i>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </div>
                                </Card>
                            </div>
                        </CarouselItem>

                        {/*Connect 4 Game with AI Opponent*/}
                        <CarouselItem className="md:basis-1/2">
                            <div className="p-0.5 relative rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-500">
                                <Card
                                    className="relative overflow-hidden w-full h-full p-0">
                                    {/*Image container*/}
                                    <div className="relative w-full h-72 rounded-t-lg overflow-hidden">
                                        <Image src="/images/connect-4.jpg"
                                               alt="Screenshot of Connect 4 Game with AI Opponent"
                                               fill
                                               className="object-cover"
                                               loading="eager"
                                        />
                                        <div
                                            className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-card to-transparent pointer-events-none"/>
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
                                                    An interactive Connect 4 game featuring local multiplayer and an AI
                                                    opponent, powered by the Minimax algorithm. Users can create
                                                    accounts,
                                                    track scores, and compete on a leaderboard.
                                                </CardDescription>
                                                <div className="flex flex-wrap gap-4 pt-3">
                                                    <i className="devicon-python-plain-wordmark text-neutral-800 dark:text-neutral-200 text-3xl sm:text-4xl hover:scale-110 transition-transform duration-200"></i>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </div>
                                </Card>
                            </div>
                        </CarouselItem>

                        {/*Petition Platform*/}
                        <CarouselItem className="md:basis-1/2">
                            <div className="p-0.5 relative rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-500">
                                <Card
                                    className="relative overflow-hidden w-full h-full p-0">
                                    {/*Image container*/}
                                    <div className="relative w-full h-72 rounded-t-lg overflow-hidden">
                                        <Image src="/images/petition-platform.jpg"
                                               alt="Screenshot of Petition Platform"
                                               fill
                                               className="object-cover"
                                               loading="eager"
                                        />
                                        <div
                                            className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-card to-transparent pointer-events-none"/>
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
                                                    A full-stack web application that enables citizens to create, sign,
                                                    and
                                                    track petitions with secure QR code based registration and
                                                    role-based
                                                    access. Includes dashboards for petition management, responses,
                                                    signature tracking, and a RESTful Open Data API for petition
                                                    records.
                                                </CardDescription>
                                                <div className="flex flex-wrap gap-4 pt-3">
                                                    <i className="devicon-java-plain-wordmark text-neutral-800 dark:text-neutral-200 text-3xl sm:text-4xl hover:scale-110 transition-transform duration-200"></i>
                                                    <i className="devicon-spring-original-wordmark text-neutral-800 dark:text-neutral-200 text-3xl sm:text-4xl hover:scale-110 transition-transform duration-200"></i>
                                                    <i className="devicon-javascript-plain text-neutral-800 dark:text-neutral-200 text-3xl sm:text-4xl hover:scale-110 transition-transform duration-200"></i>
                                                    <i className="devicon-bootstrap-plain-wordmark text-neutral-800 dark:text-neutral-200 text-3xl sm:text-4xl hover:scale-110 transition-transform duration-200"></i>
                                                    <i className="devicon-postman-plain text-neutral-800 dark:text-neutral-200 text-3xl sm:text-4xl hover:scale-110 transition-transform duration-200"></i>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </div>
                                </Card>
                            </div>
                        </CarouselItem>

                        {/*Stock Market Simulator*/}
                        <CarouselItem className="md:basis-1/2">
                            <div className="p-0.5 relative rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-500">
                                <Card
                                    className="relative overflow-hidden w-full h-full p-0">
                                    {/*Image container*/}
                                    <div className="relative w-full h-72 rounded-t-lg overflow-hidden">
                                        <Image src="/images/stock-market-simulator.jpg"
                                               alt="Screenshot of Stock Market Simulator"
                                               fill
                                               className="object-cover"
                                               loading="eager"
                                        />
                                        <div
                                            className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-card to-transparent pointer-events-none"/>
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
                                                    A program simulating the processing of buy and sell orders for a
                                                    single
                                                    company, handling market and limit orders with priority-based
                                                    matching.
                                                    Executes trades according to order type and arrival time, supports
                                                    partial order fulfillment, updates pending orders in real-time, and
                                                    logs
                                                    executed and unexecuted orders to output files.
                                                </CardDescription>
                                                <div className="flex flex-wrap gap-4 pt-3">
                                                    <i className="devicon-cplusplus-plain text-neutral-800 dark:text-neutral-200 text-3xl sm:text-4xl hover:scale-110 transition-transform duration-200"></i>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </div>
                                </Card>
                            </div>
                        </CarouselItem>

                    </CarouselContent>

                    <div className="flex items-center justify-center gap-6">
                        <CarouselPrevious className="relative inset-auto size-15 hover:cursor-pointer"/>
                        <CarouselNext className="relative inset-auto size-15 hover:cursor-pointer"/>
                    </div>

                </Carousel>
            </div>
        </section>
    );
}
