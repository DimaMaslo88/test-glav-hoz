import { SetIsOpenModalType } from 'bll/actions/modal-actions';
import { ModalReducerType } from 'types/types';


const modalReducerState = {
  isOpenModal:false
}

export type ModalReducerActionType = SetIsOpenModalType
export const ModalReducer =(state:ModalReducerType = modalReducerState,action:ModalReducerActionType):ModalReducerType=>{
  switch (action.type) {
    case 'SET-IS-OPEN-MODAL':{
      return {...state,isOpenModal:action.isOpen}
    }
    default:
      return state
  }
}
