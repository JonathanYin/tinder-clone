'use client';

import Image from 'next/image';
import NavBar from '../components/navbar';
import { useState } from 'react';
import { CardWithForm } from '@/components/cardwithform';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className='relative flex h-screen w-full flex-col items-center justify-center overflow-hidden'>
      {/* Background Image */}
      <div className='absolute z-0 h-full w-full'>
        <Image
          src='/images/bg.webp'
          layout='fill'
          objectFit='cover'
          alt='Background'
          quality={50}
        />
      </div>

      {/* Background Filter */}
      <div className='absolute inset-0 bg-black opacity-40'></div>

      {/* NavBar */}
      <NavBar className='absolute right-20 top-0 z-20' />

      {/* Main Content */}
      <div className='absolute inset-0 z-10 flex flex-col items-center justify-center'>
        <h1 className='text-shadow responsive-text text-9xl font-bold text-white'>
          Swipe Right
        </h1>
        <button
          className='mt-10 rounded-full bg-gradient-to-r from-[#FD297B] via-[#FF5864] to-[#FF655B] px-6 py-3 text-2xl font-bold text-white transition duration-300 hover:from-[#FD5091] hover:via-[#FF6F80] hover:to-[#FF7570]'
          onClick={() => setShowModal(true)}
        >
          Create Account
        </button>

        {/* Modal */}
        {showModal && (
          <div className='absolute inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50'>
            <CardWithForm setShowModal={setShowModal} />
            <button
              className='absolute right-5 top-5 p-2 text-white'
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
