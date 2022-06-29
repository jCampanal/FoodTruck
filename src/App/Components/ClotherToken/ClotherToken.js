import  React,{useState} from 'react' 
import {ContentDiv, H2S,H3S, ImgS,ContentImgS} from './ClotherTokenStyled'
import { useDispatch,useSelector } from "react-redux";
import { setOpenModal, setContentModal,setTitleModal} from "../../Store/MotionGenerix/ModalGeneric";
import ClotherInfo from '../ClotherInfo/ClotherInfo';

const ClotherToken=({TokenData})=>{
    const [clicked,setClicked]=useState(false)
    const dispatch=useDispatch()


    const HandlerClicked=(Element)=>{

        dispatch(setTitleModal(Element.Nombre))
        dispatch(setContentModal(<ClotherInfo element={Element}/>))
        setTimeout(()=>{dispatch(setOpenModal(true))},200)
    }

    return(
        <ContentDiv onMouseUp={()=>{HandlerClicked(TokenData)}}>
            <ContentImgS>
                <ImgS src={TokenData.Src} alt='jpg' />
            </ContentImgS>
            <H2S>{TokenData.Nombre}</H2S>
            <H3S>{TokenData.Nombre}</H3S>
            
        </ContentDiv>
    )
}

export default ClotherToken