import React,{useEffect} from 'react' 
import {
    FirstContent,
    SecondContent,
    ContentDiv,
    IMGS,
    H3S,
    BackDiv,
} from './LogStyled'
import LogMenenu from '../../Components/LogMenu/LogMenu'
import Logo from '../../../Assets/icono.png'
import { selectOpen, selectContent} from "../../Store/MotionGenerix/ModalGeneric";
import {selectNavOpacity,setNavOpacity} from '../../Store/NavEffect/NavEffect'
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { handleBreakpoints } from '@mui/system';

const Log=(props)=>{
    const location=useLocation()
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const handleBack=()=>{
        dispatch(setNavOpacity([false,false,false]))
       
        setTimeout(()=>{
            navigate('/')
        },[800])  
    }

    useEffect(()=>{
        if(location.pathname==='/logguin')
        dispatch(setNavOpacity([true, true,false]))
    },[location.pathname])
   
    


    return(
        <FirstContent >
            <ContentDiv Idx={1} Height={'100vh'}>
                <SecondContent>
                    <LogMenenu/>
                </SecondContent>
                <BackDiv>
                    <H3S onClick={()=>{handleBack()}}>Back</H3S>
                </BackDiv>
            </ContentDiv> 
            <ContentDiv >
                <IMGS src={Logo} Height={'100vh'}/>
            </ContentDiv>    
        </FirstContent>
    )
}



export default Log