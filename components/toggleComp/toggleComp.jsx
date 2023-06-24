'use client'

import React, { useState } from 'react';
import Image from "next/image";



const ToggleComp = ({sendToggle}) => {

    const [toggle, setToggle] = useState(false)
   


    const handleToggle= ()=>{
    toggle===true? setToggle(false):setToggle(true)
    sendToggle(toggle)

}
    

    
    return (
      
        <div onClick={handleToggle} className='bars'>
            <Image width={25} height={25} alt='bars to open the menu' src={'/../public/img/barsIcon.png'}></Image>
        </div>
        
    );
};

export default ToggleComp;