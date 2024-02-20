import Image from 'next/image';
import { CiTwitter } from "react-icons/ci";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import Logo from '../images/logo.png';

function Footer() {
  return (
    <>
      <footer className='w-full bg-black h-32 flex items-center justify-between px-11 overflow-hidden'>
        <div>
          <Image src={Logo} alt='Logo' className='w-64 h-20'/>
        </div>
        <div className='flex gap-5'>
          <TiSocialFacebook className='footer-icons' />
          <FaLinkedinIn  className='footer-icons' />
          <FaInstagram  className='footer-icons' />
          <CiTwitter   className='footer-icons'/>
        </div>
        <div>
          <p className='text-[#717173] text-lg'>2024. All rights reserverd By Anas Themes</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;