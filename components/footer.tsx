import { clsx } from "clsx";
import { Github } from "lucide-react";
import Link from "next/link";
import type { ComponentProps } from "react";
import { Emoji } from "../components/mics/emoji";

export const Footer = ({ className, ...props }: ComponentProps<"footer">) => {
    const year = String(new Date().getFullYear());

    return (
        <footer
            className={clsx(
                "flex flex-col font-medium text-zinc-100 md:pt-0 pt-5",
                className
            )}
            {...props}
        >
            <hr className="w-full border-t border-zinc-800" />
            <div className="flex items-center pt-2">
                <span>
                    <Emoji />{" "}
                    HelloFaizan
                    <span className="text-zinc-600">—</span> he{" "}
                    <span className="text-zinc-600">/</span>{" "}him
                </span>
                <Link
                    className="link ml-auto inline-flex items-center gap-1.5"
                    href="https://github.com/hellofaizan"
                    rel="noreferrer"
                    target="_blank">
                    <Github size={20}/>
                    <span>
                        <span>hellofaizan</span>
                    </span>
                </Link>
            </div>
        </footer>
    );
};