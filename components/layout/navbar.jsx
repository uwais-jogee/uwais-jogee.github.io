"use client";

import {CircleUserRound, MailIcon, BriefcaseBusiness, Lightbulb, Code} from "lucide-react";
import Link from "next/link";
import React from "react";

import ModeToggle from "@/components/ui/mode-toggle";
import {buttonVariants} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {Tooltip, TooltipTrigger, TooltipContent, TooltipProvider} from "@/components/ui/tooltip";
import {cn} from "@/lib/utils";
import {Dock, DockIcon} from "@/components/ui/dock";
import {useLenis} from "lenis/react";

const DATA = {
    navbar: [
        {href: "#hero", icon: CircleUserRound, label: "About"},
        {href: "#skills", icon: Lightbulb, label: "Skills"},
        {href: "#projects", icon: Code, label: "Projects"},
        {href: "#experience", icon: BriefcaseBusiness, label: "Experience"},
        {href: "#contact", icon: MailIcon, label: "Contact"},
    ]
};

export function Navbar() {
    const lenis = useLenis();

    return (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
            <TooltipProvider>
                <Dock direction="middle">
                    {DATA.navbar.map((item) => (
                        <DockIcon key={item.label}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={item.href}
                                        aria-label={item.label}
                                        className={cn(
                                            buttonVariants({variant: "ghost", size: "icon"}),
                                            "size-12 rounded-full",
                                        )}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            lenis?.scrollTo(item.href, { lerp: 0.1, duration: 1.5 });
                                        }}
                                    >
                                        <item.icon className="size-4"/>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{item.label}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}
                    <Separator orientation="vertical" className="h-full py-2"/>
                    <DockIcon>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <ModeToggle className="rounded-full"/>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Theme</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                </Dock>
            </TooltipProvider>
        </div>
    );
}
