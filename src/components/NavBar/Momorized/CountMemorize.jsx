import React from 'react'

export default function CountMemorize(value) {
    let obj = {}
    if (obj[value])
    {
        return obj[value]
    }
    else
    {
        
        obj[value]=value
        return obj[value]
    }
    
    
}
