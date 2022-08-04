import React,{Fragment,useState, useRef} from 'react' 
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useFormContext, Controller } from "react-hook-form";
import Field from '../../../Field/Field';
import {ContentForm, DivContent, DivInput,AuthButtonSX,ChangeMenu,Image,HiddenInput,PictureDiv,DeleteButton,ImgContaint} from './NewUserFormStyled'
import {setOpenNotification,setContentNotification,setStatusNotification} from '../../../../Store/NotificationDiv/NotificationDiv'
import { useDispatch,useSelector } from "react-redux";
import { motion } from 'framer-motion';
import { Icon } from '@mui/material';

import PictureIcon from '@mui/icons-material/AddPhotoAlternate'
import RestIcon from '@mui/icons-material/AddPhotoAlternate'

const phoneRegex =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const defaulFormValues = {
        usuario:'',
        password: '',
        confirmPassword: '',
        correo: '',
        telefono: '',
        src:'',
        address:''
  };
  
const UserForm =(props)=>{
  const [image, setImage]=useState('')
  const [TryCreateOrder,setTryCreateOrder]=useState(false)
  const dispatch=useDispatch()


    const validationRules = yup.object().shape({
        usuario: yup
        .string()
        .required("required"),
        password: yup.
        string().required("required"),
        confirmPassword: yup
        .string()  
        .required("required")
        .test("passwords-match", "The password must match", function (value) {
          return this.parent.password === value;
        }),
        correo: yup.string().email("don't look like an email").required("required"),
        telefono: yup.string().required("required").matches(phoneRegex, {
          message: "don't look like a phone",
          excludeEmptyString: true,
        }),
        address:yup.string(),
        src:yup.string()
      });

    const {
        control,
        reset,
        getValues,
        setValue,
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
        window.localStorage.setItem('src',image)
        window.localStorage.setItem('address',getValues('address'))
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
        label='User'
        type='text'
        name="usuario"
        id="usuario"        
      />
    <DivInput >
    <Field
        size="small"
        variant="standard"
        control={control}
        error={errors.password||(!dirtyFields.password&&TryCreateOrder)}
        helperText={errors.password?errors.password.message:!dirtyFields.password&&TryCreateOrder?"campo requerido":""}
        label={'Password'}
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
        label={'Password'}
        type='password'
        name="confirmPassword"
        id="confirmPassword"
      />
      </DivInput>
    <DivInput width='100%'> 
    <Field
        size="small"
        variant="standard"
        control={control}
        error={errors.correo||((!dirtyFields.correo&&TryCreateOrder))}
        helperText={errors?.correo?.message}
        label={'Email'}
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
        label={'Phone'}
        type='text'
        name="telefono"
        id="telefono"
      />
      </DivInput>
      <Field
        size="small"
        variant="standard"
        control={control}
        error={errors.address}
        helperText={errors?.address?.message}
        label={'Address'}
        type='img'
        name="address"
        id="address"
      />
      
      <PictureDiv>
        <Controller
          name="src"
          control={control}
          render={({ field: { onChange } }) => (
            <label
              htmlFor="button-file"
              title={'photo'}
              
            >
              <HiddenInput
                accept="image/*"
                className="hidden"
                id="button-file"
                type="file"
                onChange={(e) => {
                  setImage(URL.createObjectURL(e.target.files[0]));

                  onChange(e.target.files[0]);
                }}
              />
              <Icon sx={{cursor:'pointer'}} fontSize="large" color="action" onClick={()=>{document.getElementById('button-file').click()}}>
                <PictureIcon/>
              </Icon>
            </label>
          )}
        />
        {image && (
          <ImgContaint>
            <Image src={image} alt={'profile picture'} id="preview" />
            <DeleteButton onClick={()=>{setImage('')
                                        setValue('src','')}}>
              <Icon fontSize="large" color="action" >
                
              </Icon>
            </DeleteButton>
          </ImgContaint>
        )}
      </PictureDiv>
   
      <DivContent>
          <AuthButtonSX type='submit'>Sign in</AuthButtonSX>
      </DivContent>  
      </ContentForm> 
      </form>
    )

}

export default UserForm