import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

type ButtonHeaderType={
  title:string
  onClick?:()=>void
  disabled?:boolean
}
export default function ButtonHeader({title,onClick,disabled}:ButtonHeaderType) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined" onClick={onClick} disabled={disabled}>{title}</Button>
    </Stack>
  );
}
