import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { ChangeEvent, useState } from "react";
import { useAppDispatch } from "bll/store";
import { setCurrentPage } from "bll/actions/appReducer-actions";

type PaginationControlledType={
  items:number
  elementOnPage:number
  currentPage:number
}
export default function PaginationControlled({items,elementOnPage,currentPage}:PaginationControlledType) {
 const dispatch = useAppDispatch()


  const totalPages = items/elementOnPage
  const handleChange = (event: ChangeEvent<unknown>, num: number) => {
   dispatch(setCurrentPage(num))
  };


  return (
    <Stack spacing={2} style={{padding:'10px'}}>
      <Pagination count={totalPages} page={currentPage} onChange={handleChange} />
    </Stack>
  );
}
