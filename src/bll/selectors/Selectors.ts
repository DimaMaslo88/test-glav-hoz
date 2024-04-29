import { StateType } from "bll/store";
import { FormLineReducerType, FormReducerType, TableReducerType } from "types/types";

export const selectTableParams = (state:StateType):TableReducerType[] =>state.table
export const selectIsLoading = (state:StateType):boolean=>state.app.isLoading
export const selectFormParams = (state:StateType):FormReducerType[]=>state.form
export const selectLineParams = (state:StateType):FormLineReducerType[]=>state.formLine
export const selectCurrentPage = (state:StateType):number=>state.app.currentPage
export const selectTableId = (state:StateType):number|null=>state.app.id
