import Labels from "../../../Components/Atoms/Typography";

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

const Text = (props: Args) => {
  const { vari, content, color } = props;

  return <Labels vari={vari} color={color} content={content} />;
};

export default Text;
