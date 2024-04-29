import { TableReducerType } from "types/types";


export type SetTableDataType = ReturnType<typeof setTableData>
export const setTableData =(data:TableReducerType[])=>{
  return{
    type:'SET-TABLE-DATA',
    data
  }as const
}
