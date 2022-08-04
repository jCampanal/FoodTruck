import React,{Fragment,useState} from 'react' 
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useFormContext } from "react-hook-form";
import Field from '../../../Field/Field';
import {ContentForm, DivContent,AuthButtonSX,ChangeMenu} from '../LogForm/LogFormStyled'
import { useDispatch,useSelector } from "react-redux";
import { motion } from 'framer-motion';

const defaulFormValues = {
    correo: '',
    telefono: '',
  };
  
  const phoneRegex =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ResetLoguin=(props)=>{
  const [TryCreateOrder,setTryCreateOrder]=useState(false)
  const dispatch=useDispatch()
    const validationRules = yup.object().shape({
        correo: yup.string().email().test("Email-Telefono", "we need the email or the phone", function (value) {
            return (!(this.parent.telefono==='' &&  value===''));
         }),
          telefono: yup.string().matches(phoneRegex, {
            message: "don't look like a phone",
            excludeEmptyString: true,
          }).test("Email-Telefono", "we need the email or the phone", function (value) {
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
        if(isValid){
        //Aqui en teoria se envia el sms        
        props.ChangeMenu('Iniciar')

      }
        
    }
    return(
      <form>
      <ContentForm as={motion.div} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <DivContent Width='100%' Center>
          <ChangeMenu onClick={()=>props.ChangeMenu('Iniciar')}>{'Auth'}</ChangeMenu>
      </DivContent>
      <Field
        size="small"
        variant="standard"
        control={control}
        error={errors.correo||(!dirtyFields.correo&&TryCreateOrder)}
        helperText={errors.correo?errors.correo.message:!dirtyFields.correo&&TryCreateOrder?"campo requerido":""}
        label='Correo'
        type='text'
        name="correo"
        id="correo"        
      />
    <Field
        size="small"
        variant="standard"
        control={control}
        error={errors.telefono||(!dirtyFields.telefono&&TryCreateOrder)}
        helperText={errors.telefono?errors.telefono.message:!dirtyFields.telefono&&TryCreateOrder?"campo requerido":""}
        label={'Telefono'}
        type='text'
        name="telefono"
        id="telefono"
      />
      <DivContent>
          <AuthButtonSX onClick={handleSubmitForm}>Reset</AuthButtonSX>
      </DivContent>  
      </ContentForm> 
      </form>
    )

}

export default ResetLoguin