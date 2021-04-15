import { styled, TableBody, TableCell, TableRow } from "@material-ui/core";
import MuiButton from "@material-ui/core/Button"
import { spacing } from '@material-ui/system';
import { tableData } from "../../tableData";
import { StyledTableCell, StyledTableRow } from "./StyledTableCell";

const Button = styled(MuiButton)(spacing);

export function Body(props) {

    const { styled } = props;

    return (
        <TableBody>
            {tableData.items.map((x, idx) => styled === true ?
                <StyledTableRow key={idx}>
                    <StyledTableCell>{x.id}</StyledTableCell>
                    <StyledTableCell>{x.type}</StyledTableCell>
                    <StyledTableCell>{x.name}</StyledTableCell>
                    <StyledTableCell>{x.registered}</StyledTableCell>
                    <StyledTableCell >
                        <Button mr={2} variant="contained" color="primary">Szerkesztés</Button>
                        <Button mr={2} variant="contained" color="secondary">Törlés</Button>
                    </StyledTableCell>
                </StyledTableRow> :
                <TableRow key={idx}>
                    <TableCell>{x.id}</TableCell>
                    <TableCell>{x.type}</TableCell>
                    <TableCell>{x.name}</TableCell>
                    <TableCell>{x.registered}</TableCell>
                    <TableCell >
                        <Button mr={2} variant="contained" color="primary">Szerkesztés</Button>
                        <Button mr={2} variant="contained" color="secondary">Törlés</Button>
                    </TableCell>
                </TableRow>
            )
            }
        </TableBody >
    )
}