"use client"

import { ChevronDown, Coffee, Menu, QrCode, QrCodeIcon, Share2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { toast } from "sonner"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Dono } from '@/app/(pages)/home/components/dono';
import { QRCode } from '@/app/(pages)/home/components/qrcode';

const navItems = {
    '/': {
        name: 'home',
    },
    '/work': {
        name: 'work',
    },
    // '/blog': {
    //     name: 'Blog',
    // },
    // '/bookmarks': {
    //     name: 'Bookmarks',
    // },
    // '/guestbook': {
    //     name: 'Guestbook',
    // },
};

const copyURL = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    toast("Website URL copied to clipboard! 📋")
};

const goToDono = () => {
    window.open('https://www.buymeacoffee.com/hellofaizan', '_blank');
}

export function Navbar() {
    return (
        <aside className="-ml-[8px] mb-16 tracking-tight">
            <div className="lg:sticky lg:top-20">
                <nav
                    className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
                    id="nav">

                    <div className='flex items-center justify-between w-full'>
                        <div className="flex flex-row items-center">
                            {Object.entries(navItems).map(([path, { name }]) => {
                                return (
                                    <div className='flex flex-row items-center '>
                                        <Link
                                            key={path}
                                            href={path}
                                            className="transition-all hover:text-neutral-200 flex align-middle relative py-1"
                                        >
                                            {name}
                                        </Link>
                                        <Separator orientation="vertical" className='w-[1px] h-5 mx-3 items-center justify-center bg-[#696969]' />
                                    </div>

                                );
                            })}

                            <p className="hover:text-neutral-200 hover:bg-gray-500/5 flex items-center pl-1 mr-2 rounded cursor-pointer">
                                more <ChevronDown size={20} className="hover:rotate-180" />
                            </p>

                            <Dono />

                            <QRCode />
                        </div>
                        <div>
                            <Button variant={'ghost'} size={'icon'} className='flex-row items-center flex hover:bg-gray-500/5'>
                                <Menu className='p-[2px] rounded' />
                            </Button>
                        </div>
                    </div>
                </nav>
            </div>
        </aside>
    );
}