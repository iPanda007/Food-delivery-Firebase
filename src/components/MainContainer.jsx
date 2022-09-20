import React from 'react'
import Delivery from '../img/delivery.png'
const MainContainer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
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
         <div className='py-2  bg-blue-400'>

         </div>
    </div>
  )
}

export default MainContainer
