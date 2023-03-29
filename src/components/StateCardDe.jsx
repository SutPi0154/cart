import React, { useState } from "react";
import Swal from "sweetalert2";
import { StateContextCustom } from "../Context/StateContext";

const StateCardDe = ({ item, increaseTotal, DecreaseTotal }) => {
  const [quantity, setQty] = useState(1);
  const { dispatch } = StateContextCustom();
  const delBtn = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#14B5A3",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({ type: "REMOVE_FROM_CART", payload: item });
        DecreaseTotal(oneItemPrise);
      }
    });
  };

  const increaseQty = () => {
    setQty(quantity + 1);
    increaseTotal(item.price);
  };
  const decreaseQty = () => {
    if (quantity > 1) {
      setQty(quantity - 1);
      DecreaseTotal(item.price);
    }
  };
  const oneItemPrise = item.price * quantity;
  return (
    <div className=" border  relative mb-3 max-[412px]:p-2 p-5 rounded-md shadow-lg  ">
      <div className=" mb-5  flex  max-[580px]:flex-wrap max-[720px]:mx-auto max-[1310px]:ml-10 items-center ">
        <div className=" min-w-[120px] max-[420px]:w-[80%] max-[420px]:mx-auto max-[580px]:mb-4">
          <img src={item.image} className="w-[120px] max-[420px]:mx-auto" alt="" />
        </div>
        <div className=" min-w-[282px] max-[420px]:m-5 ml-10">
          <h2 className=" text-xl tracking-wide text-gray-600 mb-3">
            {item.title}
          </h2>
          <p className=" text-lg text-gray-900"> ${oneItemPrise.toFixed(2)}</p>
          <div className="btn-group max-[412px]:mx-auto mt-3 ">
            <button
              onClick={decreaseQty}
              className=" btn border-gray-300 px-4 py-2  rounded-sm text-gray-600 hover:bg-white bg-white"
            >
              -
            </button>
            <button className=" btn border-gray-300 px-4 py-2 rounded-sm text-gray-600 hover:bg-white bg-white ">
              {quantity}
            </button>
            <button
              onClick={increaseQty}
              className=" btn border-gray-300 px-4 py-2  rounded-sm text-gray-600 hover:bg-white bg-white"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={delBtn}
        className="btn absolute top-2 right-2 btn-circle  border-none hover:bg-white bg-white text-gray-600  btn-xs"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default StateCardDe;
