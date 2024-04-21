import React from 'react'

const LeaveReply = () => {
  return (
    <div className='grid gap-10'>
        <div className=' dark:bg-[#232323] bg-[#FFF] py-6 border dark:border-[#181818] border-[#E2E2E2] '>
           <div className='p-5 '>
              <p className='dark:text-[#000] border-b-2 dark:border-[#181818] border-[#8D8D8D] pb-5 font-normal text-xl font-blackerdisplay'> Posted in <span className='text-[#484848]'> Uncategorized</span></p>
           </div> 
        </div>
        <div className='dark:bg-[#232323] bg-[#FFF] border border-[#E2E2E2] dark:border-[#181818] py-6 p-5'>
            <p className='dark:text-white text-black border-b-2 dark:border-[#181818] border-[#8D8D8D] pb-5 font-blackerdisplay text-xl font-normal '>Leave A Reply</p>
            <p className='dark:text-white pt-5 font-blackerdisplay text-xl font-normal'>Your email address will not be published.</p>
            <div className='flex xl:justify-normal xl:gap-8 justify-between lg:flex-row flex-col'>
                <div>
                   <p className='text-[#606060] font-blackerdisplay text-2xl font-normal py-5'>Name</p>
                   <input required className=' peer font-blackerdisplay lg:w-[33rem] w-80 px-5 py-3 dark:bg-[#252525] border dark:border-[#474747] bg-[#F7F7F7] border-[#DADADA] dark:text-white text-black' 
                   type="Name" placeholder='Full Name' />
                   <p class="invisible peer-invalid:visible text-red-700 font-blackerdisplay py-1">
                   Please enter your name</p>
                </div>
                <div>
                   <p className='text-[#606060] font-blackerdisplay text-2xl font-normal py-5'>Email</p>
                   <input type="mail" name="email" id="email" placeholder='Email Address' required className="peer font-blackerdisplay lg:w-[33rem] w-80 px-5 py-3 dark:bg-[#252525] border dark:border-[#474747] bg-[#F7F7F7] border-[#DADADA] dark:text-white text-black"/>
                   <p className=" text-red-700 font-blackerdisplay py-1">
                   Please enter a valid email address</p>
                </div>
                
            </div>
            <div className='py-5'>
                <input type="checkbox" className='' id="checkbox"/>
                <label className='dark:text-white font-blackerdisplay text-xl font-normal' for="check"> Save my name, email, and website in this browser for the next time I comment.</label>
                <p className='text-[#606060] font-blackerdisplay text-2xl font-normal py-5'>Comment</p>
                <textarea name="message" id="message" cols="30" rows="3" required
                className="peer lg:w-[68rem] w-80 h-28 p-5 dark:bg-[#252525] border dark:border-[#474747] bg-[#F7F7F7] border-[#DADADA] dark:text-white text-black "></textarea>
            </div>
            <button className='text-white text-xl font-normal font-blackerdisplay px-5 py-3 bg-[#225FA9] flex justify-center items-center hover:bg-blue-500  transition-all duration-500 '>Submit</button>
        </div>
    </div>
    
  )
}

export default LeaveReply