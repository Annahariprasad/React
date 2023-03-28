import React from "react";
import Text from "../../Atoms/Typography/index";
import { Stack, styled } from "@mui/material";
import theme from "../../../theme";

const TableHeaderMolecule = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  height: "36px",
  backgroundColor: "white",
  padding: "13px 5px",
});

const Tablehead = styled(Stack)({
  height: "36px",
});

const IconBorder = styled("div")({
  border: "1px solid #E5E7ED",
  borderRadius: "6px",
});

const TableHeader = () => {
  return (
    <TableHeaderMolecule display="row">
      <Text
        content="Candidate Information"
        model="subtitle1"
        col={theme.palette.primary.main}
      />
      <Tablehead spacing={1} direction="row"></Tablehead>
    </TableHeaderMolecule>
  );
};

export default TableHeader;
