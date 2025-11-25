import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const days = [
  {
    name: "Day 1",
    time: "09:00-09:30",
     subject:"Conference Team",
    content: `
Registration & Welcome
`.trim(),
  },
  {
    name: "Day 2",
      time: "10:00-10:30",
      subject:"Dr. Samuel Joseph",
    content: `
Openning keynote`.trim(),

  },
  {
    name: "Day 3",
      time: "11:00-11:30",
       subject:"Dr. Robert Immauel",
    content: `
Blockchain Fundamentals`.trim(),
  },
];
    

function Schedule() {
      const navigate = useNavigate();
  const [activeDay, setActiveDay] = useState(0);
  const currentDay = days[activeDay];

  const back = () => {
    navigate("/");
  };

  return (
    <div>
        <button
              className=" bg-linear-to-r from-[#50d8fe] to-[#6764f3]  rounded-2xl text-sm mt-3 mb-5 ml-5 md:px-5 px-2   cursor-pointer"
              onClick={back} >
              <IoIosArrowRoundBack size={35} strokeWidth={5} className="text-black"/>
            </button>
      <h1 className="text-[#62b4f6] md:text-4xl text-lg text-center pt-2 font-bold ">
        Conference Schedule
      </h1>

      <div className="text-white flex justify-center gap-6 md:gap-10 mt-10">
        {days.map((day, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-2xl cursor-pointer transition-colors duration-300 text-sm ${
              activeDay === index
                ? "bg-linear-to-r from-cyan-500 to-blue-500 text-black"
                : "bg-[#151519] text-gray-500"
            }`}
            onClick={() => setActiveDay(index)}
          >
            {day.name}
          </button>
        ))}
      </div>

      <div className=" flex md:gap-20  md:w-170 w-80  md:ml-100 ml-3  mt-20   md:p-5   py-2 px-4 bg-[#1a1a1e] rounded-2xl  text-sm">
 <p className="border-2 border-solid border-[#3a9994]  bg-[#223136] rounded-lg text-white  text-sm md:px-4 px-3 py-2   hover:shadow shadow-blue-400">
            {currentDay.time}
          </p>
        <p className="text-gray-300 md:text-lg text-center text-sm ">
         {" "}
          {currentDay.content}
          {}
        </p>
        <p className="text-[#62b4f6]">{currentDay.subject}</p>
      </div>
    </div>
  );
}

export default Schedule;
