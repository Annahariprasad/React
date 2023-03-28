import TableHeader from "../Molecules/TableHeader/index";
import TableElement from "../Molecules/Card/index";
import Text from "../Atoms/Typography/index";
import Btn from "../Atoms/Button/index";
import { Stack, styled } from "@mui/material";
import theme from "../../theme";
import { useState } from "react";

const FinalComponentOne = styled("div")({
  marginBottom: "20px",
  padding: "2px 2px",
});

const FinalComponent = styled("div")({
  padding: "2px 2px",
  margin: "0",
  border: "1px solid white",
  borderRadius: "6px",
  boxShadow: "0px 4px 28px rgba(45, 45, 47, 0.1)",
});

const FinalComp = styled("div")({
  width: "1010px",
  //height: "40px",
  display: "grid",
  justifyContent: "inherit",
  alignContent: "inherit",
  marginLeft: "2px",
  zIndex: "0",
  padding: "10px 10px",
  borderRadius: "6px",
});

const HeaderMolecule = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  // backgroundColor: theme.palette.secondary.dark,
});

const Card = () => {
  const data = {
    first: "John Smith",
    second: "-",
    third: "CLEAR",
    fourth: "Barrouallie",
    fifth: "2/22/2022",
  };

  const [adjudication, setAdj] = useState(data.second);
  const [status, setStatus] = useState(data.third);

  const changeStatus = () => {
    setAdj("ADVERSE ACTION");
    setStatus("CONSIDER");
  };

  return (
    <FinalComp>
      <FinalComponentOne>
        <HeaderMolecule display="row">
          <Text
            model="h1"
            content="Candidates"
            col={theme.palette.primary.main}
          />
          <Stack direction="row" spacing={2}>
            <button
              style={{ background: "white", border: "none" }}
              onClick={changeStatus}
            >
              <Btn cnt="Pre-Adverse Action" />
            </button>
          </Stack>
        </HeaderMolecule>
      </FinalComponentOne>
      <FinalComponent>
        <TableHeader />
        <TableElement
          first={data.first}
          second={adjudication}
          third={status}
          fourth={data.fourth}
          fifth={data.fifth}
        />
      </FinalComponent>
    </FinalComp>
  );
};

export default Card;
