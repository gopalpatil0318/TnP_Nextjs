import Footer from '@/components/dashboard/Footer'
import { GalleyHeroSection } from '@/components/dashboard/GalleryHeroSection'
import { GalleyTab } from '@/components/dashboard/GalleryTab'
import HeroSection from '@/components/dashboard/HeroSection'
import TnpHead from '@/components/dashboard/TnpHeads'
import { FloatingNav } from '@/components/ui/floating-navbar'
import { navItems } from '@/data/dashboard'
import React from 'react'

const page = () => {
  return (
    <main className='flex flex-1' >
        <div className=" dark:border-neutral-700 flex flex-col flex-1 w-full h-full">
        <FloatingNav
          navItems={navItems}
        />
         <GalleyHeroSection/>
         <GalleyTab/>
         <Footer/>
        </div>
      </main>  )
}

export default page