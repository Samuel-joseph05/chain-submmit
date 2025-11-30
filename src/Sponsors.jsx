import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Sponsors() {
  const navigate = useNavigate("");

  const back = () => {
    navigate("/");
  };

  return (
    <div className=" select-none">
      <button
        className=" bg-linear-to-r from-[#50d8fe] to-[#6764f3]  rounded-2xl text-sm mt-3 mb-5 ml-5 md:px-5 px-2   cursor-pointer"
        onClick={back}
      >
        <IoIosArrowRoundBack size={35} strokeWidth={5} className="text-black" />
      </button>
      <div className="text-center mb-10 ">
        <h1 className="text-[#62b4f6] text-3xl md:text-4xl">
          Our <span className="text-[#7757d1]">Sponsors</span>
        </h1>
      </div>
      <div className="bg-[#121f27] w-auto h-245 md:h-165 mx-5 my-6  md:m-5 rounded-2xl ">
        <div>
          <h1 className="text-[#dde3e8] text-center  font-bold p-3 md:text-2xl mb-5">
            Platinum Partners
          </h1>
          <div className=" w-auto  h-60 md:h-50 md:mx-155 mx-12 bg-[#253036] border-2 border-solid border-[#393e48] rounded-2xl">
            <div className="w-auto h-30 mx-10 mt-7 bg-[#fbfbfb] text-black text-2xl shadow-md shadow-[#fbfbfb] place-content-center text-center rounded-2xl font-bold">
              TC
            </div>
            <div>
              <h3 className="text-center text-[#dde3e8] font-medium mt-4">
                Techcorp Global
              </h3>
              <p className=" text-center text-gray-400 font-light mt-3">
                {" "}
                Leading Information AI
              </p>
            </div>
          </div>
          <div className="text-center md:p-5 p-7 mt-10">
            <h1 className="text-[#e38e02] md:text-2xl font-bold">
              Gold Sponsors
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-3">
            <div className=" w-auto  h-60 md:h-60 md:w-70  md:mx-50 mx-12 bg-[#253036] border-2 border-solid border-[#393e48] rounded-2xl">
              <div className="w-auto h-30 mx-10 mt-7 bg-[#e38e02] text-black text-2xl shadow-lg shadow-amber-600 place-content-center text-center rounded-2xl font-bold">
                DM
              </div>
              <div>
                <h3 className="text-center text-[#dde3e8] font-medium mt-4">
                  DataMind
                </h3>
                <p className=" text-center text-gray-400 font-light mt-3">
                  {" "}
                  Leading Information AI
                </p>
              </div>
            </div>
            <div className=" w-auto  h-60 md:h-60 md:w-70 md:mx-50 mx-12  bg-[#253036] border-2 border-solid border-[#393e48] rounded-2xl">
              <div className="w-auto h-30 mx-10 mt-7 bg-[#e38e02] text-black text-2xl shadow-lg shadow-amber-600 place-content-center text-center rounded-2xl font-bold">
                CL
              </div>
              <div>
                <h3 className="text-center text-[#dde3e8] font-medium mt-4">
                  CryptoLabs
                </h3>
                <p className=" text-center text-gray-400 font-light mt-3 ">
                  {" "}
                  Leading Information AI
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
