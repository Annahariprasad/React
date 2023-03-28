import React from "react";
import Labels from "../../Atoms/Typography/index";
import CardContainer from "../../Atoms/CardContainer";
import IconBox from "../../Atoms/IconBox";
import ContentBox from "../../Atoms/ContentBox";
import { Stack } from "@mui/material";

interface Args {
  lbl?: string;
  content?: string;
  Element?: string;
}

const Card = (props: Args) => {
  const { lbl, content, Element } = props;

  return (
    <CardContainer>
      <Stack direction="row" spacing={3}>
        <IconBox>
          <img src={Element} alt="icon" />
        </IconBox>
        <ContentBox>
          <Labels vari="body1" content={lbl} color="primary" />
          <Labels vari="body2" content={content} color="secondary" />
        </ContentBox>
      </Stack>
    </CardContainer>
  );
};

export default Card;
