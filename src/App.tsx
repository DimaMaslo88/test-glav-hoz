import React, { useEffect } from "react";
import { Header } from "ui/components/header/Header";
import style from "styles/App.module.css";
import { useAppDispatch } from "bll/store";
import { Pages } from "ui/pages/Pages";
import { SetTableDataThunk } from "dal/thunk/ContentThunk";
import LinearIndeterminateProgress from "ui/utils/progress/Progress";
import { useSelector } from "react-redux";
import { selectIsLoading } from "bll/selectors/Selectors";

function App() {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(SetTableDataThunk());
  }, []);

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
