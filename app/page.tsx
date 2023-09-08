'use client';

import NavBar from '../components/navbar';
import { useEffect, useState } from 'react';
import { CardWithForm } from '@/components/cardwithform';
import { Footer } from '@/components/footer';
import { Parallax } from 'react-parallax';
import { Testimonial } from '@/components/testimonials';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [opacity, setOpacity] = useState(1);

  // Listen for scroll events and update the opacity
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled >= 0 && scrolled <= 500) {
        setOpacity(1 - scrolled / 500);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeOnOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.classList && target.classList.contains('bg-opacity-50')) {
      setShowModal(false);
    }
  };

  return (
    <>
      {/* NavBar */}
      <NavBar className='fixed right-0 top-0 z-50' />

      {/* Cover Section */}
      <Parallax bgImage='/images/bg.webp' strength={200}>
        <section className='relative flex h-screen items-center justify-center overflow-hidden'>
          {/* Background Filter */}
          <div className='absolute inset-0 bg-black opacity-40'></div>

          {/* Main Content */}
          <div
            className='absolute inset-0 z-10 flex flex-col items-center justify-center'
            style={{ opacity }}
          >
            <h1 className='text-shadow responsive-text text-9xl font-bold text-white'>
              Swipe Right
            </h1>
            <button
              className='mt-10 rounded-full bg-gradient-to-r from-[#FD297B] via-[#FF5864] to-[#FF655B] px-6 py-3 text-2xl font-bold text-white transition duration-300 hover:from-[#FD5091] hover:via-[#FF6F80] hover:to-[#FF7570]'
              onClick={() => setShowModal(true)}
            >
              Create Account
            </button>
          </div>
        </section>
      </Parallax>

      {/* Additional Content */}
      <section className='flex w-full flex-col items-center justify-center p-8 text-sm'>
        <Testimonial />
        <div className='flex flex-col p-8 text-gray-400 '>
          Single people, listen up: If you&apos;re looking for love, want to
          start dating, or just keep it casual, you need to be on Tinder. With
          over 55 billion matches made, it&apos;s the place to be to meet your
          next best match. Let&apos;s be real, the dating landscape looks very
          different today, as most people are meeting online. With Tinder, the
          world&apos;s most popular free dating app, you have millions of other
          single people at your fingertips and they&apos;re all ready to meet
          someone like you. Whether you&apos;re straight or in the LGBTQIA
          community, Tinder&apos;s here to bring you all the sparks. There
          really is something for everyone on Tinder. Want to get into a
          relationship? You got it. Trying to find some new friends? Say no
          more. New kid on campus and looking to make the most of your college
          experience? Tinder U&apos;s got you covered. Tinder isn&apos;t your
          average dating site — it&apos;s the most diverse dating app, where
          adults of all backgrounds and experiences are invited to make
          connections, memories, and everything in between.
        </div>
        <Footer />
      </section>

      {/* Modal */}
      {showModal && (
        <div
          className='fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50'
          onClick={closeOnOverlayClick}
        >
          <CardWithForm setShowModal={setShowModal} />
        </div>
      )}
    </>
  );
}
