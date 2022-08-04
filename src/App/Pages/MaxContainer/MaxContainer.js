import React, {useEffect} from 'react'
import styled from 'styled-components'
import { useSelector,useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import {setNavOpacity} from '../../Store/NavEffect/NavEffect';
import {selectNavOpacity} from '../../Store/NavEffect/NavEffect'
import HeaderBody from '../HeaderBody/Header'
import FoodSection from '../FoodSection/FoodSection';
import GlobalContentDiv from '../../Components/GlobalSectionContent/GlobalSectionContent';

const Max=styled.div`
position:fixed;
opacity:${(props)=>(props.Opacity?'1':'0')};
width:100%;
height:100%;
top:0;
left:0;
overflow-y: auto;
overflow-x: hidden;
scrollbar-width: none;
transition:all 500ms;`;

const Min = styled.div`
opacity:${(props)=>(props.Opacity?'1':'0')};
width:100%;
transition:all 500ms;`

const Dspl = styled.div`
display:${(props)=>(props.Display?'flex':'none')};
width:100%;`

const MaxContainer=(props)=>{
    const location = useLocation()
    const NavOpacity=useSelector(selectNavOpacity)
    const dispatch=useDispatch()
   

    useEffect(()=>{
        if(location.pathname==='/logguin'){
            setTimeout(()=>{ dispatch(setNavOpacity([true,true,false]))},800)
        }else{
            setTimeout(()=>{ dispatch(setNavOpacity([true,true,true]))},800)
        }
        
       
    },[])

    
    return(
        <Max Opacity={NavOpacity[0]}>
            <Dspl Display={NavOpacity[2]}>
            <HeaderBody/>
            </Dspl>
            <Min Opacity={NavOpacity[1]}>
            {props.children}
            </Min>
            {(!NavOpacity[1]&&NavOpacity[2])&&<GlobalContentDiv/>}
            <Dspl Display={NavOpacity[2]}>
            <FoodSection/>
            </Dspl>
        </Max>
    )
}

export default MaxContainer