import React from 'react' 
import {Conteind, 
        Picture,
         AbsoluteDivConteind} from './PictureComponentStyled'  
import SectionH1 from '../../Common/Captions/SectionH1/SectionH1'
import SectionH3 from '../../Common/Captions/SectionH3/SectionH3'

const PictureComponent=(props)=>{
    return(
        <Conteind {...props}>
        <Picture {...props}>
        </Picture>
        <AbsoluteDivConteind>
            <SectionH1>{props.header}</SectionH1>
           {props.body&&<SectionH3>{props.body}</SectionH3>}
        </AbsoluteDivConteind>
        </Conteind>
    )
}


export default PictureComponent