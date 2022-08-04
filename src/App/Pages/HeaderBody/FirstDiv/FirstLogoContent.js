import { useState,useEffect,useRef } from 'react'
import Styled from 'styled-components'
import {useIntersection} from 'react-use'

import NavMenuListResponsive from '../../../Components/MenuNavListResponsive/NavMenuListResponsive';

import HeaderName from '../../../Components/HeaderName/HeaderName';

const DivS=Styled.div`
margin-top:50px;
background-color:#d8810f;
width:100%;
display:flex;
flex-direction:column;
`;


const Div=Styled.div`
display:flex;
align-items:center;
justify-content:center;
background-color:${(props)=>(props.bColor?props.bColor:'initial')};
width:100%;
`;

const FirstDiv=(props)=>{

    const [aplly,setApply]=useState(false)
    const sectionRef=useRef(null)


    const intersection=useIntersection(sectionRef,{
        root:null,
        rootMargin:'0px',
        threshold:0.3
    })



    useEffect(() => {
        
        if(intersection){
        props.setShow(intersection.intersectionRatio<0.3)
      
    }
    }, [intersection])

    return(
        <DivS ref={sectionRef}>
            <Div>
                <HeaderName/>
            </Div>
            <Div bColor={'#267eb8'}>
                <NavMenuListResponsive/>
            </Div>
        </DivS>
    )
}

export default FirstDiv