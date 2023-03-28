import * as React from "react";
import {
  styled,
  ThemeProvider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  tableCellClasses,
} from "@mui/material";
import Name from "../../Atoms/Links/index";
import Status from "../../Atoms/Chips/index";
import Text from "../../Atoms/Typography/index";
import theme from "../../../theme";

const StyledTableCell = styled(TableCell)({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F7F8FA",
    color: "#696A6E",
    width: "180px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
});

interface Args {
  first?: string;
  second?: string;
  third?: string;
  fourth?: string;
  fifth?: string;
}

const TableElement = (props: Args) => {
  const tbHeads = ["NAME", "ADJUDICATION", "STATUS", "LOCATION", "DATE"];
  const { first, second, third, fourth, fifth } = props;
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tbHeads.map((cnt) => (
              <StyledTableCell>
                <ThemeProvider theme={theme}>
                  <Text
                    model="caption"
                    content={cnt}
                    col={theme.palette.secondary.main}
                  />
                </ThemeProvider>
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          <ThemeProvider theme={theme}>
            <TableRow>
              <TableCell>
                <Name cnt={first} col={theme.palette.primary.dark} />
              </TableCell>

              <TableCell>
                {second !== "-" && <Status label={second} />}
                {second === "-" && <div>{second}</div>}
              </TableCell>

              <TableCell>
                <Status label={third} />
              </TableCell>

              <TableCell>
                <Text
                  model="body2"
                  content={fourth}
                  col={theme.palette.primary.main}
                />
              </TableCell>

              <TableCell>
                <Text
                  model="body2"
                  content={fifth}
                  col={theme.palette.primary.main}
                />
              </TableCell>
            </TableRow>
          </ThemeProvider>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableElement;
