import React from 'react'

export default function CheckBar({call,status}) {
    const arr = ['pending', 'shipping', 'recived', 'deliverd']
    const opparr = arr?.map(data => {
        return <option value={data} selected={status==data?true:false}>{data}</option>
    })
    function changeCall(e)
    {
       call(e.target.value)
    }
  return (
    <div>
          <select name="" id="" onChange={changeCall}>
              {opparr}
      </select>
    </div>
  )
}
