import React from 'react' 
import Styled from 'styled-components'

import ProductsTable from './ProductsTable/ProductsTable'
import DeleteIcon from '@mui/icons-material/Delete'
import FooterShoopingListButton from '../../../../Common/Button/FooterShoopingListButton'

const OrderContentS=Styled.div`
width:90%;
position:relative;
margin:5px 0;
max-width:500px;
flex-wrap:wrap;
border-radius:10px;
border: 2px solid;
padding: 5px 10px;
box-shadow: 2px 2px 10px #cec7c79d, -2px -2px 10px #cec7c79d, 2px -2px 10px #cec7c79d, -2px 2px 10px #cec7c79d;
border-color:${(props)=>(props.color?props.color:'gray')};
background-color:${(props)=>(props.bgcolor?props.bgcolor:'#807c7cb2')};
`


const BasicEnunContnet =Styled.div`
display:flex;
width: ${(props)=>(props.Width?'100%':'auto')};
justify-content: ${(props)=>(props.JustContent?props.JustContent:'auto')};
align-items:center;
margin: 5px 0px;
flex-direction:row;
  `
const BasicName=Styled.h4`
margin:0px;
color:${(props)=>(props.color?props.color:'white')};
margin-left:${(props)=>(props.ML?props.ML:'0px')};
margin-right: 5px;
@media screen and (min-width:400px){
    margin-left:${(props)=>(props.LML?props.LML:'0px')}
}
`
const BasicDate=Styled.p`
margin:0px;
color:${(props)=>(props.color?props.color:'white')};
margin-left:${(props)=>(props.ML?props.ML:'0px')}
`
const BackgroundDiv=Styled.div`
position:absolute;
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:100%;
top:0;
left:0;
z-index: -1;
`;

const BackgroundDivProve=Styled.div`
position:absolute;
display:flex;
justify-content:right;
width:100%;
height:100%;
top:0;
left:0;
z-index: -2;
`;

const BackgroundStatus=Styled.h1`
color:#030202be;
transform:rotate(-45deg);
letter-spacing:2px;`

const BackgroundStatusProve=Styled.h4`
color:black;
margin-right:10px;`

const Mes=['Jan','Feb','Marc', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sept', 'Oct','Nov','Dic']

const StatusColors={
    Delivered:{
        Name:'Delivered',
        BgColor:'#807c7cb2',
        BorderColor:'#494949c4'
    },
    InProccess:{
        Name:'In Proccess',
        BgColor:'#153969a8',
        BorderColor:'#08264dcb'
    },
    Onthetruck:{
        Name:'On the truck',
        BgColor:'#0c9407a9',
        BorderColor:'#054403be'
    },
    Canceled:{
        Name:'Canceled',
        BgColor:'#a507078f',
        BorderColor:'#610202bd'
    }
}

const OrderContent=(props)=>{
    return(
        <OrderContentS 
            color={StatusColors[props.status].BorderColor}
            bgcolor={StatusColors[props.status].BgColor}
            >
            {props.Prove&&<BackgroundDivProve><BackgroundStatusProve>{'prove'}</BackgroundStatusProve></BackgroundDivProve>}
            <BackgroundDiv>
                <BackgroundStatus>{StatusColors[props.status].Name}</BackgroundStatus>
            </BackgroundDiv>
            <BasicEnunContnet >
                <BasicDate color={'#267eb8'}> {props.Id1.slice(0,6)}</BasicDate>
            </BasicEnunContnet>
            <BasicEnunContnet >
                <BasicName >Address:</BasicName>
            </BasicEnunContnet >
            <BasicEnunContnet >
                <BasicDate>{props.address}</BasicDate>
            </BasicEnunContnet>
            <BasicEnunContnet >
                <BasicEnunContnet >
                    <BasicName >Price:</BasicName>
                    <BasicDate >{parseFloat(''+props.price).toFixed(2)}</BasicDate>
                </BasicEnunContnet>
                <BasicEnunContnet >
                    <BasicName ML={'3vw'} LML={'100px'}>Deliver:</BasicName>
                    <BasicDate >{`${props.deliver.getDay()}/${Mes[props.deliver.getMonth()]}  ${props.deliver.getHours()}:${props.deliver.getMinutes()}`}</BasicDate>
                </BasicEnunContnet>
            </BasicEnunContnet>
            <BasicEnunContnet >
                <BasicName >Products:</BasicName>
            </BasicEnunContnet>
            <BasicEnunContnet >
                <ProductsTable food={props.food}/>
            </BasicEnunContnet>
           {props.status==='InProccess'&& <BasicEnunContnet JustContent={'right'}>
                <FooterShoopingListButton color={['white',StatusColors[props.status].BgColor]} caption={'Delete Order'} click={props.click}>
                    <DeleteIcon/>
                </FooterShoopingListButton>
            </BasicEnunContnet>  }  
        </OrderContentS>
    )
}

export default OrderContent