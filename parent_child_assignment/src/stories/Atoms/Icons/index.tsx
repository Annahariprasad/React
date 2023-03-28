import React from "react";

interface Args {
  picture?: string;
  text?: string;
}
const Icon = (props: Args) => {
  const { picture, text } = props;

  return <img src={picture} alt={text} />;
};

export default Icon;
