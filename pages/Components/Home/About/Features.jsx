import React from 'react'
import { GiTShirt } from 'react-icons/gi';
import { GiFootTrip } from 'react-icons/gi';
import { MdTour } from 'react-icons/md';
import { GiSoccerBall } from 'react-icons/gi';
const Features = () => {
    return (
        <div className='bg-[#F3F4F7] py-16'>
            <div className='container px-5'>
                <div className='block lg:flex '>
                    <div className='pt-16'>
                        <span className='text-[#DA6A2A]'>FEATURES</span>
                        <h1 className='text-3xl sm:text-5xl font-bold mt-7 w-ful lg:w-[100px]'>CHAMPION’S FEATURES</h1>
                        <p className='text-base font-thin text-[#1A1C1F] pt-6 w-full lg:w-[440px]'>Deciding how to fit out a gym
                            or functional fitness space isn’t easy, which is why Gym and Fitness is here to help
                            guide you through the process.
                            Explore our portfolio of custom gym fit outs by clicking below..</p>
                        <p className='text-base font-thin text-[#1A1C1F] pt-6 w-full lg:w-[440px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p className='text-base font-thin text-[#1A1C1F] pt-6 w-full lg:w-[440px]'>The game is played on a rectangular field with a goal at each end.
                            The object of the game is to score by getting the ball into the opposing goal</p>
                        <p className='text-base font-thin text-[#1A1C1F] pt-6 w-full lg:w-[440px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    </div>
                    <div className='lg:block sm:flex block justify-center gap-2'>
                        <div className='joinus-shadow text-center items-center gap-4 bg-white px-6 py-20 m-6 transition-all transform hover:-translate-y-2'>
                            <span className='text-5xl text-[#DA6A2A] flex justify-center'><GiTShirt /></span>
                            <div>
                                <h2 className='text-xl pt-6 font-bold'>Professional Coach</h2>
                                <p className=' text-sm font-thin pt-4 text-[#1A1C1F]'>Duis vel luctus odio, sed sagittis urna. Integer at elit at leo varius vestibulum. Praesent velit lacus.</p>
                            </div>
                        </div>
                        <div className='joinus-shadow text-center items-center gap-4 bg-white px-6 py-20 m-6 transition-all transform hover:-translate-y-2'>
                            <span className='text-5xl text-[#DA6A2A] flex justify-center'><GiFootTrip /></span>
                            <div>
                                <h2 className='text-xl pt-6 font-bold'>Good Football kit</h2>
                                <p className=' text-sm font-thin pt-4 text-[#1A1C1F]'>Duis vel luctus odio, sed sagittis urna. Integer at elit at leo varius vestibulum. Praesent velit lacus.</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:block sm:flex block justify-center gap-2'>
                        <div className='features-bg joinus-shadow text-center items-center gap-4 px-6  py-20 m-6 transition-all transform hover:-translate-y-2'>
                            <span className='text-5xl text-[#DA6A2A] flex justify-center'><GiSoccerBall /></span>
                            <div>
                                <h2 className='text-xl text-white pt-6 font-bold'>Soccer Training</h2>
                                <p className=' text-sm font-thin pt-4 text-white'>Duis vel luctus odio, sed sagittis urna. Integer at elit at leo varius vestibulum. Praesent velit lacus.</p>
                            </div>
                        </div>
                        <div className='joinus-shadow text-center items-center gap-4 bg-white px-6 py-20 m-6 transition-all transform hover:-translate-y-2'>
                            <span className='text-5xl text-[#DA6A2A] flex justify-center'><MdTour /></span>
                            <div>
                                <h2 className='text-xl pt-6 font-bold'>Original Strategy</h2>
                                <p className=' text-sm font-thin pt-4 text-[#1A1C1F]'>Duis vel luctus odio, sed sagittis urna. Integer at elit at leo varius vestibulum. Praesent velit lacus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features