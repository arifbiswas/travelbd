
import {FaPhoenixFramework} from 'react-icons/fa'
import {SiYourtraveldottv} from 'react-icons/si'
import {MdOutlineParagliding} from 'react-icons/md'
import {GiWilliamTell ,GiUbisoftSun} from 'react-icons/gi'
const FindBestTour = () => {

    return (
        <div className="bg-[#FAF5EE] py-32">
       <div className="flex items-center flex-col gap-4">
        <h3 className="text-blue-500 text-sm">FIND THE BEST TOUR</h3>
        <h2 className="font-bold text-3xl text-gray-700">Choose Tour Types</h2>
       </div>
            <div className="mt-12 grid grid-cols-5 max-w-[1100px] mx-auto">
                <div  className={`w-48 h-48 bg-white translate-y-0 scale-100 hover:scale-105 hover:-translate-y-5 text-blue-500 hover:text-white hover:bg-blue-400 transition-all  duration-500 rounded-md`}>
                    <div className='flex flex-col items-center gap-3 justify-center h-full'>
                    <span className= ""><FaPhoenixFramework  size={75}/></span>
                        <h4 className="font-medium ">Adventure</h4>
                    </div>
                </div>
                <div  className={`w-48 h-48 translate-y-0 scale-100 hover:scale-105 hover:-translate-y-5 bg-white text-blue-500 hover:text-white hover:bg-blue-400 transition-all  duration-500 rounded-md`}>
                    <div className='flex flex-col items-center gap-3 justify-center h-full'>
                    <span className= ""><SiYourtraveldottv  size={75}/></span>
                        <h4 className="font-medium ">Traveling</h4>
                    </div>
                </div>
                <div  className={`w-48 h-48 translate-y-0 scale-100 hover:scale-105 hover:-translate-y-5 bg-white text-blue-500 hover:text-white hover:bg-blue-400 transition-all  duration-500 rounded-md`}>
                    <div className='flex flex-col items-center gap-3 justify-center h-full'>
                    <span className= ""><MdOutlineParagliding  size={75}/></span>
                        <h4 className="font-medium ">Hang Gliding</h4>
                    </div>
                </div>
                <div  className={`w-48 h-48 translate-y-0 scale-100 hover:scale-105 hover:-translate-y-5 bg-white text-blue-500 hover:text-white hover:bg-blue-400 transition-all  duration-500 rounded-md`}>
                    <div className='flex flex-col items-center gap-3 justify-center h-full'>
                    <span className= ""><GiWilliamTell  size={75}/></span>
                        <h4 className="font-medium ">Wildlife</h4>
                    </div>
                </div>
                <div  className={`w-48 h-48 translate-y-0 scale-100 hover:scale-105 hover:-translate-y-5 bg-white text-blue-500 hover:text-white hover:bg-blue-400 transition-all  duration-500 rounded-md`}>
                    <div className='flex flex-col items-center gap-3 justify-center h-full'>
                    <span className= ""><GiUbisoftSun  size={75}/></span>
                        <h4 className="font-medium ">Sightseeing</h4>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default FindBestTour;