import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { StateContextCustom } from "../Context/StateContext";
import StateCardDe from "./StateCardDe";

const StateCard = () => {
  const [mainTotal, setMainTotal] = useState(0);
  useEffect(() => {
    setMainTotal(totalPrise);
  }, []);

  const IncreaseTotal = (price) => {
    setMainTotal(mainTotal + price);
  };
  const DecreaseTotal = (price) => {
    setMainTotal(mainTotal - price);
  };
  const {
    state: { cart },
    dispatch,
  } = StateContextCustom();
  console.log(cart);

  const clearCart = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#14B5A3",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, clear them!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({ type: `Clear_Cart` });
      }
    });
  };
  const totalPrise = () => cart?.reduce((pv, cv) => pv + cv.price, 0);
  return (
    <>
      {cart.length >= 1 ? (
        <div className=" flex flex-wrap justify-center">
          <div className="   max-[412px]:w-[80%] max-[770px]:m-5 w-[48rem] mr-5 ">
            {cart?.map((item) => (
              <StateCardDe
                key={item.id}
                item={item}
                increaseTotal={IncreaseTotal}
                DecreaseTotal={DecreaseTotal}
              />
            ))}
          </div>
          <div className="  max-[412px]:w-[80%] max-[700px]:w-[60%] max-[1190px]:w-[30%] w-[20%]">
            <div className=" border flex flex-wrap justify-center p-5 shadow-lg">
              <h1 className=" text-2xl font-bold mb-5 text-teal-500">
                Total Price - ${mainTotal.toFixed(2)}
              </h1>
              <div>
                <button
                  onClick={clearCart}
                  className=" btn text-red-500 hover:bg-white border-red-500 bg-white rounded-[5px] mr-2"
                >
                  Clear
                </button>
                <Link to={"/success"}>
                  <button className=" btn bg-teal-600 border-none hover:bg-teal-500 rounded-[5px]">
                    Purchase
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-5 max-[412px]:p-3 border max-[412px]:w-[90%] max-[412px]:ml-0 shadow-lg mx-auto max-[820px]:w-[90%] p-5 w-[60%]">
         
            <h1 className=" max-[600px]:text-xl max-[412px]:text-lg text-2xl mb-5 text-teal-400 font-bold">
              Your Cart is Empty !
            </h1>
            <div className=" max-[412px]:w-[] flex justify-around align-middle content-center ">
              <div className=" max-[412px]:w-[0] ">
                <iframe
                  src="https://embed.lottiefiles.com/animation/9091"
                  className=" max-[412px]:h-[100px] max-[412px]:w-[100px] max-[730px]:w-[200px]  sm:w-[300px] lg:w-[200px] h-[200px]  mb-5 "
                ></iframe>
              </div>
              <div className=" mt-20 ml-10">
                <Link
                  to={"/"}
                  className=" max-[412px]:btn-sm max-[730px]:btn-md btn border-none btn-lg hover:bg-teal-600 bg-teal-400 "
                >
                  <button>Go To Shop</button>
                </Link>
              </div>
            </div>
        </div>
      )}
    </>
  );
};

export default StateCard;
