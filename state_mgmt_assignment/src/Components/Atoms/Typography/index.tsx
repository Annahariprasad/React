import { Typography } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../theme";

type types =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "caption"
  | "button"
  | "overline"
  | "inherit";

interface Args {
  model?: types;
  content?: string;
  col?: string;
}

const Text = (props: Args) => {
  const { model, content, col } = props;

  return (
    <ThemeProvider theme={theme}>
      <Typography variant={model} color={col}>
        {content}
      </Typography>
    </ThemeProvider>
  );
};

export default Text;
