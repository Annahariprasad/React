import { styled, Container } from "@mui/material";

const CardContainer = styled(Container)({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  padding: "12px",
  gap: "12px",
  position: "relative",
  width: "310px", //310px
  height: "68px",
  background: "#FAFAFC",
  border: "1px solid #E5E7ED",
  borderRadius: "12px",
});

export default CardContainer;
