import React from 'react'
import { FaFacebook, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer bg-rose-400 flex flex-col justify-center lg:place-items-center">
      <div className="  flex w-[70%] justify-between lg:px-7 px-3 flex-col lg:flex-row p-5 gap-2">
        <div className="logo">
          <div className="">
            <span className="nav-brand text-white text-4xl font-normal font-['Inspiration']">
              Mim
            </span>
            <span className="text-black text-[15.px] font-normal font-['Inspiration']">
              {" "}
              Fashion
            </span>
          </div>
          <div className=" text-white text-sm font-extralight sale w-[70%]">
            Thanks to remove.bg's clever AI, you can slash editing time - and
            have more fun!
          </div>
        </div>
        <div className="content grid lg:grid-cols-4 grid-cols-2 gap-4 lg:gap-5">
          <div className="list text-white flex flex-col gap-2 sale">
            <Link className="text-black text-xl bold">Mens</Link>
            <Link>Shirt</Link>
            <Link>T-shirt</Link>
            <Link>Shoe</Link>
            <Link>Bags</Link>
          </div>
          <div className="list text-white flex flex-col gap-2 sale">
            <Link className="text-black text-xl bold">Womens</Link>
            <Link>Shirt</Link>
            <Link>T-shirt</Link>
            <Link>Shoe</Link>
            <Link>Bags</Link>
          </div>
          <div className="list text-white flex flex-col gap-2 sale">
            <Link className="text-black text-xl bold">Accessories</Link>
            <Link>Shirt</Link>
            <Link>T-shirt</Link>
            <Link>Shoe</Link>
            <Link>Bags</Link>
          </div>
          <div className="sale">
            <Link className="text-black text-xl bold">Contect Us</Link>
            <div className="links flex gap-3 place-items-center mt-3">
              <span className="bg-white p-2 text-rose-400 rounded-full hover:-translate-y-3 transition duration-300">
                <FaFacebookF />
              </span>
              <span className="bg-white p-2 text-rose-400 rounded-full hover:-translate-y-3 transition duration-300">
                <FaTwitter />
              </span>
              <span className="bg-white p-2 text-rose-400 rounded-full hover:-translate-y-3 transition duration-300">
                <FaInstagram />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="copy bg-neutral-50 w-full p-3">
        <div className="text-center text-black text-md font-thin sale">
          @All copyrights to MD Shariful Islam
        </div>
      </div>
    </div>
  );
}
