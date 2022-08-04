import React, {useState} from 'react' 
import Styled from 'styled-components'

const Button=Styled.button`
display:flex;
padding: 10px 0;
justify-content:center;
align-items:center;
width:150px;
background-color:${(props)=>(props.active?props.color[0]:props.color[1])};
color:${(props)=>(props.active?props.color[1]:props.color[0])};
cursor:pointer;
margin:10px;
border:none;
border-radius:10px;
transition: all 500ms; `;


const Icon= Styled.div`
width:20px;
height:20px;
margin-right:10px;
`

const H4S=Styled.h4`
margin:0;`;


const FooterShoppingListButton=(props)=>{
    const [active,setActive]=useState(false)
    return(
        <Button onMouseOver={()=>setActive(true)}
                onMouseLeave={()=>setActive(false)}
                onTouchStart={()=>{setActive(true)}}
                onTransitionEnd={()=>setActive(false)}
                onClick={()=>{props.click()}}
                active={active}
                color={props.color}>
            <Icon>{props.children}</Icon>
            <H4S>{props.caption}</H4S>
        </Button>
    )
}

export default FooterShoppingListButton