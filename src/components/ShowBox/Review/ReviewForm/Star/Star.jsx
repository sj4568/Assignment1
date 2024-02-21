import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa';

export default function Star({ state, value ,handle}) {
   const color = state?"text-orange-300":"text-slate-200"
    function Handle()
    {
        handle(value)
    }
    const cls=`${color}`
    return (
      <div className="lg:text-4xl flex" onClick={Handle}>
        <FaStar className={cls} />
      </div>
    );
}
