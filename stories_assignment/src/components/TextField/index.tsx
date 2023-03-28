import React from "react";
import { TextField } from "@mui/material";

interface Arguments {
  typeField?: "outlined" | "filled" | "standard";
  typ?: string;
  plhr?: string;
  stx?: object;
}

const MyTextField = (props: Arguments) => {
  const { typeField, typ, plhr, stx } = props;

  return <TextField variant={typeField} placeholder={plhr} type={typ} sx={stx} />;
};

export default MyTextField;
