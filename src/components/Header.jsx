import React from 'react';
import Logo from '../img/logo.png';
import {MdShoppingBasket} from 'react-icons/md';
import {Link} from 'react-router-dom'
import Avatar from '../img/avatar.png';
import {motion} from 'framer-motion';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';
import { useStateValue } from '../context/StateProvider';
const Header = () => {
    //instance
    const {initialState,dispatchReducer} = useStateValue();
    const {user} = initialState
    
    const firebaseAuth = getAuth(app)
    const provider = new GoogleAuthProvider();

    //function
    const login = async()=>{
            const {user:{refreshToken,providerData}} = await signInWithPopup(firebaseAuth,provider);
            dispatchReducer({
              type:"SET_USER",
              user:providerData[0]
            })
          
    }
  return (
    <header className='fiexd z-50 w-screen  p-6 px-16'>
        {/* desktop and tablet */}
        <div className='hidden md:flex w-full h-full 
        items-center justify-between'>
            <Link to={'/'} className='flex items-center gap-2'>
                  <img src={Logo} className="w-8 object-cover" alt="logo"/>
                  <p className='text-headingColor text-xl font-bold'>City</p>
            </Link>
            <div className='flex items-center gap-8'>
            <ul className='flex items-center gap-8 '>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer '>Home</li>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer '>Menu</li>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer '>About Us</li>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer '>Service</li>
            </ul>
            <div className= ' relative flex items-center justify-center'>
                 <MdShoppingBasket className='text-textColor text-2xl '/>
                 <div className=' absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                    <p className='text-xs text-white font-semibold'>2</p>
                 </div>
            </div>
               <div className='relative' > 
               <motion.img
                     whileTap={{scale:0.6}}
                     src={user ? user.photoURL : Avatar} className='min-w-[40px] min-h-[40px] w-10 h-10 cursor-pointer rounded-full ' 
                     onClick={login}
             />
               </div>
              
            </div>
        </div>
        {/* mobile */}
        <div className='flex md:hidden w-full h-full drop-shadow-lg '>

        </div>
    </header>
  )
}

export default Header
