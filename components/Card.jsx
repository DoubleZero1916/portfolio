import React from 'react'
import { Poppins } from 'next/font/google'
import Image from 'next/image'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600']
})

const Card = ({title, desc, img}) => {
  return (
    <div className="border-t-2 border-t-[#693B93] rounded-[15px] sm:px-[50px] px-[30px] sm:py-[35px] py-[15px] bg-[linear-gradient(to_right,#130428_7%,_#251043_34%,_#38126D_57%,_#261045_85%,#190634_100%)]">
      <div className="flex">
        <div className="pr-[13px]">
          <Image
            src={`/${img}.svg`}
            width={121}
            height={100}
          />
        </div>
        <div className="pl-[13px]">
          <div>
            <div className="pb-[6px]">
              <div>
                <h3 className={`${poppins.className} font-[600] text-[18px] sm:text-[26px]`}>{title}</h3>
              </div>
              <div>
                <p className={`${poppins.className} font-[500] text-[6px] sm:text-[8px] max-w-[230px]`}>
                  {desc}
                </p>
              </div>
            </div>
            <div className="pt-[6px]">
              <button className="bg-[#2C1250] border-[#693B93] rounded-[10px] w-full sm:w-auto sm:px-[30px] py-[10px] sm:py-[10px] border-[1px] text-[8px] sm:text-[10px]">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card