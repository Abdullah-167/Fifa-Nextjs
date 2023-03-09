import Image from 'next/image';
import React from 'react'
import Players from '../../../public/assets/players.jpg'

const AboutAcedamy = () => {
    return (
        <div className='container py-20'>
            <div className='flex justify-center flex-wrap lg:flex-nowrap  gap-10 px-5'>
                <div className='pt-5'>
                    <span className='text-base text-[#DA6A2A]'>About Academy</span>
                    <h1 className=' text-2xl sm:text-4xl font-bold pt-6'>A team above all. Above all a team.</h1>
                    <p className='text-lg sm:text-xl pt-7'>Interdum diam nisl auctor aliquet ullamcorper parturient
                        metus vel massa. Risus ad felis class consectetur interdum
                        erat convallis volutpat pulvinar nunc. Justo dignissim eu a
                        euismod torquent finibus porta lobortis eros.</p>
                    <div className='flex gap-2 mt-7 items-center hover:text-[#DA6A2A] bg-[#DA6A2A] hover:bg-transparent border-[#DA6A2A] border-[1px] transition-all duration-200 py-3 px-8 text-white text-base cursor-pointer w-[170px]'>
                        <button>Join Our Team</button>
                    </div>
                </div>
                <div>
                    <Image alt='players' src={Players} />
                </div>
            </div>
        </div>
    )
}

export default AboutAcedamy