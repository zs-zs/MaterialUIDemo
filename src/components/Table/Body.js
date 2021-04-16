import { Dialog, DialogActions, DialogContent, DialogTitle, Fab, styled, TableBody, TableCell, TableRow, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import MuiButton from "@material-ui/core/Button"
import { spacing } from '@material-ui/system';
import { useState } from "react";
import { tableData } from "../../tableData";
import { StyledTableCell, StyledTableRow } from "./StyledTableCell";

const Button = styled(MuiButton)(spacing);

export function Body(props) {

    const { styled } = props;

    const [data, setData] = useState(tableData.items);
    const [newData, setNewData] = useState(undefined);
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(true);
    }

    const handleClose = () => {
        setNewData(undefined);
        setIsOpen(false);
    }

    const handleAddItem = () => {
        if (newData !== undefined) {
            setData([
                ...data,
                newData
            ]);
        }
        setNewData(undefined);
        setIsOpen(false);
    }

    return (
        <TableBody>
            {data.map((x, idx) => styled === true ?
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
            )}
            <TableRow>
                <TableCell colSpan={5} align="right">
                    <Fab color="default" arial-aria-label="add" onClick={() => handleClick()}><AddIcon /></Fab>
                </TableCell>
            </TableRow>
            <Dialog open={isOpen}>
                <DialogTitle id="form-dialog-title">Új esemény hozzáadása</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Azonosító"
                        id="id"
                        type="text"
                        fullWidth
                        onChange={(e) => setNewData({ ...newData, id: e.target.value })}
                    />
                    <TextField
                        label="Típus"
                        id="type"
                        type="text"
                        fullWidth
                        onChange={(e) => setNewData({ ...newData, type: e.target.value })}
                    />
                    <TextField
                        label="Megnevezés"
                        id="name"
                        type="text"
                        fullWidth
                        onChange={(e) => setNewData({ ...newData, name: e.target.value })}
                    />
                    <label>Regisztrálva:</label>
                    <TextField
                        id="registered"
                        type="date"
                        fullWidth
                        onChange={(e) => setNewData({ ...newData, registered: e.target.value })}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Mégsem
                    </Button>
                    <Button onClick={handleAddItem} color="primary">
                        Felvesz
                    </Button>
                </DialogActions>
            </Dialog>
        </TableBody >
    )
}