import { FormLineReducerType} from "types/types";

export type SetFormLineDataType = ReturnType<typeof setFormLineData>
export const setFormLineData = (data:FormLineReducerType[])=>{
  return{
    type:"SET-FORM-LINE-DATA",
    data
  }as const
}
