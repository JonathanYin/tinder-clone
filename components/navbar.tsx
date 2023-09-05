import Link from 'next/link';
import Image from 'next/image';

interface NavBarProps {
  className?: string;
}

const NavBar = ({ className }: NavBarProps) => (
  <header
    className={`gradient-shadow fixed left-0 top-0 z-10 w-full ${className}`}
  >
    <nav className='mx-auto flex items-center justify-between bg-transparent px-6 py-4'>
      <div className='flex-shrink-0'>
        <Link href='/'>
          <div>
            <Image
              src='/images/tinder_logo_white.png'
              alt='logo'
              width={150}
              height={50}
            />
          </div>
        </Link>
      </div>
      <button
        title='Sign in'
        className='text-primary-blue min-w-[130px] rounded-full bg-white'
      />
    </nav>
  </header>
);

export default NavBar;
