import Image from 'next/image'
import React from 'react'
import Team from '../../../public/assets/redshirts1.jpg'
import Team2 from '../../../public/assets/team2.jpg'
import Team3 from '../../../public/assets/team3.jpg'

const Socceracedamy = () => {
    return (
        <div>
            <div className='container flex flex-wrap justify-center xl:flex-nowrap gap-10 py-14 px-5'>
                <div className="team-shadow  relative overflow-hidden">
                    <div className="transition-all duration-500 transform-gpu hover:scale-110">
                        <Image width={450} alt='player1' src={Team} />
                    </div>
                    <div className='bg-white p-4'>
                        <h2 className='text-2xl text-center'>Soccer Team</h2>
                        <p className='text-[15px] w-[350px] mx-auto text-center pt-4'>Eros nullam accumsan luctus arcu himenaeos aptent cursus penatibus ligula molestie lobortis</p>
                        <div className='nav cursor-pointer text-center pt-5'>
                            <span className='text-[#000000] hover:text-[#DA6A2A] transition-all duration-500'>
                                Learn More
                            </span>
                        </div>
                    </div>
                </div>
                <div className="team-shadow  relative overflow-hidden">
                    <div className="transition-all duration-500 transform-gpu hover:scale-110">
                        <Image width={450} alt='player1' src={Team2} />
                    </div>
                    <div className='bg-white p-4'>
                        <h2 className='text-2xl text-center'>Soccer Academy</h2>
                        <p className='text-[15px] w-[350px] mx-auto text-center pt-4'>Eros nullam accumsan luctus arcu himenaeos aptent cursus penatibus ligula molestie lobortis</p>
                        <div className='nav cursor-pointer text-center pt-5'>
                            <span className='text-[#000000] hover:text-[#DA6A2A] transition-all duration-500'>
                                Learn More
                            </span>
                        </div>
                    </div>
                </div>
                <div className="team-shadow  relative overflow-hidden">
                    <div className="transition-all duration-500 transform-gpu hover:scale-110">
                        <Image width={450} alt='player1' src={Team3} />
                    </div>
                    <div className='bg-white p-4'>
                        <h2 className='text-2xl text-center'>Fans Club</h2>
                        <p className='text-[15px] w-[350px] mx-auto text-center pt-4'>Eros nullam accumsan luctus arcu himenaeos aptent cursus penatibus ligula molestie lobortis</p>
                        <div className='nav cursor-pointer text-center pt-5'>
                            <span className='text-[#000000] hover:text-[#DA6A2A] transition-all duration-500'>
                                Learn More
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Socceracedamy