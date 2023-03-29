import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { StateContextCustom } from "../Context/StateContext";
import { Input } from "postcss";

const Navbar = () => {
  const {
    search,
    setSearch,
    state: { cart },
  } = StateContextCustom();

  return (
    <>
      <div className=" flex justify-between max-[400px]:justify-evenly items-center container content-center mx-auto lg:p-5  ">
        <div className="flex justify-between items-center ">
          <Link
            to={"/"}
            className="btn md:text-2xl bg-white max-[400px]:p-0 max-[400px]:text-md hover:bg-white text-gray-600 border-none normal-case "
          >
            MyShop
          </Link>
        </div>
        <div className="  m-2 flex items-center  justify-start">
          <div className=" max-[400px]:h-8  md:h-11 mr-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              action=""
            >
              <input
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                value={search}
                type="text"
                placeholder="Search"
                className=" outline-none border max-[400px]:h-8  border-gray-300 h-11 rounded input-sm w-full "
              />
            </form>
          </div>
          <div className=" border flex max-[400px]:h-8 h-11 m-0 px-2 text-center items-center  ">
            <Link to={"/stateCart"}>
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge bg-red-600 mt-1 max-[400px]:h-[10px] max-[400px]:w-[10px] border-none w-[10px] h-[12px] mr-1 indicator-item">
                  {cart.length}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
