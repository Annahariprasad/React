import React from "react";
import { Link } from "@mui/material";

interface Arguments {
  content?: string;
  stx?: object;
}

const MyLink = (props: Arguments) => {
  const { content, stx } = props;

  return (
    <Link href="#" sx={stx}>
      {content}
    </Link>
  );
};

export default MyLink;
