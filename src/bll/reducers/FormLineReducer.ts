import { FormLineReducerType, FormReducerType } from "types/types";
import { SetFormLineDataType } from "bll/actions/formLine-actions";

const formLineReducerState: FormLineReducerType[] = [];
export type FormLineReducerActionType=SetFormLineDataType
export const FormLineReducer = (state: FormLineReducerType[] = formLineReducerState, action: FormLineReducerActionType): FormLineReducerType[] => {
  switch (action.type) {
    case 'SET-FORM-LINE-DATA': {
      return [...state, ...action.data];
    }
    default:
      return state;
  }
};
