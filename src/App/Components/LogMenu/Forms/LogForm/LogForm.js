import React,{Fragment,useState} from 'react' 
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useFormContext } from "react-hook-form";
import Field from '../../../Field/Field';
import { ContrastRounded } from '@mui/icons-material';
import {ContentForm, DivContent,AuthButtonSX,ChangeMenu} from './LogFormStyled'
import { Button } from '@mui/material';
import { useDispatch,useSelector } from "react-redux";
import { login } from "../../../../Store/auth/authorizationSlice";
import { setOpenModal} from "../../../../Store/MotionGenerix/ModalGeneric";
import { motion } from 'framer-motion';

const defaulFormValues = {
    usuario: '',
    codigo: '',
  };
  
const LogForm=(props)=>{
  const [TryCreateOrder,setTryCreateOrder]=useState(false)
  const dispatch=useDispatch()
  window.localStorage.setItem('usuario','Admin')
  window.localStorage.setItem('codigo','Secret123*')
    const validationRules = yup.object().shape({
        usuario: yup.string().required("campo requerido"),
        codigo: yup.string().required("campo requerido"),
      });

    const {
        control,
        reset,
        getValues,
        
        formState: {dirtyFields,isValid, errors },
    } = useForm({
        defaultValues: defaulFormValues,
        mode: "all",
        revalidationMode:'onChange',
        resolver: yupResolver(validationRules),
    });



    const handleSubmitForm=()=>{      
        setTryCreateOrder(true)
        console.log(isValid)
        console.log(errors)
        if(isValid){
        //Aqui en teoria se envia la orden
        console.log('Entro')
        if(window.localStorage.getItem('usuario')===getValues("usuario")&&window.localStorage.getItem('codigo')===getValues("codigo")){
          console.log('Entro')
          dispatch(login({
            token: 'Xmalertisopperewrsd',
            refreshToken: 'kamomsaiomw0iemdksfkms iwe0je02kmksdfklsdf oawe0jw0',
          }))
          dispatch(setOpenModal(false))
        }else{

        }

      }
        
    }
    return(
      <form>
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
          <AuthButtonSX onClick={handleSubmitForm}>Iniciar Sesion</AuthButtonSX>
      </DivContent>  
      </ContentForm> 
      </form>
    )

}

export default LogForm