import { Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage/Home'
import Navbar from './components/Navbar'
import ToggleButton from './components/ToggleButton'
import Footer from './components/Footer'
import { menuItems } from './router/Path'
import Blog from './pages/BlogPage/Blog'
import BlogDetail from './pages/BlogDetailPage/BlogDetail'
import CustomCursor from './components/CustomCursor'
import { useEffect, useState } from 'react'
import { gsap } from 'gsap/gsap-core'


// import ScrollToTop from './components/ScrollToTop'




function App() {
  const [theme, setTheme] = useState("dark");

  const themeHandler = (value) => {
    setTheme(value);
  }
  


  // useEffect(() => {
  //   setTheme(themeValue)
  // }, [themeValue])


  
  return (

    <>
      {/* <ScrollToTop /> */}
      <Navbar theme={theme}/>
      <ToggleButton themeHandler={themeHandler}/>
      <CustomCursor/>
      <Home theme = {theme}/>
      {
        // <Routes>
        //   {
        //     menuItems.map(item => (
        //       <Route path={item.path} element={item.element} key={item.id} />
        //     ))
        //   }
        //   <Route path='blog-details' element={<BlogDetail />}/>
        // </Routes>
      }
      
      <Footer theme={theme}/>
    
    </>

  )
}

export default App
