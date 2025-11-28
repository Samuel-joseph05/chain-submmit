import { RiMenu3Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Register from "./Register";



function HomePage() {
 
  const navigate = useNavigate();

 
  const bar = () => {
    navigate("/menubar");
  };
  const about = () => {
    navigate("/about");
  };
  const speakers = () => {
    navigate("/speakers");
  };
  const  Schedule = () => {
    navigate("/schedule");
  };
const Viewschedule =() =>{
  navigate("/schedule");
}
const  Sponsors =() =>{
  navigate("/sponsors")
}

const Register =() =>{
  navigate("/register")
}

  return (
    <div className="pt-5 ">
      <div className="relative text-white">
        <h1 className="md:text-2xl md:pl-10 text-lg ml-4 ">Chain Submmit</h1>
        <div className="absolute top-1 right-3  md:hidden " onClick={bar}>
          <RiMenu3Fill className=" cursor-pointer" size={30} />
        </div>

        <div className="md:flex top-0 right-0  absolute hidden ">
          <p
            className="md:px-5  py-1 cursor-pointer md: hover:bg-gray-400 rounded-2xl   "
            onClick={about}
          >
            About
          </p>
          <p
            className="md:px-5  py-1 cursor-pointer hover:bg-gray-400 rounded-2xl"
            onClick={speakers}
          >
            Speakers
          </p>
          <p className="md:px-5  py-1 cursor-pointer hover:bg-gray-400 rounded-2xl" onClick={Schedule}>
            Schedule
          </p>
          <p className="md:px-5  py-1 cursor-pointer hover:bg-gray-400 rounded-2xl" onClick={ Sponsors}>
            Sponsors
          </p>
          <p className="md:mr-18  py-1 md:px-5 md:cursor-pointer hover:bg-gray-400 rounded-2xl" onClick={Register}>
            Register
          </p>
        </div>
      </div>
      <div className="text-center md:m-30 mt-35 mx-5">
        <h1 className="text-[#5db7fc] md:text-5xl  text-3xl">
          Chain <span className="text-[#eb0bf9]">Submmit</span>
        </h1>
        <p className="text-white md:pt-6 md:text-lg mt-5 ">
          Where Artificial Intelligence Meets Blockchain Innovation
        </p>
        <div className="flex justify-center md:gap-15 gap-12 text-[#5de2e0] text-2xl font-bold md:mt-10 mt-20">
          <p>500</p>
          <p>20</p>
          <p>3</p>
          <p>56</p>
        </div>
        <div className="flex justify-center md:gap-7 gap-4 text-amber-50 font-light md:mt-5">
          <p>Attendess</p>
          <p>Speakers</p>
          <p>Days</p>
          <p>Sponsors</p>
        </div>
        <div className="flex justify-center md:gap-7 gap-4 text-[#5de2e0]  md:mt-12 mt-15 ml-3 mr-3 text-2xl font-bold ">
          <p className="bg-[#1f1e23] w-20 h-20 rounded-lg  pt-2 hover:shadow-lg shadow-blue-400">
            372
            <br />
            <span className="text-gray-300 text-sm font-light md:pt-5">
              Days
            </span>
          </p>

          <p className="bg-[#1f1e23] w-20 h-20 rounded-lg pt-2  hover:shadow-lg shadow-blue-400">
            09
            <br />
            <span className="text-gray-300 text-sm font-light md:pt-5">
              Hours
            </span>
          </p>
          <p className="bg-[#1f1e23] w-20 h-20 rounded-lg pt-2  hover:shadow-lg shadow-blue-400">
            32
            <br />
            <span className="text-gray-300 text-sm font-light md:pt-5">
              Minutes
            </span>
          </p>
          <p className="bg-[#1f1e23] w-20 h-20 rounded-lg pt-2  hover:shadow-lg shadow-blue-400">
            00
            <br />
            <span className="text-gray-300 text-sm font-light md:pt-5">
              Seconds
            </span>
          </p>
        </div>
      </div>
      <div className=" flex justify-center mt-20 gap-20 md:gap-50">
        <button className="px-3 py-2  bg-linear-to-r from-[#50d8fe] to-[#6764f3]  rounded-3xl text-sm">
          Learn More{" "}
        </button>

        <button className="border-2 border-solid border-[#3a9994] rounded-3xl text-white  text-sm md:px-4 px-3 py-2  hover:shadow shadow-blue-400" onClick={Viewschedule}>
          View Schedule
        </button>
      </div>
    </div>
  );
}

export default HomePage;
