'use client'
import { Fragment } from 'react'
import Link from "next/link"
import Image from 'next/image'
import contactMe from './ContactMe.png'
import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from "react-icons/fa"
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import Logo from "./Logo"

export default function Navbar() {
    
    const navLinks = [
        {name: 'Posts', href: '/posts', current: false},
        {name: 'Contact', href: '/contact', current: false},
      ]
      
      function classNames(...classes: any[]) {
        return classes.filter(Boolean).join(' ')
      }

    return (
        <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <Link href="/" className="block w-auto lg:hidden">
                        <Logo/>
                    </Link>
                    <Link href="/" className="hidden w-auto lg:block">
                        <Logo/>
                    </Link>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <ul className="flex space-x-4 list-style-type:none">
                      {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link 
                                href={link.href} 
                                className={classNames(
                                    link.current ? 'bg-gray-900 text-mint/90' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'rounded-md px-3 py-2 text-sm font-medium'
                                  )}
                                >{link.name}
                            </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* <button
                    type="button"
                    className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button> */}
  
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <Image alt='open social contact menu' src={contactMe} className="h-8 w-8 rounded-full" width={42} height={42}/>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
  
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navLinks.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

        // <nav className="flex justify-between items-center w-[92%] mt-4 mx-auto">
        // {/* <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10"> */}
        //     <div className="prose prose-xl mx-auto flex sm:flex-row">
        //         <div className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
        //             <Link href="/" className="w-48 cursor-pointer text-white/90 no-underline hover:text-white"><Logo/></Link>
        //         </div>
        //         <div className="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
        //         {/* <div className="flex flex-row justify-center items-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xnav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full px-5l"> */}
        //             <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
        //                 {navLinks.map((link, index) => {
        //                     return (
        //                         <li key={index}>
        //                             <Link href={link.href} className="hover:text-gray-500">{link.name}</Link>
        //                             {/* <Link href={link.href} className="text-white/90 hover:text-white">{link.name}</Link> */}
        //                         </li>
        //                     )
        //                 })}
        //             </ul>
        //             {/* <Link className="text-white/90 hover:text-white" href="https://www.youtube.com/@DaveGrayTeachesCode">
        //                 <FaYoutube />
        //             </Link> */}
        //             {/* <Link className="text-white/90 hover:text-white" href="https://courses.davegray.codes/">
        //                 <FaLaptop />
        //             </Link> */}
        //             {/* <Link className="text-white/90 hover:text-white" href="https://github.com/gitdagray">
        //                 <FaGithub />
        //             </Link> */}
        //             {/* <Link className="text-white/90 hover:text-white" href="https://twitter.com/yesdavidgray">
        //                 <FaTwitter />
        //             </Link> */}
        //         </div>
        //         <div className="flex items-center gap-6">
        //             <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Sign in</button>
        //             {/* <ion-icon onclick="onToggleMenu(this)" name="menu" class="text-3xl cursor-pointer md:hidden"></ion-icon> */}
        //         </div>
        //     </div>
        // </nav>
    )
}