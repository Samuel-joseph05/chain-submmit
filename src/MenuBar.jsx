import { FaXmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


function MenuBar() {

  const navigate = useNavigate();

  const closebar = () => {
    window.history.back();
  };
  const about =() =>{
     navigate("/about");
  }
    const speakers = () => {
    navigate("/speakers");
  };
  
  return (
    <div className="  text-white md:hidden ">
      <div className=" relative ml-76 mt-5">
        <FaXmark size={30} onClick={closebar} />
      </div>
      <div className="absolute top-20 left-20  text-3xl">
        <p className="mb-2 " onClick={about}> About</p>
        <p className="mb-2 "    onClick={speakers}> Speakers</p>
        <p className="mb-2 "> Schedule</p>
        <p className="mb-2 "> Sponsors</p>
        <p className=""> Register</p>
      </div>
    </div>
  );
}

export default MenuBar;
