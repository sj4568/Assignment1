import React, { useState } from "react";
import img from "../../../assets/shopping/Banner/lady4.jpg";
import ColorBox from "../ColorBox/ColorBox";
import SizeBox from "../SizeBox/SizeBox";
import { FaCartArrowDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AddItemInCart } from "../../Store/Slices/StoreSlice";
import { toast } from "react-toastify";
function ProductContainer() {
  const data = useSelector((state) => state.tempProduct);
  console.log(data);
  const dispatch = useDispatch();
  const colorArr = ["bg-blue-600", "bg-rose-600", "bg-green-500", "bg-black"];
  const pantSizes = [27, 28, 29, 30, 31, 33, 36];
  const ShoeSizes = [6, 8, 9, 10, 12];
  const name = data?.name;
  const isShoe = name?.split(" ").some((obj) => obj.toLowerCase() === "shoe");
  const size = isShoe ? ShoeSizes : pantSizes;
  const item =
    data?.type == "home" || data?.type == "electronic" ? true : false;
  const [Size, SetSize] = useState("");
  function GetSize(size) {
    SetSize(size);
  }
  const [Color, SetColor] = useState("");
  function GetColor(size) {
    SetColor(size);
  }
  const sizes = size.map((data) => {
    return <SizeBox
      size={data}
      key={0}
      getSize={GetSize}
    />;
  });
  const color = colorArr.map((data) => {
    return <ColorBox
      color={data}
      key={0}
      getColor={GetColor}
    />;
  });
  const [amount, SetAmount] = useState(0);

  function AddValue(e) {
    SetAmount(e.target.value);
  }
  function AddCart() {
    if (amount > 0) {
      const Obj = {
        ...data,
        amount: amount,
        color: Color,
        size:Size
      };
      dispatch(AddItemInCart(Obj));
      toast.success("Item successfully add in cart", {
        position:"top-center"
      })
    } else {
      alert("Fixed Amount");
    }
    SetAmount(0)
  }

  return (
    <div className="w-full flex justify-center place-items-center bg-zinc-300 bg-opacity-25 px-3 py-4 ">
      <div className="lg:w-[70%] w-full grid lg:grid-cols-2 grid-cols-1  place-items-center mt">
        <div className="imgcontainer  w-full h-full ">
          <div className="imgBox w-full h-full relative">
            <img
              src={data?.img}
              alt=""
              className="w-full lg:h-full h-[300px] object-cover lg:absolute"
            />
          </div>
        </div>
        <div className="textContainer sale w-full p-5 bg-white h-full">
          <div className="flex flex-col pb-3">
            <span className="text-rose-600 text-2xl font-bold pb-1">
              {data?.name}
            </span>
            <span className="text-black text-xs font-extralight">
              design for {data.type}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-black text-lg font-bold ">PRODUCT INFO</span>

            <span className="text-black text-sm font-normal pr-5 ">
              join our community for enjoy our best policy join our community
              .join our community for enjoy our best policy join our community{" "}
            </span>
          </div>
          <div className="coler py-2">
            <span className="font-bold text-xl">Color</span>
            <div className="colorArray flex gap-3 pt-1">{color}</div>
          </div>
          {!item && (
            <div className="size py-2">
              <span className="font-bold text-xl">Size</span>
              <div className="colorArray grid grid-cols-5 lg:flex gap-3 pt-1">
                {sizes}
              </div>
            </div>
          )}
          <div className="buy flex justify-between place-items-center pt-3 gap-3">
            <div className="but flex gap-3">
              <input
                type="number"
                className="w-[70px] py-1 px-3 border "
                name="amount"
                onChange={AddValue}
                value={amount}
              />
              <button
                className="flex place-items-center gap-2 bg-rose-600 p-2 lg:text-sm  text-white  text-[10px] rounded-sm"
                onClick={AddCart}
              >
                <span>
                  <FaCartArrowDown />
                </span>
                Add to Cart
              </button>
            </div>
            <div className="price lg:text-2xl text-md font-bold text-rose-600">
              ${data?.price}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(ProductContainer);
