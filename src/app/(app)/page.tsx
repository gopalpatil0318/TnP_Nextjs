'use client';
import Footer from '@/components/dashboard/Footer';
import HeroSection from '@/components/dashboard/HeroSection';
import StatCard from '@/components/dashboard/StatCard';
import OurRecruiters from '@/components/dashboard/OurRecruiters';
import PlacementRecord from '@/components/dashboard/PlacementRecord';
import TnpHead from '@/components/dashboard/TnpHeads';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { navItems } from '@/data/dashboard';


export default function Home() {

  return (
    <>

      <main className='flex flex-1' >
        <div className=" dark:border-neutral-700 flex flex-col flex-1 w-full h-full no-scrollbar">
        <FloatingNav
          navItems={navItems}
        />
          <HeroSection />
          <StatCard/>
          <PlacementRecord/>
          <OurRecruiters/>
          <TnpHead />
          <Footer />
        </div>
      </main>



    </>
  );
}