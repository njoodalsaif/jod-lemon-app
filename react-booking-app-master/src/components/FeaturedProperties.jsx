
const FeaturedProperties = () => {
  return (      
    <div className="flex flex-col xl:flex-row  lg:flex-row  xl:px-[8rem] gap-8 items-center justify-center">
       
      <div className="rounded-xl   w-[460px] xl:w-full  ">
        <div className="featuredItem">
         <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="rounded-xl   w-[460px] xl:w-[100%] xl:h-[280px]  transition duration-[2s] hover:scale-[1.4] cursor-pointer"
          />
          </div>
          <div className="flex flex-col  items center">
          <span className="font-bold text-md">Aparthotel Stare Miasto</span>
          <span className="fpCity text-yellow-800 font-semibold text-lg">Madrid</span>
          <span className="fpPrice font-semibold">Starting from $120</span>
          <div className="fpRating">
            <button className="bg-blue-900 mr-3  py-1 text-white rounded-md px-1">8.9</button>
            <span>Excellent</span>

          </div>
        </div>
      </div>
      <div className="rounded-xl   w-[500px] xl:w-full  ">
        <div className="featuredItem">
         <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
          className="rounded-xl   w-[460px] xl:w-[100%] xl:h-[280px]   transition duration-[2s] hover:scale-[1.4] cursor-pointer"
          />
          </div>
          <div className="flex flex-col  items center">
          <span className="font-bold text-md">Comfort Suites Airport</span>
          <span className="fpCity text-yellow-800 font-semibold text-lg">Austin</span>
          <span className="fpPrice font-semibold">Starting from $140</span>
          <div className="fpRating">
            <button className="bg-blue-900 mr-3  py-1 text-white rounded-md px-1">9.3</button>
            <span>Exceptional</span>

          </div>
        </div>
      </div>
      <div className="rounded-xl   w-[460px] xl:w-full  ">
        <div className="featuredItem">
         <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1"
          alt=""
          className="rounded-xl   w-[460px] xl:w-[100%] xl:h-[280px]  transition duration-[2s] hover:scale-[1.4] cursor-pointer"
          />
          </div>
          <div className="flex flex-col  items center">
          <span className="font-bold text-md">Four Seasons Hotel</span>
          <span className="fpCity text-yellow-800 font-semibold text-lg">Lisbon</span>
          <span className="fpPrice font-semibold">Starting from $99</span>
          <div className="fpRating">
            <button className="bg-blue-900 mr-3  py-1 text-white rounded-md px-1">8.8</button>
            <span>Excellent</span>

          </div>
        </div>
      </div>
      <div className="rounded-xl   w-[460px] xl:w-full  ">
        <div className="featuredItem">
         <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
          alt=""
          className="rounded-xl  w-[460px] xl:w-[100%] xl:h-[280px] transition duration-[2s] hover:scale-[1.4] cursor-pointer"
          />
          </div>
          <div className="flex flex-col  items center">
          <span className="font-bold text-md">Hilton Garden Inn</span>
          <span className="fpCity text-yellow-800 font-semibold text-lg">Berlin</span>
          <span className="fpPrice font-semibold">Starting from $105</span>
          <div className="fpRating">
            <button className="bg-blue-900 mr-3  py-1 text-white rounded-md px-1">8.9</button>
            <span>Excellent</span>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
