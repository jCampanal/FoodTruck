import React,{useState} from 'react' 
import Field from '../Field/Field';
import {DivContent,AuthButtonSX,ChangeMenu,ContentText} from '../LogMenu/Forms/LogForm/LogFormStyled'
import {ContentCategoryAndGenderS,ContentInputPriceS,ContentInputCategoryAndGenderS,ContentForm,RangoTestS} from './SearchMenuStyled'
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import {TextField,MenuItem,Select,InputLabel,FormControl,OutlinedInput,FormControlLabel,Checkbox} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import {TiposRopa,Generos} from "./SearchMenuData"
import {motion} from "framer-motion"
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setOpenModal} from '../../Store/MotionGenerix/ModalGeneric';
import { setNavOpacity } from '../../Store/NavEffect/NavEffect';

const defaulFormValues = {
    data:'',
    gender: '',
    minPrice: 0,
    maxPrice: 0,
    category: ''
};





const SearchMenu=()=>{
    
    const dispatch=useDispatch()
    const navegate=useNavigate()

    const [price,setPrice]=useState(false)
    const [auxEffect,setAuxEffect]=useState(false)

    const validationRules=yup.object().shape({
        busqueda:yup.string(),
        genero:yup.string(),
        minPrice:yup.number().min(-0.00001,'Debe ser un numero positivo').test('Min-Max','Debe ser menor que el maximo',function(value){
            return(value<this.parent.maxPrice||(value===0&&this.parent.maxPrice===0))}),
        maxPrice:yup.number().min(-0.00001,'Debe ser un numero positivo').test('Min-Max','Debe ser mayor que el minimo',function(value){
            return((value>this.parent.minPrice)||(value===0&&this.parent.minPrice===0))}),
        type:yup.string(),
    })

    const {
        control,
        reset,
        getValues,
        handleSubmit,
        formState: {dirtyFields,isValid, errors },
    } = useForm({
        defaultValues: defaulFormValues,
        mode: "all",
        revalidationMode:'all',
        resolver: yupResolver(validationRules),
    });


    const HandlerSearchIcons=()=>{
        let arr = Object.keys(dirtyFields).map(function (key) {
            return ([[key],getValues(key)])})
        let path = '/search?'
       if(arr.lengt!==0&&isValid){
            let primero=true
            arr.map(element=>{
                if(primero){
                    path=path+'&'+element[0]+'='+element[1]
                }else{
                    primero=false
                    path=path+'&'+element[0]+'='+element[1]
                }
            })
            dispatch(setNavOpacity(false))
            setTimeout(()=>{
            navegate(
                path
             )
             dispatch(setOpenModal(false))},600)
       }
       

        
        
      }

      const HandlerCheck=()=>{
          console.log(price)
            if(!price){
                setAuxEffect(true)
                setTimeout(() => {
                    setPrice(true)
                }, 500);
            }else{
                setPrice(false)
                setTimeout(() => {
                    setAuxEffect(false)
                }, 500);
            }
      }

    return(
        <form onSubmit={handleSubmit(HandlerSearchIcons)}>
        <ContentForm as={motion.div} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>

        <Field
          size="small"
          variant="standard"
          control={control}
          error={errors.busqueda}
          helperText={errors.busqueda?.message}
          label='Busqueda'
          type='text'
          name="data"
          id="data"        
        />

<ContentForm Width={'80%'} Row Justify={'space-between'} Item={'top'}>
    <FormControlLabel control={<Checkbox value={price} 
                                            onChange={(e)=>{HandlerCheck()}}
                                              />} 
                    sx={RangoTestS}
                      label="Rangos" />
    </ContentForm>

<ContentForm Width={'80%'}  Row  Height={auxEffect?'40px':'0px'}>
    <ContentForm Width={'100%'}  Row Justify={'space-between'} Item={'top'} Opacity={price?'1':'0'}>
            <ContentInputPriceS>
            <Controller 
                        name="minPrice"
                        control={control}            
                        render={({ field }) => (
                        <FormControl sx={{width:'100%'}}>
                        <TextField
                            {...field}
                            size="small"
                            error={errors.minPrice}                            
                            label={'Minimo'}
                            type='number'                            
                            id="minPrice"
                            sx={{width:'100%'}}
                            />
                    </FormControl>
                        )}
                    />
            </ContentInputPriceS>

            <ContentInputPriceS >
                <Controller 
                        name="maxPrice"
                        control={control}            
                        render={({ field }) => (
                        <FormControl sx={{width:'100%'}}>
                    <TextField
                        {...field}
                        size="small"                   
                        error={errors.maxPrice}
                        label={'Maximo'}
                        type='number'                
                        />
                        </FormControl>
                        )}
                    />
            </ContentInputPriceS>
    </ContentForm>
</ContentForm>

<ContentCategoryAndGenderS >
    <ContentInputCategoryAndGenderS >
        <Controller 
                    name="category"
                    control={control}            
                    render={({ field }) => (
                    <FormControl sx={{width:'100%'}}>
                        
                        <TextField
                        {...field}
                        size="small"
                        select
                        id="demo-simple-select"
                        label={'clasificacion'}
                        variant="outlined"                  
                        sx={{width:'100%',verticalAlign:'top'}}
                        
                        >
                        <MenuItem key={''}  value={''}>{'Todos'}</MenuItem>
                        {TiposRopa.map((element)=>{
                            return(
                                <MenuItem key={element}  value={element}>
                                    {element}
                                </MenuItem>
                            )
                        })}    
                        
                        </TextField>
                    </FormControl>
                    )}
                />
    </ContentInputCategoryAndGenderS>

    <ContentInputCategoryAndGenderS Margin={'10px 0px 0px 0px'}>
        <Controller
                    name="gender"
                    control={control}            
                    render={({ field }) => (
                    <FormControl sx={{width:'100%'}}>
                        
                        <TextField
                        {...field}
                        select
                        labelId="genero"
                        size="small"
                        variant="outlined"
                        label='Genero' 
                        sx={{width:'100%',verticalAlign:'top'}}
                        >
                        <MenuItem key={''}  value={''}>{'Todos'}</MenuItem>
                        {Generos.map((element)=>{
                            return(
                                <MenuItem key={element}  value={element}>
                                    {element}
                                </MenuItem>
                            )
                        })}    
                        
                        </TextField>
                    </FormControl>
                    )}
                />
    </ContentInputCategoryAndGenderS>
</ContentCategoryAndGenderS>




        <DivContent>
            <AuthButtonSX onClick={()=>{HandlerSearchIcons()}}>Buscar</AuthButtonSX>
        </DivContent>  
        </ContentForm> 
        </form>
      )
  
  }

  export default SearchMenu