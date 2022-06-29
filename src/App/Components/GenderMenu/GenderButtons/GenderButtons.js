import React from 'react' 
import Hombre from '../../../../Assets/Genders/fotos Hombres 600x900.jpg'
import Mujer from '../../../../Assets/Genders/Pijama-Pantalon-Mujer-Hojarasca-600x900.jpeg'
import Mixto from '../../../../Assets/Genders/HombresyMujeres 600x900.jpg'
import GenderButton  from './GenderBotton/GenderButton';

const datos=[{
                src:Mujer,
                caption:'Mujeres',
                href:'/Mujeres'
                },
            {
                src:Hombre,
                caption:'Hombres',
                href:'/Hombres'
                },
            {
                src:Mixto,
                caption:'Unisex',
                href:'/Unisex'
                }]

const GenderButtons =(props)=>{

    return(
        datos
            .filter((element)=>{
                let Aux=false
                props.Points.map(Caption=>{
          
                    if(element.caption===Caption){
                        Aux=true
                    }
                })

                return Aux
            })
            .map((element,index)=>{
                
                return(
                    <GenderButton key={element.caption} 
                                    Caption={element.caption} 
                                    Href={element.href} 
                                    index={index}
                                    src={element.src}/>
                        
                )
            })
    )
}

export default GenderButtons