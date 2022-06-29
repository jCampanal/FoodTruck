import React,{Fragment,useState} from 'react' 
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useFormContext } from "react-hook-form";
import Field from '../../../Field/Field';
import {ContentForm, DivContent,AuthButtonSX,ChangeMenu} from './NewUserFormStyled'
import {setOpenNotification,setContentNotification,setStatusNotification} from '../../../../Store/NotificationDiv/NotificationDiv'
import { useDispatch,useSelector } from "react-redux";
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
        handleSubmit,
        formState: {dirtyFields,isValid, errors },
    } = useForm({
        defaultValues: defaulFormValues,
        mode: "all",
        revalidationMode:'onChange',
        resolver: yupResolver(validationRules),
    });



    const handleSubmitForm=()=>{      
        setTryCreateOrder(true)
        if(isValid){
        //Aqui en teoria se envia la orden
        props.ChangeMenu('Registro')
        window.localStorage.setItem('usuario',getValues('usuario'))
        window.localStorage.setItem('codigo',getValues('password'))
        dispatch(setContentNotification('Código 31650'))
        dispatch(setStatusNotification('X'))
        dispatch(setOpenNotification(true))
      }
    }    
    

    return(
        
      <form onSubmit={handleSubmit(handleSubmitForm)}>
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
        error={errors.correo||((!dirtyFields.correo&&TryCreateOrder))}
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
          <AuthButtonSX type='submit'>Crear usuario</AuthButtonSX>
      </DivContent>  
      </ContentForm> 
      </form>
    )

}

export default UserForm