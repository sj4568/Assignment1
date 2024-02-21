import React from 'react'

export default function GetL(name) {
  return JSON.parse(localStorage.getItem(name))
}
