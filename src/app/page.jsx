import Image from 'next/legacy/image'
import MyLayout from '../../layout/myLayout'
import React from 'react'
import './page.css'

export default function Home() {
  return (
  <>

  <MyLayout>
    {/* estos son los que oscurecen la pantalla*/}
    <div className='open'></div>
    <div className="close"></div>
    
    
    <Image className='coverImg' src={'/../public/img/bannerImg.jpg'} layout='responsive' height={1080} width={1920}/>
    <div className='line'></div>
  </MyLayout>
  </> 
  )
}
