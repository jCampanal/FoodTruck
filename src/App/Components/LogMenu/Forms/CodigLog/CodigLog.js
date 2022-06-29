import React, {useState,useEffect} from 'react'
import {ContentForm, DivContent,AuthButtonSX,ChangeMenu} from '../LogForm/LogFormStyled'
import Field from '../../../Field/Field';
import {  formLabelClasses, TextField} from "@mui/material"
import Loader from '../../../Loader/Loader'
import {motion} from 'framer-motion'
const CodigLog =(props)=>{
    const [value,setValue]=useState([0,0,0,0,0])


    const [HabilitarEnviar,setHAbilitarEnviar]=useState(true)

    const [Load,setLoad]=useState(false)

    const [Clock,setClock]=useState()
    const [renviarMinuts,setRenviarMinuts]=useState(5)
    const [renviarFirstSeconds,setRenviarFirstSeconds]=useState(0)
    const [renviarSecondsSeconds,setRenviarSecondsSeconds]=useState(0)

    const [Error,setError]=useState(false)

    const waitvalor=(matriz)=>{        
        setLoad(true)
        if(matriz[0]===3&&matriz[1]===1&&matriz[2]===6&&matriz[3]===5&&matriz[4]===0){
            setTimeout(()=>{props.ChangeMenu('Iniciar')},2000)
        }else{
           
                setLoad(false)
                setError(true)
        }
    }


    const valueHandlerChange=(Index,Value)=>{
        setError(false)
        clearTimeout(Clock)
        const matriz=value.map((e,index)=>{
            if(index===Index){
                return(parseInt(Value))
            }else{
                return(parseInt(e))
            }
        })
        setValue(matriz)

        setClock(setTimeout(()=>{
        waitvalor(matriz)},5000))
    }

    const HandlerRenviar=()=>{
        if(!HabilitarEnviar){
            setHAbilitarEnviar(true)
        }
    }

    const HandlerSecond=()=>{
        if(renviarSecondsSeconds===0&&renviarFirstSeconds==0&&renviarMinuts===0){
            setRenviarMinuts(5) 
            setRenviarSecondsSeconds(1)
            setHAbilitarEnviar(false) 
            setLoad(true)
            setValue([3,1,6,5,0])
            setTimeout(()=>{
                setLoad(false)
            },2000)
            
            setTimeout(()=>{props.ChangeMenu('Iniciar')},5000)
        }else{
            if(renviarSecondsSeconds===0){
                setRenviarSecondsSeconds(9)
                if(renviarFirstSeconds==0){
                    setRenviarFirstSeconds(5)
                    setRenviarMinuts(renviarMinuts-1)
                    
                }else{
                    setRenviarFirstSeconds(renviarFirstSeconds-1)
                }
            }else{
                setRenviarSecondsSeconds(renviarSecondsSeconds-1)
            }
        }
    }

    useEffect(()=>{
        if(HabilitarEnviar){
            setTimeout(()=>HandlerSecond(),1000)
        }
    },[HabilitarEnviar,renviarSecondsSeconds])

    return(
    <form>
    <ContentForm as={motion.div} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
     <ContentForm Row Justify='center' Width='100%'>
      <TextField
        size="small"
        sx={{width:'40px',margin:'10px 5px'}} 
        label=''
        value={value[0]}
        type='output'
        name=""        
        id="value"
        error={Error}  
        variant="outlined"   
        onChange={(e)=>valueHandlerChange(0,e.target.value)}   
      />
    <TextField
        size="small"
        sx={{width:'40px',margin:'10px 5px'}} 
        label=''
        error={Error} 
        value={value[1]}
        type='output'
        name=""
        id="value2"  
        variant="outlined"
        onChange={(e)=>valueHandlerChange(1,e.target.value)}      
      />
    <TextField
        size="small"
        sx={{width:'40px',margin:'10px 5px'}}    
        label=''
        error={Error} 
        value={value[2]}
        type='output'
        name=""
        id="value3"
        variant="outlined"  
        onChange={(e)=>valueHandlerChange(2,e.target.value)}      
      />
    <TextField
        size="small"
        sx={{width:'40px',margin:'10px 5px'}} 
        label=''
        error={Error} 
        value={value[3]}
        type='output'        
        name=""
        id="value4"
        variant="outlined"  
        onChange={(e)=>valueHandlerChange(3,e.target.value)}      
      />
    <TextField
        size="small"
        sx={{width:'40px',margin:'10px 5px'}} 
        label=''
        error={Error} 
        value={value[4]}
        type='output'
        name=""
        id="value5" 
        variant="outlined" 
        onChange={(e)=>valueHandlerChange(4,e.target.value)}      
      />
     </ContentForm>

    <ContentForm >
        <DivContent Width='100%' Center>
            {`Renviar el codigo: ${renviarMinuts}:${renviarFirstSeconds}${renviarSecondsSeconds}`}
        </DivContent>
    </ContentForm>

    <ContentForm  Justify='center' Width='100%'>     
             {Load&&
             <div style={{width:'0%',height:'50px', marginTop:'10px',transform:'translateX(-7.5px)'}}>
             <Loader Width='15px'/>
             </div>
             }        
     </ContentForm>

    <ContentForm Row Justify='center' Width='100%'>
        <ContentForm Row Justify='space-between' Width='70%'>
            <AuthButtonSX onClick={HandlerRenviar} disabled={HabilitarEnviar}>Renviar</AuthButtonSX>
            <AuthButtonSX onClick={()=>props.ChangeMenu('Nuevo')}>Regresar</AuthButtonSX>
        </ContentForm>
    </ContentForm>
    </ContentForm>
    </form>
    )
}

export default CodigLog