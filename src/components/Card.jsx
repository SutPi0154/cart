import { Group, Rating } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StateContextCustom } from "../Context/StateContext";

const Card = (props) => {
  const { title, price, image, description, category, id, rating } = props;
  const { dispatch, filtered } = StateContextCustom();
  const [activeBtn, setActiveBtn] = useState(false);
  const addToCartBtn = () => {
    dispatch({ type: "ADD_TO_CART", payload: props });
    setActiveBtn(true);
  };

  return (
    <div className=" border rounded shadow-lg max-[400px]:w-[90%] p-5 w-[18rem] ">
      <Link to={`/detail/${id}`} state={{ props }}>
        <img src={image} className="  h-[150px] mx-auto" alt="" />
      </Link>
      <span className=" uppercase rounded-full text-xs bg-teal-600 text-white px-2 py-1">
        {category}
      </span>
      <div className=" mt-7 ">
        <h2 className=" text-gray-600">{title.substring(0, 26)}...</h2>
        <p className=" mt-2 text-gray-400 text-sm">
          {description.substring(0, 30)}...
        </p>
        <div className=" mt-2">
          <Group position="">
            <Rating value={rating.rate} fractions={2} readOnly />
          </Group>
        </div>
        <p className=" text-teal-600 my-5 tracking-wide">${price}</p>
        <div className="mt-5">
          {activeBtn == !true ? (
            <button
              onClick={addToCartBtn}
              className=" h-9 bg-teal-500 border-none hover:bg-teal-600 rounded-md btn btn-sm w-full"
            >
              Add to Cart
            </button>
          ) : (
            <button
              onClick={addToCartBtn}
              className=" h-9 bg-red-500 border-none hover:bg-red-600 rounded-md btn btn-sm w-full"
            >
              Remove From Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
