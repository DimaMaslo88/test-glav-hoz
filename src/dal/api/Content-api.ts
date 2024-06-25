import { instance } from "dal/instance";
import { FormReducerType, TableReducerType } from 'types/types';

export const ContentApi ={
  getHeaderData(){
    return instance.get<TableReducerType[]>('/f_pers_young_spec/')
  },
  getDataForLine(){
    return instance.get<FormReducerType[]>(`/f_pers_young_spec_line/`)
  },
  // getHeaderDataId(id:number){
  //   return instance.get<TableReducerType[]>(`/f_pers_young_spec/${id}`)
  // },
  // getFormLineDataId(id:number){
  //   return instance.get(`/f_pers_young_spec/${id}`)
  // },
  // getFormLineId(id:number|null){
  //   return instance.get(`/nsi_pers_young_spec/${id}`)
  // },
  getFormLine(){
    return instance.get(`/nsi_pers_young_spec/`)
  }
}
