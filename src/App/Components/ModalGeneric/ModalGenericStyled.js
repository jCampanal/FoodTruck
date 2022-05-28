import styled from 'styled-components'
 export const ModalDiv=styled.div`
 display:flex;
 position:fixed;
 z-index:1000;
 width:90%;
 top:10%;
 left:5%;
 flex-direction:column;
 border-radius:30px;
 background: white;
 overflow:hidden;
 @media screen and (min-width:500px){
    width:400px;
    left:calc(50% - 175px);
}
 `;

 export const DivTitle=styled.div`
 width:100%;
 display:flex;
 height: 50px;
 background-color:#1976d2;
 align-items:center;
 justify-content:space-between;`;

 export const Title = styled.h2`
 margin:0 0 0 20px ;
 color: white;
 `;