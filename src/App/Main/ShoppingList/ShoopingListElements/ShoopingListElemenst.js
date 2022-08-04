import Styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'


import { selectShopinList, CodeShopinList, eliminateShopingElement } from '../../../Store/ShopingList/ShopingList'
import ShoopingListElement from './ShoopingListElement/ShoopingListElement'


const MaxDiv=Styled.div`
display:flex;
flex-direction:column;
height:calc(100% - 64px);
max-height:calc(100% - 64px);
width:100%;
align-items:center;
overflow-x:hidden;
overflow-y:auto;


`


const ShoopingListElements=(props)=>{
    const List=useSelector(selectShopinList)
    const Code=useSelector(CodeShopinList)
    const dispatch=useDispatch()
    const handlerCloseElement=(Id)=>{

        dispatch(eliminateShopingElement({
            Code:[...Code],
            List:[...List],
            Id:Id
        }))
    }

    return(
        <MaxDiv>
            {List.map(element=>{
                return(
                    <ShoopingListElement
                                            key={element.Id}
                                            name={element.Nombre}
                                            price={element.Precio}
                                            amount={element.Cantidad}
                                            src={element.Src}
                                            delete={()=>{handlerCloseElement(element.Id)}}/>
                    
                )
            })}
        </MaxDiv>
    )
}

export default ShoopingListElements

