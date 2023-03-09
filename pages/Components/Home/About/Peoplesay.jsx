import Image from 'next/image';
import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa';
import { FaQuoteRight } from 'react-icons/fa';
import One from '../../../../public/assets/img1.jpg'
import Two from '../../../../public/assets/img2.jpg'
import Three from '../../../../public/assets/img3.jpg'
import Four from '../../../../public/assets/img4.jpg'

const Peoplesay = () => {
    return (
        <div className='container py-10'>
            <div>
                <h1 className='text-5xl text-center font-bold pt-6'>WHAT ARE PEOPLE SAY</h1>
                <div className='grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-20 px-5'>
                    {people.map((items, index) => {
                        return (
                            <div key={index} className='border-[1px] border-gray-200 py-8 px-5'>
                                <sapn><FaQuoteLeft /></sapn>
                                <p className=' font-thin pl-4'>{items.para}</p>
                                <span className='flex justify-end'><FaQuoteRight /></span>
                                <div className='flex gap-3 items-center pl-4 pt-10'>
                                    <Image src={items.img} className='max-w-[200px]' />
                                    <div>
                                        <span className='font-bold'>{items.title}</span>
                                        <p>{items.work}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Peoplesay



const people = [{
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum  numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio',
    img: One,
    title: 'James',
    work: 'freelancer'
},
{
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum  numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio',
    img: Two,
    title: 'Peak',
    work: 'freelancer'
}, {
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum  numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio',
    img: Three,
    title: 'Told Josy',
    work: 'freelancer'
}, {
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum  numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio',
    img: Four,
    title: 'James',
    work: 'freelancer'
},]




