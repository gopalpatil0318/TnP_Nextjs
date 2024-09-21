import Footer from '@/components/dashboard/Footer'
import Header from '@/components/dashboard/Header'
import { TrainingProgramTab } from '@/components/dashboard/TrainingProgramTab'

import { HeroTraningProgram } from '@/components/ui/lamp'

import React from 'react'

const page = () => {
    return (
        <div className='flex flex-1' >
            <div className=" dark:border-neutral-700 flex flex-col flex-1 w-full h-full no-scrollbar">
            <Header/>
                <HeroTraningProgram/>
                <TrainingProgramTab/>
                <Footer/>
            </div>
        </div>
    )
}

export default page