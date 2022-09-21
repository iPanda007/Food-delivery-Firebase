import React from 'react'
import Delivery from '../img/delivery.png';
import HeroBg from '../img/heroBg.png';
import I1 from '../img/i1.png';


const heropData = [
    {id:1,name:'Icecream',decp:'chocolate & vanilla',price:'5.25',imageSrc:''}
]


const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-3 w-full place-content-center  ' id='home'>
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
    <div className='py-2 relative flex items-center'>
            <div className='w-full flex items-center'>
                    <img src={HeroBg}
                     className=' h-420 w-full lg:w-auto lg:h-650 ml-auto' 
                     alt='hero-bg'
                     />
            </div>
            <div className="w-full h-full absolute -top-32 left-0 flex items-center justify-center">
                    <div className="w-190 p-4 flex items-center justify-center flex-col rounded-3xl bg-cardOverlay backdrop-blur-md ">
                            <img src={I1} className="w-40 -mt-20" alt='I1'/>
                            <p className='text-xl font-semibold text-textColor mt-2'>Icecream</p>
                            <p className='text-sm text-lighttextGray font-semibold my-2'>Chocloate & vanialla </p>
                            <p className="text-sm font-semibold text-headingColor"> <span className='text-xs text-red-600'>$</span>5.25</p>
                    </div>
            </div>
    </div>
</section>
  )
}

export default HomeContainer
