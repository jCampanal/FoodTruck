import { useState,useEffect } from 'react'

import Styled from 'styled-components'

import NavMenuIneractiveItem from './NavMenuInteractiveItem/NavMenuIneractiveItem'
import NavInteretionSelect from './NavInteretionSelect/NavInteretionSelect'

import {MenuOtipons} from '../../../Lib/MenuOptions'

const Div = Styled.div`
position:relative;
width:100%;
height:40px;
`;

let time

const NavMenuInteractive=(props)=>{
    const [elements,setElements]=useState([])
    const [state,setState]=useState([])
    const [complete,setComplete]=useState(props.size===MenuOtipons.length)

    const handlerClick=(Index)=>{
        window.clearTimeout(time)
        const Nstate=state.map((element,index)=>{
            return(index===Index)
            })
        setState(Nstate)

    }

    useEffect(()=>{
        setComplete(props.size===MenuOtipons.length)
    },[props.size])

    useEffect(()=>{
        if(!(props.size===MenuOtipons.length)){
            let change=false;
            const Nstate=state.map((element,index)=>{
                if(element||change){
                    change=!change;
                    return(!element)
                }else{
                    return(element)
                }
            })
            if(change){
                Nstate[0]=true
            }
        
            
            time=setTimeout(()=>{setState(Nstate)},10000)
        }   
    },[state])

    useEffect(()=>{
        if(!(props.size===MenuOtipons.length)){
        let cantidad=0
        let i=0
        let Nstate=[]
        let Nelement=[]
        cantidad=(Math.floor(MenuOtipons.length/props.size))
        if(MenuOtipons.length%props.size>0){            
            cantidad=(cantidad+1)
        }
        for(i;i<cantidad;i++){
            if(i===cantidad-1&&MenuOtipons.length%props.size>0){
                Nelement=[...Nelement,[...(MenuOtipons.slice(i*props.size,(i*props.size)+(MenuOtipons.length%props.size)))]]
            }else{
                Nelement=[...Nelement,[...(MenuOtipons.slice(i*props.size,(i*props.size)+(props.size)))]]
            }
            Nstate=[...Nstate,i===0]
        }
        window.clearTimeout(time)
        setState(Nstate)
        setElements(Nelement)
    }else{
        setElements([MenuOtipons])
    }
    },[props.size])



    return(
        <Div>        
        {elements.map((element,index)=>{
           
            return(
                <NavMenuIneractiveItem
                    key={element[0].key+'Interactive'}
                    state={state[index]||complete?'active':'inactive'}
                    element={element}/>
            )
        })} 
        {!complete&&<NavInteretionSelect
                        elements={state}
                        click={handlerClick}/>}
        </Div>   
    )
}

export default NavMenuInteractive