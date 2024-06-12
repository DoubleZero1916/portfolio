import React from 'react'
import { Plus_Jakarta_Sans } from 'next/font/google'

const plus_Jakarta_Sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: '600'
})

const Header = () => {
  return (
    <header className='pb-[100px] text-[20px]'>
      <div className={`px-[20px] bg-[#1A0B2E] ${plus_Jakarta_Sans.className}`}>
        <div className='m-auto max-w-[1200px]'>
          <div className='flex justify-between py-[40px]'>
            <div>
              Oqtay Hashimli
            </div>
            <div className='pl-[10px] max-w-[500px] w-full'>
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