import React from 'react'
import { FcBusinessman } from 'react-icons/fc';
import { RiStarSmileFill } from 'react-icons/ri';
import { BsFillBuildingsFill } from 'react-icons/bs';
import { MdSupportAgent } from 'react-icons/md';

const Joinus = () => {
    return (
        <div className='bg-[#EDF1FC] py-14'>
            <div className='container px-5'>
                <div className='block lg:flex '>
                    <div className='pt-16'>
                        <span className='text-[#DA6A2A]'>Why Join Us</span>
                        <h1 className='text-3xl sm:text-5xl font-bold mt-7'>Life is like soccer, we need GOALS.</h1>
                        <p className='text-base font-thin text-[#1A1C1F] pt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                            luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

                    </div>
                    <div className='lg:block sm:flex block justify-center gap-2'>
                        <div className='joinus-shadow flex items-center gap-4 bg-white px-6 py-12 m-6 transition-all transform hover:-translate-y-2'>
                            <span className=' text-5xl text-[#DA6A2A]'><FcBusinessman /></span>
                            <div>
                                <h2 className='text-xl pt-3 font-bold'>Professional Coach</h2>
                                <p className=' text-sm font-thin text-[#1A1C1F]'>Potenti orci eu sagittis vestibulum sapien laoreet rutrum sociosqu lacus vulputate pretium</p>
                            </div>
                        </div>
                        <div className='joinus-shadow flex items-center gap-4 bg-white px-6 py-12 m-6 transition-all transform hover:-translate-y-2'>
                            <span className=' text-5xl text-[#DA6A2A]'><BsFillBuildingsFill /></span>
                            <div>
                                <h2 className='text-xl pt-3 font-bold'>Professional Coach</h2>
                                <p className=' text-sm font-thin text-[#1A1C1F]'>Potenti orci eu sagittis vestibulum sapien laoreet rutrum sociosqu lacus vulputate pretium</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:block sm:flex block justify-center gap-2'>
                        <div className='joinus-shadow flex items-center gap-4 bg-white px-6 py-12 m-6 transition-all transform hover:-translate-y-2'>
                            <span className=' text-5xl text-[#DA6A2A]'><RiStarSmileFill /></span>
                            <div>
                                <h2 className='text-xl pt-3 font-bold'>Professional Coach</h2>
                                <p className=' text-sm font-thin text-[#1A1C1F]'>Potenti orci eu sagittis vestibulum sapien laoreet rutrum sociosqu lacus vulputate pretium</p>
                            </div>
                        </div>
                        <div className='joinus-shadow flex items-center gap-4 bg-white px-6 py-12 m-6 transition-all transform hover:-translate-y-2'>
                            <span className=' text-5xl text-[#DA6A2A]'><MdSupportAgent /></span>
                            <div>
                                <h2 className='text-xl pt-3 font-bold'>Professional Coach</h2>
                                <p className=' text-sm font-thin text-[#1A1C1F]'>Potenti orci eu sagittis vestibulum sapien laoreet rutrum sociosqu lacus vulputate pretium</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Joinus