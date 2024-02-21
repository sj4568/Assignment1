import React from 'react'
import Content from './Content/Content'
import { FaCartArrowDown, FaEye, FaUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';

export default function Container() {
  const products = useSelector(state => state.products)
  const users = useSelector((state) => state.users);
  return (
    <div className="flex justify-around place-items-center gap-3 w-full lg:flex-row flex-col">
      <Content
        icon={<FaUser />}
        type={"Resistered User"}
        amount={users.length}
        des={"id,username, email etc"}
        Bg={`bg-rose-400`}
        Ibg={`bg-rose-600`}
      />
      <Content
        icon={<FaEye />}
        type={"Daily Visitor"}
        amount={100}
        des={"id,username, email etc"}
        Bg={`bg-red-200`}
        Ibg={`bg-pink-300`}
      />
      <Content
        icon={<FaCartArrowDown />}
        type={"Products"}
        amount={products?.length}
        des={"id,username, email etc"}
        Bg={`bg-emerald-400`}
        Ibg={`bg-gray-600`}
      />
    </div>
  );
}
