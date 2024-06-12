import Image from 'next/image'
import React from 'react'

const Project = ({ title, desc, img }) => {
  return (
    <div className="flex lg:flex-row flex-col items-center project">
      <div className='projectDesc'>
        <div className="pb-[15px]">
          <div>
            <h3 className="font-[600] sm:text-[16px] text-[14px] text-[#9857D3]">Featured  Project</h3>
          </div>
          <div>
            <h2 className="text-[#CCD6F6] text-[30px] sm:text-[34px] font-[600]">{title}</h2>
          </div>
        </div>
        <div className="pt-[15px] pb-[18px]">
          <div className="backdrop-blur-md shadow-md pt-[25px] pb-[30px] sm:pr-[50px] pr-[30px] sm:pl-[35px] pl-[15px] sm:text-[18px] text-[12px] font-[500] max-w-[585px]">
            <p>
              {desc}
            </p>
          </div>
        </div>
        <div className="sm:block hidden pt-[18px] pl-[35px]">
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
      <div> {/* Commented Code here */} IMAGE</div>
    </div>
  )
}

{/* 
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
*/}

export default Project