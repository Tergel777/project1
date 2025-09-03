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
      
      <Footer />
    </div>
  );
}
