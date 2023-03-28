import { Button, styled } from "@mui/material";
import theme from "../../../theme";

const Btton = styled(Button)({
  width: "164px",
  height: "36px",
  color: "#696A6E",
  background: "#FFFFF",
  border: "1px solid #E5E7ED",
  borderRadius: "6px",
  alignItems: "center",
  padding: "8px 16px",
  gap: "4px",
  textTransform: "none",
});

interface Args {
  cnt?: string;
}

const Btn = (props: Args) => {
  const { cnt } = props;

  return <Btton>{cnt}</Btton>;
};

export default Btn;
