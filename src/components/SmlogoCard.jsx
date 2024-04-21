import React from 'react'
import SmlogoData from '../DummyData/SmlogoData'

const SmlogoCard = () => {
  return (
    
    <div className='container relative'>
        <div className='flex'>
            {SmlogoData.map((item) => (
                <a href={item.links} target='_blank'>
                    <button type=''>
                    <div className="pr-5 py-10" >
                      <img src={item.Image} alt="Socialmedialogo" className='w-14' />
                    </div>
                   </button>
                </a>
            ))}

        </div>
        
    </div>
    
  )
}

export default SmlogoCard