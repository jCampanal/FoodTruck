import React from 'react' 
import Styled from 'styled-components'

const TableContaid=Styled.div`
width:95%;
display:flex;
flex-direction:column;
`

const RowTable=Styled.div`
width:100%;
display:grid;
grid-template-columns: 60% 20% 20%;`

const CeldDiv=Styled.div`
width:100%;
padding-left: 5px;
display: flex;
align-items:center;`


const CeldContent=Styled.p`
color:white;`

const ProductsTable=(props)=>{
    return(
        <TableContaid>
            {props.food.map((element,idx)=>{
                return(
                    <RowTable key={element.Name+element.Amount}>
                        <CeldDiv><CeldContent>{element.Name}</CeldContent></CeldDiv>
                        <CeldDiv><CeldContent>{element.Amount}</CeldContent></CeldDiv>
                        <CeldDiv><CeldContent>{'$'+(element.Price*element.Amount).toFixed(2)}</CeldContent></CeldDiv>
                    </RowTable>
                )
            })}
        </TableContaid>
    )
}

export default ProductsTable