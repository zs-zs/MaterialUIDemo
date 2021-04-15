import { TableCell, TableHead, TableRow } from "@material-ui/core";
import { tableData } from "../../tableData";
import { StyledTableCell } from "./StyledTableCell";

export function Header(props) {

    const { styled } = props;

    return (
        <TableHead>
            <TableRow>
                {tableData.header.map((x, idx) => styled === true ?
                    <StyledTableCell key={idx}>{x}</StyledTableCell> :
                    <TableCell key={idx}>{x}</TableCell>)}
            </TableRow>
        </TableHead >
    )
}