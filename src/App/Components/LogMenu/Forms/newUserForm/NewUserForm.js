import React,{Fragment,useState} from 'react' 
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useFormContext } from "react-hook-form";
import Field from '../../../Field/Field';
import { ContrastRounded } from '@mui/icons-material';
import {ContentForm, DivContent,AuthButtonSX,ChangeMenu} from './NewUserFormStyled'
import { Button } from '@mui/material';
import { useDispatch,useSelector } from "react-redux";
import { login } from "../../../../Store/auth/authorizationSlice";
import { setOpenModal} from "../../../../Store/MotionGenerix/ModalGeneric";
import { motion } from 'framer-motion';

const phoneRegex =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const defaulFormValues = {
        usuario:'',
        password: '',
        confirmPassword: '',
        correo: '',
        telefono: ''
  };
  
const UserForm =(props)=>{

  const [TryCreateOrder,setTryCreateOrder]=useState(false)
  const dispatch=useDispatch()

    const validationRules = yup.object().shape({
        usuario: yup
        .string()
        .required("campo requerido"),
        password: yup.
        string().required("campo requerido"),
        confirmPassword: yup
        .string()  
        .required("campo requerido")
        .test("passwords-match", "Los codigos deben coincidir", function (value) {
          return this.parent.password === value;
        }),
        correo: yup.string().email().test("Email-Telefono", "Necesitamos o un correo o un teléfono", function (value) {
          return (!(this.parent.telefono==='' &&  value===''));
       }),
        telefono: yup.string().matches(phoneRegex, {
          message: "No parece un telefono",
          excludeEmptyString: true,
        }).test("Email-Telefono", "Necesitamos o un correo o un teléfono", function (value) {
           return (!(value===''&&  this.parent.correo===''));
        }),
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
          <ChangeMenu onClick={()=>props.ChangeMenu('Reset')}>{'Reiniciar Cuenta'}</ChangeMenu>
          <ChangeMenu onClick={()=>props.ChangeMenu('Iniciar')}>{'Iniciar sección'}</ChangeMenu>
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
        error={errors.password||(!dirtyFields.password&&TryCreateOrder)}
        helperText={errors.password?errors.password.message:!dirtyFields.password&&TryCreateOrder?"campo requerido":""}
        label={'Contraseña'}
        type='password'
        name="password"
        id="password"
      />
    <Field
        size="small"
        variant="standard"
        control={control}
        error={errors.confirmPassword||(!dirtyFields.confirmPassword&&TryCreateOrder)}
        helperText={errors.confirmPassword?errors.confirmPassword.message:!dirtyFields.confirmPassword&&TryCreateOrder?"campo requerido":""}
        label={'Contraseña'}
        type='password'
        name="confirmPassword"
        id="confirmPassword"
      />
    <Field
        size="small"
        variant="standard"
        control={control}
        error={errors.correo||((!dirtyFields.correo&&TryCreateOrder)}
        helperText={errors?.correo?.message}
        label={'Correo'}
        type='text'
        name="correo"
        id="correo"
      />
    <Field
        size="small"
        variant="standard"
        control={control}
        error={errors.telefono}
        helperText={errors?.telefono?.message}
        label={'Telefono'}
        type='text'
        name="telefono"
        id="telefono"
      />
      <DivContent>
          <AuthButtonSX onClick={handleSubmitForm}>Crear usuario</AuthButtonSX>
      </DivContent>  
      </ContentForm> 
      </form>
    )

}

export default UserForm