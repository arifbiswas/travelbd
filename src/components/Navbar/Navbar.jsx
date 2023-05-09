// import React from 'react';
const navData = [
    {
        title: 'Home',
        path: '/',
        icon : 'fa-house',
        submenu : false
    },
    {
        title: 'Hotel',
        path: '/hotel',
        icon : 'fa-bed',
        submenu : false
    },
    {
        title: 'Our Packages',
        path: '/packages',
        icon : 'fa-handshake',
        submenu : true
    },
    {
        title: 'Gallery',
        path: '/gallery',
        icon : 'fa-image',
        submenu : false
    },
    {
        title: 'Contact Us',
        path: '/contact',
        icon : 'fa-circle-info',
        submenu : false
    },
    {
        title: 'Login',
        path: '/login  ',
        icon : 'fa-circle-user',
        submenu : false
    }
 
]

const Navbar = () => {
    return (
        <div className='max-w-[1200px] m-auto '>
            <div className='flex h-24 items-center justify-between'>
            {/* <h1 className='text-3xl font-semibold text-gray-500'>Travel bd</h1>
             */}
             <img className="h-[100%]" src="https://img.freepik.com/free-vector/travelling-concept-logo-business_23-2148616023.jpg?w=1380&t=st=1683618732~exp=1683619332~hmac=29083ab5b14a8f6094e4ee1f6de911282d8e35bd2ae6a7261b0435c8fd633cc2" alt="" />
            <div className="flex gap-16 text-gray-500">
                {
                    navData.map((item, index) => 
                         
                           <p key={index} href={item.path} className='relative font-normal hover:text-gray-900 flex gap-1 items-center'>
                              <i className={`fa-solid ${item.icon}`}></i>
                                <span>{item.title}</span>
                                <span className="absolute bottom-0 -right-4 text-[10px]">{item.submenu && <i className="fa-solid fa-angle-down"></i>}</span>
                            </p>
                        
                    )
                }
            </div>
            </div>
        </div>
    );
};

export default Navbar;