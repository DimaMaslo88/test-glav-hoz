import { FormReducerType } from "types/types";

export type SetFormDataType = ReturnType<typeof setFormData>
export const setFormData = (data:FormReducerType[])=>{
  return{
    type:"SET-FORM-DATA",
    data
  }as const
}
