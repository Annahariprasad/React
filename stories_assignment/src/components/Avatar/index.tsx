import React from "react";
import { Avatar } from "@mui/material";

interface Arguments {
  alt?: string;
  src?: string;
  stx?: object;
}

const MyAvatar = (props: Arguments) => {
  const { alt, src, stx } = props;

  return <Avatar alt={alt} src={src} sx={stx} />;
};

export default MyAvatar;
