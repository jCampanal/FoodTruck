import React from 'react' 
import Styled from 'styled-components'
import ButtonInterection from './ButtonInterection/ButtonInterection';

const Content=Styled.div`
position:absolute;
top:100%;
right:0;
border-radius:20px 0 0 20px;
display:flex;
padding: 3px 10px;
background-color:#a19898ab;
z-index:100;`;

const NavInteretionSelect=(props)=>{

    return(
        <Content>
            {props.elements.map((element,index)=>{
                return(
                    <ButtonInterection key={'button'+index} clicked={element} click={props.click} index={index}/>
                )
            })}
        </Content>
    )
}

export default NavInteretionSelect