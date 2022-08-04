import Logo from '../../../../../Assets/icono.png'
import { useState,useEffect } from 'react' 
import Styled from 'styled-components'
import {motion} from 'framer-motion'



const ImgS=Styled.img`
position: fixed;
z-index:3;
top:15px;
left:20px;
width:50px;
height:50px;
`;

const variantsLogo = {
    active: {
        scale:[1.3,1.8,2],
        y:[6,16, 1 ,7]
    },
    inactive: {
        scale:[2,1.8,1.3],
        y:[7,1,16,6]        
    },
  }

const LogoHeader=(props)=>{
    const [imgState,setImgState]=useState('active')

  
    useEffect(()=>{
        if(!props.effect){
            setImgState('active')
        }else{
            setImgState('inactive')
        }
    },[props.effect])

    return(
       
        <ImgS as={motion.img}
                src={Logo} 
                variants={variantsLogo}
                animate={imgState}
                initial={false} 
                transition={{ duration: 1 }} />

       
     
    )
}

export default LogoHeader