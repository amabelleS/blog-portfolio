import React from 'react'
import PracticlesBG from './PracticlesBG'

type Props = {}

function Hero({}: Props) {
  return (
    <div className='mt-24 mb-24'>
        <PracticlesBG />
        <div className="mx-auto max-w-2xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
        {/* <h2 className="text-3xl font-bold dark:text-white/90">Blog</h2> */}
        <p className="mt-12 mb-12 text-3xl text-center dark:text-white/90">
            Hello and Welcome 👋&nbsp;
            <span className="whitespace-nowrap">
            I&apos;m <span className="font-bold">Amabelle</span>.
            </span>
        </p>
        </div>
    </div>
  )
}

export default Hero