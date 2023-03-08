import Image from 'next/image'
import React from 'react'
import Cup1 from '../../../../public/assets/cup1.png'
import Cup2 from '../../../../public/assets/cup2.png'
import Cup3 from '../../../../public/assets/cup3.png'
import { SlArrowLeft } from 'react-icons/sl';
import { SlArrowRight } from 'react-icons/sl';

const OurAwards = () => {
    return (
        <div className='bg-[#F5F6F9]'>
            <div>
                <div>
                    <h1 className='text-[#000000]'>Our Awards</h1>
                </div>
                <div className='flex md:hidden gap-5 justify-center pt-3 sm:pt-5'>
                    <span
                        className="text-white hover:text-[#DA6A2A] transition-all duration-200 bg-gray-100 bg-opacity-10 text-2xl sm:text-3xl p-2 sm:p-3 cursor-pointer"

                    >
                        <SlArrowLeft />
                    </span>
                    <span class='text-white hover:text-[#DA6A2A] transition-all duration-200 bg-gray-100 bg-opacity-10 text-2xl sm:text-3xl p-2 sm:p-3 cursor-pointer' ><SlArrowRight /> </span>
                </div>
            </div>
            <div className='flex gap-10'>
                {trophy.map((items, index) => {
                    return (
                        <div key={index}>
                            <div>
                                <Image src={items.cup} width={400} />
                                <p className='text-xl text-center pt-3'>{items.title}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default OurAwards




const trophy = [{
    cup: Cup1,
    title: '2015 World Cup Champion'
},
{
    cup: Cup1,
    title: '2016 World Cup Champion'
}, {
    cup: Cup2,
    title: '2017 World Cup Champion'
}, {
    cup: Cup2,
    title: '2018 World Cup Champion'
}, {
    cup: Cup3,
    title: '2019 World Cup Champion'
}, {
    cup: Cup1,
    title: '2020 World Cup Champion'
}, {
    cup: Cup1,
    title: '2021 World Cup Champion'
}, {
    cup: Cup2,
    title: '2022 World Cup Champion'
},]