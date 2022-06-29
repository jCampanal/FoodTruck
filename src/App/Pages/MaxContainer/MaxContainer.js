import React from 'react'
import styled from 'styled-components'

const Max=styled.div`
position:fixed;
width:100%;
height:100%;
top:0;
left:0;
overflow-y: auto;
overflow-x: hidden;
scrollbar-width: none;`;

const MaxContainer=(props)=>{
    return(
        <Max>
            {props.children}
        </Max>
    )
}

export default MaxContainer