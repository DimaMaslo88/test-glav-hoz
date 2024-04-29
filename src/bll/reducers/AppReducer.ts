import { appReducerType } from "types/types";
import { SetCurrentPage, SetIdType, SetIsLoadingType } from "bll/actions/appReducer-actions";

const appReducerState={
  isLoading: false,
  currentPage:1,
  id:null
}

export type AppReducerTypes = SetIsLoadingType
|SetCurrentPage
|SetIdType
export const AppReducer = (state:appReducerType=appReducerState,action:AppReducerTypes):appReducerType=>{
  switch (action.type){
    case "SET-IS-LOADING":{
      return {...state,isLoading:action.isLoading}
    }
    case "SET-CURRENT-PAGE":{
      return {...state,currentPage:action.page}
    }
    case "SET-ID":{
      return {...state,id:action.id}
    }
    default:return state
  }
}
