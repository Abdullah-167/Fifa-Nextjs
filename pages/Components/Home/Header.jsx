import { React, useState, useEffect } from 'react';
import { SlArrowLeft } from 'react-icons/sl';
import { SlArrowRight } from 'react-icons/sl';
import { BsArrowRightShort } from 'react-icons/bs';
import { BsPlayFill } from 'react-icons/bs';

const Header = () => {
    const [slideClass, setSlideClass] = useState('div8');
    const [slide, setslide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setslide(slide === slides.length - 1 ? 0 : slide + 1);
            setSlideClass('nextslide');
        }, 3000);

        return () => clearInterval(interval);
    }, [slide]);

    const handlePrevClick = () => {
        setslide(slide === 0 ? slides.length - 1 : slide - 1);
        setSlideClass('prev')
    };

    const handleNextClick = () => {
        setslide(slide === slides.length - 1 ? 0 : slide + 1);
        setSlideClass('nextslide')
    };

    return (
        <div className="bg-img">
            <div className="container relative z-10 gap-10 lg:gap-20 block md:flex  justify-center lg:justify-between items-center pt-10 md:pt-28 px-5">
                <span
                    className="hidden md:flex text-white hover:text-[#DA6A2A] transition-all duration-200 bg-gray-100 bg-opacity-10 text-3xl p-3 cursor-pointer"
                    onClick={handlePrevClick}
                >
                    <SlArrowLeft />
                </span>
                <div>
                    {slides.map((items, index) => {
                        return (
                            <div className={slideClass} key={index} style={{ display: slide === index ? 'block' : 'none' }}>
                                <h1 className="font-bold text-white text-center  text-4xl md:text-5xl lg:text-7xl w-[full] md:w-[560px] mx-auto">
                                    {items.heading}
                                </h1>
                                <p className="text-white pt-5 text-lg md:text-xl text-center w-full lg:w-[560px] mx-auto">{items.para}</p>
                                <div className="block sm:flex ml-0 md:ml-[40px] justify-center gap-5 mt-6">
                                    <div className="flex gap-2 mx-auto  w-[170px] sm:w-[190px] items-center bg-[#DA6A2A] hover:bg-transparent border-[#DA6A2A] border-[1px] transition-all duration-100 py-1 sm:py-2 px-3 sm:px-5 text-white text-base cursor-pointer">
                                        <button>{items.button1}</button>
                                        <span className="text-2xl">
                                            <BsArrowRightShort />
                                        </span>
                                    </div>
                                    <div className='flex gap-2 mx-auto sm:mx-0 w-[170px] sm:w-[280px] mt-3 items-center py-2 px-5 text-white text-base cursor-pointer'>
                                        <span className='text-xl rotate rounded-full p-1 border-[2px] border-white'>
                                            <BsPlayFill />
                                        </span>
                                        <button>{items.button2}</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <span class='hidden md:flex text-white hover:text-[#DA6A2A] transition-all duration-200 bg-gray-100 bg-opacity-10 text-3xl p-3 cursor-pointer' onClick={handleNextClick}><SlArrowRight /> </span>
                <div className='flex md:hidden gap-5 justify-center pt-3 sm:pt-5'>
                    <span
                        className="text-white hover:text-[#DA6A2A] transition-all duration-200 bg-gray-100 bg-opacity-10 text-2xl sm:text-3xl p-2 sm:p-3 cursor-pointer"
                        onClick={handlePrevClick}
                    >
                        <SlArrowLeft />
                    </span>
                    <span class='text-white hover:text-[#DA6A2A] transition-all duration-200 bg-gray-100 bg-opacity-10 text-2xl sm:text-3xl p-2 sm:p-3 cursor-pointer' onClick={handleNextClick}><SlArrowRight /> </span>
                </div>
            </div>

        </div >
    )
}

export default Header




const slides = [
    {
        heading: 'Welcome To king Star Club',
        para:
            'Seamlessly Share workouts of the day that are  tailored for your members trainig needs',
        button1: 'Join Our Team',
        button2: 'Learn More',
    },
    {
        heading: 'Discover New Workouts',
        para:
            'From strength training to cardio, we’ve got workouts that will help you reach your fitness goals.',
        button1: 'Get Started',
        button2: 'Watch Video',
    },
    {
        heading: 'Track Your Progress',
        para:
            'Use our tools to track your workouts, monitor your progress, and stay motivated.',
        button1: 'Sign Up Now',
        button2: 'Learn More',
    },
];


