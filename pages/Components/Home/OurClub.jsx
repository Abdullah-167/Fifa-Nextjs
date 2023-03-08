import Image from 'next/image'
import React from 'react'
import Team from '../.../../../../public/assets/team.jpg'
import { BsArrowRightShort } from 'react-icons/bs';

const OurClub = ({bgImage }) => {
    return (
        <div className='bg-img2' style={{ backgroundImage: `url(${bgImage})` }}>
            <div className='container flex flex-wrap md:flex-nowrap gap-20 md:items-center justify-between relative z-10 py-5 sm:py-10 md:py-32 px-5'>
                <div>
                    <Image src={Team} className='hidden md:flex  w-[1500px]' />
                </div>
                <div>
                    <span className='font-bold text-base text-[#DA6A2A]'>OUR CLUB</span>
                    <h1 className='font-bold text-2xl md:text-5xl text-white pt-5'>WELCOME TO THE KING STAR CLUB</h1>
                    <p className='text-lg md:text-xl text-white pt-5'>Deciding how to fit out a gym or functional fitness space isn’t easy, which is why Gym and Fitness
                        is here to help guide you through the process. Explore our portfolio of custom gym fit outs by clicking below.</p>
                    <p className='text-lg md:text-xl text-white pt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="flex gap-2 mx-auto mt-10  w-[220px] sm:w-[240px] items-center font-bold text-white bg-[#DA6A2A] hover:bg-transparent border-[#DA6A2A] border-[1px] transition-all duration-300 py-3 sm:py-4 px-3 sm:px-6 hover:text-[#DA6A2A] text-base cursor-pointer">
                        <button>Join Our Team Now</button>
                        <span className="text-2xl">
                            <BsArrowRightShort />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurClub 