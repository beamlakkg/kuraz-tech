import photo from "../assets/photo.png";
export const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="mx-auto grid max-w-[1240px] md:grid-cols-2">
        <img src={photo} alt="/" className="my-4 mx-auto w-[500px]" />
        <div className="flex flex-col justify-center">
          <p className="font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="font-bold text-2xl py-2 md:text-4xl sm:text-3xl">
            Management Data Analytics
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            esse eveniet omnis voluptates eaque ab dolorum vero! Est aspernatur
            maxime, voluptates ratione, quis optio officiis iusto similique iure
            dignissimos quibusdam?
          </p>
          <div className="justify-center">
          <button className="bg-black text-green-500 hover:bg-green-500 hover:text-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 ">
            Get Started
          </button></div>
        </div>
      </div>
    </div>
  );
};

