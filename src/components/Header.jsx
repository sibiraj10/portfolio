import { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'



const Header = () => {
   
   const [toggle,setToggle] = useState(false);

  return (
     <header  className='flex justify-between p-5 px-10 bg-primary items-center border-b-2 border-white'>
        <h1 className='font-bold text-3xl'>SIBIRAJ S</h1>
        <nav className='hidden md:block'> 
           <ul className='flex space-x-3 text-white '>
            <li><a href='/'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#project'>Projects</a></li>
            <li><a href='#resume'>Resume</a></li>
            <li><a href='#contact'>Contact</a></li>
           </ul>
        </nav>
         {toggle && <nav className='block md:hidden  '> 
           <ul onClick={()=>setToggle(!toggle)} className='flex flex-col text-white mobile-nav pt-4 gap-4'>
           <li><a href='/'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#project'>Projects</a></li>
            <li><a href='#resume'>Resume</a></li>
            <li><a href='#contact'>Contact</a></li>
           </ul>
        </nav>}
        <button onClick={()=>setToggle(!toggle)} className=' block md:hidden'><Bars3Icon className='text-white h-7 w-7 '/></button>
     </header>
  )
}

export default Header