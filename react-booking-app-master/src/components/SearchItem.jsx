
const SearchItem = () => {
  return (
    <div className="flex justify-center w-full border-2 border-gray-200 p-4 ">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="ml-6 mt-20 xl:mt-0 xl:ml-0 w-[200px] h-[220px] xl:h-[100%] xl:w-[370px] mr-20"
      
      />
      <div className="flex flex-col  text-left ml-3 text-md">
        <h1 className="text-2xl font-semibold text-blue-600 ">Tower Street Apartments</h1>
        
        <span className="xl:mt-3 xl:mb-2">500m from center</span>
        <span className="w-[124px] rounded-md bg-green-600 text-white p-1 xl:mb-2 ">Free airport taxi</span>
        <span className="font-bold text-md xl:mb-2">
          Studio Apartment with Air conditioning
        </span>
        <span className="font-semibold xl:mb-2">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="font-bold text-green-600 xl:mb-2">Free cancellation </span>
        <span className=" text-green-600 xl:mb-2">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="flex flex-col items-center gap-16 ml-4">
        <div className="flex items-center justify-center">
          <span className="text-md font-semibold mr-2">Excellent</span>
          <button className="text-white bg-blue-900 p-1 rounded-md">8.9</button>
        </div>
        <div className="flex flex-col">
          <span className="text-3xl font-semibold">$112</span>
          <span className="text-lg text-gray-700">Includes taxes and fees</span>
          <button className="btn bg-blue-700 text-white">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
