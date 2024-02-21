import React from 'react'

export default function SetL(name,state) {
    localStorage.setItem(name,JSON.stringify(state))

}
