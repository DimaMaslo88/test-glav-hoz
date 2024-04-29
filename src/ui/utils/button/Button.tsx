import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

type ButtonHeaderType={
  title:string
}
export default function ButtonHeader({title}:ButtonHeaderType) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined">{title}</Button>
    </Stack>
  );
}
