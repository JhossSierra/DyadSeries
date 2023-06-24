import Image from 'next/legacy/image'
import MyLayout from '../../layout/myLayout'
import React from 'react'
import './page.css'

export default function Home() {
  
  return (
  <>

  <MyLayout>
    
    <Image priority='true' quality={100} className='coverImg' src={'/../public/img/bannerImg1.jpg'} layout='responsive' height={758} width={1687}/>
    
    <div className="gridContainer">
    
    <div className='line'></div>
    
    
    
    
    </div>
  </MyLayout>
  </> 
  )
}
