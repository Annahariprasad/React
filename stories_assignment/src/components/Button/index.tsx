import React from "react";
import { Button } from "@mui/material";

interface Arguments {
  typeButton?: "text" | "contained" | "outlined";
  stx?: object;
  content?: string;
}

const MyButton = (props: Arguments) => {
  const { typeButton, stx, content } = props;

  return (
    <Button variant={typeButton} sx={stx}>
      {content}
    </Button>
  );
};

export default MyButton;
