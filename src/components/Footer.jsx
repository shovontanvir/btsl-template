import React from 'react'
import totop from '../assets/images/top.png'
import SmlogoCard from './SmlogoCard'

const Footer = ({theme}) => {
  return (
    <section className={`lg:px-48 px-5 pt-20 ${theme === "dark" ? "bg-footerbgdark" : "bg-footerbglight"} bg-cover bg-center`} id='contact'>
      <div>
          <div className={`${theme === "dark" ? "text-[#fff]" : "text-[#000]"}`}>
              <p className='font-prata font-normal text-2xl'>
                Ready to work with us?
              </p>
              <p className='py-3 tracking-widest font-prata font-normal lg:text-7xl text-4xl'>
                <a href = "mailto: abc@example.com">info@btracsl.com</a>
              </p>
          </div>
              <SmlogoCard theme={theme}/>
          <div className='flex flex-col basis-1/2 lg:flex-row lg:gap-32'>
              <div>
                <h1 className={` ${theme === "dark" ? "text-[#fff]" : "text-[#000]"} font-prata text-3xl font-normal py-5`}>
                  Address
                </h1>
                <p className='font-Inter font-normal text-lg py-5 text-[#4F4F4F] '>
                  Plot-68 (Old-45), Block-H, <br />Road-11Banani, Dhaka-1213 Bangladesh
                </p>
             </div>
             <div className=''>
                <h1 className={` ${theme === "dark" ? "text-[#fff]" : "text-[#000]"} font-prata text-3xl font-normal py-5`}>
                  Support
                </h1>
                <p className='font-Inter font-normal text-lg py-5 text-[#4F4F4F]'>
                  <a href="tel:+ 8802-883 8001-4">+ 8802-883 8001-4</a>
                </p>
             </div>
          </div>
          <div className='flex justify-end'>
          <a href="/">
              <button>
                <img src={totop} className='h-12 ' />
              </button>
             </a>
          </div>
          <div className='flex flex-col lg:flex-row justify-between border-t-2 border-[#424242] dark:border-[#606060] py-10 gap-5 lg:gap-0'>
            <p className={`${theme === "dark" ? "text-[#fff]" : "text-[#000]"} lg:text-start text-center font-Inter`}>
             ©2023 <a href="/"> 
             <span className='text-[#225FA9] '> B-Trac Solutions Ltd.</span></a>  All rights reserved.
            </p>
            <p className={`${theme === "dark" ? "text-[#fff]" : "text-[#000]"} lg:text-start text-center font-Inter`}>
             Site created by <a href="/"> 
             <span className='text-[#225FA9]'> B-Trac Solutions Ltd.</span></a>
            </p>
          </div>
      </div>
      
      
    </section>
  )
}

export default Footer