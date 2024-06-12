import Image from 'next/image'
import React from 'react'

const Project = ({ title, desc, img }) => {
  return (
    <div className="flex project">
      <div>
        <div className="pb-[15px]">
          <div>
            <h3 className="font-[600] text-[#9857D3]">Featured  Project</h3>
          </div>
          <div>
            <h2 className="text-[#CCD6F6] text-[34px] font-[600]">{title}</h2>
          </div>
        </div>
        <div className="pt-[15px] pb-[18px]">
          <div className="backdrop-blur-md shadow-md pt-[25px] text-[18px] font-[500] pb-[30px] pr-[50px] pl-[35px] max-w-[585px]">
            <p>
              {desc}
            </p>
          </div>
        </div>
        <div className="pt-[18px] pl-[35px]">
          <div className="flex gap-[17px]"> { /* ALTERNATIVE. False the use gap in flex */ }
            <div>
              <Image
                src={`/icons/mouse.svg`}
                width={31}
                height={31}
              />
            </div>
            <div>
              <Image 
                src={`/icons/mouse.svg`}
                width={31}
                height={31}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-[580px] h-[340px]">
          <div>
            <Image
              src={`${img}`}
              width={100}
              height={10}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project