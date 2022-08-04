

import {ShoopingElementContent, BasicContent} from '../../../../Common/Contents/Content'
import {ImgS,H3S,H4S,DeleteDiv} from './ShoopingListElementStyled'
import CloseIcon from '@mui/icons-material/Close'

const ShoopingListElement=(props)=>{
    return(
        <ShoopingElementContent>
            <BasicContent First>
                <H3S>{props.name}</H3S>
            </BasicContent>
            <BasicContent First>
                <BasicContent>
                    <ImgS src={props.src}/>
                </BasicContent>
                <BasicContent left>
                    <BasicContent First left>
                        <H4S>{'Amount: '}</H4S>
                        <H4S>{props.amount}</H4S>
                    </BasicContent>
                    <BasicContent First left>
                        <H4S>{'Price (u): '}</H4S>
                        <H4S>{props.price}</H4S>
                    </BasicContent>
                </BasicContent>
            </BasicContent>
            <DeleteDiv onClick={()=>{props.delete()}}>
                <CloseIcon/>
            </DeleteDiv>
        </ShoopingElementContent>
    )
}

export default ShoopingListElement