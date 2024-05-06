import { instance } from "dal/instance";
import { TableReducerType } from "types/types";

export const ContentApi ={
  getHeaderData(){
    return instance.get<TableReducerType[]>('/f_pers_young_spec/')
  },
  // getHeaderDataId(id:number){
  //   return instance.get<TableReducerType[]>(`/f_pers_young_spec/${id}`)
  // },
  getFormLineDataId(id:number){
    return instance.get(`/f_pers_young_spec/${id}`)
  },
  // getFormLineId(id:number|null){
  //   return instance.get(`/nsi_pers_young_spec/${id}`)
  // },
  getFormLine(){
    return instance.get(`/nsi_pers_young_spec/`)
  }
}
