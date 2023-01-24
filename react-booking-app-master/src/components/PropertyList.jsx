
const PropertyList = () => {
  return (
    <div className=" flex items-center justify-between gap-1 xl:gap-6 text-semibold text-sm ">
      <div className=" drop-shadow-lg ">
        <img
          src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
          alt=""
          className=" w-[300px] h-[130px] xl:w-[450px] xl:h-[260px] cursor-pointer  hover:brightness-90  rounded-lg"
        />
        <div >
          <h1 className="font-bold text-md xl:text-2xl xl:text-bold">Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className=" drop-shadow-lg">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
          alt=""
          className=" w-[300px] h-[130px] xl:w-[450px] xl:h-[260px] cursor-pointer  hover:brightness-90  rounded-lg"
        />
        <div >
          <h1 className="font-bold text-md xl:text-2xl xl:text-bold" >Apartments</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
      <div className=" drop-shadow-lg">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
          alt=""
          className=" w-[300px] h-[130px] xl:w-[450px] xl:h-[260px] cursor-pointer  hover:brightness-90  rounded-lg"
        />
        <div >
         <h1 className="font-bold text-md xl:text-2xl xl:text-bold">Resorts</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
      <div className=" drop-shadow-lg">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
          alt=""
          className=" w-[300px] h-[130px] xl:w-[450px] xl:h-[260px] cursor-pointer  hover:brightness-90  rounded-lg"
        />
        <div >
          <h1 className="font-bold text-md xl:text-2xl xl:text-bold">Villas</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
      <div className=" drop-shadow-lg">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
          alt=""
          className=" w-[300px] h-[130px] xl:w-[450px] xl:h-[260px] cursor-pointer  hover:brightness-90  rounded-lg"
        />
        <div >
          <h1 className="font-bold text-md xl:text-2xl xl:text-bold">Cabins</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
