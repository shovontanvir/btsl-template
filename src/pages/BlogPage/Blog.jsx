import React from 'react'
import BlogCard from './Partials/BlogCard'

const Blog = ({theme}) => {
  return (
    <section>
        <div className='lg:px-48 px-5 text-center py-56 bg-blogpagelight dark:bg-blogpagedark  bg-cover bg-center'>
            <h1 className='text-7xl font-blackerdisplay dark:text-[#fff] text-[#000] '>
                Blog
            </h1>
            <p className='text-2xl dark:text-[#fff] py-5 font-prata'>
                <span className='text-[#225fa9]'>BTSL |</span> BLOG
            </p>
        </div>
        <div className='lg:px-48 px-5 lg:py-28 py-10 basis-1/2 dark:bg-[#181818] bg-[#fff]'>
          <BlogCard theme={theme}/> 
        </div>
        
    </section>
  )
}

export default Blog