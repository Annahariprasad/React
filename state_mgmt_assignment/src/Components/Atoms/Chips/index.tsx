import { ThemeProvider } from "@emotion/react";
import theme from "../../../theme";
import { Chip, styled } from "@mui/material";

interface StatusChipProp {
  label?: string;
}

const StatusChip = styled(Chip)((props: StatusChipProp) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: props.label === "CLEAR" ? "#F2FCFB" : "#FAF8EB",
  border: "1px solid #F2FCFB",
  color: props.label === "CLEAR" ? "#17A076" : "#A08817",
  borderRadius: "4px",
  gap: "10px",
  width:
    props.label === "CLEAR"
      ? "70px"
      : props.label === "CONSIDER"
      ? "100px"
      : "150px",
}));

const Status = (props: StatusChipProp) => {
  const { label } = props;

  return <StatusChip label={label} />;
};

export default Status;
