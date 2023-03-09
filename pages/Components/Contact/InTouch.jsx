import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { GrMail } from 'react-icons/gr';
import { BsTelephone } from 'react-icons/bs';
import { GiSoccerBall } from 'react-icons/gi';

const InTouch = () => {
    return (
        <div className='container py-20 px-5'>
            <div className='flex flex-wrap justify-center lg:flex-nowrap gap-3'>
                <div>
                    <div>
                        <p className='text-[#DA6A2A] text-lg'>Get in Touch</p>
                        <h1 className='text-2xl md:text-5xl font-bold pt-6'>Send us a message for more information or qustions.</h1>
                        <p className='text-lg text-gray-700 pt-6 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                            elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div className='block sm:flex gap-3 pt-20'>
                        <div>
                            <p className='text-lg pb-1'>Name</p>
                            <input type='phone' className='bg-[#EDF1FC] outline-none w-full pl-3 pr-28 py-3' placeholder='Name' />
                        </div>
                        <div>
                            <p className='text-lg pb-1'>Phone</p>
                            <input type='phone' className='bg-[#EDF1FC] outline-none w-full pl-3 pr-28 py-3' placeholder='Name' />
                        </div>
                    </div>
                    <div className='py-3'>
                        <p className='text-lg pb-1'>Emal</p>
                        <input className='bg-[#EDF1FC] outline-none w-full pl-3 pr-28 py-3' placeholder='Name' />
                    </div>
                    <div className='py-3'>
                        <p className='text-lg pb-1'>Name</p>
                        <input type='email' className='bg-[#EDF1FC] outline-none w-full pl-3 pr-28 py-3' placeholder='Name' />
                    </div>
                    <div className='py-3'>
                        <p className='text-lg pb-1'>Subject</p>
                        <input type='text' className='bg-[#EDF1FC] outline-none w-full pl-3 pr-28 py-3' placeholder='Name' />
                    </div>
                    <div className='py-3'>
                        <p className='text-lg pb-1'>Subject</p>
                        <textarea type='text' className='bg-[#EDF1FC] h-[150px] outline-none w-full pl-3 pr-28 py-3' placeholder='Name'></textarea>
                    </div>
                    <div className='hidden sm:flex gap-2  items-center bg-[#DA6A2A] hover:bg-transparent border-[#DA6A2A] border-[1px] transition-all duration-100 py-3 px-6 text-white hover:text-[#DA6A2A] text-base cursor-pointer w-52'>
                        <button>Join Our Team</button>
                        <span className='text-2xl'>
                            <BsArrowRightShort />
                        </span>
                    </div>
                </div>
                <div className='pt-10 lg:pt-0'>
                    <div className='team-shadow px-10 py-16 lg:pl-8'>
                        <h2 className='text-2xl font-bold'>Contact information</h2>
                        <p className='text-xl pt-5 w-full lg:w-[380px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className='flex pt-10 items-center gap-3 text-sm cursor-pointer'>
                            <span className='text-lg'><GoLocation /></span>
                            <div className='nav'>
                                <span className='hover:text-[#DA6A2A] transition-all duration-500'>
                                    Jln cempaka Wangi No 22, Jakarta
                                </span>
                            </div>
                        </div>
                        <div className='flex pt-3 items-center gap-3 text-sm cursor-pointer'>
                            <span className='text-lg'><GrMail /></span>
                            <div className='nav'>
                                <span className='hover:text-[#DA6A2A] transition-all duration-500'>
                                    support@yourdomain.tld
                                </span>
                            </div>
                        </div>
                        <div className='flex pt-3 items-center gap-3 text-sm cursor-pointer'>
                            <span className='text-lg'><BsTelephone /></span>
                            <div className='nav'>
                                <span className='hover:text-[#DA6A2A] transition-all duration-500'>
                                    +(62)21 2002 2012
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='features-bg  transition-all duration-500 transform-gpu hover:scale-110 joinus-shadow  items-center gap-4 px-5 sm:pl-8 sm:pr-28  py-20 m-6  hover:-translate-y-2 mt-20'>
                        <span className='text-5xl text-[#DA6A2A] flex justify-center'><GiSoccerBall /></span>
                        <div>
                            <h2 className='text-xl text-white pt-6  text-center lg:text-left font-bold'>Join Our Acedamy</h2>
                            <p className=' text-sm font-thin pt-4 text-white w-full lg:w-[380px] text-center lg:text-left'>Duis vel luctus odio, sed sagittis urna. Integer at elit at leo varius vestibulum. Praesent velit lacus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InTouch