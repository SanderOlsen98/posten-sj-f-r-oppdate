import React from "react";
import Popup from "../popup/Popup";
import { useState, useEffect } from "react";

function LeftCars() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [colour, setColor] = useState("");
  const [changeColor, setChangeColor] = useState("null");
  const click = (colour) => {
    setColor(colour);
    document.getElementById(changeColor).style.backgroundColor = [colour];
    setButtonPopup(false);
    console.log(colour);
  };

  return (
    <div className=" col-span-2 min-h-[90vh] border-r border-gray-200 items-start justify-start flex w-full">
      <div className="w-full items-start justify-start flex flex-col px-12 pt-12 pb-6">
        <h1 className=" text-lg font-bold">Drivers</h1>
        <div className=" py-12">
          <button className="bg-red-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:bg-red-700 hover:text-white py-4">
            Coordinator - Madeleine
          </button>
        </div>
        <div className=" grid grid-rows-6 grid-flow-col gap-2 border-t py-3 border-b sm:grid-col">
          <div className=" py-2">
            <button
              id="Burhan"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Burhan");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Burhan
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Haugen"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Haugen");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Haugen
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Zoran"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Zoran");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Zoran
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Kitto"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Kitto");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Kitto
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Shaho"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Shaho");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Shaho
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Anne-Bente"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Anne-Bente");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Anne-Bente
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Hugo"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Hugo");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Hugo
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Steinar"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Steinar");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Steinar
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Hussain"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Hussain");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Hussain
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Waseem"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Waseem");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Waseem
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Saeed"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Saeed");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Saeed
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Kurt"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Kurt");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Kurt
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Tor"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Tor");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Tor
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Sebastian"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Sebastian");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Sebastian
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Sander"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Sander");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Sander
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Steffen"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Steffen");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Steffen
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Emil"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Emil");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Emil
            </button>
          </div>
          <div className=" py-2">
            <button
              id="Simon"
              onClick={() => {
                setButtonPopup(true);
                setChangeColor("Simon");
              }}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Simon
            </button>
          </div>
        </div>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>Select Option</h3>
        <div className="py-4">
          {/* Change colour to green */}
          <button
            onClick={() => {
              click("#22c55e");
            }}
            className="p-2 bg-green-500 rounded relative justify-center items-center px-8 py-2"
          >
            Im good
          </button>
        </div>
        <div className="py-4">
          {/* Change colour to orange */}
          <button
            onClick={() => {
              click("#f97316");
            }}
            className="p-2 bg-orange-500 rounded relative justify-center items-center px-8 py-2"
          >
            Not Sure
          </button>
        </div>
        <div className="py-4">
          {/* Change colour to red */}
          <button
            onClick={() => {
              click("#dc2626");
            }}
            className="p-2 bg-red-600 rounded relative justify-center items-center px-8 py-2"
          >
            Need Help
          </button>
        </div>
        <div className="py-4">
          {/* Reset Colour */}
          <button
            onClick={() => {
              click("#d1d5db");
            }}
            className="p-2 bg-gray-300 rounded relative justify-center items-center px-8 py-2"
          >
            Reset
          </button>
        </div>
      </Popup>
    </div>
  );
}

export default LeftCars;
