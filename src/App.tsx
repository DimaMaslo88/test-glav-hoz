import React, { useEffect } from "react";
import { Header } from "ui/components/header/Header";
import style from "styles/App.module.css";
import { useAppDispatch } from "bll/store";
import { Pages } from "ui/pages/Pages";
import { SetTableDataThunk } from "dal/thunk/ContentThunk";
import { useSelector } from "react-redux";
import { selectIsLoading, selectIsOpenModal } from 'bll/selectors/Selectors';
import { setIsOpenModal } from 'bll/actions/modal-actions';

import { ModalWindow } from 'ui/components/modalWindow/ModalWindow';

function App() {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isOpenModal = useSelector(selectIsOpenModal)
  const closeModal =()=>{
    dispatch(setIsOpenModal(false))
  }
  useEffect(() => {
    dispatch(SetTableDataThunk());
  }, []);
if(isOpenModal){
  return  < ModalWindow isOpen={isOpenModal} onClose={closeModal}  />
}
  return (
    <div>
      <Header />
      <div className={style.tableComponentContainer}>
        <Pages />
      </div>

    </div>
  );
}

export default App;
