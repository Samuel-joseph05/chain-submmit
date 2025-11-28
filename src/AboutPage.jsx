import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function AboutPage() {
    const navigate = useNavigate();
     
    const back = () => {
    navigate("/");
  };

  return (
    <div>
   
      <div className="relative select-none">
              <button
              className=" bg-linear-to-r from-[#50d8fe] to-[#6764f3]  rounded-2xl text-sm mt-5 mb-5 ml-5 px-5 absolute cursor-pointer"
              onClick={back} >
              <IoIosArrowRoundBack size={35} strokeWidth={5} className="text-black"/>
            </button>
        <h1 className="text-[#62b4f6] md:text-4xl font-bold md:p-5  md:mb-5  text-center">
          About Chain Summbit
        </h1>
      </div>{" "}
      <div className="flex pl-5 ">
        <div className="h-110 w-1.5 bg-linear-to-r from-blue-500 to-purple-600 rounded-2xl"></div>
        <div className="text-white pl-10 pt-4 text-lg">
          <p>
            Join the world's leading experts in Al and blockchain technology for{" "}
            <br />
            three days of cutting-edge presentations, hands-on workshops, and{" "}
            <br />
            networking opportunities that will shape the future of technology.
            <br />
            <br />
            Discover the latest breakthroughs in neural networks, machine
            <br />
            learning, decentralized systems, and smart contracts. Connect with{" "}
            <br />
            innovators who are transforming industries and creating tomorrow's{" "}
            <br />
            solutions.
            <br />
            <br />
            From ambitious startups to Fortune 500 companies, Chain Summit
            <br /> brings together the brightest minds to explore the
            revolutionary <br /> intersection of artificial intelligence and
            blockchain technology.
            <br />
            <br />
            Take control of your time with
            <span className="text-[#3c257b]"> TimerMo</span> today. Bring your
            designs to <br /> life with{" "}
            <span className="text-[#3c257b]"> VectorSticker</span> resources
          </p>{" "}
          <br />
          <br />
        </div>
      </div>
      <div className="md:grid md:grid-cols-3 md:gap-10 md:absolute md:top-40 md:right-60">
        <div
          class="w-8 h-8 md:p-10 
 flex items-center justify-center text-black text-xs font-bold
         bg-linear-to-r from-[#5b7df6] to-[#50ccfa]
         [clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)]"
        >
          <span className="rotate-120 text-2xl">AI</span>
        </div>
        <div
          class="w-8 h-8 md:p-10
 flex items-center justify-center text-black text-xs font-bold
         bg-linear-to-r from-[#5b7df6] to-[#50ccfa]
         [clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)]"
        >
          <span className=" text-2xl">ML</span>
        </div>
        <div
          class="w-8 h-8 md:p-10 
 flex items-center justify-center text-black text-xs font-bold
         bg-linear-to-r from-[#5b7df6] to-[#50ccfa]
         [clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)]"
        >
          <span className="rotate-150 text-2xl">DL</span>
        </div>
        <div
          class="w-8 h-8 md:p-10
 flex items-center justify-center text-black text-xs font-bold
         bg-linear-to-r from-[#5b7df6] to-[#50ccfa]
         [clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)]"
        >
          <span className=" text-2xl">BC</span>
        </div>
        <div
          class="w-8 h-8 md:p-10
 flex items-center justify-center text-black text-xs font-bold
         bg-linear-to-r from-[#5b7df6] to-[#50ccfa]
         [clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)]"
        >
          <span className="rotate-120 text-2xl">SC</span>
        </div>
        <div
          class="w-8 h-8 md:p-10
 flex items-center justify-center text-black text-xs font-bold
         bg-linear-to-r from-[#5b7df6] to-[#50ccfa]
         [clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)]"
        >
          <span className=" text-2xl">DA</span>
        </div>
        <div
          class="w-8 h-8 md:p-10
 flex items-center justify-center text-black text-xs font-bold
         bg-linear-to-r from-[#5b7df6] to-[#50ccfa]
         [clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)]"
        >
          <span className="rotate-120 text-2xl">IOT</span>
        </div>

        <div
          class="w-8 h-8 md:p-10
 flex items-center justify-center text-black text-xs font-bold
         bg-linear-to-r from-[#5b7df6] to-[#50ccfa]
         [clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)]"
        >
          <span className="text-2xl">5G</span>
        </div>
        <div
          class="w-8 h-8 md:p-10
 flex items-center justify-center text-black text-xs font-bold
         bg-linear-to-r from-[#5b7df6] to-[#50ccfa]
         [clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)]"
        >
          <span className="rotate-120 text-2xl">QC</span>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2  md:place-items-center  text-[#5de2e0] gap-10 mb-10   text-2xl font-bold ">
        <p className="bg-[#1f1e23] w-120 h-25 rounded-2xl md:pt-4  text-center  hover:shadow-sm shadow-blue-400 md:ml-70">
          50+ <br />
          <span className="text-gray-300 text-sm font-light">
            Industry leaders
          </span>
        </p>

        <p className="bg-[#1f1e23]  w-120 h-25 rounded-2xl md:pt-4  text-center  hover:shadow-sm shadow-blue-400 md:mr-70">
          500+
          <br />
          <span className="text-gray-300 text-sm font-light">
            Attendees Expected
          </span>
        </p>
        <p className="bg-[#1f1e23] w-120 h-25 rounded-2xl md:pt-4   text-center hover:shadow-sm shadow-blue-400 md:ml-70 ">
          25+ <br />
          <span className="text-gray-300 text-sm font-light">
            Tech Companies
          </span>
        </p>
        <p className="bg-[#1f1e23]  w-120 h-25 rounded-2xl md:pt-4 text-center   hover:shadow-sm shadow-blue-400 md:mr-70">
          3<br />
          <span className="text-gray-300 text-sm   font-light">
            Days Innovation
          </span>
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
