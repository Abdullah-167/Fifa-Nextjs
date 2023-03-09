import React, { useState } from 'react';
import  GoLocation  from 'react-icons/go';
import  GrMail  from 'react-icons/gr';
import  BsTelephone  from 'react-icons/bs';
import  AiOutlineArrowDown  from 'react-icons/ai';
import  AiOutlineArrowUp  from 'react-icons/ai';


const NeedHelp = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleToggle = (index) => {
        if (index === expandedIndex) {
            // If clicked question is already expanded, collapse it
            setExpandedIndex(null);
        } else {
            setExpandedIndex(index);
        }
    };

    return (
        <div className='container'>
            <div className='flex flex-wrap md:flex-nowrap gap-20 py-20 sm:py-32 px-5'>
                <div className='sm:pt-10'>
                    <h1 className='text-2xl sm:text-4xl font-bold'>Need help?</h1>
                    <p className='text-base sm:text-xl pt-5'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                        tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                    <h3 className='text-3xl font-bold pt-5'>Contact information</h3>
                    <div className='flex pt-10 items-center gap-3 text-sm cursor-pointer'>
                        <span className='text-lg'>
                            <GoLocation />
                        </span>
                        <div className='nav'>
                            <span className='hover:text-[#DA6A2A] transition-all duration-500'>
                                Jln cempaka Wangi No 22, Jakarta
                            </span>
                        </div>
                    </div>
                    <div className='flex pt-3 items-center gap-3 text-sm cursor-pointer'>
                        <span className='text-lg'>
                            <GrMail />
                        </span>
                        <div className='nav'>
                            <span className='hover:text-[#DA6A2A] transition-all duration-500'>
                                support@yourdomain.tld
                            </span>
                        </div>
                    </div>
                    <div className='flex pt-3 items-center gap-3 text-sm cursor-pointer'>
                        <span className='text-lg'>
                            <BsTelephone />
                        </span>
                        <div className='nav'>
                            <span className='hover:text-[#DA6A2A] transition-all duration-500'>
                                +(62)21 2002 2012
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <span className='text-sm sm:text-base text-[#DA6A2A]'>Featured Questions</span>
                    <h1 className='text-2xl sm:text-4xl font-bold pt-5'>Global Questions</h1>
                    <div className='pt-5'>
                        {faq.map((item, index) => (
                            <div key={index} className='my-2'>
                                <div
                                    className={`team-shadow flex items-center gap-3 cursor-pointer bg-[#F7F9FB] p-4 transition duration-700 ease-in-out ${expandedIndex === index ? 'bg-[#EDF1FC] text-[#CB1A2B]' : ''}`}
                                    onClick={() => handleToggle(index)}
                                >
                                    <h3 className='text-xl font-semibold'>{item.question}</h3>
                                    <span className="ml-auto">{expandedIndex === index ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}</span>
                                </div>
                                <div
                                    className={`team-shadow overflow-hidden bg-[#F7F9FB] p-4 mt-1 transition-all duration-700 ease-in ${expandedIndex === index ? 'h-auto opacity-100' : 'h-0 opacity-0'
                                        }`}
                                >
                                    <p className='text-lg mt-4'>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NeedHelp;






const faq = [{
    question: 'Scelerisque dolor id per feugiat?',
    answer: 'Mauris ad id cubilia malesuada fusce dictumst. Taciti pretium id tortor nunc et in. Finibus litora sagittis laoreet dignissim commodo vitae nullam gravida vivamus tincidunt.'
},
{
    question: 'Sociosqu orci bibendum?',
    answer: 'Mauris ad id cubilia malesuada fusce dictumst. Taciti pretium id tortor nunc et in. Finibus litora sagittis laoreet dignissim commodo vitae nullam gravida vivamus tincidunt.'
}, {
    question: 'Himenaeos dictumst congue imperdiet?',
    answer: 'Mauris ad id cubilia malesuada fusce dictumst. Taciti pretium id tortor nunc et in. Finibus litora sagittis laoreet dignissim commodo vitae nullam gravida vivamus tincidunt.'
}, {
    question: 'Litora pretium efficitur dui?',
    answer: 'Mauris ad id cubilia malesuada fusce dictumst. Taciti pretium id tortor nunc et in. Finibus litora sagittis laoreet dignissim commodo vitae nullam gravida vivamus tincidunt.'
}, {
    question: 'Volutpat magna dapibus arcu?',
    answer: 'Mauris ad id cubilia malesuada fusce dictumst. Taciti pretium id tortor nunc et in. Finibus litora sagittis laoreet dignissim commodo vitae nullam gravida vivamus tincidunt.'
},
]