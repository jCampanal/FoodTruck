import React,{useState} from 'react' 
import {
    FirstDiv,
    GeneralContent,
    Picture,
    InfoContentDiv,
    InfoDiv,
    TextDiv,
    MarcaIMG,
    IMGS,
    H4S,
    H3S,
    InfoDivAux
}from './ClotherInfoStyled'
import { setOpenDesktop, setCloseDesktop, setContentDesktop }from '../../Store/DesktopWithInfo/DesktopWithInfo'
import { useDispatch,useSelector } from "react-redux";
import BuySection from './BuySection/BuySection';


const ClotherInfo=({element})=>{
    const dispatch=useDispatch()

    const ClickHandlerPicture=()=>{
        dispatch(setContentDesktop([<InfoDivAux>
                                        <IMGS Desktop src={element.Src}/>            
                                    </InfoDivAux>]))

        dispatch(setOpenDesktop(true))
    }

    return(
        <FirstDiv>
            <GeneralContent>
                <H3S>{element.Descripcion}</H3S>
            </GeneralContent>
            <InfoContentDiv>
                <InfoDiv>
                    <TextDiv>
                        <H4S>{'Precio: '}</H4S>
                        <H4S Margin>{'$'+element.Precio}</H4S>
                    </TextDiv>
                    <TextDiv>
                        <H4S>{'Rebajas: '}</H4S>
                        <H4S Margin>{element.rebaja+'%'}</H4S>
                    </TextDiv>
                    <TextDiv>
                        <H4S>{'Existencias: '}</H4S>
                        <H4S Margin>{element.Existencias}</H4S>
                    </TextDiv>
                </InfoDiv>
                <InfoDiv Marca>
                    <MarcaIMG src={element.MarcaSRC}/>
                </InfoDiv>
            </InfoContentDiv>
            <GeneralContent> 
                <Picture src={element.Src} onClick={()=>{ClickHandlerPicture()}}/>
            </GeneralContent>
            <BuySection element={element}/>

        </FirstDiv>
    )
}


export default ClotherInfo