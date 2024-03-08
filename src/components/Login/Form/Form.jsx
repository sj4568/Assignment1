import React from "react";
import TextBox from "./TextBox/TextBox";
import ImageBox from "../../Resister/Form/imageBox/ImageBox";


export default function Form() {
  return (
    <div className="">
      <div className="con bg-slate-300 w-full h-screen flex justify-center place-items-center">
        <div
          action=""
          className="form lg:w-[70%] w-[95%] md:w-[90%]  shadow rounded-md bg-white p-4 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 place-items-center"
        >
          <ImageBox title={"Sign In"} />
          <TextBox />
        </div>
      </div>
    </div>
  );
}
