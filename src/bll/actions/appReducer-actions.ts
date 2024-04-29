export type SetIsLoadingType =ReturnType<typeof setIsLoading>
export const setIsLoading = (isLoading:boolean)=>{
  return {
    type:'SET-IS-LOADING',
    isLoading
  }as const
}
export type SetCurrentPage =ReturnType<typeof setCurrentPage>
export const setCurrentPage = (page:number)=>{
  return {
    type:'SET-CURRENT-PAGE',
    page
  }as const
}
export type SetIdType =ReturnType<typeof setId>
export const setId = (id:number|null)=>{
  return {
    type:'SET-ID',
    id
  }as const
}
