import styled from 'styled-components'

export const ContentMenuDivS=styled.div`
position:fixed;
display:flex;
flex-direction:column;
width:75%;
height:100%;
top:0;
z-index:20;
right:${(props)=>(props.Show?'0':'-75%')};
transition: all 500ms;
background-color:#1976d2;
@media screen and (min-width:400px){
    width:50%; 
    right:${(props)=>(props.Show?'0':'-50%')};
 }
@media screen and (min-width:600px){
   display:none; 
}`;

export const CloseMenuDiv=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
height:60px;
width:100%;
background-color: #e0e0e0;
`;

export const NavDivs=styled.div`
height:60px;
width:100%;
align-items:center;
`;

export const RegisterDivs=styled.div`
height:50px;
width:100%;
display:flex;
align-items:center;
justify-content:space-between;
`;

export const RegisterBottom=styled.div`
height:100%;
width:50%;
display:flex;
align-items:center;
justify-content:center;
`;

export const Backdrop=styled.div`
position:fixed;
width:100%;
height:100%;
display:${(props)=>(props.Show?'flex':'none')};
left:0;
top:0;
z-index:15;
background-color:#75757590;
@media screen and (min-width:600px){
    display:none; 
 }`;

export const LinkS=styled.a`
text-decoration:none;`;

export const Name = styled.h3`
margin-left:18px;
color: #1976d2;
font-family:Decorative;`; 