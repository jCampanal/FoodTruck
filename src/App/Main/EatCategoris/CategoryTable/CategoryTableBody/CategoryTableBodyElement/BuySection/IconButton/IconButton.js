import React,{useState} from 'react'
import Styled from 'styled-components'
import {motion} from 'framer-motion'

const IconButtonS=Styled.button`
background-color:initial;
border-radius:10px;
border:none;
color:${(props)=>(props.active?'initial':props.color)};
transition: all 500ms;
display:flex;
align-items:center;
justify-content:center;
cursor:pointer; `;

const IconButton=(props)=>{
    const [active,setActive]=useState(false)

    const variantsClick = {
        active: {
            y:[0,props.y]
        },
        inactive: {
            y:[props.y,0]        
        },
      }

    return(
        <IconButtonS as={motion.button}
            onClick={props.clickCapture}
            onMouseUp={()=>{setActive(false)}}
            onMouseDown={()=>{setActive(true)}}
            onTouchStart={()=>{setActive(true)}}
            onTouchEnd={()=>{setActive(false)}}
            color={props.color}
            active={active}
            variants={variantsClick}
            animate={active?'active':'inactive'}
            initial={false} 
            transition={{ duration: 0.3 }}>
            {props.children}
        </IconButtonS>
    )
}

export default IconButton