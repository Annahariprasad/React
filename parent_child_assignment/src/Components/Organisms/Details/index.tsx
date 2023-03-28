import React from "react";
import Card from "../../Molecules/Card/index";
import Labels from "../../Atoms/Typography/index";
import { styled } from "@mui/material";
import Icons from "../../Atoms/Icons/index";
import GridContainer from "../../Atoms/GridContainer/index";
import Header from "../../Atoms/HeaderContainer/index";
import Box from "../../Atoms/BoxContainer/index";

const Divider = styled("div")({
  width: "1000px",
  borderBottom: "1px solid #E5E7ED",
});

const DetailsTab = () => {
  const labelsArray = [
    ["Name", "John Smith", Icons.person],
    ["Email", "John.smith@checkr.com", Icons.email],
    ["Docs", "1990-09-10 (26)", Icons.idcard],
    ["Phone", "(555) 555-5555", Icons.phone],
    ["ZipCode", "94158", Icons.location],
    ["Social Security", "XXX-XX-6789", Icons.shield],
    ["Drivers Licence", "FTEST1111 (CA)", Icons.idcard],
    ["Created At", "Nov 29,2016 11:05:57 AM", Icons.calender],
  ];

  return (
    <Box>
      <Header>
        <Labels
          vari="subtitle1"
          content="Candidate Information"
          color="secondary"
        />
        <img src={Icons.arrow} alt="ArrowIcon" />
      </Header>

      <Divider />

      <GridContainer>
        {labelsArray.map((k) => (
          <Card lbl={k[0]} content={k[1]} Element={k[2]} />
        ))}
      </GridContainer>
    </Box>
  );
};

export default DetailsTab;
