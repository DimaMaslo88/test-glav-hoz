import React from "react";
import { Routes,Route,Navigate } from "react-router-dom";
import { TableComponent } from "ui/components/tableComponent/TableComponent";
import { FormComponent } from "ui/components/FormComponent";

export const Pages = () => {
  return (
    <div>
      <Routes>
<Route path='/' element={<Navigate to='table'/>}/>
<Route path='/table' element={<TableComponent/>}/>
<Route path='/form' element={<FormComponent/>}/>
      </Routes>
    </div>
  );
};

