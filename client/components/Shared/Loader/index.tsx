// import React, { useEffect, useState, useContext } from "react";
// import { ArrowDown } from "react-feather";
// // import { FileLoaderContext, FileLoaderContextType } from "@/pages";

// type Props = {
//   className?: string;
// };

// const Loader = ({ className }: Props) => {
//   // const { loaderWidth: count, setLoaderWidth } =
//   //   useContext<FileLoaderContextType>(FileLoaderContext);

//   return (
//     <div className={`h-16 w-full mt-4 bg-white rounded-full p-1 ${className}`}>
//       <div className="relative h-[56px] w-full bg-white rounded-full overflow-hidden">
//         <div className="grid place-items-center absolute w-full h-full">
//           <p
//             className={`tracking-[20px] text-center text-black transition-all ease-in-out duration-1000 delay-[2000ms] uppercase ${
//               count == 100 ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             Done
//           </p>
//         </div>

//         <div
//           className={`min-h-[56px] min-w-[56px] rounded-full grid  items-center justify-center  bg-[#323144] relative overflow-hidden transform transition-all ease-in-out`}
//           style={{ width: `${count}%` }}
//         >
//           <p
//             className={`tracking-[20px] absolute text-center w-full uppercase px-5 transition-all ease-in-out duration-1000 ${
//               count === 100 && "transform translate-x-full delay-[2000]"
//             }`}
//           >
//             Loading
//           </p>

//           <div
//             className={`h-[56px] w-[56px] right-0 text-white transform transition ease-in-out grid justify-center items-center absolute rounded-full bg-[#323144]`}
//           >
//             <ArrowDown className={`${count > 0 ? "-rotate-90" : ""}`} />
//           </div>
//         </div>

//         <div
//           className={`h-[56px] w-[56px] right-0 top-0 grid justify-center items-center absolute rounded-full bg-[#323144] ${
//             count === 100 ? "opacity-100 delay-500" : "opacity-0 "
//           }`}
//         >
//           <ArrowDown className="-rotate-90 text-white" />
//         </div>
//       </div>

//       <div>
//         <h1>{`left-[${count}%]`}</h1>
//       </div>
//     </div>
//   );
// };

// export default Loader;
