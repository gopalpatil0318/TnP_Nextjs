'use client';
import Footer from '@/components/dashboard/Footer';
import HeroSection from '@/components/dashboard/HeroSection';
import StatCard from '@/components/dashboard/StatCard';
import OurRecruiters from '@/components/dashboard/OurRecruiters';
import PlacementRecord from '@/components/dashboard/PlacementRecord';
import TnpHead from '@/components/dashboard/TnpHeads';
import Header from '@/components/dashboard/Header';


export default function Home() {

  return (
    <>

      <main className='flex flex-1' >
      
        <div className=" dark:border-neutral-700 flex flex-col flex-1 w-full h-full no-scrollbar">
        <Header/>
     
          <HeroSection />

          <StatCard/>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          <PlacementRecord/>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          <OurRecruiters/>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          <TnpHead />
          <Footer />
        </div>
      </main>



    </>
  );
}