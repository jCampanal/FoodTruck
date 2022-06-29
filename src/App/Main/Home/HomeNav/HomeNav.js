import React from 'react' 
import Styled from 'styled-components' 
import CategoryHome from '../../../Components/CategoryHome/CategoryHome';
import {Category} from './HomeNavData'

const HomeNavDiv=Styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
@media screen and (min-width:700px){
    flex-direction:row;
    justify-content:space-evenly;
}`;

const HomeNav=(props)=>{
    return(
        <HomeNavDiv>
            {
                Object.keys(Category).map((categoryName,index)=>{
                    return(
                        <CategoryHome
                            href={Category[categoryName].href}
                            src={Category[categoryName].src}
                            caption={categoryName}/>
                            
                        
                    )
                })

            }
        </HomeNavDiv>
    )
}

export default HomeNav