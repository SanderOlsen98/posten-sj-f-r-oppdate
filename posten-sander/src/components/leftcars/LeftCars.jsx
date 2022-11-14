import React from "react";
import Popup from "../popup/Popup";
import { useState } from "react";

function LeftCars() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className=" col-span-2 min-h-[90vh] border-r border-gray-200 items-start justify-start flex w-full">
      <div className="w-full items-start justify-start flex flex-col px-12 pt-12 pb-6">
        <h1 className=" text-lg font-bold">Drivers</h1>
        <div className=" py-12">
          <button className="bg-red-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:bg-red-700 hover:text-white py-4">
            Coordinator - Madeleine
          </button>
        </div>
        <div className=" grid grid-rows-6 grid-flow-col gap-2 border-t py-3 border-b sm:grid-col flex">
          <div className=" py-2">
            <button
              onClick={() => setButtonPopup(true)}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Burhan
            </button>
          </div>
          <div className=" py-2">
            <button
              onClick={() => setButtonPopup(true)}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Haugen
            </button>
          </div>
          <div className=" py-2">
            <button
              onClick={() => setButtonPopup(true)}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Zoran
            </button>
          </div>
          <div className=" py-2">
            <button
              onClick={() => setButtonPopup(true)}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Kitto
            </button>
          </div>
          <div className=" py-2">
            <button
              onClick={() => setButtonPopup(true)}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Saho
            </button>
          </div>
          <div className=" py-2">
            <button
              onClick={() => setButtonPopup(true)}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Anne-Bente
            </button>
          </div>
          <div className=" py-2">
            <button
              onClick={() => setButtonPopup(true)}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Hugo
            </button>
          </div>
          <div className=" py-2">
            <button
              onClick={() => setButtonPopup(true)}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Steinar
            </button>
          </div>
          <div className=" py-2">
            <button
              onClick={() => setButtonPopup(true)}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Hussain
            </button>
          </div>
          <div className=" py-2">
            <button
              onClick={() => setButtonPopup(true)}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Waseem
            </button>
          </div>
          <div className=" py-2">
            <button
              onClick={() => setButtonPopup(true)}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Saeed
            </button>
          </div>
          <div className=" py-2">
            <button
              onClick={() => setButtonPopup(true)}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Kurt
            </button>
          </div>
          <div className=" py-2">
            <button
              onClick={() => setButtonPopup(true)}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Kurt
            </button>
          </div>
          <div className=" py-2">
            <button
              onClick={() => setButtonPopup(true)}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Sebastian
            </button>
          </div>
          <div className=" py-2">
            <button
              onClick={() => setButtonPopup(true)}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Sander
            </button>
          </div>
          <div className=" py-2">
            <button
              onClick={() => setButtonPopup(true)}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Steffen
            </button>
          </div>
          <div className=" py-2">
            <button
              onClick={() => setButtonPopup(true)}
              className="bg-gray-300 text-gray-900 font-bold px-4 rounded opacity-50 hover:opacity-30 py-4 w-32"
            >
              Emil
            </button>
          </div>
          <div className=" py-2">
            <button
              onClick={() => setButtonPopup(true)}
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
          <button
            onClick="buttonGreen"
            className="p-2 bg-green-500 rounded relative justify-center items-center px-8 py-2"
          >
            Im good
          </button>
        </div>
        <div className="py-4">
          <button
            onClick="buttonOrange"
            className="p-2 bg-orange-500 rounded relative justify-center items-center px-8 py-2"
          >
            Not Sure
          </button>
        </div>
        <div className="py-4">
          <button
            onClick="buttonRed"
            className="p-2 bg-red-600 rounded relative justify-center items-center px-8 py-2"
          >
            Need Help
          </button>
        </div>
      </Popup>
    </div>
  );
}

export default LeftCars;
