import Image from 'next/image';
import NavBar from '../components/navbar';  // Adjust the path according to your project structure

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute z-0 w-full h-full">
        <Image
          src="/images/bg.webp"
          layout="fill"
          objectFit="cover"
          alt="Background"
          quality={50}
        />
      </div>

      {/* Background Filter */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* NavBar */}
      <NavBar className="absolute top-0 right-20 z-20" />

      {/* Main Content */}
      <div className="z-10 flex flex-col items-center justify-center absolute inset-0">
        <h1 className="text-white text-9xl font-bold text-shadow">
          Swipe Right
        </h1>
        <button className="text-white text-4xl font-bold mt-4 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-orange-500">
          Create Account
        </button>
      </div>
    </main>
  );
}
