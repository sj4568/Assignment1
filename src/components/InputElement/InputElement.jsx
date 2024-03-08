import React from 'react'

export default function InputElement(props) {
  return (
    <div className="">
      {props?.label && (
        <label htmlFor={props.id} className="text-sm font-bold text-slate-600">
          {props.label}
        </label>
      )}
      <input
        className="w-full border-none bg-slate-100 px-3 py-1 focus:outline-none rounded-sm text-sm"
        {...props}
      />
          {props.massage && <div className="massage text-[10px] text-red-500">
              this field cannot be empty
          </div>}
    </div>
  );
}
