import Navbar from "../components/Navbar";
import Header from "../components/Header";
import MailList from "../components/MailList";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <div className="mt-12 p-3 xl:px-[8rem]">
        {open && (
          <div className="absolute z-10 ">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="absolute  text-gray-200  text-5xl z-20"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="absolute text-gray-200 left-[0px] text-5xl top-[50%] z-20"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt=""
               className="relative sticky" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="absolute text-gray-200 right-[0px] top-[50%] text-5xl z-20"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="flex  flex-col items-start gap-2 justify-center">
          <div className="flex items-center justify-center gap-24">
          <h1 className="text-2xl  xl:text-5xl   font-semibold">Tower Street Apartments</h1>
          <button className="btn bg-blue-700 text-white px-3 xl:px-6 ">Reserve or Book Now!</button>
          </div>
          <div className="flex items-center justify-center gap-6 text-lg">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </div>
          <span className="text-xl text-blue-500 font-semibold">
            Excellent location – 500m from center
          </span>
          <span className="text-xl text-green-500 font-semibold">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="flex flex-col xl:grid xl:grid-cols-3 itmes-center justify-center gap-3">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="relative"
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3  justify-center mt-6">
            <div className="col-span-2 xl:mr-12">
              <h1 className="text-3xl font-semibold mb-2 ">Stay in the heart of City</h1>
              <p className="text-justify mr-2 xl:text-lg">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </div>
            <div className="px-1 py-2 bg-blue-300 rounded-md">
              <h1 className="text-lg text-gray-700 mb-3 xl:text-2xl">Perfect for a 9-night stay!</h1>
              <span className="xl:text-lg">
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2  className="text-2xl text-gray-700 my-4">
                <b>$945</b> (9 nights)
              </h2>
              <button className="btn bg-blue-700 text-white px-2">Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
