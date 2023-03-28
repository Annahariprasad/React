import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import theme from "../../Theme";

type values =
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
  vari?: values;
  content?: string;
  color?: string;
}

const Labels = (props: Args) => {
  const { vari, content, color } = props;

  return (
    <ThemeProvider theme={theme}>
      <Typography variant={vari} color={color}>
        {content}
      </Typography>
    </ThemeProvider>
  );
};

export default Labels;
