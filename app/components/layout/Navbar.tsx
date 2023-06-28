'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation'
// import Image from 'next/image'
// import contactMe from './ContactMe.png'
import { motion } from 'framer-motion';
import { navVariants } from "@/lib/motion";
// import navLinks from '@/data/navLinks'
import NAV_ITEMS  from '@/data/NAV_ITEMS'
import Logo from "./Logo"
// import menu from "./menu.svg"
import { FaGithub, FaLinkedin, FaMailchimp } from 'react-icons/fa';
import MobileNav from './MobileNav'

import styles from '../../styles/index.js';

const Navbar = () => {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
    <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        // className={`w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600"`}
        className={`${styles.xPaddings} mx-auto max-w-7xl px-2 sm:px-6 lg:px-8`}
    >
        {/* <div className="absolute w-[50%] inset-0 gradient-01" /> */}
        <div
        className={`${styles.innerWidth} relative flex h-16 p-4 items-center justify-between`}
        >
            {/* Mobile */} 
           
            {/* <div className="flex md:hidden">
                <button className='py-3 rounded-md' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? (
                        <Image
                            src={contactMe}
                            alt="contactMe"
                            width={24}
                            height={24}
                            className="w-[24px] h-[24px] object-contain"/>
                    ) : (
                        <Image 
                            src={menu}
                            alt="menu"
                            width={24}
                            height={24}
                            className="w-[24px] h-[24px] object-contain"
                        />
                    )}
                </button>
            </div> */}
        {/* <div className={`md:block ${isMenuOpen ? 'block' : 'hidden'}`}>
            <ul className="md:h-auto md:flex gap-8 h-screen">
                <Link href='/posts'>Ppsts</Link>
            </ul>
        </div> */}
        {/* <ul className='flex flex-row justify-between'> */}
        <ul className="hidden space-x-2 md:h-auto md:flex gap-8">
            {NAV_ITEMS.map((link) => (
            <li key={link.name}>
                <Link 
                    href={link.href}
                    className={`relative text-xl hover:no-underline after:absolute after:left-0 after:-bottom-[3px] after:h-[2px] after:w-0 after:bg-current after:transition-width after:duration-300 after:ease-in-out hover:after:w-full ${pathname === link.href ? 'text-[#7929b9]' : ''}`}
                    >{link.name}
                </Link>
            </li>
            ))}
        </ul>
        <div className="flex items-center">
                <MobileNav />
            </div>
        {/* </ul> */}
        {/* <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white"> */}
        <Link href='/' className="font-extrabold text-[24px] leading-[30.24px] pt-2 hover:scale-125 transition ease-in-out duration-300">
            <Logo />
        </Link>
        {/* </h2> */}
        {/* <Image
            src={menu}
            alt="menu"
            className="w-[24px] h-[24px] object-contain"
        /> */}
        <div className="hidden md:flex md:items-center md:space-x-6">
            <Link href="https://github.com/amabelleS" target="_blank" rel="noopener noreferrer" className='hover:scale-150 transition ease-in-out duration-300'><FaGithub/></Link>
            <Link href="https://www.linkedin.com/in/amabelle-trachtenberg" target="_blank" rel="noopener noreferrer" className='hover:scale-150 transition ease-in-out duration-300'><FaLinkedin/></Link>
            <Link href="/" target="_blank" rel="noopener noreferrer" className='hover:scale-150 transition ease-in-out duration-300'><FaMailchimp/></Link>
        </div>
        
        </div>
    </motion.nav>
    );
}
export default Navbar;
