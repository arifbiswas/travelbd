// import React from 'react';
import {GoLocation ,GoSettings} from 'react-icons/go'
import {MdOutlineManageAccounts} from 'react-icons/md'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {HiOutlineUserGroup} from 'react-icons/hi'

const BannerSection = () => {
    return (
        <div className="h-[650px] w-full"
        style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '650px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}
        >
        <h1 style={{
            "fontFamily": 'Dancing Script, cursive'
        }} className="font-serif text-blue-700 text-8xl -rotate-3">Jol Utshob Tours</h1>
        <h2 className=" text-white font-bold text-6xl -mt-5">Your Journey Begins Here</h2>
            <div className='rounded-lg bg-white pl-2  flex mt-12'>
            <div className="flex">
                    <div className='flex items-center py-4 px-5 gap-3 border-r border-r-gray-200'>
                        <div className='text-blue-600 '>
                        <GoLocation  size={40}/>
                        </div>
                        <div >
                            <p className="text-sm text-gray-500">Where are you going</p>
                            <h4 className="font-semibold">Booking Locations</h4>
                        </div>
                        <i className="fa-solid fa-angle-down text-gray-500 "></i>
                    </div>
                    <div className='flex items-center py-4 px-5 gap-3 border-r border-r-gray-200'>
                        <div className='text-blue-600 '>
                        <MdOutlineManageAccounts  size={40}/>
                       
                        </div>
                        <div >
                            <p className="text-sm text-gray-500">Activity type</p>
                            <h4 className="font-semibold">Booking Type</h4>
                        </div>
                        <i className="fa-solid fa-angle-down text-gray-500 mr-4"></i>
                    </div>
                    <div className='flex items-center gap-3 py-4 px-5 border-r border-r-gray-200'>
                        <div className='text-blue-600 '>
                        <AiOutlineClockCircle  size={40}/>
                        
                        </div>
                        <div >
                            <p className="text-sm text-gray-500">Activity type</p>
                            <h4 className="font-semibold">Booking Type</h4>
                        </div>
                        <i className="fa-solid fa-angle-down text-gray-500 mr-4"></i>
                    </div>
                    <div className='flex items-center gap-3 py-4 px-5 border-r border-r-gray-200'>
                        <div className='text-blue-600 '>
                        <HiOutlineUserGroup  size={40}/>
                        </div>
                        <div >
                            <p className="text-sm text-gray-500">Guests</p>
                            <h4 className="font-semibold">0</h4>
                        </div>
                        <i className="fa-solid fa-angle-down text-gray-500 mr-4"></i>
                    </div>
                    <div className='flex items-center gap-3 py-4 px-5 border-r border-r-gray-200'>
                        <div className='text-blue-600 '>
                        <GoSettings  size={40}/>
                        </div>
                    </div>
            </div>
            <div className='flex-1 cursor-pointer '>
                <div className='rounded-r-md px-10 bg-blue-500 hover:bg-blue-600 h-full w-full flex items-center justify-center gap-5 font-bold'>
                <i className="fa-solid fa-magnifying-glass text-white text-xs"></i>
                <h1 className='text-xs text-white'>SEARCH</h1>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default BannerSection;