import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../public/assets/logo.png'
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className='bg-[#0E1E32] py-24'>
            <div className='container px-5'>
                <div className='block md:flex flex-wrap lg:flex-nowrap gap-32 justify-center'>
                    <div className='flex md:block justify-center'>
                        <Image alt='Logo' src={Logo} width={120} />
                    </div>
                    <div className='footer pt-16 md:pt-0'>
                        <h2 className='text-2xl text-white'>Company</h2>
                        <Link href='/'> <span className='text-xl py-2 text-gray-500 block cursor-pointer w-12'>Home</span> </Link>
                        <Link href='aboutus'> <span className='text-xl py-2 text-gray-500 block cursor-pointer w-12'>About</span> </Link>
                        <Link href='contact'> <span className='text-xl py-2 text-gray-500 block cursor-pointer w-16'>Contact</span></Link>
                        <Link href='acedamyprogram'> <span className='text-xl py-2 text-gray-500 block cursor-pointer w-16'>Acedamy</span></Link>
                    </div>
                    <div className='pt-16 md:pt-0'>
                        <h2 className='text-2xl text-white md:text-center'>Social</h2>
                        <div className='pt-3'>
                            <div className='footer flex items-center py-1 gap-2 text-lg text-gray-500  cursor-pointer w-12'>
                                <p className='text-blue-500'><BsTwitter /></p>
                                <span> Twitter</span>
                            </div>
                            <div className='footer flex items-center py-1 gap-2 text-lg text-gray-500  cursor-pointer w-12'>
                                <p className='text-blue-500'><FaFacebookF /></p>
                                <span> Facebook</span>
                            </div>
                            <div className='footer flex items-center py-1 gap-2 text-lg text-gray-500  cursor-pointer w-12'>
                                <p className='text-red-500'><AiOutlineInstagram /></p>
                                <span> instagram</span>
                            </div>
                            <div className='footer flex items-center py-1 gap-2 text-lg text-gray-500  cursor-pointer w-12'>
                                <p className='text-red-500'><AiFillYoutube /></p>
                                <span>Youtube</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-[350px] pt-16 md:pt-0'>
                        <h2 className='text-xl font-bold text-white pb-6'>SUBSCRIBE TO OUR NEWSLETTER</h2>
                        <span className='text-base text-gray-300'>Subscribe to receive inspiration, ideas, and news in your inbox.</span>
                        <div className='mt-6 flex'>
                            <input className='bg-transparent border-b-gray-400 border-b-[1px] outline-none py-[0px] pl-4 pr-10 text-white' placeholder='You Email' />
                            <div className='bg-[#DA6A2A] text-white text-center p-4'>
                                <span className=''><AiOutlineSend /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer