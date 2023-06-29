'use client'

import Image from "next/image";


var toggle=false

const ToggleComp = ({sendToggle}) => {
    //const [toggle, setToggle] = useState(false)

    const handleToggle= ()=>{
    
    
    toggle===true? toggle=false:toggle=true
    
    sendToggle(toggle)

}
    

 const imgStyle={
    width:'3vw',
    height:'auto'
 }
    
    return (
      
        <div onClick={handleToggle} className='bars'>
            <Image width={20} height={20} sizes='5vw' alt='bars to open the menu' style={imgStyle} src={'/../public/img/barsIcon.png'}></Image>
        </div>
        
    );
};

export default ToggleComp;