import { clsx } from "clsx";
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
                    target="_blank"
                >
                    <svg
                        className="translate-y-px"
                        height="22"
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            clipRule="evenodd"
                            d="M11 2c-4.973 0-9 4.023-9 8.99 0 3.977 2.576 7.337 6.154 8.528.45.078.619-.191.619-.427 0-.214-.012-.922-.012-1.675-2.261.416-2.846-.55-3.026-1.056-.101-.258-.54-1.056-.923-1.27-.315-.168-.764-.584-.01-.595.708-.011 1.214.652 1.383.921.81 1.36 2.104.978 2.621.742.079-.584.315-.978.574-1.202-2.003-.225-4.095-1-4.095-4.439 0-.977.349-1.786.922-2.416-.09-.224-.404-1.146.09-2.382 0 0 .754-.236 2.476.922a8.361 8.361 0 0 1 2.25-.304c.764 0 1.53.101 2.25.304 1.72-1.169 2.475-.922 2.475-.922.495 1.236.18 2.158.09 2.382.573.63.922 1.427.922 2.416 0 3.45-2.104 4.214-4.106 4.439.326.28.607.82.607 1.663 0 1.202-.011 2.168-.011 2.472 0 .236.169.517.619.427C17.424 18.327 20 14.956 20 10.989 20 6.023 15.973 2 11 2Z"
                            fill="currentColor"
                            fillRule="evenodd"
                        />
                    </svg>
                    <span>
                        <span>hellofaizan</span>
                    </span>
                </Link>
            </div>
        </footer>
    );
};