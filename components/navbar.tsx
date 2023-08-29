import Link from 'next/link';
import Image from 'next/image';

interface NavBarProps {
  className?: string;
}

const NavBar = ({ className }: NavBarProps) => (
  <header className={`absolute z-10 w-full ${className}`}>
    <nav className='mx-auto flex max-w-[1440px] items-center justify-between bg-transparent px-6 py-4 sm:px-16'>
      <Link href='/'>
        <div className='flex cursor-pointer items-center justify-center'>
          <Image
            src='/images/tinder_logo_white.png'
            alt='logo'
            width={200}
            height={30}
            className='object-contain'
          />
        </div>
      </Link>

      <button
        title='Sign in'
        className='text-primary-blue min-w-[130px] rounded-full bg-white'
      />
    </nav>
  </header>
);

export default NavBar;
