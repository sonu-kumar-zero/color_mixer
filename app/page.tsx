"use client";
import ColorBox from "@/components/ColorBox";
import React, { ChangeEvent, InputHTMLAttributes, useEffect, useState } from "react";

export default function Home() {

  // const [pos, setpos] = useState<string | null>(null);
  // const [elementPosition, setElementPosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 });

  // const handlePositionChange = () => {
  //   const newElementPosition = {
  //     x: (Math.floor(Math.random() * ((window.innerWidth - 200) - 100 + 1)) + 100),
  //     y: (Math.floor(Math.random() * ((window.innerHeight - 200) - 100 + 1)) + 100),
  //   };
  //   setpos(" ");
  //   setElementPosition(newElementPosition);
  // };

  // const vec: string[] = ["#000000", "#222222", "#444444", "#666666"];
  // const vec: string[] = ["#443737", "#272121", "#FF0000", "#FF4D00"];
  // const vec: string[] = ["#191D88", "#1450A3", "#337CCF", "#FFC436"];
  const vec: string[] = ["#13005A", "#00337C", "#1C82AD", "#03C988"];

  const [color, setcolor] = useState<{ colorA: string, colorB: string, colorC: string, colorD: string }>({ colorA: "#13005A", colorB: "#00337C", colorC: "#1C82AD", colorD: "#03C988" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const { name, value }: { name: string, value: string } = e;
    setcolor((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // console.log(color);
  };

  // useEffect(()=>{
  // },[color]);

  return (
    <>
      <div className="w-[100dvw] h-[100dvh] flex justify-center items-center gap-10 flex-col" style={{
        background: `linear-gradient(to right, ${color.colorA}44,${color.colorB}44, ${color.colorC}44,${color.colorD}44)`
      }}>

        <div className="text-[48px] font-black text-center" style={{
          backgroundClip: "text",
          color: "transparent",
          backgroundImage: `linear-gradient(to right, ${color.colorA},${color.colorB}, ${color.colorC},${color.colorD})`
        }}>
          Color Template Mixer
        </div>

        <div className="flex gap-5 flex-col lg:flex-row">
          <input type="text" placeholder="ColorA" className="outline-dashed focus:outline-dashed rounded px-3 py-2"
            style={{ outlineColor: `${color.colorA}` }} onChange={handleChange} name="colorA" value={color.colorA} />
          <input type="text" placeholder="ColorB" className="outline-dashed focus:outline-dashed rounded px-3 py-2"
            style={{ outlineColor: `${color.colorB}` }} onChange={handleChange} name="colorB" value={color.colorB} />
          <input type="text" placeholder="ColorC" className="outline-dashed focus:outline-dashed rounded px-3 py-2"
            style={{ outlineColor: `${color.colorC}` }} onChange={handleChange} name="colorC" value={color.colorC} />
          <input type="text" placeholder="ColorD" className="outline-dashed focus:outline-dashed rounded px-3 py-2"
            style={{ outlineColor: `${color.colorD}` }} onChange={handleChange} name="colorD" value={color.colorD} />
        </div>

        <div className="">

          <div className="flex gap-5 pb-5">
            <ColorBox innerColor={color.colorA} outerColor={color.colorA} />
            <ColorBox innerColor={color.colorB} outerColor={color.colorA} />
            <ColorBox innerColor={color.colorC} outerColor={color.colorA} />
            <ColorBox innerColor={color.colorD} outerColor={color.colorA} />
          </div>
          <div className="flex gap-5 pb-5">
            <ColorBox innerColor={color.colorA} outerColor={color.colorB} />
            <ColorBox innerColor={color.colorB} outerColor={color.colorB} />
            <ColorBox innerColor={color.colorC} outerColor={color.colorB} />
            <ColorBox innerColor={color.colorD} outerColor={color.colorB} />
          </div>
          <div className="flex gap-5 pb-5">
            <ColorBox innerColor={color.colorA} outerColor={color.colorC} />
            <ColorBox innerColor={color.colorB} outerColor={color.colorC} />
            <ColorBox innerColor={color.colorC} outerColor={color.colorC} />
            <ColorBox innerColor={color.colorD} outerColor={color.colorC} />
          </div>
          <div className="flex gap-5 pb-5">
            <ColorBox innerColor={color.colorA} outerColor={color.colorD} />
            <ColorBox innerColor={color.colorB} outerColor={color.colorD} />
            <ColorBox innerColor={color.colorC} outerColor={color.colorD} />
            <ColorBox innerColor={color.colorD} outerColor={color.colorD} />
          </div>
        </div>

        {

          // vec.map((outerColor, index) => {
          //   return (
          //     <>
          //       <div className="flex gap-5 pb-5" key={20 + index}>
          //         {
          //           vec.map((innerColor, ind) => {
          //             return (<>
          //               <ColorBox innerColor={innerColor} outerColor={outerColor} key={index + ind} />
          //             </>
          //             )
          //           }
          //           )
          //         }
          //       </div>
          //     </>
          //   )
          // })
        }

      </div >
      {/* <div className="bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500 w-[100dvw] text-white h-[100dvh] flex flex-col justify-center items-center gap-5">
      <div className="bg-gradient-to-br from-Red via-Pink to-Purple w-[100dvw] text-white h-[100dvh] flex flex-col justify-center items-center gap-5">
        <div className="w-3/5 h-1/2 bg-white bg-opacity-10 rounded-2xl text-red-500 flex justify-center items-center">
          Content Box
        </div>
        <div className="flex gap-5 w-full">
          <div className="w-1/2 flex justify-end">
            <div className="bg-red-500 textblack text-opacity-100 px-10 py-2 rounded-lg cursor-pointer hover:bg-red-600">
              Yes
            </div>
          </div>
          <div className="w-1/2 flex justify-start">
            {/* opacity-0 */}
      {/* <div className={`${pos === null ? "block" : "hidden"} text-black bg-white bg-opacity-60 px-10 py-2 rounded-lg cursor-pointer`} onMouseEnter={handlePositionChange}>
              No
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          top: `${elementPosition.y}px`,
          left: `${elementPosition.x}px`,
          zIndex: "10",
        }} className={`${pos === null ? "hidden" : "absolute"} px-10 py-2 `} onMouseEnter={handlePositionChange}>
        <div className=" text-black bg-white bg-opacity-60 px-10 py-2 rounded-lg cursor-pointer" onMouseEnter={handlePositionChange}>
          No
        </div>
      </div>  */}
    </>
  )
}
