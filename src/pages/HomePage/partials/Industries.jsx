import React from 'react'
import IndustriesCard from './IndustriesCard'

const Industries = ({theme}) => {
  return ( 
    <section className={`lg:px-48 px-5 ${theme === "dark" ? "bg-[#222]" : "bg-[F4F4F4]"} bg-cover bg-center`}id='client'>
        <div className={`lg:py-24 py-10 flex flex-col lg:flex-row justify-between ${theme === "dark" ? "text-white" : "text-black"}`}>
            <h1 className='font-blackerdisplay font-normal lg:text-6xl text-5xl lg:pb-0 pb-10'>
            Clients we share
            </h1>
            <p className='font-prata font-normal text-xl lg:text-right'>
            More than 20+ brands are already <br/> partner to improve their power
            </p>
        </div>
        <div className='lg:pb-12 pb-5'>
           <IndustriesCard theme={theme}/>
        </div>
    </section>
  )
}

export default Industries