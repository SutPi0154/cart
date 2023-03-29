import React, { useEffect } from "react";
import { StateContext, StateContextCustom } from "../Context/StateContext";
import Card from "../components/Card";
import Loader from "../components/Loader";

const Products = () => {
  const { loading } = StateContextCustom();

  const {
    state: { Products },
  } = StateContextCustom();

  return (
    <div className=" container mx-auto mt-5">
      {loading ? (
        <div className=" flex justify-center  mx-auto mt-[20%]">
          <Loader />
        </div>
      ) : (
        <div className=" mb-20 gap-10  max-[w-700px]:gap-0 flex flex-wrap justify-center items-center ">
          {Products?.map((pd) => (
            <Card key={pd.id} {...pd} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
