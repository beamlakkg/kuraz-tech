
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className="mx-auto max-w-[1240px] grid py-16 px-4 lg: grid-cols-3 gap-8 text-gray-300">
        <div>
            <h1 className="w-full text-3xl font-bold text-green-500">
                REACT.
            </h1>
            <p className="py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sed eius labore possimus fugit expedita ipsa doloremque saepe ipsam blanditiis fugiat. 
            </p>
            <div className="flex my-6 justify-between md:w-[75%] ">
            <FaFacebookSquare size={30} className='hover:scale-110'/>
             <FaInstagram size={30} className='hover:scale-110'/>
             <FaTwitterSquare size={30} className='hover:scale-110'/>
             <FaGithubSquare size={30} className='hover:scale-110'/>
            <FaDribbbleSquare size={30} className='hover:scale-110'/>  
            </div>
            </div>
            <div className="flex justify-between mt-6 lg:col-span-2">
                <div className='mx-2'>
                    <h6 className="font-medium text-gray-400">Solutions</h6>
                    <ul>
                        <li className="py-2 text-sm">Analytics</li>
                        <li className="py-2 text-sm">Marketing</li>
                        <li className="py-2 text-sm">Commerce</li>
                        <li className="py-2 text-sm">Insights</li>
                    </ul>
                </div>
                <div className='mx-2'>
                    <h6 className="font-medium text-gray-400">Solutions</h6>
                    <ul>
                        <li className="py-2 text-sm">Analytics</li>
                        <li className="py-2 text-sm">Marketing</li>
                        <li className="py-2 text-sm">Commerce</li>
                        <li className="py-2 text-sm">Insights</li>
                    </ul>
                </div>
                <div className='mx-2'>
                    <h6 className="font-medium text-gray-400">Solutions</h6>
                    <ul>
                        <li className="py-2 text-sm">Analytics</li>
                        <li className="py-2 text-sm">Marketing</li>
                        <li className="py-2 text-sm">Commerce</li>
                        <li className="py-2 text-sm">Insights</li>
                    </ul>
                </div>
                <div className='mx-2'>
                    <h6 className="font-medium text-gray-400">Solutions</h6>
                    <ul>
                        <li className="py-2 text-sm">Analytics</li>
                        <li className="py-2 text-sm">Marketing</li>
                        <li className="py-2 text-sm">Commerce</li>
                        <li className="py-2 text-sm">Insights</li>
                    </ul>
                </div>
            </div>
        </div>
    
  )
}
