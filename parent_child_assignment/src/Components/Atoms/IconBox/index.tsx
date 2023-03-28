import { styled, Container } from "@mui/material";

const IconBox = styled(Container)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxSizing: "border-box",
  position: "absolute",
  width: "44px",
  height: "44px",
  left: "12px",
  top: "12px",
  background: "#FFFFFF",
  border: "1px solid #E5E7ED",
  borderRadius: "12px",
});

export default IconBox;
