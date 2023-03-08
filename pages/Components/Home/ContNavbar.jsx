import React from 'react'
import { GoLocation } from 'react-icons/go';
import { BsTelephone } from 'react-icons/bs';

const ContNavbar = () => {

    return (
        <div className='hidden md:flex bg-[#010A12] px-5'>
            <div className='container py-2 text-white flex justify-between'>
                <div className='flex items-center gap-3 text-sm cursor-pointer'>
                    <span><GoLocation /></span>
                    <div className='nav'>
                        <span className='hover:text-[#DA6A2A] transition-all duration-500'>
                            255 Greenwich St, New York
                        </span>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <div className='flex items-center gap-3'>
                        <span><BsTelephone /></span>
                        <span>Hotline</span>
                    </div>
                    <div className='nav cursor-pointer'>
                        <span className='hover:text-[#DA6A2A] transition-all duration-500'>
                            +1 646-968-9999
                        </span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ContNavbar