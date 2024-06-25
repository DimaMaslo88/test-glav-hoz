import { AppThunkType } from 'bll/store';
import { ContentApi } from 'dal/api/Content-api';
import { setTableData } from 'bll/actions/table-actions';
import { setIsLoading } from 'bll/actions/appReducer-actions';
import { setFormData } from 'bll/actions/form-actions';
import { setFormLineData } from 'bll/actions/formLine-actions';


export const SetTableDataThunk = (): AppThunkType =>
  async (dispatch) => { // санка для получения данных для таблицы
    dispatch(setIsLoading(true));
    try {
      const res = await ContentApi.getHeaderData();
      dispatch(setTableData(res.data.slice(0, 50))); // 50 элементов записываю в стэйт
      console.log(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(setIsLoading(false));
    }

  };


export const SetFormForYoungSpec = (): AppThunkType => async (dispatch) => {
  dispatch(setIsLoading(true));
  try {

    const res = await ContentApi.getDataForLine();
    dispatch(setFormData(res.data));
    console.log(res.data);
  } catch (err) {
    console.log(err);
  } finally {
    dispatch(setIsLoading(false));
  }
};
export const SetFormLineForYoungSpec = (): AppThunkType => async (dispatch, getState) => {
  dispatch(setIsLoading(true));
  const formData = getState().formLine;
  try {
    const res = await ContentApi.getFormLine();
    if (formData.length === 0) {
      dispatch(setFormLineData(res.data));
    }

    dispatch(SetFormForYoungSpec()); // дать инфу для линий пока не работает
    console.log(res.data);
  } catch (err) {
    console.log(err);
  } finally {
    dispatch(setIsLoading(false));
  }
};
