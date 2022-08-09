import Styled from 'styled-components' 

import LogoHeader from './Logo/Logo';

const DivS=Styled.div`
width:100%;
height:50px;
position:fixed;
top:0;
z-index:100;
background-color:rgba(216, 129, 15);
`;

const SecondDivS=Styled.div`
width:100%;
height:100%;
display:flex;
flex-flow: row wrap;
justify-content:end;
padding-right:20px;
`;


const SecondDiv=(props)=>{

    return(
        <DivS>
            <LogoHeader effect={props.effect}/>
            <SecondDivS>
                {props.children}
            </SecondDivS>
        </DivS>
    )
}

export default SecondDiv