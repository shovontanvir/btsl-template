import React from 'react'
import { useNavigate } from 'react-router-dom';
import BlogsAndVlogsData from '../../../DummyData/BlogsAndVlogsData';

const BlogsAndVlogsCard = ({theme}) => {
const navigate = useNavigate ()
  return (
    <div className='container realtive ' >
     <div className='grid lg:grid-rows-3 '>
        {BlogsAndVlogsData.map((item, index) => (       
            <div className={` flex-col lg:flex-row ${index === 0 && 'border-t'} border-b group ${theme === "dark" ? "border-[#979797]" : "border-[#3C3C3C]"} flex relative`} >
                <div className='lg:basis-4/5 lg:pr-52 py-8'>
                    <button className={` rounded-3xl px-4 ${theme === "dark" ? "bg-[#232325]" : "bg-[#ECECEC]"}`}>
                    <p className=' text-[#225FA9] font-syne ' >{item.blog}</p>
                    </button>
                    <h1 className={`font-blackerdisplay text-2xl ${theme === "dark" ? "text-white" : "text-black"} pb-5 group-hover:text-[#225FA9] dark:hover:text-[#225FA9]  transition-all duration-500 pt-5`}>{item.headline}</h1>
                    <p className={`font-syne font-normal text-xl ${theme === "dark" ? "text-white" : "text-black"}`}>{item.date}</p>
               </div>  
               <div className='basis-1/5 flex lg:justify-center lg:items-center z-10 pb-10 lg:pb-0'>
                     <button onClick={() => navigate('blog-details')}  className={`w-1/4 rounded-full aspect-square border ${theme === "dark" ? "border-white" : "border-black"} flex justify-center items-center group-hover:bg-[#225FA9] transition-all duration-1000`}>         
                     <img className='absolute w-8' src={theme === "dark" ? item.rww : item.rwd} alt="" /> 
                      </button>
               </div>
               <div className=' absolute transition-all duration-500 w-80 right-0 -top-[12.5%]'>
                    <img src={item.blogimage} alt="BlogCover" className='opacity-0 group-hover:opacity-100 transition-all duration-500 invisible lg:visible  '/>               
               </div>                
            </div>
        ))}
     </div>
   </div>
)}

export default BlogsAndVlogsCard;