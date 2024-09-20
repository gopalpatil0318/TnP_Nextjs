import Footer from '@/components/dashboard/Footer'
import { TrainingProgramTab } from '@/components/dashboard/TrainingProgramTab'
import { FloatingNav } from '@/components/ui/floating-navbar'
import { HeroTraningProgram } from '@/components/ui/lamp'
import { navItems } from '@/data/dashboard'
import React from 'react'

const page = () => {
    return (
        <div className='flex flex-1' >
            <div className=" dark:border-neutral-700 flex flex-col flex-1 w-full h-full no-scrollbar">
            <FloatingNav
          navItems={navItems}
        />
                <HeroTraningProgram/>
                <TrainingProgramTab/>
                <Footer/>
            </div>
        </div>
    )
}

export default page