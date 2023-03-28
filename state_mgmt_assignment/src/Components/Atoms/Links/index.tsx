import { Link } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../theme";

interface Args {
  mdl?: string;
  cnt?: string;
  col?: string;
}
const Name = (props: Args) => {
  const { cnt, col } = props;
  return (
    <ThemeProvider theme={theme}>
      <Link href="#" underline="none" color={col}>
        {cnt}
      </Link>
    </ThemeProvider>
  );
};

export default Name;
