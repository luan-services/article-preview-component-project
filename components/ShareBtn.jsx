import React from 'react'
import shareIcon from "../src/assets/images/icon-share.svg"

const ShareBtn = ({onClick}) => {
  return (
    <button onClick={onClick} className="text-sm text-custom-gray-500 font-manrope-bold 
      p-2.5 rounded-full bg-custom-light-grayish-blue hover:cursor-pointer active:scale-80 transition"> 
        <img className="w-4.5" src={shareIcon} alt="icon"></img>
    </button>
  )
}

export default ShareBtn
