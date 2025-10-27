import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import {memo} from "react";

export const TechIconSmall = memo(function TechIconSmall({ name, icon: IconComponent }) {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <button
                    type="button"
                    aria-label={name}
                    className="flex size-8 items-center justify-center rounded-full bg-transparent transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 sm:size-9"
                >
                    <IconComponent
                        className="size-5 text-neutral-800 transition-colors dark:text-neutral-200 sm:size-6"/>
                </button>
            </TooltipTrigger>
            <TooltipContent>
                <p>{name}</p>
            </TooltipContent>
        </Tooltip>
    );
});
