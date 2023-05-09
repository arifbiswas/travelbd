// import React from 'react';
import {FaCheckCircle} from 'react-icons/fa'
const GetToKnowUsSection = () => {
    return (
        <div className="w-full grid grid-cols-2 justify-center ">
            <div className=''>
                <img className="" src="https://i.ibb.co/gJvsywD/pngwing-com.png" alt=""/>
            </div>
            <div className="pt-28 px-8">
                <div>
                    <p className="text-blue-500 text-sm font-semibold">GET TO KNOW US</p>
                    <h2 className="text-3xl font-bold pt-3">We’re Travel Agency</h2>
                </div>
                <div className="grid grid-cols-2 mt-10 gap-3">
                    <div className='flex gap-1 items-center'>
                       <p className="text-blue-500"><FaCheckCircle /></p>
                        <p className="font-medium text-gray-500">Trust and Safety</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                       <p className="text-blue-500"><FaCheckCircle /></p>
                        <p className="font-medium text-gray-500">Easy & Quick Booking</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                       <p className="text-blue-500"><FaCheckCircle /></p>
                        <p className="font-medium text-gray-500">Best Price Guarantee</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                       <p className="text-blue-500"><FaCheckCircle /></p>
                        <p className="font-medium text-gray-500">Best Travel Agents</p>
                    </div>
                </div>
                <div className='flex flex-col gap-6 mt-10'>
                    <h3 className='text-2xl text-orange-500'>Change your Place to get Fresh Air</h3>
                    <p className='text-sm text-gray-500'>There are many variations of passages available but the majority have suffered alteration. We carefully mastered combining cultural and natural riches with comfort, safety, luxury, and adventure.</p>
                </div>
                <button className=' text-white bg-blue-400 p-4 rounded-md font-bold text-sm mt-12'>BOOK WITH US NOW</button>
            </div>
        </div>
    );
};

export default GetToKnowUsSection;