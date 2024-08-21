
export const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
        <div className="mx-auto grid lg:grid-cols-3 max-w-[1240px]">
            <div className="my-4 lg:col-span-2">
                <h1 className="text-2xl font-bold sm:text-3xl py-2 md:text-4xl">
                    Want tips & tricks to optmize your flow?
                    </h1> 
                    <p>Sign up to our newsletter ans stay up to date.</p>
            </div>
            <div className="my-4">
                <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input type="email" className="p-3 flex w-full rounded-md text-black" placeholder="Enter your email"/>
            <button className="text-black rounded-md font-medium hover:bg-black hover:text-green-500 ml-4 px-6 my-6 py-3 bg-green-500 w-[200px] ">
           Notify Me </button>
            </div>
            <p>
                We care about the protection of your data. Read our {' '}
                <span className="text-green-500 hover:underline">Privacy Policy</span>
            </p>
            </div>
        </div>
    </div>
  )
}
