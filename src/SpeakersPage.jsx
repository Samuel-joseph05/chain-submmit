import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function SpeakersPage() {
  const navigate = useNavigate();

  const back = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="relative top-0">
        <button
          className=" bg-linear-to-r from-[#50d8fe] to-[#6764f3]  rounded-lg  mt-4  ml-4 px-1 py-0 absolute cursor-pointer"
          onClick={back}
        >
          <IoIosArrowRoundBack
            size={35}
            strokeWidth={5}
            className="text-black"
          />
        </button>
      </div>
      <div className="text-center pt-20 md:p-10 ">
        <h1 className="text-[#62b4f6] text-2xl md:text-4xl font-bold ">
          Featured Speakers
        </h1>
      </div>
      <div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 md:gap-10 place-items-center mt-10 mb-20 md:mx-60  ">
          <div className="bg-[#17161b] w-67 h-67  p-5 rounded-2xl place-items-center">
            <div className=" bg-linear-to-r from-[#5b7df6] to-[#c23ffb] w-20 h-20 rounded-full text-center p-6 font-medium place-items-center md:text-2xl ">
              DR
            </div>
            <div className="text-center">
              <h1 className="text-white pt-3 font-bold">Dr.Samuel Joseph</h1>
              <p className="text-[#4e968d]  text-sm pt-2">
                Chief Al Officer, TechCorp
              </p>
              <p className=" text-[#434347] text-sm pt-3">
                Leading researcher in deep warning and neural networks Author of
                40+ Al research papers
              </p>
            </div>
          </div>

          <div className="bg-[#17161b] w-67 h-67 p-5 rounded-2xl place-items-center">
            <div className=" bg-linear-to-r from-[#5b7df6] to-[#c23ffb] w-20 h-20 rounded-full text-center p-6 font-medium place-items-center md:text-2xl ">
              MJ
            </div>
            <div className="text-center">
              <h1 className="text-white font-bold pt-3">Dr.Ebenezer Joseph</h1>
              <p className="text-[#4e968d]  text-sm pt-2">
                Blockchain Architect, Cryptolabs
              </p>
              <p className=" text-[#434347] text-sm pt-4">
                {" "}
                Proneer in decentralized systems and smrt contract development
                for Fortune 500 Companies
              </p>
            </div>
          </div>

          <div className="bg-[#17161b] w-67 h-67   p-5 rounded-2xl place-items-center">
            <div className=" bg-linear-to-r from-[#5b7df6] to-[#c23ffb] w-20 h-20 rounded-full text-center p-6 font-medium  place-items-center md:text-2xl ">
              LP
            </div>
            <div className="text-center">
              <h1 className="text-white font-bold pt-3">Dr.Josephine Joseph</h1>
              <p className="text-[#4e968d]  text-sm pt-2">
                ML. Research Director, DataMind
              </p>
              <p className=" text-[#434347] text-sm pt-4">
                Expert in machine learning monttams and Al ethics Former lead
                sentit at major tech cochpunees
              </p>
            </div>
          </div>

          <div className="bg-[#17161b] w-67 h-67   p-5 rounded-2xl place-items-center">
            <div className=" bg-linear-to-r from-[#5b7df6] to-[#c23ffb] w-20 h-20 rounded-full text-center p-6  font-medium place-items-center md:text-2xl">
              AR
            </div>
            <div className="text-center">
              <h1 className="text-white font-bold pt-3">Dr.Joseph</h1>
              <p className="text-[#4e968d]  text-sm pt-2">
                Founder, Neural Networks Inc
              </p>
              <p className=" text-[#434347] text-sm pt-4">
                Entrepreneur in Al powered blockchain applications and scalable
                M inamuda
              </p>
            </div>
          </div>

          <div className="bg-[#17161b] w-67 h-67   p-5  rounded-2xl place-items-center mb:5">
            <div className=" bg-linear-to-r from-[#5b7df6] to-[#c23ffb] w-20 h-20 rounded-full text-center p-6 font-medium place-items-center md:text-2xl">
              JW
            </div>
            <div className="text-center">
              <h1 className="text-white font-bold pt-3">Dr.Joys Joseph</h1>
              <p className="text-[#4e968d]  text-sm pt-2">
                VP of Innovation, Quantum Tech
              </p>
              <p className=" text-[#434347] text-sm pt-4">
                Specializes in quantex computing application for Al and
                tryptography solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpeakersPage;
