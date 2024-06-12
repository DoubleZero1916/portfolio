import React from 'react'
import { Plus_Jakarta_Sans } from 'next/font/google'

const plus_Jakarta_Sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: '600'
})

const Header = () => {
  return (
    <header className='md:pb-[100px] pb-[50px] text-[20px]'>
      <div className={`px-[20px] bg-[#1A0B2E] ${plus_Jakarta_Sans.className}`}>
        <div className='m-auto max-w-[1200px]'>
          <div className='flex lg:flex-row flex-col justify-between lg:items-start items-center py-[40px]'>
            <div className='lg:pb-0 pb-[10px]'>
              <h2>
                Oqtay Hashimli
              </h2>
            </div>
            <div className='lg:pl-[10px] sm:text-[16px] text-[14px] lg:pt-0 pt-[10px] max-w-[500px] w-full'>
              <ul className='flex justify-between w-full'>
                <li>Home</li>
                <li>About</li>
                <li>Lab</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header