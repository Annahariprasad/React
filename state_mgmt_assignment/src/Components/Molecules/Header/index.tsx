import React from "react";
import Text from "../../Atoms/Typography/index";
import theme from "../../../theme";
import Btn from "../../Atoms/Button/index";
import { Stack, styled } from "@mui/material";

const HeaderMolecule = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  // backgroundColor: theme.palette.secondary.dark,
});

const Header = () => {
  return (
    <HeaderMolecule display="row">
      <Text model="h1" content="Candidates" col={theme.palette.primary.main} />
      <Stack direction="row" spacing={2}>
        <Btn cnt="Pre-Adverse Action" />
      </Stack>
    </HeaderMolecule>
  );
};
export default Header;
