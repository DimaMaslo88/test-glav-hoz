import React from 'react';
import style from "styles/Header.module.css";
import { useAppDispatch } from "bll/store";
import ButtonHeader from "ui/utils/button/Button";
import AutorenewIcon from '@mui/icons-material/Autorenew';
import FilterListOffOutlinedIcon from '@mui/icons-material/FilterListOffOutlined';
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';
import { useSelector } from 'react-redux';
import { selectIsOpenModal, selectTableId } from 'bll/selectors/Selectors';
import { setIsOpenModal } from 'bll/actions/modal-actions';
import { FormComponent } from 'ui/components/FormComponent';
import { ModalWindow } from 'ui/components/modalWindow/ModalWindow';

export const Header = () => {
  const dispatch = useAppDispatch();
    const formId = useSelector(selectTableId)


  const openModal = ()=>{

    dispatch(setIsOpenModal(true))
  }
const reloadPageHandler = ()=>{
 window.location.reload()
}

  return (
    <div className={style.headerContainer}>
      <AutorenewIcon className={style.icon} onClick={reloadPageHandler}/>
      <FilterListOffOutlinedIcon className={style.icon}/>
      <ButtonHeader title="Добавить" />
      <ButtonHeader title="Просмотреть" />
      <ButtonHeader title="Редактировать"  onClick={openModal} disabled={!formId} />
      <DehazeOutlinedIcon className={style.icon} />

    </div>
  );
};

