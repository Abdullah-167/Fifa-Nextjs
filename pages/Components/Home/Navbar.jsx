import { React, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../public/assets/logo.png'
import { BsArrowRightShort } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };
    return (
        <div className='bg-[#0E1E32] py-1 px-5'>
            <div className='container hidden md:flex justify-between'>
                <div>
                    <Image src={Logo} width={120} />
                </div>
                <div className='flex items-center justify-between gap-8 lg:gap-20'>

                    <div className='links text-[#FFFFFF] text-base'>
                        <Link href='/'> <span className='hover:text-[#287FB8] transition-all duration-400 mx-8  lg:mx-12'>Home</span> </Link>
                        <Link href='aboutus'> <span className='hover:text-[#287FB8] transition-all duration-400 mx-8  lg:mx-12'>About</span></Link>
                        <Link href='myaccount'> <span className='hover:text-[#287FB8] transition-all duration-400 mx-8  lg:mx-12'>My Account</span></Link>
                        <Link href='contact'> <span className='hover:text-[#287FB8] transition-all duration-400 mx-8  lg:mx-12'>Contact</span> </Link>
                    </div>
                    <div className='flex gap-2 items-center bg-[#DA6A2A] hover:bg-transparent border-[#DA6A2A] border-[1px] transition-all duration-100 py-4 px-7 text-white text-base cursor-pointer'>
                        <button>Join Our Team</button>
                        <span className='text-2xl'>
                            {<BsArrowRightShort />}
                        </span>
                    </div>
                </div>
            </div>

            <div className='container flex md:hidden justify-between'>
                <div>
                    <Image src={Logo} width={120} />
                </div>
                <div className='flex items-center justify-between gap-5'>
                    <div className='hidden sm:flex gap-2 items-center bg-[#DA6A2A] hover:bg-transparent border-[#DA6A2A] border-[1px] transition-all duration-100 py-2 px-4 text-white text-base cursor-pointer'>
                        <button>Join Our Team</button>
                        <span className='text-2xl'>
                            <BsArrowRightShort />
                        </span>
                    </div>
                    {menuOpen ? (
                        <div className='text-5xl text-white'>
                            <AiOutlineClose onClick={toggleMenu} />
                        </div>) : (
                        <div className='text-5xl text-white'>
                            <GiHamburgerMenu onClick={toggleMenu} />
                        </div>
                    )}
                </div>
            </div>
            {menuOpen && (
                <div className={`menu ${menuOpen ? 'open' : ''} block md:hidden fixed inset-0 z-20  bg- text-white text-center cursor-pointer text-lg mt-[100px]`}>
                    <span className="hover:text-[#287FB8] transition-all duration-400 lg:mx-12 py-3 block w-28 mx-auto">Home</span>
                    <span className="hover:text-[#287FB8] transition-all duration-400 lg:mx-12 py-3 block">About</span>
                    <span className="hover:text-[#287FB8] transition-all duration-400 lg:mx-12 py-3 block">Faq</span>
                    <span className="hover:text-[#287FB8] transition-all duration-400 lg:mx-12 py-3 block">Contact</span>
                    <div className='flex gap-2 text-center text-white text-base cursor-pointer mx-auto w-[138px]'>
                        <button>Join Our Team</button>
                        <span className='text-2xl'>
                            <BsArrowRightShort />
                        </span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar