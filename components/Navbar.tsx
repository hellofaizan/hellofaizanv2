"use client"

import { ChevronDown, Coffee, Menu, QrCode, QrCodeIcon, Share2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { toast } from "sonner"
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

export function Navbar() {
    return (
        <aside className="mb-14 tracking-tight">
            <div className="lg:sticky lg:top-20">
                <nav
                    className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
                    id="nav">

                    <div className='flex items-center justify-between w-full text-lg'>
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
                                <Menu className='rounded' />
                            </Button>
                        </div>
                    </div>
                </nav>
            </div>
        </aside>
    );
}