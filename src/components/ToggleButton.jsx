import React, {useEffect, useState} from 'react'


const ToggleButton = ({themeHandler}) => {
  
  const [theme, setTheme] = useState ("dark");
  const element = document.documentElement;
  // const darkQuery = window.matchMedia ("(prefers-color-scheme: dark)")
  const options = [
    {
      icon:"sunny",
      text:"light"
    },
    {
      icon:"moon",
      text:"dark"
    },
    // {
    //   icon:"desktop-outline",
    //   text:"system"
    // }
  ];

  
  // function onWindowMatch(){
  //    if (localStorage.theme === 'dark' || 
  //    (!("theme" in localStorage &&  darkQuery.matches))) 
  //    {
  //     element.classList.add("dark");
  //    }
  //    else
  //    {
  //     element.classList.remove("dark");
  //    }
  // }
  // onWindowMatch();
  // useEffect(() =>{
  //    switch (theme) {
  //     case 'dark':
  //       element.classList.add('dark');
  //       localStorage.setItem('theme','dark');
  //       break;
  //     case 'light':
  //       element.classList.remove('dark');
  //       localStorage.setItem('theme','light')
  //       break;
  //     default:
  //       localStorage.removeItem('theme');
  //       onWindowMatch()
  //       break;
  //    }
  // },[theme]);

  //  darkQuery.addEventListener("change",(e)=>{
  //     if (!("theme" in localStorage)) {
  //       if (e.matches) {
  //         element.classList.add("dark");
  //       }
  //       else{
  //         element.classList.remove("dark");
  //       }
  //     }
  //  });



  const handleThemeChange = (themeValue) => {
    setTheme(themeValue);
  }

  useEffect(() => {
    
    themeHandler(theme);
  }, [theme])

  return (
    <div className='fixed top-1/2 right-10 z-50  duration-100 bg-gray-100 dark:bg-slate-700 rounded-3xl rotate-90 invisible lg:visible'>
        {options?.map((opt)=>(
            <button 
              key={opt.text} 
              onClick={() => handleThemeChange(opt.text)}
              className={`w-8 h-9 leading-9 text-xl rounded-full  m-1 -rotate-90
              ${theme === opt.text && "text-sky-600" }`}>
                <ion-icon name={opt.icon}></ion-icon>
            </button>
          ))
        }
    </div>
  )
}

export default ToggleButton
