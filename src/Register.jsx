import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const back = () => {
    navigate("/");
  };
  const showpassword = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <div>
      <div className="absolute top-5 left-5 ">
        <button
          className=" bg-linear-to-r from-[#50d8fe] to-[#6764f3]  rounded-2xl text-sm md:px-4 px-2   cursor-pointer"
          onClick={back}
        >
          <IoIosArrowRoundBack
            size={35}
            strokeWidth={5}
            className="text-black"
          />
        </button>
      </div>
      <div className="flex  justify-center  relative mx-10  my-20">
        <div className="text-2xl border-2 border-solid border-[#3a9994] bg-[#252b37] shadow-lg shadow-[#3a9994] rounded-2xl ">
          <div className=" select-none  pt-5 pb-10 px-4.5 md:px-12">
            <h1 className="text-[#3a9994] text-center font-medium text-3xl pb-10">
              Register
            </h1>
            <form className=" flex flex-col gap-10 ">
              <div className="flex flex-col text-white px-3">
                <label htmlFor="name" className="text-[#3a9994]">
                  Name :
                </label>
                <input
                  type="text"
                  placeholder="samuel"
                  className="p-2 rounded bg-transparent border-b border-[#3a9994] outline-none text-white text-lg"
                />
              </div>
              <div className="flex flex-col text-white px-3 md:w-100">
                <label htmlFor="email" className="text-[#3a9994]">
                  Email :
                </label>
                <input
                  type="email"
                  placeholder="samu@gmail.com"
                  className="p-2 rounded bg-transparent border-b border-[#3a9994] outline-none text-white text-lg"
                />
              </div>
              <div className="flex flex-col text-white px-3">
                <label htmlFor="password" className="text-[#3a9994]">
                  Password
                </label>
                <div
                  className="absolute top-94 md:left-220 right-7 z-20 cursor-pointer "
                  onClick={showpassword}
                >
                  {" "}
                  {showPassword ?  <FaEye /> : <FaEyeSlash />}
                </div>

                <input
                  type={showPassword ? "text":"password"}
                  placeholder="12345678😅"
                  className=" relative p-2 rounded bg-transparent border-b border-[#3a9994] outline-none text-white text-lg"
                />
              </div>
              <div className="flex flex-col text-white px-3  ">
                <label htmlFor="number" className="text-[#3a9994]">
                  {" "}
                  Phone :
                </label>
                <input
                  type="number"
                  placeholder="9876543210 "
                  className="p-2 rounded bg-transparent border-b border-[#3a9994] outline-none text-white text-lg"
                />{" "}
                <span></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
