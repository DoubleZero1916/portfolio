import Image from 'next/image'
import React from 'react'

const Logo = ({ img, width }) => {
  return (
    <div className="bg-[#251C31] rounded-[50%] w-[44px] h-[44px] flex justify-center items-center">
      <Image 
        src={`${img}`}
        width={width}
        height={28}
      />
    </div>
  )
}

export default Logo