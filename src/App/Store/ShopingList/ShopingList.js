import { createSlice } from "@reduxjs/toolkit";





const ShopingListSlice = createSlice({
  name: "shopingList",
  initialState: {
    NameList:localStorage.getItem("NameList")? localStorage.getItem("NameList").split(' ') : [],
    List: localStorage.getItem("NameList")? localStorage.getItem("NameList")
                                                        .split(' ')
                                                        .map(element=>{
                                                          return(
                                                          {
                                                            Id:element,
                                                            Nombre:localStorage.getItem(element+'Nombre'),
                                                            Src:localStorage.getItem(element+'Src'),
                                                            Cantidad:localStorage.getItem(element+'Cantidad'),
                                                            Precio:localStorage.getItem(element+'Precio'),
                                                          }
                                                        )}):[],        
  },
  reducers: {
    eliminateShopingElement: (state, action) => {       
      const arrName = action.payload.Code.filter(element=>{return(action.payload.Id!==element)})
      
      let ArrElement
      if(arrName.length<action.payload.Code.length){
        ArrElement=action.payload.List.filter(element=>{return(action.payload.Id!==element.Id)})
        localStorage.removeItem(action.payload.Id+'Nombre');
        localStorage.removeItem(action.payload.Id+'Src');
        localStorage.removeItem(action.payload.Id+'Cantidad');
        localStorage.removeItem(action.payload.Id+'Precio');
        if(ArrElement.length===0){
          localStorage.removeItem("NameList");
        }else{
        let VarNameList
        arrName.map((element,index)=>{index===0?VarNameList=element:VarNameList=VarNameList+' '+element})
        localStorage.setItem("NameList", VarNameList);
        }
      }
        state.List = ArrElement;
        state.NameList= arrName;
    },

    putShopingElement: (state, action) => { 
        state.NameList = [...action.payload.Code,action.payload.ShopingElement.Id];
        state.List=[...action.payload.List,action.payload.ShopingElement]
        localStorage.setItem(action.payload.ShopingElement.Id+'Nombre', action.payload.ShopingElement.Nombre);
        localStorage.setItem(action.payload.ShopingElement.Id+'Src', action.payload.ShopingElement.Src);
        localStorage.setItem(action.payload.ShopingElement.Id+'Cantidad', action.payload.ShopingElement.Cantidad);
        localStorage.setItem(action.payload.ShopingElement.Id+'Precio', action.payload.ShopingElement.Precio);
        let nameArray=action.payload.ShopingElement.Id
        action.payload.Code.map((element,index)=>{index===0?nameArray=element:nameArray=nameArray+' '+element})        
        localStorage.setItem('NameList', nameArray);
    },
    
  },
 
});

export const { eliminateShopingElement, putShopingElement } = ShopingListSlice.actions;

export const selectShopinList = (state) => state.shopingList.List;
export const CodeShopinList = (state) => state.shopingList.NameList;

export default ShopingListSlice.reducer;