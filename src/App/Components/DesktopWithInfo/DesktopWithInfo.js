import React,{useState,useEffect} from 'react' 
import {
        Desktop,
        Content,
        CloseButton,
        InfoDiv,
    }from './DesktopWithInfoStyled'
import MenuIconsButton from '../MenuIconButton/MenuIconButton'
import { useDispatch,useSelector } from "react-redux";
import { setOpenDesktop, setCloseDesktop, setContentDesktop} from "../../Store/DesktopWithInfo/DesktopWithInfo";
import { selectOpen, selectClose, selectContent} from "../../Store/DesktopWithInfo/DesktopWithInfo";


const DesktopWithInfo=()=>{
    const [OpenInfo,setOpenInfo]=useState(false)
    const [Scroll,setScroll]=useState(false)
    const open=useSelector(selectOpen)
    const close=useSelector(selectClose)
    const content=useSelector(selectContent)    
    const dispatch=useDispatch()

    const handlerClose=()=>{
        
        dispatch(setCloseDesktop(true))
        setTimeout(()=>{
            dispatch(setOpenDesktop(false))
            dispatch(setCloseDesktop(false))
            
        },650)
    }
    useEffect(()=>{
        setTimeout(() => {
            setOpenInfo(open)
        }, 200);
        setTimeout(() => {
            setScroll(open)
        }, 600)    },[open])
    

    return(            
            <Desktop
                    Open={open}
                    Close={close}>                
                <Content 
                    Open={!OpenInfo}
                    Close={close}
                    Scroll={Scroll}>
                    <CloseButton>
                        <MenuIconsButton NeverHidden={true} Cross click={handlerClose}/> 
                    </CloseButton>
                    <InfoDiv>
                        {content}   
                    </InfoDiv>

                </Content>
            </Desktop>
    )
}

export default DesktopWithInfo