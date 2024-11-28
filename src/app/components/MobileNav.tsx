'use client';
import { Sheet, SheetContent, SheetTrigger } from '@/app/components/ui/sheet'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from "react-icons/ci"

const links = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'About Us',
        path: '../About',
    },
    {
        name: 'Tour Package',
        path: '../Tour-Package',
    },
    {
        name: ' Gallery',
        path: '../Gallery',
    },
    {
        name: 'Contact',
        path: '../Contact',
    },
]

const MobileNav = () => {
    const pathname = usePathname()
    return (
        <Sheet>
            <SheetTrigger className='flex justify-center items-center'>
                <CiMenuFries className=' text-[32px] text-[#515151]' />
            </SheetTrigger>
            <SheetContent className='flex flex-col'>
                <div className='mt-32 mb-10 text-center text-2xl'>
                    <Link href="/">
                        
                    </Link>
                </div>
                <nav className='flex flex-col justify-center items-center gap-8 font-primary'>
                    {links.map((link, index) => {
                        return (
                            <Link href={link.path} key={index} className={`${link.path === pathname && 'text-white border-b-2 border-[#304F47]'}text-xl capitalize hover:text-white transition-all`}>
                                {link.name}
                            </Link>
                        )
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav
