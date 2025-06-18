"use client";
import Navbar from '@/components/ui/navbar';
import { FilterIcon, ListIcon } from 'lucide-react';
import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('../components/map/map'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen max-w-screen max-h-screen">
      <Navbar />
      <div className='flex-1 flex'>
        <div className="w-full h-full py-3 pl-3">
          <DynamicMap />
        </div>
        <div className='p-2 mt-auto flex flex-col gap-2'>
          <button className="btn btn-circle btn-primary btn-xl">
            <ListIcon></ListIcon>
          </button>
          <button className="btn btn-circle btn-primary btn-xl">
            <FilterIcon></FilterIcon>
          </button>
        </div>
      </div>
    </div>
  );
}
