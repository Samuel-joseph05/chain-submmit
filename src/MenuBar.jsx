import { FaXmark } from "react-icons/fa6";

function MenuBar() {
  const closebar = () => {
    window.history.back();
  };
  return (
    <div className="  text-white md:hidden ">
      <div className=" relative top-4 left-75">
        <FaXmark size={25} onClick={closebar} />
      </div>
      <div className="absolute top-20 left-20  text-3xl">
        <p className="mb-2 "> About</p>
        <p className="mb-2 "> Speakers</p>
        <p className="mb-2 "> Schedule</p>
        <p className="mb-2 "> Sponsors</p>
        <p className=""> Register</p>
      </div>
    </div>
  );
}

export default MenuBar;
