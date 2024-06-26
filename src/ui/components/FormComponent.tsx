import React, { useEffect } from "react";
import { useAppDispatch } from "bll/store";
import { SetFormForYoungSpec, SetFormLineForYoungSpec } from "dal/thunk/ContentThunk";
import { useSelector } from "react-redux";
import { selectFormParams, selectIsLoading, selectLineParams, selectTableId } from 'bll/selectors/Selectors';
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import style from "styles/TableContainer.module.css";
import ButtonHeader from 'ui/utils/button/Button';
import { useNavigate } from 'react-router-dom';
import { setId } from 'bll/actions/appReducer-actions';
import { setIsOpenModal } from 'bll/actions/modal-actions';



export const FormComponent = () => {
  const dispatch = useAppDispatch();
  const formLineData = useSelector(selectLineParams);
  const formData = useSelector(selectFormParams)
  const isLoading = useSelector(selectIsLoading);
  const tableId = useSelector(selectTableId)
  const navigate = useNavigate()
  const navigateToTable = ()=>{
   dispatch(setIsOpenModal(false))
    dispatch(setId(null))
  }

  useEffect(()=>{
    dispatch(SetFormLineForYoungSpec())
  },[])
  // useEffect(() => {
  //   dispatch(SetFormForYoungSpec());
  // }, []);
  // if (isLoading) {
  //   return <LinearIndeterminateProgress />;
  // }
  return (
    <div>

    <TableContainer component={Paper} className={style.tableContainer}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className={style.tableHeader}>
            <TableCell>Наименование Показателя
            </TableCell>
            <TableCell align="right">Общее количество молодых специалистов
            </TableCell>
            <TableCell align="right">Категория,источник приема на работу
              <Grid container>
                <Grid item xs={4}>
                  <TableCell>Целевое</TableCell>
                </Grid>
                <Grid item xs={4}>
                  <TableCell>Распределение</TableCell>
                </Grid>

              </Grid>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {formLineData.map((data) => (
            <TableRow
              key={data.nsi_pers_young_spec_id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}

            >
              <TableCell component="th" scope="row" >{data.name} </TableCell>
              <TableCell align="right" > hello</TableCell>
              <TableCell align="right" >
                {formData.map((fdata)=>(
                  <Grid container>
                    <Grid item xs={4}>
                      {fdata.distribution_count}
                    </Grid>
                    <Grid item xs={4}>
                      {fdata.target_count}
                    </Grid>
                  </Grid>
                ))}

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      <ButtonHeader title="Вернуться назад"  onClick={navigateToTable}/>
    </div>
  );

};

