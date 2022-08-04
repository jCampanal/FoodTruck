import Styled from 'styled-components'

const Button=Styled.button`
width:15px;
height:15px;
border:2px solid white;
border-radius:500px;
margin: 10px 5px;
background-color:${(props)=>(props.clicked?'white':'initial')};
transition:all 500ms;
cursor:pointer;
`

const ButtonInterection=(props)=>{
    return(
        <Button {...props} onClick={()=>{props.click(props.index)}}/>
    )
}

export default ButtonInterection