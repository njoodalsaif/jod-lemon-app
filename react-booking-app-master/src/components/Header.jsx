import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed, faCalendar, faCarAlt, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import { DateRange } from "react-date-range"
import { format } from "date-fns"
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 
import { useNavigate } from "react-router-dom"


const Header = ({type}) => {

    const navigate = useNavigate()
  
    const [date,setDate]= useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
          }
    ])

    const [open,setOpen] = useState(false)
    const [isOpen,setIsOpen] = useState(false)
    const [dist,setDist] = useState("")
    const [openOption,setOpenOption] = useState(false)
    const [option,setOption] = useState({
        adult:1,
        children:0,
        room:1
    })

    const handleOption = (name , op)=>{
     setOption((prev)=>{
        return{
            ...prev,
            [name]:op ==='i' ? option[name]+1 : option[name] -1
        }
     })
    }

    const handleNav=()=>{
     navigate('/hotel', {state:{dist,date, option}})
    }

  return (
    <div className="bg-blue-800 relative  xl:px-[8rem] ">
        <div className={`text-small flex items-center justify-between text-gray-200  text-2xl py-3 px-6 ${type ==='hotel'? 'hotel':''}`}>
            <div className=" border-gray-200 border-2 py-2 px-3 rounded-3xl ">
               <FontAwesomeIcon icon={faBed}/>
               <span className="ml-2">Stays</span>
            </div>
            <div className="">
               <FontAwesomeIcon icon={faPlane}/>
               <span className="ml-2">Flights</span>
            </div>
            <div className="">
               <FontAwesomeIcon icon={faCarAlt}/>
               <span className="ml-2" >Car rentals</span>
            </div>
            <div className="">
               <FontAwesomeIcon icon={faTaxi}/>
               <span className="ml-2">Airport taxis</span>
            </div>
            <div className="">
               <FontAwesomeIcon icon={faBed}/>
               <span className="ml-2">Attraction</span>
            </div>
            <div className="">
               <FontAwesomeIcon icon={faBed}/>
               <span className="ml-2">Attraction</span>
            </div>
        </div>
      {type !== 'hotel' && <>
        <div className="text-gray-200 text-left  px-6 mt-6 pb-[6rem]">
            <h1 className="text-3xl md:text-4xl xl:text-5xl">Our Premium Offer... is Amazing</h1>
            <p className="text-lg my-4 text-secondary-color">Get big discount every time you travel, once you subscribe our premium offer lifetime</p>
            <button className="btn transtiton duration-200  btn-small">Sign in / Register</button>
        </div>

        <div className="flex  items-center justify-between border-4 border-yellow-500 bg-white text-gray-600  text-sm md:text-md lg:text-lg max-w-[80%] absolute w-full py-2 px-4 rounded-md bottom-[-30px] small ">
            <div className="">
               <FontAwesomeIcon icon={faPlane}/>
               <input type="text"
                placeholder="Where are you going?" 
                value={dist}
                onChange={e => setDist(e.target.value)}
                className="border-2 py-1 px-3 rounded-2xl outline-none border-gray-300 ml-2" />
            </div>
            <div className="relative">
               <FontAwesomeIcon className="cursor-pointer" icon={faCalendar}  onClick={()=>setOpen(!open)}/>
               <span className="ml-2 transition-transform cursor-pointer"  onClick={()=>setOpen(!open)}>{`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")}`}</span>
               {open && 
               <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    minDate={new Date()}
                    className=" absolute shadow-md top-16 right-[-60px] shadow-md z-50"
               />
            }
            </div>
            <div className="">
               <FontAwesomeIcon className="cursor-pointer" icon={faPerson} onClick={()=>setIsOpen(!isOpen)}/>
               <span className="ml-2 relative cursor-pointer" onClick={()=>setIsOpen(!isOpen)}>{`${option.adult} Adult | ${option.children} Childeren | ${option.room} Room`}</span>
            
            {isOpen && 
            
               <div className="flex top-[5rem] items-center flex-col w-64  right-12 xl:right-52  absolute border border-2 border-gray300 shadow-md py-3 bg-white z-50">
                <div className="flex items-center mb-2 gap-8 ">
                    <span className="">Adult</span>
                    <div className="flex items-center text-lg gap-4 xl:gap-6">
                        <button className="btn-range" onClick={()=>handleOption("adult","i")}>+</button>
                        <span>{option.adult}</span>
                        <button disabled={option.adult <=1} className="btn-range" onClick={()=>handleOption("adult","d")}>-</button>
                    </div>
                </div>
                <div className="flex items-center mb-2 gap-3">
                    <span className="">Children</span>
                    <div className="flex items-center text-lg gap-4 xl:gap-6">
                    <button className="btn-range" onClick={()=>handleOption("children","i")}>+</button>
                    <span>{option.children}</span>
                    <button disabled={option.children <=0} className="btn-range" onClick={()=>handleOption("children","d")}> -</button>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                    <span className="">Room</span>
                    <div className="flex items-center text-lg gap-4 xl:gap-6">
                    <button className="btn-range" onClick={()=>handleOption("room","i")}>+</button>
                    <span>{option.room}</span>
                    <button disabled={option.room <=1} className='btn-range' onClick={()=>handleOption("room","d")}>-</button>
                </div>
                </div>
               </div>
            }
            </div>
            <div className="">
                <button className="transtiton duration-200  hover:scale-[0.99] hover:bg-blue-500 bg-blue-600 text-gray-200 py-2 px-4 text-lg rounded-xl ml-3"
                onClick={handleNav}
                >Search</button>
            </div>

        </div>

     </>}
    </div>
  )
}

export default Header