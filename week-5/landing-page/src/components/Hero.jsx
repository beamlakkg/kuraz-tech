import {ReactTyped} from 'react-typed';

export const Hero = () => {
  return (
    <div className="text-wihte">
      <div className="h-screen text-white w-full mx-auto text-center max-w-[800px] mt-[-96px] flex flex-col justify-center">
        <p className="text-green-400 font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="  text-4xl font-bold py-4 md:text-7xl md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible financing for
          </p>
           <ReactTyped
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['BTB', 'BTC', 'SASS']}
            typeSpeed={120}
            backSpeed={140}
            loop
          /> 
        </div>
        <p className="text-xl md:text-2xl font-bold text-gray-500">
            Monitor your data analytics to increase revenue
        </p>
        <button className="rounded-md hover:bg-black hover:text-green-500 font-medium my-6 bg-green-500 mx-auto py-3 w-[200px] text-black ">Get Started</button>
      </div>
    </div>
  );
};

