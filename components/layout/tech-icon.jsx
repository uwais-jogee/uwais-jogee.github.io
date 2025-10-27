import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import {useState} from "react";

export const TechIcon = React.memo(function TechIcon({ name, icon: IconComponent {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <button
                    type="button"
                    aria-label={name}
                    className="flex size-10 items-center justify-center rounded-full bg-transparent transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 sm:size-12"
                >
                    <IconComponent
                        className="size-7 text-neutral-800 transition-colors dark:text-neutral-200 sm:size-9"/>
                </button>
            </TooltipTrigger>
            <TooltipContent>
                <p>{name}</p>
            </TooltipContent>
        </Tooltip>
    );
}
