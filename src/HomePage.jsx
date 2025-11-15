import { RiMenu3Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
function HomePage() {
  const navigate = useNavigate();

const bar = () =>{
     navigate("/menubar")
}



  return (
   <div className="pt-5 ">
        <div className="relative text-white">
          <h1 className="md:text-2xl md:pl-10 text-lg ml-4 ">Chain Submmit</h1>
        <div className="absolute top-1 right-3  md:hidden " onClick={bar}>
           <RiMenu3Fill className=" cursor-pointer" size={30}/>
           </div> 
        
          <div className="md:flex top-0 right-0  absolute hidden ">
            <p className="md:px-5  py-1 cursor-pointer md: hover:bg-gray-400 rounded-2xl   ">
              About
            </p>
            <p className="md:px-5  py-1 cursor-pointer hover:bg-gray-400 rounded-2xl">
              Speakers
            </p>
            <p className="md:px-5  py-1 cursor-pointer hover:bg-gray-400 rounded-2xl">
              Schedule
            </p>
            <p className="md:px-5  py-1 cursor-pointer hover:bg-gray-400 rounded-2xl">
              Sponsors
            </p>
            <p className="md:mr-18  py-1 md:px-5 md:cursor-pointer hover:bg-gray-400 rounded-2xl">
              Register
            </p>
          </div>
        </div>
        <div className="text-center md:mt-40 mt-35 mx-5">
          <h1 className="text-[#5db7fc] md:text-5xl  text-3xl">
            Chain <span className="text-[#eb0bf9]">Submmit</span>
          </h1>
          <p className="text-white md:pt-6 md:text-lg mt-4 ">
            Where Artificial Intelligence Meets Blockchain Innovation
          </p>
        </div>
      </div>
  )
}

export default HomePage
