"use client";

import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
import RepoItem from './repoItems'
import { Skeleton } from "@/components/ui/skeleton"

const Projects = () => {
    const [stats, setStats] = useState({ stars: 0, forks: 0 })
    const [topRepos, setTopRepos] = useState([] as any[])
    useEffect(() => {
        axios.get("https://api.github-star-counter.workers.dev/user/hellofaizan")
            .then((res) => {
                setStats(res.data)
            })
            .catch((err) => {
                console.log(err)
            })

        axios.get("/api/pinnedRepos")
            .then((res1) => {
                const topRepos = res1.data.response
                setTopRepos(topRepos)
            }
            )
            .catch((err1) => {
                console.log(err1)
            })
    }, [])
    return (
        <div className='space-y-3'>
            <div className='flex gap-2 text-2xl lg:text-3xl font-medium'>
                <h1>Projects</h1>{' '}
                <div className='ml-1'>🛠️</div>
            </div>

            <p className='leading-[1.8] md:leading-loose mt-6 text-neutral-300'>
                In my free time, I enjoy creating open source projects on{" "}
                <Link
                    href="https://github.com/hellofaizan"
                    target={"_blank"}
                    rel="noreferrer"
                    className="font-semibold text-violet-500 hover:underline">
                    GitHub
                </Link>
                , so I can learn from others and showcase what I know. In total, all of my open sourced projects have
                earnt me <span className="font-bold text-slate-200">{stats.stars}</span> stars and <span className="font-bold text-slate-200">{stats.forks}</span> forks on
                GitHub. Below
                are some of my most popular repositories.
            </p>

            <div>
                {topRepos.length > 0 ? (
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 mb-6 gap-2">
                        {
                            topRepos.map((repo) => {
                                return (
                                    <RepoItem
                                        repo={repo} key={repo.repo}
                                    />
                                );
                            })
                        }
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 mb-6 gap-2">
                        <Skeleton className="w-full h-36 flex-auto rounded-xl" />
                        <Skeleton className="w-full h-36 flex-auto rounded-xl" />
                        <Skeleton className="w-full h-36 flex-auto rounded-xl" />
                        <Skeleton className="w-full h-36 flex-auto rounded-xl" />
                    </div>
                )}
            </div>

        </div >
    )
}

export default Projects
