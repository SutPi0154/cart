import { Group, Rating } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { FaTruck } from "react-icons/fa";
import { GrScorecard } from "react-icons/gr";
import { Link, useLocation, useParams } from "react-router-dom";
import { StateContextCustom } from "../Context/StateContext";

const Detail = (props) => {
  const { title, price, image, id, description, category, rating } = props;
  const {
    state: { Products },
  } = StateContextCustom();
  console.log(Products);
  const { idNo } = useParams();
  const location = useLocation();
  const pd = location.state.props;
  console.log(pd);

  const filterCategory = Products.filter(
    (item) => item.category === pd.category && item.id !== pd.id
  );
  // console.log(filterCategory);

  return (
    <div className=" mb-10 mx-auto container mt-5 ">
      <div className=" flex flex-wrap   items-center justify-center">
        <div className=" max-[420px]:m-5 max-[820px]:m-auto mr-10">
          <img
            src={pd.image}
            className="w-[25rem] max-[820px]:w-[20rem] max-[420px]:w-[15rem] mx-auto rounded border p-5 py-3"
            alt=""
          />
          <div className=" max-[420px]:m-5 max-[420px]:w-[20rem] max-[820px]:w-[40rem]  flex flex-wrap rounded justify-around w-[25rem] border shadow-lg p-5 mt-5 gap-5">
            {filterCategory.map((item) => {
              return (
                <div key={item.id}>
                  <img src={item.image} className="h-[6rem] max-[420px]:h-[4rem] " alt="" />
                  <Link to={`/detail/${item?.id}`} state={{ item }}></Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" max-[420px]:m-5 max-[820px]:mt-10  w-[40rem]">
          <h1 className="  text-2xl font-bold tracking-wide text-gray-600 mb-5">
            {pd.title}
          </h1>
          <p className="text-md tracking-wide text-gray-400 leading-6 ">
            {pd.description}
          </p>
          <div className=" mt-5">
            <Group position="">
              <Rating value={pd.rating.rate} fractions={2} readOnly />
            </Group>
          </div>
          <hr className=" my-5" />
          <span className=" uppercase  rounded-full text-xs bg-teal-600 text-white px-2 py-1 ">
            {pd.category}
          </span>
          <p className=" text-2xl  my-5 text-gray-800">${pd.price}</p>
          <Link to={"/success"}>
            <button className=" btn btn-md bg-teal-600 border-none hover:bg-teal-700">
              Buy Now
            </button>
          </Link>
          <div className="p-5 mt-5 shadow-lg border-2">
            <div className=" flex flex-wrap items-center ">
              <i className=" text-yellow-500 text-2xl mr-2">{<FaTruck />}</i>
              <h2 className=" text-lg">Free Delivery</h2>
            </div>
            <p className=" underline text-gray-500 mt-2">
              Enter your Postal code for Delivery Availability
            </p>
          </div>
          <div className=" border-2 shadow-lg p-5 ">
            <div className=" flex flex-wrap items-center">
              <i className="text-2xl mr-2">{<GrScorecard />}</i>
              <p className=" text-lg">Return Delivery</p>
            </div>
            <div className="mt-2">
              <p className="  inline  text-gray-500">
                Free 30days Delivery Return.
              </p>
              <p className=" underline inline text-gray-500 ">Details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
