import { Flag } from '@mui/icons-material'
import React, {useState,useEffect} from 'react'

const InteractiveText=(props)=>{
    const[count,setCount]=useState(0)
    const[text,setText]=useState('')
    const[done,setDone]=useState(true)
    console.log('aqui esta')

    useEffect(()=>{
        if(!window.localStorage.getItem(props.Key)){
            console.log(count+'  '+props.children.length)
            if(count<props.children.length){
                
                if(done){
            
                    setTimeout(() => {
                        if(props.children[count]===' '){
                            setText(prevtext=>{return(prevtext+' '+props.children[count+1])})
                            setCount(count+2)
                            
                        }else{                        
                            setText(prevtext=>{return(prevtext+props.children[count])})
                            setCount(count+1)
                            
                        }
                        
                        
                    }, props.velocity)
                
                }else{
                    setText(prevtext=>{return(props.children[0])})
                    setCount(1)                
                    setDone(true) 
                   
                    }   
                
            }else{
                setDone(false)
                console.log('termino')
                if(props.NoRepeat){
                    console.log('Entro')
                    window.localStorage.setItem(props.Key,'true')
                    console.log(props.Key)
                    console.log(localStorage.getItem(props.key))
                }
            }        
        }             
    },[count])

        useEffect(()=>{
                    if(window.localStorage.getItem(props.Key)){
                        setText(props.children)
                    }else{
                    
                    if(count!==0){
                            if(done){
                            setDone(false)
                            }
                            else{
                                if(!props.NoRepeat){
                                setDone(true)             
                                setText('')
                                setCount(0) 
                                }
                                else{
                                    setText(props.children)
                                }
                                
                            }                
                        }
                }
    },[props.children])

    return ( text)
}

export default InteractiveText