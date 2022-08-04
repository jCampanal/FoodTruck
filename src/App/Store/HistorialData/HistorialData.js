import { createSlice } from "@reduxjs/toolkit";





const HistorialDataSlice = createSlice({
  name: "historialData",
  initialState: {
    HistorialNameList:localStorage.getItem("HistorialNameList")? localStorage.getItem("HistorialNameList").split(' ') : [],
    HistorialList: localStorage.getItem("HistorialNameList")? localStorage.getItem("HistorialNameList")
                                                        .split(' ')
                                                        .map(element=>{
                                                          return(
                                                          {
                                                            Id:element,
                                                            Address:localStorage.getItem(element+'Address'),
                                                            Deliver:localStorage.getItem(element+'Deliver'),
                                                            Price:localStorage.getItem(element+'Price'),
                                                            Status:localStorage.getItem(element+'Status'),
                                                            Elements:localStorage.getItem(element+'Element').split(' ').map(food=>{
                                                                return ({
                                                                          Id:food,
                                                                          Name:localStorage.getItem(element+food+'Name'),
                                                                          Price:localStorage.getItem(element+food+'Price'),
                                                                          Amount:localStorage.getItem(element+food+'Amount'),
                                                                        })
                                                            }
                                                            )
                                                          }
                                                        )}):[],        
  },
  reducers: {
    eliminateHistorialElement: (state, action) => {       
      const arrName = action.payload.Code.filter(element=>{return(action.payload.Id!==element)})
      
      let ArrElement
      if(arrName.length<action.payload.Code.length){
        ArrElement=action.payload.List.filter(element=>{return(action.payload.Id!==element.Id)})
        localStorage.removeItem(action.payload.Id+'Address');
        localStorage.removeItem(action.payload.Id+'Deliver');
        localStorage.removeItem(action.payload.Id+'Price');
        localStorage.getItem(action.payload.Id+'Element').split(' ').map(food=>{
          localStorage.removeItem(action.payload.Id+food+'Name');
          localStorage.removeItem(action.payload.Id+food+'Price');
          localStorage.removeItem(action.payload.Id+food+'Amount');
        })
        localStorage.removeItem(action.payload.Id+'Element');
        if(ArrElement.length===0){
          localStorage.removeItem("HistorialNameList");
        }else{
        let VarNameList
        arrName.map((element,index)=>{index===0?VarNameList=element:VarNameList=VarNameList+' '+element})
        localStorage.setItem("HistorialNameList", VarNameList);
        }
      }
        state.HistorialList = ArrElement;
        state.HistorialNameList= arrName;
    },

    putHistorialElement: (state, action) => {
      let elementNames='' 
        state.HistorialNameList = [...action.payload.Code,action.payload.NewOrder.Id];        
        state.HistorialList=[...action.payload.List,action.payload.NewOrder]
        localStorage.setItem(action.payload.NewOrder.Id+'Address', action.payload.NewOrder.Address);
        localStorage.setItem(action.payload.NewOrder.Id+'Price', action.payload.NewOrder.Price);
        localStorage.setItem(action.payload.NewOrder.Id+'Deliver', action.payload.NewOrder.Deliver);
        localStorage.setItem(action.payload.NewOrder.Id+'Element',action.payload.NewOrder.Elements);
        localStorage.setItem(action.payload.NewOrder.Id+'Status',action.payload.NewOrder.Status);
        action.payload.NewOrder.Elements.map((element,index)=>{
          if(index===0){
            elementNames=element.Id
          }else{
            elementNames=elementNames+' '+element.Id
          }
              localStorage.setItem(action.payload.NewOrder.Id+element.Id+'Price', element.Price);
              localStorage.setItem(action.payload.NewOrder.Id+element.Id+'Name', element.Name);
              localStorage.setItem(action.payload.NewOrder.Id+element.Id+'Amount',element.Amount)
        })
        localStorage.setItem(action.payload.NewOrder.Id+'Element',elementNames)

        let nameArray=action.payload.NewOrder.Id
        
        action.payload.Code.map((element,index)=>{nameArray=nameArray+' '+element})        
        localStorage.setItem('HistorialNameList', nameArray);
    },

    CancelHistorialElements: (state,action) => {
      state.HistorialList=action.payload.List.map(element=>{
        if(element.Id===action.payload.Id){
          localStorage.setItem(action.payload.Id+'Status','Canceled')
          return{...element,Status:'Canceled'}
        }else{
          return {...element}
        }
      })
    
  },
}
});

export const { eliminateHistorialElement, putHistorialElement, CancelHistorialElements } = HistorialDataSlice.actions;

export const selectHistorialList = (state) => state.historialData.HistorialList;
export const CodeHistorialList = (state) => state.historialData.HistorialNameList;

export default HistorialDataSlice.reducer;