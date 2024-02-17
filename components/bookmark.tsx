import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import axios from 'axios';
import { ChevronUp } from 'lucide-react';

export default function BookmarkComp({ bookmark }: { bookmark: any }) {

    const [title, setTitle] = React.useState('')
    let url = bookmark.url;

    url = url.startsWith("http") ? url : `https://${url}`;
    const hostname = new URL(url).hostname;

    const getTitle = async () => {
        const title = await axios.get(`https://api.microlink.io/?url=${url}`).then((res) => {
            return res.data.data.title
        })
        setTitle(title)
        return title
    }

    getTitle()

    return (
        <Link key={bookmark.id} href={url} target='_blank' className="border border-neutral-700 bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full h-20 md:h-[5rem] hover:border-neutral-600">
            <div className='w-full flex items-center justify-between gap-x-2 h-full' >
                <div className='flex flex-row gap-x-2'>
                    <Image src={`https://icon.horse/icon/${hostname}`} alt={hostname} width={46} height={46} />
                    <div className='flex flex-col'>
                        <h1 className='w-56 md:w-[28rem] font-semibold text-base sm:text-xl flex-nowrap overflow-hidden text-ellipsis titleUrl'>{title}</h1>
                        <p className='text-gray-500 dark:text-gray-400'>{hostname}</p>
                    </div>
                </div>

                <div className='flex flex-row gap-1'>
                    <ChevronUp />
                </div>
            </div>
        </Link>
    );
}