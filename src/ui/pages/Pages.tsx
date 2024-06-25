import React from "react";
import { Routes,Route,Navigate } from "react-router-dom";
import { TableComponent } from "ui/components/tableComponent/TableComponent";
import { TestRef } from 'ui/pages/TestRef';


export const Pages = () => {
  return (
    <div>
      <Routes>
<Route path='/' element={<Navigate to='/table'/>}/>
<Route path='/table' element={<TableComponent/>}/>
<Route path='/ref' element={<TestRef/>}/>
      </Routes>
    </div>
  );
};

