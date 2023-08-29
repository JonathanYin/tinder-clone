import Image from 'next/image';
import NavBar from '../components/navbar';

export default function Home() {
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
        <h1 className='text-shadow select-none text-9xl font-bold text-white'>
          {' '}
          Swipe Right
        </h1>
        <button className='mt-10 rounded-full bg-gradient-to-r from-[#FD297B] via-[#FF5864] to-[#FF655B] px-6 py-3 text-2xl font-bold text-white transition duration-300 hover:from-[#FD5091] hover:via-[#FF6F80] hover:to-[#FF7570]'>
          Create Account
        </button>
      </div>
    </main>
  );
}
