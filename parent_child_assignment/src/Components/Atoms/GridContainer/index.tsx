import { styled, Container } from "@mui/material";

const GridContainer = styled(Container)({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridTemplateRows: "1fr 1fr 1fr",
  columnGap: "12px",
  rowGap: "12px",
  justifyContent: "inherit",
  alignItems: "flex-start",
  marginTop: "20px",
});

export default GridContainer;
