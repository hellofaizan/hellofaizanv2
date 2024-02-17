import React from 'react'
import { Bookmark } from 'lucide-react';
import type { Metadata } from 'next';
import { getBookmarks } from '../db/bookmarks';
import BookmarkBM from './components/bm';

export const metadata: Metadata = {
    title: 'Bookmarks',
    description: 'A collection of awesome things I\'ve found on the internet.',
};

const page = () => {
    const bookmarks = getBookmarks();
    console.log(bookmarks);
    return (
        <div>
            <div className="flex flex-row items-center gap-x-2">
                <h1 className='font-bold text-2xl sm:text-5xl mb-3 text-white'>Bookmarks</h1>
                <Bookmark className='h-5 w-5 md:h-8 md:w-8' />
            </div>
            <p className="text-gray-400 leading-6 tracking-wide">
                Awesome things I&apos;ve found on the internet. One neat thing about this page is, I just need to send a command message to a discord bot and it adds the link in here to the list.
            </p>

            <div className='mt-5 md:mt-8'>
                <BookmarkBM />
            </div>

        </div>
    )
}

export default page
