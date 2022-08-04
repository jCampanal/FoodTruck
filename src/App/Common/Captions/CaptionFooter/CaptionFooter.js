import Styled from 'styled-components'


const H3S=Styled.h3`
display:flex;
width:${(props)=>(props.width?props.width:'auto')};
margin:${(props)=>(props.margin?props.margin:'0')};
color:${(props)=>(props.color?props.color:'white')};`


const CaptionFooter=(props)=>{
    return(
        <H3S {...props}>{props.children}</H3S>
    )
}


export default CaptionFooter