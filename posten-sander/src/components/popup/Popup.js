import React from "react";

function Popup(props) {
  return props.trigger ? (
    <div className=" absolute top-1/3 bg-gray-200 w-96 justify-center left-50% right-[40%]">
      <div className=" relative p-[32px]">
        <button
          onClick={() => props.setTrigger(false)}
          className=" absolute top-[16px] right-[16px] px-2 rounded bg-red-400"
        >
          Close
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
