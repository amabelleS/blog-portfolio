'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation'
// import contactMe from './ContactMe.png'
import { motion } from 'framer-motion';
import { navVariants } from "@/lib/motion";
import NAV_ITEMS  from '@/data/NAV_ITEMS'
import Logo from "./Logo"
// import menu from "./menu.svg"
import { FaGithub, FaLinkedin, FaMailchimp } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { BiDownload } from 'react-icons/bi';
import MobileNav from './MobileNav'
// import resume from '@public/resume.pdf';

import styles from '../../styles/index.js';

const Navbar = () => {
    const pathname = usePathname()

    return (
    <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-lime-100`}
    >
        {/* <div className="absolute w-[50%] inset-0 gradient-01" /> */}
        <div
        className={`${styles.innerWidth} relative flex h-16 p-4 items-center justify-between`}
        >
        {/* desktop */}    
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
        {/* mobile */}
        <div className="flex items-center">
            <MobileNav />
        </div>
        {/* home logo */}
        <Link href='/' className="font-extrabold text-[24px] leading-[30.24px] pt-2 hover:scale-125 transition ease-in-out duration-300">
            <Logo />
        </Link>
        {/* socials */}
        <div className="hidden md:flex md:items-center md:space-x-6">
            <Link href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:899ed69f-8c3a-4663-9945-afbce9c68389" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='hover:scale-150 transition ease-in-out duration-300 hover:text-[#7929b9]'
                title='Download Resume'
                download={true}>
                    <BiDownload size={24}/>
            </Link>
            <Link href="https://github.com/amabelleS" target="_blank" rel="noopener noreferrer" className='hover:scale-150 transition ease-in-out duration-300 hover:text-[#7929b9]'
            title='GitHub Link'>
                <FaGithub size={24}/>
            </Link>
            <Link href="https://www.linkedin.com/in/amabelle-trachtenberg" target="_blank" rel="noopener noreferrer" className='hover:scale-150 transition ease-in-out duration-300 hover:text-[#7929b9]'
            title='LinkedIn Link'>
                <FaLinkedin size={24}/>
            </Link>
            <Link href="mailto:amabelledev@gmail.com?subject=Hello!&body=Email from my portfolio:" target="_blank" rel="noopener noreferrer" className='hover:scale-150 transition ease-in-out duration-300 hover:text-[#7929b9]'
            title='Open Mailbox'>
                <FiMail size={27}/>
                {/* <FaMailchimp size={23}/> */}
            </Link>
        </div>
        
        </div>
    </motion.nav>
    );
}
export default Navbar;
