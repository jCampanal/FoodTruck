import styled from 'styled-components'

export const ContentMenuDivS=styled.div`
position:fixed;
display:flex;
flex-direction:column;
width:75%;
height:100%;
top:0;
z-index:1000;
right:${(props)=>(props.Show?'0':'-75%')};
transition: all 500ms;
background-color:#d8810f;

@media screen and (min-width:400px){
   width:300px; 
   right:${(props)=>(props.Show?'0':'-300px')};
}
`;

export const ContentHeardMenu=styled.div`
position:absolute;
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
height:${(props)=>(props.second?'70%':'30%')};;
top:${(props)=>(props.second?'30%':'0')};
`;

export const ImgS = styled.img`
width:50px;
height:50px;
margin:0 5px;`;

export const CloseMenuDiv=styled.div`
display:flex;
position:relative;
align-items:center;
justify-content:space-between;
background-color: #e0e0e0;
`;

export const BackgroundImgS=styled.img`
width:100%;
height:150px;
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
z-index:300;
background-color:#75757590;
`;

export const LinkS=styled.a`
text-decoration:none;`;

export const Name = styled.h3`
margin-left:18px;
color: #1976d2;
font-family:Decorative;`; 

export const H4S=styled.h4`
text-align:center;
margin: 5px 50px;`;

export const ConteindIcon=styled.div`
margin-left: 20px;`;