import React from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import {
    ModalDiv,
    DivTitle,
    Title

}from './ModalGenericStyled'
import { useDispatch,useSelector } from "react-redux";
import { setOpenModal} from "../../Store/MotionGenerix/ModalGeneric";
import { selectOpen, selectContent,selectTitle} from "../../Store/MotionGenerix/ModalGeneric";
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import LogMenu from '../LogMenu/LogMenu';
const ModalGeneric=()=>{
    const open=useSelector(selectOpen)
    const content=useSelector(selectContent)
    const Title=useSelector(selectTitle)
    console.log(Title)   
    const dispatch=useDispatch()

    const HandleCloseButtonClick=()=>{
        dispatch(setOpenModal(false))
    }

    return(
        <AnimatePresence>
       {open&& <ModalDiv as={motion.div} initial={{opacity:0,y:[0,32]}} animate={{opacity:1,y:30}} exit={{opacity:0,y:[32,-10]}} >
            <DivTitle>
                <h2 style={{ margin:'0 0 0 20px',color: 'white'}}>{Title}</h2>
                <IconButton sx={{marginRight:1,color:'white'}} onClick={HandleCloseButtonClick}>
                    <ClearIcon />
                </IconButton> 
            </DivTitle>
             {content}
        </ModalDiv>}
        </AnimatePresence>
    )
}

export default ModalGeneric