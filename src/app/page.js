
// "use client";
// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import { Header } from "./header";
// export default function App() {
//   return (
//     <div className="min-h-screen bg-gray-50 justify-self-center">
//       {/* Header */}
//       <Header />
//       <div className="w-[2240px] justify-evenly h-[917px] flex justify-self-center">
//         <div className="w-[543px] h-[917px] flex flex-col">
//           <div className="w-[543px] h-[116px] flex flex-col pt-[376px]">
//             <div className="font-sans font-bold text-[40px]">
//               Discover Amazing Products
//             </div>
//             <div className="font-sans text-[18px] text-[#71717A]">
//               Shop the latest trends and find the perfect items for your
//               lifestyle. Quality products at competitiive pricees.
//             </div>
//           </div>
//           <div className="w-[287px] h-[44px] gap-[8px] flex pt-[150px]">
//             <div className="w-[130px] h-[44px] bg-[#18181B] rounded-md font-medium text-[20px] text-white flex justify-center items-center">
//               shop now
//             </div>
//             <div className="w-[130px] h-[44px] border border-solid border-[#E4E4E7] rounded-md font-medium text-[20px]  flex justify-center items-center text-black">
//               learn more
//             </div>
//           </div>
//         </div>
//         <div className="w-[750px] h-[650px] gap-[12px] flex flex-col pt-[146px]">
//           <div className="w-[750px] h-[200px] gap-[12px] flex justify-end">
//             <div className="w-[200px] h-[200px] rounded-[12px] border border-solid border-[#E4E4E7]"></div>
//             <div className="w-[200px] h-[200px] rounded-[12px] border border-solid border-[#E4E4E7]"></div>
//             <div className="w-[200px] h-[200px] rounded-[12px] border border-solid border-[#E4E4E7]"></div>
//           </div>
//           <div className="w-[750px] h-[200px] gap-[12px] flex">
//             <div className="w-[200px] h-[200px] rounded-[12px] border border-solid border-[#E4E4E7]"></div>
//             <div className="w-[200px] h-[200px] rounded-[12px] border border-solid border-[#E4E4E7]"></div>
//             <div className="w-[200px] h-[200px] rounded-[12px] border border-solid border-[#E4E4E7]"></div>
//           </div>
//           <div className="w-[750px] h-[200px] gap-[12px] flex justify-end">
//             <div className="w-[200px] h-[200px] rounded-[12px] border border-solid border-[#E4E4E7]"></div>
//             <div className="w-[200px] h-[200px] rounded-[12px] border border-solid border-[#E4E4E7]"></div>
//             <div className="w-[200px] h-[200px] rounded-[12px] border border-solid border-[#E4E4E7]"></div>
//           </div>
//           <div className="w-[750px] h-[200px] gap-[12px]"></div>
//           <div className="w-[750px] h-[200px] gap-[12px]"></div>
//         </div>
//       </div>
//       <div className="w-[1440px] h-[616px] flex justify-self-center flex-col">
//         <div className="w-[462px] h-[76px]">
//           <div className="text-4xl font-sans font-bold text-black">
//             Featured products
//           </div>
//           <div className=" font-sans font-normal text-lg text-[#71717A]">
//             Check out our most popular items that customers love
//           </div>
//         </div>
//         <div className="w-[1200px] h-[384px] flex gap-[16px] pt-[32px]">
//           <div className="w-[288px] h-[384px] rounded-[6px] border border-solid border-[#E4E4E7]"></div>
//           <div className="w-[288px] h-[384px] rounded-[6px] border border-solid border-[#E4E4E7]"></div>
//           <div className="w-[288px] h-[384px] rounded-[6px] border border-solid border-[#E4E4E7]"></div>
//           <div className="w-[288px] h-[384px] rounded-[6px] border border-solid border-[#E4E4E7]"></div>
//         </div>
//         <div className="w-[1200px] h-[44px] pt-[64px]">
//           <div className="w-[197px] h-[44px] bg-[#18181B] rounded-md font-sans text-white font-medium text-[20px] flex justify-center items-center justify-self-end">
//             <button>view all products</button>
//           </div>
//         </div>
//       </div>
//       <div className="w-[1440px] h-[220px] border border-solid border-[#E4E4E7] flex justify-between justify-self-center">
//         <div className="font-sans font-medium text-[14px] text-[#71717A] pt-[48px]">
//           2025 E-commerce. All rights reserved.
//         </div>
//         <div className="w-[422px] h-[92px] gap-[80px] flex pt-[48px]">
//           <div className="w-[78px] h-[92px] flex flex-col gap-[16px]">
//             <div className="font-sans font-medium text-[12px] text-[#71717A]">
//               Information
//             </div>
//             <div className="font-sans font-medium text-[14px] text-black">
//               help center
//             </div>
//             <div className="font-sans font-medium text-[14px] text-black">
//               for brands
//             </div>
//           </div>
//           <div className="w-[71px] h-[92px] flex flex-col gap-[16px]">
//             <div className="font-sans font-medium text-[12px] text-[#71717A]">
//               social
//             </div>
//             <div className="font-sans font-medium text-[14px] text-black">
//               X (twitter)
//             </div>
//             <div className="font-sans font-medium text-[14px] text-black">
//               instagram
//             </div>
//           </div>
//           <div className="w-[113px] h-[92px] flex flex-col gap-[16px]">
//             <div className="font-sans font-medium text-[12px] text-[#71717A]">
//               legal
//             </div>
//             <div className="font-sans font-medium text-[14px] text-black">
//               terms of service
//             </div>
//             <div className="font-sans font-medium text-[14px] text-black">
//               privacy policy
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
export default function App() {
  return (
    <div>
      <Header />
      <div className="w-[1440px] h-[917px] flex justify-self-center justify-between">
        <div className="w-[543px] h-[917px] flex flex-col">
          <div className="w-[543px] h-[116px] flex flex-col pt-[376px]">
            <div className="font-sans font-bold text-[40px]">
              Discover Amazing Products
            </div>
            <div className="font-sans text-[18px] text-[#71717A]">
              Shop the latest trends and find the perfect items for your
              lifestyle. Quality products at competitiive pricees.
            </div>
          </div>
          <div className="w-[287px] h-[44px] gap-[8px] flex pt-[150px]">
            <div className="w-[130px] h-[44px] bg-[#18181B] rounded-md font-medium text-[20px] text-white flex justify-center items-center">
              shop now
            </div>
            <div className="w-[130px] h-[44px] border border-solid border-[#E4E4E7] rounded-md font-medium text-[20px]  flex justify-center items-center text-black">
              learn more
            </div>
          </div>
        </div>
        <div className="w-[750px] h-[650px] flex flex-col gap-[12px] pt-[146px]">
          <div className="w-[750px] h-[200px] gap-[12px] flex justify-end">
            <img
              src="/images/41b43e7414d5fdac27af04d0db009cf9e8604762.png"
              alt="asdaw"
              className="w-[200px] h-[200px] rounded-[12px] border border-solid border-[#E4E4E7]"
            ></img>
            <img
              src="/images/b7fe65cd9cc082c8412b7b34aa8cb0b5dbd8c7f8.png"
              alt="adw"
              className="w-[200px] h-[200px] rounded-[12px] border border-solid border-[#E4E4E7]"
            ></img>
            <img
              src="/images/3f7b9b9e4fabe72a661a956b8b41d06886283ec4.png"
              alt="asdwa"
              className="w-[200px] h-[200px] rounded-[12px] border border-solid border-[#E4E4E7]"
            ></img>
          </div>
          <div className="w-[750px] h-[200px] gap-[12px] flex">
            <img
              src="/images/9aff50b07837e8dde9560cb3c680aac2dc821e50.png"
              alt="asda"
              className="w-[200px] h-[200px] rounded-[12px] border border-solid border-[#E4E4E7]"
            ></img>
            <img
              src="/images/1dc653f1a8795e979a53cccc08c1ae29fe9c60d6.png"
              alt="awd"
              className="w-[200px] h-[200px] rounded-[12px] border border-solid border-[#E4E4E7]"
            ></img>
            <img
              src="/images/4be4e1ab505ff79ee5dae17b133c2c56345e49a6.png"
              alt="asd"
              className="w-[200px] h-[200px] rounded-[12px] border border-solid border-[#E4E4E7]"
            ></img>
          </div>
          <div className="w-[750px] h-[200px] gap-[12px] flex justify-end">
            <img
              src="/images/6769fe960fd0e1af5c2e70b120f8f5c0930af2f4.png"
              alt="wad"
              className="w-[200px] h-[200px] rounded-[12px] border border-solid border-[#E4E4E7]"
            ></img>
            <img
              src="/images/192c4ca4083eb1f37f7914d7ec7c5b7f37f33299.png"
              alt="faf"
              className="w-[200px] h-[200px] rounded-[12px] border border-solid border-[#E4E4E7]"
            ></img>
            <img
              src="/images/c5d5a3414d2b90f1a5ee94cc6dcc819d58890e6d.png"
              alt="gags"
              className="w-[200px] h-[200px] rounded-[12px] border border-solid border-[#E4E4E7]"
            ></img>
          </div>
        </div>
      </div>
      <div className="w-[1440px] h-[616px] flex justify-self-center flex-col">
        <div className="w-[462px] h-[76px]">
          <div className="text-4xl font-sans font-bold text-black">
            Featured products
          </div>
          <div className=" font-sans font-normal text-lg text-[#71717A]">
            Check out our most popular items that customers love
          </div>
        </div>
        <div className="w-[1200px] h-[384px] flex gap-[16px] pt-[32px]">
          <div className="w-[288px] h-[384px] rounded-[6px] border border-solid border-[#E4E4E7]">
            <div className="w-[252px] h-[36px] flex justify-end items-end">
              <div className="bg-[#F4F4F5] rounded-full w-[86px] h-[24px] font-sans font-semibold text-[12px] text-[#18181B] flex justify-center items-center">
                fragrances
              </div>
            </div>
            <img
              src="/images/6769fe960fd0e1af5c2e70b120f8f5c0930af2f4.png"
              alt=""
              className="w-[252px] h-[280px] flex justify-self-center"
            ></img>
            <div className="w-[252px] h-[44px] flex flex-col justify-self-center gap-[4px]">
              <div className="font-sans font-medium text-[14px] text-black">
                Essence Mascara Lash princess
              </div>
              <div className="font-sans font-semibold text-[18px] text-black">
                $9.99
              </div>
            </div>
          </div>
          <div className="w-[288px] h-[384px] rounded-[6px] border border-solid border-[#E4E4E7]">
            <div className="w-[252px] h-[36px] flex justify-end items-end">
              <div className="bg-[#F4F4F5] rounded-full w-[86px] h-[24px] font-sans font-semibold text-[12px] text-[#18181B] flex justify-center items-center">
                beauty
              </div>
            </div>
            <img
              src="/images/3f7b9b9e4fabe72a661a956b8b41d06886283ec4.png"
              alt=""
              className="w-[252px] h-[280px] flex justify-self-center"
            ></img>
            <div className="w-[252px] h-[44px] flex flex-col justify-self-center gap-[4px]">
              <div className="font-sans font-medium text-[14px] text-black">
                Essence Mascara Lash princess
              </div>
              <div className="font-sans font-semibold text-[18px] text-black">
                $9.99
              </div>
            </div>
          </div>
          <div className="w-[288px] h-[384px] rounded-[6px] border border-solid border-[#E4E4E7]">
            <div className="w-[252px] h-[36px] flex justify-end items-end">
              <div className="bg-[#F4F4F5] rounded-full w-[86px] h-[24px] font-sans font-semibold text-[12px] text-[#18181B] flex justify-center items-center">
                sports
              </div>
            </div>
            <img
              src="/images/41a44e4ae4282b7ae225283022f8b16075170645.png"
              alt=""
              className="w-[252px] h-[280px] flex justify-self-center"
            ></img>
            <div className="w-[252px] h-[44px] flex flex-col justify-self-center gap-[4px]">
              <div className="font-sans font-medium text-[14px] text-black">
                Essence Mascara Lash princess
              </div>
              <div className="font-sans font-semibold text-[18px] text-black">
                $9.99
              </div>
            </div>
          </div>
          <div className="w-[288px] h-[384px] rounded-[6px] border border-solid border-[#E4E4E7]">
            <div className="w-[252px] h-[36px] flex justify-end items-end">
              <div className="bg-[#F4F4F5] rounded-full w-[86px] h-[24px] font-sans font-semibold text-[12px] text-[#18181B] flex justify-center items-center">
                clothing
              </div>
            </div>
            <img
              src="/images/1d6f25da761e42d42ead7078f73970f997461b27.png"
              alt=""
              className="w-[252px] h-[280px] flex justify-self-center"
            ></img>
            <div className="w-[252px] h-[44px] flex flex-col justify-self-center gap-[4px]">
              <div className="font-sans font-medium text-[14px] text-black">
                Essence Mascara Lash princess
              </div>
              <div className="font-sans font-semibold text-[18px] text-black">
                $9.99
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1200px] h-[44px] pt-[64px]">
          <a href="/product" className="w-[197px] h-[44px] bg-[#18181B] rounded-md font-sans text-white font-medium text-[20px] flex justify-center items-center justify-self-end">
            view all products
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
 
 