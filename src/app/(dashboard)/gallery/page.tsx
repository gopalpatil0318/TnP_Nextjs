import Footer from '@/components/dashboard/Footer'
import { GalleyHeroSection } from '@/components/dashboard/GalleryHeroSection'
import { GalleyTab } from '@/components/dashboard/GalleryTab'
import Header from '@/components/dashboard/Header'
import React from 'react'

const page = () => {
  return (
    <main className='flex flex-1' >
        <div className=" dark:border-neutral-700 flex flex-col flex-1 w-full h-full">
          <Header/>
         <GalleyHeroSection/>
         <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
         <GalleyTab/>
         <Footer/>
        </div>
      </main>  )
}

export default page