import styled from 'styled-components'

export const ConteinedLogo = styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:space-between;
height:70px;
@media screen and (min-width:400px){
    justify-content:left;
}`; 

export const DivContentLogo = styled.div`
display:flex;
`; 

export const DivContentNav = styled.div`
display:flex;
margin-right:5px;
@media screen and (min-width:400px){
    display:none;
}`; 

export const Logo = styled.img`
margin-left:5px;
width:60px;
height:60px;
@media screen and (min-width:400px){
    margin-left:36px;
}`; 

export const Name = styled.h3`
margin-left:5px;
color: #1976d2;
font-family:Decorative;`; 