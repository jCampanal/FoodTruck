import React,{Fragment,useState} from 'react' 
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useFormContext } from "react-hook-form";
import Field from '../../../Field/Field';
import {ContentForm, DivContent,AuthButtonSX,ChangeMenu} from './LogFormStyled'
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
    const validationRules = yup.object().shape({
        usuario: yup.string().required("campo requerido"),
        codigo: yup.string().required("campo requerido"),
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
          dispatch(setOpenModal(false))
          dispatch(setContentNotification(`Sesión ${getValues("usuario")} inciada `))
          dispatch(setStatusNotification('succ'))
          dispatch(setOpenNotification(true))
        }else{
          dispatch(setContentNotification('contraseña o usuario incorrectos'))
          dispatch(setStatusNotification('fall'))
          dispatch(setOpenNotification(true))
        }

      }
        
    }
    return(
      
      <form onSubmit={handleSubmit(handleSubmitForm)}>
      <ContentForm as={motion.div} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
       
            <DivContent Width='100%' Center>
                <ChangeMenu onClick={()=>props.ChangeMenu('Nuevo')}>{'Nuevo usuario'}</ChangeMenu>
            </DivContent>
                  <Field
                    size="small"
                    variant="standard"
                    control={control}
                    error={errors.usuario||(!dirtyFields.usuario&&TryCreateOrder)}
                    helperText={errors.usuario?errors.usuario.message:!dirtyFields.usuario&&TryCreateOrder?"campo requerido":""}
                    label='Usuario'
                    type='text'
                    name="usuario"
                    id="usuario"        
                  />
                <Field
                    size="small"
                    variant="standard"
                    control={control}
                    error={errors.codigo||(!dirtyFields.codigo&&TryCreateOrder)}
                    helperText={errors.codigo?errors.codigo.message:!dirtyFields.codigo&&TryCreateOrder?"campo requerido":""}
                    label={'Contraseña'}
                    type='password'
                    name="codigo"
                    id="codigo"
                  />
        <DivContent>
          <AuthButtonSX  type='submit' >Iniciar Sesion</AuthButtonSX>
        </DivContent>  
        
      </ContentForm> 
      </form>
    
    )

}

export default LogForm