import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import {useState} from "react";

export function TechIconSmall({name, icon: IconComponent}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Tooltip open={isOpen} onOpenChange={setIsOpen}>
            <TooltipTrigger asChild>
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex size-8 items-center justify-center rounded-full bg-transparent transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 sm:size-9"
                >
                    <IconComponent
                        className="size-5 text-neutral-800 transition-colors dark:text-neutral-200 sm:size-6"/>
                </div>
            </TooltipTrigger>
            <TooltipContent>
                <p>{name}</p>
            </TooltipContent>
        </Tooltip>
    );
}