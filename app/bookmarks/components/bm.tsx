"use client"

import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import BookmarkComp from '@/components/bookmark'

const BookmarkBM = () => {
    const [bookmarks, setBookmarks] = useState('')

    useEffect(() => {
        axios.get('/api/bookmarks').then((res) => {
            setBookmarks(res.data)
        })
    }, [])

    console.log(bookmarks)

    return (
        <div className='space-y-2'>
            {
                bookmarks.length > 0 ? (
                    bookmarks.map((bookmark: any) => (
                        <BookmarkComp key={bookmark.id} bookmark={bookmark} />
                    ))
                ) : (
                    // if loading
                    <div className='flex flex-col items-center justify-center'>
                        <div className='animate-spin rounded-full h-10 w-10 border-b-2 border-gray-100'></div>
                    </div>


                )
            }

        </div>
    )
}

export default BookmarkBM
