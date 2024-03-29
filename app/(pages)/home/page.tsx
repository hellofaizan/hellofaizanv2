import React from 'react'
import Projects from './components/Projects'

const Home = () => {
    return (
        <div>
            <div className='space-y-3'>
                <div className='flex gap-2 text-2xl lg:text-3xl font-medium'>
                    <h1>Hey, It&apos;s me Faizan</h1>{' '}
                    <div className='ml-1 z-[-1] animate-waving-hand'>👋</div>
                </div>
                <div className='space-y-4'>
                    <ul className='flex flex-col lg:flex-row gap-1 lg:gap-10 ml-5 list-disc text-neutral-400 text-sm md:text-base'>
                        <li>
                            Jammu & Kashmir, India <span className='ml-1'>🇮🇳</span>
                        </li>
                        <li>Open for collaboration</li>
                    </ul>
                </div>
            </div>
            <p className='leading-[1.8] md:leading-loose mt-6 text-neutral-300'>
                A self-taught software engineer from the <span className='font-bold'>Kashmir</span>. I&apos;m currently pursuing full-stack web development and Android Development to create stunning user experiences on the front-end, and scalable and secure infrastructure on the backend.
            </p>

            <hr className="w-full border-t border-zinc-800 my-6" />

            <Projects/>
        </div>
    )
}

export default Home
