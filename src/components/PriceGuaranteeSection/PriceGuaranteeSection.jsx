// import React from 'react';
import {TbMoneybag} from 'react-icons/tb'
import {BsPhone} from 'react-icons/bs'
import {TbPlaneDeparture} from 'react-icons/tb'
const PriceGuaranteeSection = () => {
    return (
        <div className="bg-[#FAF5EE] py-12">
        <div className='grid grid-cols-3 max-w-[1200px] m-auto'>
        <div className='flex  gap-3'>
            <div className='text-blue-600'>
            <TbMoneybag size={50}/>
            </div>
            <div className='flex flex-col gap-5'>
                <h2 className='font-bold text-lg'>Best Price Guarantee</h2>
                <p className='w-72 text-gray-400 '>We provide you cheap and budget-friendly domestic and international tour packages.</p>
            </div>
        </div>
        <div className='flex  gap-3'>
            <div className='text-blue-600'>
            <BsPhone size={50}/>
            </div>
            <div className='flex flex-col gap-5'>
                <h2 className='font-bold text-lg'>Easy & Quick Booking</h2>
                <p className='w-72 text-gray-400 '>We are here to help you best flight schedule and manage air tickets in a very short time.</p>
            </div>
        </div>
        <div className='flex  gap-3'>
            <div className='text-blue-600'>
            <TbPlaneDeparture size={50}/>
            </div>
            <div className='flex flex-col gap-5'>
                <h2 className='font-bold text-lg'>Best Tour Selection</h2>
                <p className='w-72 text-gray-400 '>You will get from our 1000+ tourist places to choose your desire destination.</p>
            </div>
        </div>
        </div>
            
        </div>
    );
};

export default PriceGuaranteeSection;