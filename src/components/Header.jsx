import React,{useState} from 'react';
import Logo from '../img/logo.png';
import {MdShoppingBasket,MdAdd,MdLogout} from 'react-icons/md';
import {Link} from 'react-router-dom'
import Avatar from '../img/avatar.png';
import {motion} from 'framer-motion';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';
import { useStateValue } from '../context/StateProvider';
const Header = () => {
    //instance
    const [isMenu,setMenu] = useState(false);
    const {initialState,dispatchReducer} = useStateValue();
    const {user} = initialState
   console.log(user)
    const firebaseAuth = getAuth(app)
    const provider = new GoogleAuthProvider();

    //function
    const login = async()=>{
         if(!user){
          const {user:{refreshToken,providerData}} = await signInWithPopup(firebaseAuth,provider);
          dispatchReducer({
            type:"SET_USER",
            user:providerData[0]
          })
        localStorage.setItem("user",JSON.stringify(providerData[0]))
         }else{
          setMenu(!isMenu)
         }
    }
    const logout = ()=>{
      setMenu(false)
      localStorage.clear()
      dispatchReducer({
        type:"SET_USER",
        user:null
      })
    }
  return (
    <header className='fixed z-50 w-screen top-0  p-3 px-4 md:p-6 md:px-16 bg-primary'>
        {/* desktop and tablet */}
        <div className='hidden md:flex w-full h-full 
        items-center justify-between'>
            <Link to={'/'} className='flex items-center gap-2'>
                  <img src={Logo} className="w-8 object-cover" alt="logo"/>
                  <p className='text-headingColor text-xl font-bold'>City</p>
            </Link>
            <div className='flex items-center gap-8'>
            <ul className='flex items-center gap-8 '>
                <li
                  onClick={()=>{
                    setMenu(false)
                  }}
                className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer '>Home</li>
                <li
                  onClick={()=>{
                    setMenu(false)
                  }}
                className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer '>Menu</li>
                <li
                  onClick={()=>{
                    setMenu(false)
                  }}
                className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer '>About Us</li>
                <li
                  onClick={()=>{
                    setMenu(false)
                  }}
                className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer '>Service</li>
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
             
              
                <div className={`w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-4 transition-all duration-500 ${isMenu ? 'scale-100':'scale-0'}`} >
                {
                  user && user.email === "aungkyawkhaing2000@gmail.com" && (
                    <Link to={'/createitem'}>
                                 <p  className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-200 ease-in-out text-textColor text-base'
                                 onClick={()=>{
                                  setMenu(false)
                                 }}
                                 >New Item    <MdAdd/></p>
                    </Link>
                  )
                }
                  <p
                    onClick={logout} 
                    className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-200 ease-in-out text-textColor text-base' >Logout    <MdLogout/></p>
              </div>

               
               </div>
              
            </div>
        </div>
        {/* mobile */}
        <div className='flex md:hidden w-full h-full drop-shadow-lg items-center justify-between  '>

        <div className= ' relative flex items-center justify-center'>
                 <MdShoppingBasket className='text-textColor text-2xl '/>
                 <div className=' absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                    <p className='text-xs text-white font-semibold'>2</p>
                 </div>
            </div>

          <Link to={'/'} className='flex items-center gap-2'>
                  <img src={Logo} className="w-8 object-cover" alt="logo"/>
                  <p className='text-headingColor text-xl font-bold'>City</p>
            </Link>
                  
         
            <div className='relative' > 
               <motion.img
                     whileTap={{scale:0.6}}
                     src={user ? user.photoURL : Avatar} className='min-w-[40px] min-h-[40px] w-10 h-10 cursor-pointer rounded-full ' 
                     onClick={login}
             />
       
                <div className={` overflow-hidden  w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-4 transition-all duration-500 ${isMenu ? 'scale-100':'scale-0'}`} >
                {
                  user && user.email === "aungkyawkhaing2000@gmail.com" && (
                    <Link to={'/createitem'}>
                                 <p  className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-200 ease-in-out text-textColor text-base' >
                                  New Item    <MdAdd/>
                                  
                                  </p>
                    </Link>
                  )
                }
                  <ul className='flex-col  '>
                        <li className=' px-4 py-2 text-base text-textColor hover:text-headingColor hover:bg-slate-100 duration-100 transition-all ease-in-out cursor-pointer '>Home</li>
                        <li className=' px-4 py-2 text-base text-textColor hover:text-headingColor hover:bg-slate-100 duration-100 transition-all ease-in-out cursor-pointer '>Menu</li>
                        <li className=' px-4 py-2 text-base text-textColor hover:text-headingColor hover:bg-slate-100 duration-100 transition-all ease-in-out cursor-pointer '>About Us</li>
                        <li className=' px-4 py-2 text-base text-textColor hover:text-headingColor hover:bg-slate-100 duration-100 transition-all ease-in-out cursor-pointer '>Service</li>
                    </ul>
                  <p
                  onClick={logout} 
                  className='px-6 py-2 m-2 rounded-md shadow-sm flex items-center justify-center gap-3 cursor-pointer  bg-slate-200 hover:bg-slate-300 transition-all duration-200 ease-in-out text-textColor text-base' >
                    Logout p  <MdLogout/>
                  </p>
              </div>
            </div>
        </div>
    </header>
  )
}

export default Header
