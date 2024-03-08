import React from 'react'
import { Circles } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div>
      <div className="con my-4">
        <Circles
          height="40"
          width="40"
          color="#FF5C00"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </div>
  );
}
