import IndustriesData from '../../../DummyData/IndustriesData'

const IndustriesCard = ({theme}) => {
   
  return (
    <div className='container mx-auto relative'>
        <div className='grid lg:grid-cols-4 grid-cols-2'>
            {IndustriesData.map((item) => (
                
                <div className="p-5" >
                  
                    <div className="container">
                      <img
                        className=""
                        src={theme === "dark" ? item.darkmodeimage : item.lightmodeimage}
                        alt="lightning-bolt"
                      />
                    </div>
                  
                    <h1 className={`lg:text-base text-xs  font-prata ${theme === "dark" ? "text-[#EDEDED]" : "text-[#161616]"} text-center`}>{item.title}</h1>
                </div>
                
            ))}

        </div>
        
    </div>
  )
}

export default IndustriesCard
