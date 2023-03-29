import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className=" flex justify-center items-center content-center  ">
      <div className=" mt-[5%] max-[400px]:w-[200px] max-[400px]:h-[200px] max-w-[23rem] shadow-lg p-5">
        <div>
          <iframe
            className=" border max-[400px]:w-[200px] max-[400px]:h-[200px]  w-[500px]  h-[500px]"
            src="https://embed.lottiefiles.com/animation/83548"
          ></iframe>
        </div>
        <div className="">
          <Link to={"/"}>
            <button className="btn btn-xl sm:btn-lg hover:bg-teal-700  bg-teal-600 border-none">
              Go To Shop
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
