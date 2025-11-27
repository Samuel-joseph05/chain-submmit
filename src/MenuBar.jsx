import { FaXmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function MenuBar() {
  const navigate = useNavigate();

  const closebar = () => {
    window.history.back();
  };
  const about = () => {
    navigate("/about");
  };
  const speakers = () => {
    navigate("/speakers");
  };
  const schedule = () => {
    navigate("/schedule");
  };
  const sponsors = () => {
    navigate("/sponsors");
  };

  return (
    <div className="  text-white md:hidden ">
      <div className=" relative ml-85 sm:ml-180  mt-5">
        <FaXmark size={30} onClick={closebar} />
      </div>
      <div className="absolute top-20 right-40 sm:right-70 sm:top-30 text-3xl">
        <p className="mb-4  sm:" onClick={about}>
          {" "}
          About
        </p>
        <p className="mb-4 " onClick={speakers}>
          {" "}
          Speakers
        </p>
        <p className="mb-4 " onClick={schedule}>
          {" "}
          Schedule
        </p>
        <p className="mb-4 " onClick={sponsors}>
          {" "}
          Sponsors
        </p>
        <p className=""> Register</p>
      </div>
    </div>
  );
}

export default MenuBar;
