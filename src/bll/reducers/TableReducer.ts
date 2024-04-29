import { SetTableDataType } from "bll/actions/table-actions";
import {  TableReducerType } from "types/types";




export const tableReducerState:TableReducerType[]=[]


export type TableReducerActionsType = SetTableDataType
export const TableReducer =(state:TableReducerType[]= tableReducerState, action:TableReducerActionsType):TableReducerType[]=>{
switch (action.type){
  case "SET-TABLE-DATA":{
    return [ ...state, ...action.data]
  }
  default:return state
}

}



