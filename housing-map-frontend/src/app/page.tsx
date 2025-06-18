"use client";
import Navbar from '@/components/ui/navbar';
import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('../components/map/map'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen max-w-screen max-h-screen">
      <Navbar />
      <div className='flex-1 w-full h-full'>
        <DynamicMap />
      </div>
    </div>
  );
}
