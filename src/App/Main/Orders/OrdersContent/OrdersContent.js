import React from 'react' 
import Styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import { CancelHistorialElements, selectHistorialList, CodeHistorialList } from '../../../Store/HistorialData/HistorialData'
import { BasicContent } from '../../../Common/Contents/Content'

import OrderContent from './OrderContent/OrderContent'

const ContentDiv=Styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:100%;
overflow:auto;
height:100%;`




const OrdersContnet=(props)=>{
    const Historial=useSelector(selectHistorialList)
    const Code=useSelector(CodeHistorialList)
    const dispatch=useDispatch()

    const StateOfOrder=(d,state)=>{
        const deliver=new Date(d)
        const nowDate=new Date

        const spent=(deliver-nowDate)/60000
        
        if(state==='XXX'){
            if(spent<0){
                return 'Delivered'
            }else if(spent>30){
                return 'InProccess'
            }else {
                return 'Onthetruck'
            }
        }else{
            return 'Canceled'
        }
        
    }
    
    const HandlerCancelOrder=(id)=>{
        dispatch(CancelHistorialElements({
            List:Historial,
            Id:id}))
    }
//Los primeros elementos son pruebas para borrar
return(
    <ContentDiv>
        <OrderContent
                        Id1={'dr456'}
                        Id2={'re56ty87'}
                        address={'La Havana, Marianao, Calle 64 entr 15 y 75, edif 45 dpto 98'}
                        price={'10.0596'}
                        deliver={new Date}
                        food={[
                            {
                                Name: 'Stick',
                                Amount: '1',
                                Price: '10.0596'
                            }
                        ]}
                        status={'Delivered'}
                        Prove/>
        <OrderContent
                        Id1={'dr456'}
                        Id2={'re56ty87'}
                        address={'La Havana, Marianao, Calle 64 entr 15 y 75, edif 45 dpto 98'}
                        price={'10.0596'}
                        deliver={new Date}
                        food={[
                            {
                                Name: 'Stick',
                                Amount: '1',
                                Price: '10.0596'
                            }
                        ]}
                        status={'Onthetruck'}
                        Prove/>
        
        {Historial.map((element,index)=>{

            return(<OrderContent
                        key={element.Id}
                        Id1={element.Id.slice(0,23)}
                        Id2={element.Id.slice(24,-1)}
                        address={element.Address}
                        price={element.Price}
                        deliver={new Date(element.Deliver)}
                        food={element.Elements}
                        status={StateOfOrder(element.Deliver,element.Status)}
                        click={()=>{HandlerCancelOrder(element.Id)}}/>)
        })}
    </ContentDiv>)
}

export default OrdersContnet