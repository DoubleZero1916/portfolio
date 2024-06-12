import Image from 'next/image'
import React from 'react'
import { Preahvihear } from 'next/font/google'

const preahvihear = Preahvihear({
  subsets: ['latin'],
  weight: '400' 
})

const Footer = () => {
  return (
    <footer className='pt-[115px] pb-[220px]'> {/* Api for Admin panel */}
      <div className='px-[20px]'>
      <div className={`${preahvihear.className} m-auto max-w-[1200px]`}>
          <div className='pb-[20px] text-[25px]'>
            <h4>Contact</h4>
          </div>
          <div className='pt-[20px] text-[15px] pb-[10px]'>
            <div className='max-w-[700px] pb-[10px]'>
              <p>
                I&apos;m currently looking to join a cross-functional team that values improving people&apos;s livesthrough accessible design. or have a project in mind? Let&apos;s connect.
              </p>
            </div>
            <div className='pt-[10px]'>oqtay07az@gmail.com</div>
          </div>
          <div className='pt-[10px] flex max-w-[110px] justify-between'>
            {/* LinkedIn Instagram Github */}
            {/* LinkedIn Instagram Github */}
            <span>
              <Image 
                src={`/logo/github.svg`}
                width={15}
                height={15}
              />
            </span>
            <span>
              <Image
                src={`/logo/linkedin.svg`}
                width={15}
                height={15}
              />
            </span>
            <span> {/* Instagram has low resolution. You neet to find svg */}
              <Image
                src={`/logo/instagram-white-icon.webp`}
                width={15}
                height={15}
              />
            </span>
          </div>
        </div>        
      </div>
    </footer>
  )
}

export default Footer