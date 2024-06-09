"use client"
import React from 'react'

const ShareBtn = () => {
  console.log("shared!")
  return (
    <div>
      <button onClick={()=> console.log("clicked")}>Click Me</button>
    </div>
  )
}

export default ShareBtn
