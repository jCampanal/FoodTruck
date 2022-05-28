import styled from "styled-components";

export const ResponsiveDiv = styled.div` 
display:${(props) => (props.App?(props.hidden?"none":"inline-flex"):props.Right?'none':"inline-flex")}; 
    @media screen and (min-width:764px){
        display:${(props) => (props.NeverHidden?"inline-flex":(props.App?(props.hidden?"none":"inline-flex"):props.Right?"inline-flex":"none"))};
    }
    @media screen and (min-width:1200px){
        display: ${(props) => (props.NeverHidden? "inline-flex":"none")};
    }
     
    `;