// import photo from '../assets/photo.png';
import { FaUserLarge } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa";

export const Cards = () => {
  return (
    <div className="w-full py-[1rem] px-4 bg-white">
        <div className="grid max-w-[1240px] mx-auto md:grid-cols-3 gap-8">
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <FaUserLarge color="green" size={50} className="mt-[-3rem] mx-auto"/>
                <h1 className="text-center text-2xl font-bold py-8">Single User</h1>
                <p className="text-center text-4xl font-bold ">$149</p>
                <div className="text-center font-medium">
                    <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
                    <p className="py-2 border-b mx-8">Granted User</p>
                    <p className="py-2 border-b mx-8">Send up to 2 GB</p>
                </div>
                <button className="rounded-md font-medium bg-black text-green-500 my-6 mx-auto px-6 py-3 w-[200px]">
                    Start Trial
                </button>
            </div>
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <FaUserGroup color="green" size={50} className="mt-[-3rem] mx-auto"/>
                <h1 className="text-center text-2xl font-bold py-8">Two User</h1>
                <p className="text-center text-4xl font-bold ">$249</p>
                <div className="text-center font-medium">
                    <p className="py-2 border-b mx-8 mt-8">1K GB Storage</p>
                    <p className="py-2 border-b mx-8">Granted User</p>
                    <p className="py-2 border-b mx-8">Send up to 5 GB</p>
                </div>
                <button className="rounded-md font-medium bg-black text-green-500 my-6 mx-auto px-6 py-3 w-[200px]">
                    Start Trial
                </button>
            </div>
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <FaUserPlus color="green" size={50} className="mt-[-3rem] mx-auto"/>
                <h1 className="text-center text-2xl font-bold py-8">Multiple User</h1>
                <p className="text-center text-4xl font-bold ">$549</p>
                <div className="text-center font-medium">
                    <p className="py-2 border-b mx-8 mt-8">10K GB Storage</p>
                    <p className="py-2 border-b mx-8">Granted User</p>
                    <p className="py-2 border-b mx-8">Send up to 1K GB</p>
                </div>
                <button className="rounded-md font-medium bg-black text-green-500 my-6 mx-auto px-6 py-3 w-[200px]">
                    Start Trial
                </button>
            </div>
        </div>
    </div>
  )
}

