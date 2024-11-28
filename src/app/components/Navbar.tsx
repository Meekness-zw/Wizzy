import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from "../../../public/Logo.jpg"
import MobileNav from './MobileNav'

function Navbar() {
    return (
        <div className='bg-white flex items-center justify-between'>
            <div className='flex items-center'>
                <div><Image src={Logo} alt='logo' className='w-[80px] m-3 mr-5' /></div>
                <div>
                    <h1 className='font-semibold text-2xl -ml-5 lg:hidden'>Wizzy Safari</h1>
                </div>
                <div className="flex-row space-x-5 text-lg font-medium hidden lg:block text-[#515151] z-30">
                    <Link href="/">Home</Link>
                    <Link href="../About">About Us</Link>
                    <Link href="../TourPackage">Tour Package</Link>
                    <Link href="../Gallery">Gallery</Link>
                    <Link href="../Contact">Contact</Link>
                </div>
            </div>
            <div>
                <button className='bg-[#C7923E] pt-2 pb-2 pl-10 pr-10 font-medium text-white border-[1px] border-[#304F47] rounded-[10px] mr-10 hidden lg:block items-center justify-center'>
                    <Link href="/" className='z-50'>Sign Up</Link>
                </button>
                <div className='mr-10 lg:hidden'>
                    <MobileNav />
                </div>
            </div>

        </div>
    )
}

export default Navbar
