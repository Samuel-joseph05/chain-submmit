function Register() {
  return (
    <div className="flex  justify-center mx-10  my-20">
      <div className="text-2xl border-2 border-solid border-[#3a9994] bg-[#252b37] shadow-lg shadow-[#3a9994] rounded-2xl ">
        <div className="  pt-5 pb-10 px-3">
          <h1 className="text-[#3a9994] text-center font-medium text-3xl">
            Register
          </h1>
          <form className=" flex flex-col gap-10 ">
            <div className="flex flex-col text-white px-3">
              <label>Name :</label>
              <input
                type="text"
                placeholder="eg: samuel"
                className="p-2 rounded bg-transparent border-b border-[#3a9994] outline-none text-white"
              />
            </div>
             <div className="flex flex-col text-white px-3">
              <label htmlFor="email">Email :</label>
              <input
                type="email"
                placeholder="eg: samuel"
                className="p-2 rounded bg-transparent border-b border-[#3a9994] outline-none text-white"
              />
            </div>
             <div className="flex flex-col text-white px-3">
          <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="eg: samuel"
                className="p-2 rounded bg-transparent border-b border-[#3a9994] outline-none text-white"
              />
            </div>
             <div className="flex flex-col text-white px-3  ">
              <label htmlFor="number"> Phone :</label>
              <input
                type="number"
                placeholder="eg: 34424224"
                className="p-2 rounded bg-transparent border-b border-[#3a9994] outline-none text-white "
              />
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
