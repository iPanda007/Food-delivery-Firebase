import React,{useState} from 'react'
import {MdFastfood} from 'react-icons/md'
const CreateContainer = () => {
   const [title,setTitle] = useState("");
   const [calories,setCalories] = useState("");
   const [price,setPrice] = useState("");
   const [category,setCategorty] = useState(null);
   const [fields,setFields] = useState(false);
   const [msg,setMsg] = useState(null);
   const [imageAsset,setImageAsset] = useState(null);
   const [isLoading,setIsLoading] = useState(false);
   const [alertStatus,setAlertStatus] = useState("danger");
  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
        <div className='w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center '>
            {fields && (
              <p className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${
                alertStatus === 'danger'
               ?
              'bg-red-400 text-red-800'
                    :
              'bg-emerald-400'} ${fields ? 'scale-100':'scale-0'} transition-all duration-500 ease-in-out `}>
                 {msg}
              </p>
            )}
            <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
               <MdFastfood className="text-xl text-gray-700"/>
               <input
                type="text" 
                required 
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                placeholder = 'Give me a title...'
               className="w-full h-full text-lg bg-transparent font-semibold focus:outline-none border-none placeholder:text-gray-500
               text-textColor"
               />
            </div>
            <div className='w-full'>
                  <select onChange={()=>}>
                      <option value="other" className="bg-white">
                           Select Category
                      </option>
                  </select>
            </div>
        </div>
    </div>
  )
}

export default CreateContainer
