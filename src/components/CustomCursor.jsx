import React from 'react'
import AnimatedCursor from "react-animated-cursor"

const CustomCursor = () => {
  return (
    <AnimatedCursor
   
      innerSize={8}
      outerSize={35}
      outerAlpha={0}
      innerScale={1}
      outerScale={2}
      hasBlendMode={true}
    innerStyle={{
      backgroundColor: 'var(--cursor-color)'
    }}
    outerStyle={{
      border: '1px solid var(--cursor-color)'
    }}

    showSystemCursor={true}
  
  
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}

      />
    
  )
}

export default CustomCursor