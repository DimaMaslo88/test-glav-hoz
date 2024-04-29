import React, { useEffect } from "react";
import style from "styles/Header.module.css";
import { useAppDispatch } from "bll/store";
import ButtonHeader from "ui/utils/button/Button";
import AutorenewIcon from '@mui/icons-material/Autorenew';
import FilterListOffOutlinedIcon from '@mui/icons-material/FilterListOffOutlined';
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const dispatch = useAppDispatch();
  const navigator = useNavigate()
  const navigateToForm = ()=>{
    navigator('form')
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
      <ButtonHeader title="Редактировать" />
      <DehazeOutlinedIcon className={style.icon} />
    </div>
  );
};

