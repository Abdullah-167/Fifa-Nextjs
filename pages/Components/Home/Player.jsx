import React from 'react'
import Image from 'next/image';
import Player1 from '../../../public/assets/player1.jpg'
import Player2 from '../../../public/assets/player2.jpg'
import Player3 from '../../../public/assets/player3.jpg'
import Player4 from '../../../public/assets/player4.jpg'
import { FaTshirt } from 'react-icons/fa';
import { BsArrowRightShort } from 'react-icons/bs';

const Player = ({ backgroundColor }) => {
    return (
        <div className='bg-[#F3F4F7] py-16' style={{ backgroundColor }}>
            <div>
                <h1 className='text-[#0E1E32] text-5xl text-center pt-20 font-bold'>CLUB PLAYERS</h1>
                <p className='pt-8 text-xl text-center text-[#5B5F64]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit nisi pulvinar</p>
                <div className='container flex flex-wrap justify-center xl:flex-nowrap gap-10 py-14'>
                    <div>
                        <div>
                            <Image width={270} alt='player1' src={Player1} />
                        </div>
                        <div className='bg-white p-4'>
                            <div className='flex items-center gap-12'>
                                <h2 className='text-2xl'>Arrizabalaga</h2>
                                <div className='flex gap-5'>
                                    <span className='text-[#DA6A2A] text-xl'><FaTshirt /></span>
                                    <span className='text-xl'>5</span>
                                </div>
                            </div>
                            <span className='text-[11px]'>MIDFIELDER</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image width={270} alt='player1' src={Player2} />
                        </div>
                        <div className='bg-white p-4'>
                            <div className='flex items-center gap-12'>
                                <h2 className='text-2xl'>Kovacic</h2>
                                <div className='flex gap-5'>
                                    <span className='text-[#DA6A2A] text-xl'><FaTshirt /></span>
                                    <span className='text-xl'>5</span>
                                </div>
                            </div>
                            <span className='text-[11px]'>FORWARD</span>
                        </div>
                    </div>   <div>
                        <div>
                            <Image width={270} alt='player1' src={Player3} />
                        </div>
                        <div className='bg-white p-4'>
                            <div className='flex items-center gap-12'>
                                <h2 className='text-2xl'>Casemiro</h2>
                                <div className='flex gap-5'>
                                    <span className='text-[#DA6A2A] text-xl'><FaTshirt /></span>
                                    <span className='text-xl'>5</span>
                                </div>
                            </div>
                            <span className='text-[11px]'>MIDFIELDER</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image width={270} alt='player1' src={Player4} />
                        </div>
                        <div className='bg-white p-4'>
                            <div className='flex items-center gap-12'>
                                <h2 className='text-2xl'>Odell Swift</h2>
                                <div className='flex gap-5'>
                                    <span className='text-[#DA6A2A] text-xl'><FaTshirt /></span>
                                    <span className='text-xl'>5</span>
                                </div>
                            </div>
                            <span className='text-[11px]'>DEFENDER</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-2 mx-auto  w-[178px] sm:w-[240px] items-center font-bold hover:text-white hover:bg-[#DA6A2A] bg-transparent border-[#DA6A2A] border-[1px] transition-all duration-300 py-1 sm:py-4 px-3 sm:px-6 text-[#DA6A2A] text-base cursor-pointer">
                <button>Join Our Team Now</button>
                <span className="text-2xl">
                    <BsArrowRightShort />
                </span>
            </div>
        </div>
    )
}

export default Player