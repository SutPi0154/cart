// import { filterProps } from "@mantine/core";
// import React, { useEffect } from "react";
// import { StateContextCustom } from "../Context/StateContext";

// const Filtered = () => {
//   const {
//     state: { Products },
//     activeGenre,
//     setActiveGenre,
//     setFilter,
//     filtered,
//   } = StateContextCustom();

//   const filterCat = filtered.filter((item) => item.category === activeGenre);
//   useEffect(() => {
//     if (activeGenre == "") {
//       return setFilter(Products);
//     }
//     setFilter(filterCat);
//   }, [activeGenre]);

//   return (
//     <div className=" flex justify-center flex-wrap my-5 gap-3">
//       <button
//         onClick={() => {
//           return setActiveGenre("");
//         }}
//         className=" btn text-gray-600  shadow-lg  border  border-gray-300 btn-sm rounded-md  btn-outline hover:bg-teal-400"
//       >
//         all
//       </button>
//       <button
//         onClick={() => {
//           return setActiveGenre("men's clothing");
//         }}
//         className=" btn text-gray-600  shadow-lg  border  border-gray-300 btn-sm rounded-md  btn-outline hover:bg-teal-400"
//       >
//         men's clothing
//       </button>
//       <button
//         onClick={() => {
//           return setActiveGenre("women's clothing");
//         }}
//         className=" btn text-gray-600  shadow-lg  border  border-gray-300 btn-sm rounded-md  btn-outline hover:bg-teal-400"
//       >
//         women's clothing
//       </button>
//       <button
//         onClick={() => {
//           return setActiveGenre("jewelery");
//         }}
//         className=" btn text-gray-600  shadow-lg  border  border-gray-300 btn-sm rounded-md  btn-outline hover:bg-teal-400"
//       >
//         jewelery
//       </button>
//       <button
//         onClick={() => {
//           return setActiveGenre("electronics");
//         }}
//         className=" btn text-gray-600  shadow-lg  border  border-gray-300 btn-sm rounded-md  btn-outline hover:bg-teal-400"
//       >
//         electronics
//       </button>
//     </div>
//   );
// };

// export default Filtered;
