import React from "react";
import { Checkbox } from "@mui/material";

interface Arguments {
  stx?: object;
}

const MyCheckBox = (props: Arguments) => {
  const { stx } = props;

  return <Checkbox sx={stx} />;
};

export default MyCheckBox;
