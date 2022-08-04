import React,{useState,useEffect} from 'react' 
import NavMenuInteractive from './NavMenuInteractive/NavMenuInteractive'
import {MenuOtipons} from '../../Lib/MenuOptions'

const NavMenuListResponsive=(props)=>{
    const [size,setSize]=useState(1);
    
    const HandlerRezise=()=>{
        let i=MenuOtipons.length
          
            for(i;i>0;i--){
                if(window.screen.width-(i*110)>30){
                    setSize(i)
                    i=0

                }
            
            
        }
    }

    useEffect(()=>{
        window.onresize=()=>{HandlerRezise()}
            HandlerRezise()
    },[])

    
    return(
    
    <NavMenuInteractive size={size}/>
    
    )
}

export default NavMenuListResponsive