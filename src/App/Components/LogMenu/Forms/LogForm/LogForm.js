import React,{Fragment,useState} from 'react' 
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useFormContext } from "react-hook-form";
import Field from '../../../Field/Field';
import {ContentForm, DivContent,AuthButtonSX,ChangeMenu} from './LogFormStyled'
import { useNavigate } from 'react-router';
import { useDispatch,useSelector } from "react-redux";
import { login } from "../../../../Store/auth/authorizationSlice";
import { setOpenModal} from "../../../../Store/MotionGenerix/ModalGeneric";
import { motion } from 'framer-motion';
import {setOpenNotification,setContentNotification,setStatusNotification} from '../../../../Store/NotificationDiv/NotificationDiv'

const defaulFormValues = {
    usuario: '',
    codigo: '',
  };
  
const LogForm=(props)=>{
  const [TryCreateOrder,setTryCreateOrder]=useState(false)
  const dispatch=useDispatch()
  const navigate=useNavigate()

    const validationRules = yup.object().shape({
        usuario: yup.string().required("required"),
        codigo: yup.string().required("required"),
      });

    const {
        control,
        reset,
        getValues,
        handleSubmit,
        formState: {dirtyFields,isValid, errors },
    } = useForm({
        defaultValues: defaulFormValues,
        mode: "all",
        revalidationMode:'onChange',
        resolver: yupResolver(validationRules),
    });



    const handleSubmitForm=(event)=>{  
          
        setTryCreateOrder(true)
        if(isValid){
        //Aqui en teoria se envia la orden        
        if(window.localStorage.getItem('usuario')===getValues("usuario")&&window.localStorage.getItem('codigo')===getValues("codigo")){
         
          dispatch(login({
            token: 'Xmalertisopperewrsd',
            refreshToken: 'kamomsaiomw0iemdksfkms iwe0je02kmksdfklsdf oawe0jw0',
            name: getValues("usuario")
          }))
          
          dispatch(setContentNotification(`${getValues("usuario")} session started `))
          dispatch(setStatusNotification('succ'))
          dispatch(setOpenNotification(true))
          navigate('/')
        }else{
          dispatch(setContentNotification('wrong username or password'))
          dispatch(setStatusNotification('fall'))
          dispatch(setOpenNotification(true))
        }

      }
        
    }
    return(
      
      <form onSubmit={handleSubmit(handleSubmitForm)}>
      <ContentForm as={motion.div} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
       
            <DivContent Width='100%' Center>
                <ChangeMenu onClick={()=>props.ChangeMenu('Nuevo')}>{'sign in'}</ChangeMenu>
            </DivContent>
                  <Field
                    size="small"
                    variant="standard"
                    control={control}
                    error={errors.usuario||(!dirtyFields.usuario&&TryCreateOrder)}
                    helperText={errors.usuario?errors.usuario.message:!dirtyFields.usuario&&TryCreateOrder?"required":""}
                    label='User'
                    type='text'
                    name="usuario"
                    id="usuario"        
                  />
                <Field
                    size="small"
                    variant="standard"
                    control={control}
                    error={errors.codigo||(!dirtyFields.codigo&&TryCreateOrder)}
                    helperText={errors.codigo?errors.codigo.message:!dirtyFields.codigo&&TryCreateOrder?"required":""}
                    label={'Password'}
                    type='password'
                    name="codigo"
                    id="codigo"
                  />
        <DivContent>
          <AuthButtonSX  type='submit' >log in</AuthButtonSX>
        </DivContent>  
        
      </ContentForm> 
      </form>
    
    )

}

export default LogForm