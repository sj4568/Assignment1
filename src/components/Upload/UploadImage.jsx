import axios from 'axios';
import React, { useState } from 'react'

export default function UploadImage(files) {
       
    const form = new FormData();
    const [data,setData]=useState({})
       form.set("image", files && files[0]);
       form.set("key", "55d07bcbfea93bd44662af25d0776cad");
       axios.post("https://api.imgbb.com/1/upload", form).then((dat) => {
           const data = dat.data;
           setData(data?.data)
       });


    return {display_url,delete_url}=data
            
}
