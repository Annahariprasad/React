import Card from "../../../Components/Molecules/Card/index";

interface Args {
  lbl?: string;
  content?: string;
  Element?: string;
}

const CardBox = (props: Args) => {
  const { lbl, content, Element } = props;

  return <Card lbl={lbl} content={content} Element={Element} />;
};

export default CardBox;
