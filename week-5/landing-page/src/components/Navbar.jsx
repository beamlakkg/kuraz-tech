import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


export const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav= ()=>{
        setNav(!nav)
    }
  return (
    <div className="flex justify-between items-centercenter h-24 max-w-[1240px] mx-auto px-4 text-white">
        <h1 className="w-full text-3xl font-bold text-green-400">REACT</h1>
        <ul className="hidden md:flex ">
            <li className="p-4 hover:font-extrabold">Home</li>
            <li className="p-4 hover:font-extrabold">Company</li>
            <li className="p-4 hover:font-extrabold">Resource</li>
            <li className="p-4 hover:font-extrabold">About</li>
            <li className="p-4 hover:font-extrabold">Contact</li>
        </ul>
        <div className="block md:hidden" onClick={handleNav}>
           { nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} /> }
        </div>
        <ul className={ nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500' : 
            'ease-in-out fixed left-[-100%] duration-500'}>
            <h1 className="w-full text-3xl font-bold text-green-400 p-4">REACT</h1>
            <li className="p-4 border-b border-gray-600">Home</li>
            <li className="p-4 border-b border-gray-600">Company</li>
            <li className="p-4 border-b border-gray-600">Resource</li>
            <li className="p-4 border-b border-gray-600">About</li>
            <li className="p-4 ">Contact</li>
        </ul>
    </div>
  )
}
