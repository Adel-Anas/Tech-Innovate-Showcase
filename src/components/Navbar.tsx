'use client'

import Logo from '@/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  return (
    <>
      <nav className='fixed overflow-hidden w-full h-24 flex items-center justify-evenly gap-10 font-[Poppins] text-white bg-black z-30'>
        <div className='w-auto'>
          <Image src={Logo} alt="logo" className='w-64 h-20'/>
        </div>

        <div className='w-auto'>
            <ul className='flex gap-10 text-lg'>
              <Link href='/'>Home</Link>
              <Link href='/asdas'>About</Link>
              <Link href='/dsa'>Services</Link>
              <Link href='/contact'>Contact</Link>
            </ul>
        </div> 
        
        <div className='w-auto'>
          <button className='border border-white rounded w-36 h-14 hover:bg-[#f9004d] hover:-mt-2 hover:border-none duration-500 text-lg font-[Poppins]'>
            Lets talk
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;