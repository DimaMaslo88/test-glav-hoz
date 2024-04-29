import { FormReducerType } from "types/types";
import { SetFormDataType } from "bll/actions/form-actions";

export const formReducerState : FormReducerType[]=[]
export type FormReducerActionsType = SetFormDataType

export const FormReducer = (state:FormReducerType[]=formReducerState,action:FormReducerActionsType):FormReducerType[]=>{
  switch (action.type){
    case "SET-FORM-DATA":{
      return [...state,...action.data]
    }
    default:return state
  }
}
