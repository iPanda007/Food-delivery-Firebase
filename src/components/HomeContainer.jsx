import React from 'react'
import Delivery from '../img/delivery.png';
import HeroBg from '../img/heroBg.png';
import I1 from '../img/i1.png';
import { heroData } from '../utils/Data';




const HomeContainer = () => {
  return (
    <sect ion className='grid grid-cols-1 md:grid-cols-2 gap-3 w-full place-content-center  ' id='home'>
    <div className='py-2 flex flex-col items-start justify-between '>
       <div className='flex items-center mb-5  gap-2 justify-center bg-orange-100 p-2 rounded-full
         px-4 py-1 '>
             <p className='text-base text-orange-500 font-semibold'>Bike Delivery</p>
              <div
               className='w-7 h-7 bg-white rounded-full overflow-hidden
               drop-shadow-xl
               '
              >
                   <img
                   className="w-full h-full"
                   src={Delivery} alt="Delivery" />
              </div>

         </div>
         <p
         className='text-[2.5rem] font-bold tracking-wide text-headingColor mb-3 lg:text-[4.5rem]'
         >The Fastest Delivery in <span className='text-[3rem] text-orange-600 lg:text-[5rem]'>Your City</span>
         </p>
         <p 
         className='text-base text-left mb-4 md:text-left text-textColor'
         >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis quidem corporis dolores. Repellendus corrupti veniam labore suscipit obcaecati, cupiditate dolorum doloribus consequuntur quae ab animi temporibus at quibusdam?
         </p>
         <button type="button" 
         className='bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:scale-[1.01] duration-300
         transition-all ease-in-out'
         >
           Order Now
         </button>
    </div>
    <div className='py-2 relative flex items-center mt-12 md:mt-0'>
            <div className='w-full flex items-center'>
                    <img src={HeroBg}
                     className=' h-420 w-full lg:w-auto lg:h-650 ml-auto' 
                     alt='hero-bg'
                     />
            </div>
            <div className="w-full  h-full absolute top-0 left-0 2xl:left-[20%] flex items-center justify-center flex-wrap gap-4 mt-10 md:mt-0  ">
                  { heroData && heroData.map(n =>(
                  <div key={n.id} className=" w-[150px]   mb-12 md:mb-0 lg:min-w-[250px] 2xl:w-[350px]  p-4 shadow flex items-center justify-center flex-col rounded-3xl bg-cardOverlay backdrop-blur-md ">
                       <img src={n.imageSrc} className=" w-22 md:w-22 lg:w-40 2xl:w-56 -mt-20" alt='I1'/>
                       <p className='text-lg 2xl:text-2xl font-semibold text-textColor mt-2'>{n.name}</p>
                       <p className='text-[10px] 2xl:text-base text-lighttextGray font-semibold my-2'>{n.decp} </p>
                       <p className="text-sm font-semibold text-headingColor"> <span className='text-xs text-red-600'>$</span>{n.price}</p>
               </div>
                  ))
                    
                   }
            </div>
    </div>
</sect>
  )
}

export default HomeContainer
