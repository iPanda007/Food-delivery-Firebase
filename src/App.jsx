import React from 'react'
import { Header } from './components'
import RouteRoot from './routes'
import {AnimatePresence} from "framer-motion";

const App = () => {
  return (
    <AnimatePresence>
        <Header/>
    <div className='w-screen h-auto     flex-col bg-primary'>
      
        <main className='mt-24 px-10 p-5 w-full'>
            <RouteRoot/>
        </main>
    </div>
    </AnimatePresence>
  )
}

export default App
