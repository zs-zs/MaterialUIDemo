import { Grid, TextField, Typography, Button, Container, makeStyles, Box, Select, MenuItem, Checkbox, FormControlLabel, FormControl, InputLabel } from "@material-ui/core";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import moment from "moment";
import MomentUtils from "@date-io/moment"
import { useState } from "react";
import { Route, Switch } from "react-router";
import "moment/locale/eu";
import { MyAccordion } from "./MyAccordion";
import { MyBadge } from "../MyBadge";
import { MyAlerts } from "./MyAlerts";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1)
        }
    },
    box: {
        '& > *': {
            margin: theme.spacing(2)
        },
    }
}));

export function Colors(props) {

    const { defaultColors, onColorChange } = props;
    const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));
    const [age, setAge] = useState(0);
    const [select1, setSelect1] = useState('alma');
    const [select2, setSelect2] = useState('balna');
    const [select3, setSelect3] = useState('valami');

    const classes = useStyles();

    const handleDateChange = (date) => {
        setSelectedDate(date);
        const dateDif = new Date(moment().format()) - new Date(date);
        const ageDate = new Date(dateDif);
        setAge(Math.abs(ageDate.getUTCFullYear() - 1970));
    };

    return (
        <Switch>
            <Route path="/colors" exact>
                <Grid container style={{ height: "100%" }} spacing={2}>
                    <Grid item>
                        <div className="container">
                            {defaultColors.map((_, idx) =>
                                <div key={idx}>
                                    <label>{_.label} color:</label>
                                    <input type="color" defaultValue={_.color} onChange={(e) => onColorChange(_.name, e.target.value)} />
                                </div>)}
                        </div>
                    </Grid>
                    <Grid item>
                        <Box className={classes.box}>
                            <div>
                                <Typography style={{ display: "inline-block", marginRight: "30px" }} variant="h3" color="textPrimary">Elsődleges szöveg</Typography>
                                <Typography style={{ display: "inline-block" }} variant="h4" color="textSecondary">Másodlagos szöveg</Typography>
                            </div>
                            <form noValidate autoComplete="off">
                                <Grid container spacing={2} direction="row">
                                    <Grid item>
                                        <TextField label="First Name" required defaultValue="Name" variant="outlined" />
                                        <TextField label="Last Name" required variant="outlined" />
                                    </Grid>
                                    <Grid item>
                                        <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils} locale={"en"}>
                                            <KeyboardDatePicker
                                                label="Birth Date"
                                                margin="none"
                                                format="MM/dd/yyyy"
                                                id="date-picker-inline"
                                                value={selectedDate}
                                                onChange={handleDateChange}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date'
                                                }}
                                            />
                                        </MuiPickersUtilsProvider>
                                    </Grid>
                                    <Grid item>
                                        <TextField label="Age" disabled value={age} />
                                    </Grid>
                                </Grid>
                            </form>
                            <Container className={classes.root}>
                                <Button color="primary" variant="contained">Primary Button</Button>
                                <Button color="primary" variant="outlined">Primary Button</Button>
                                <Button color="secondary" variant="contained">Secondary Button</Button>
                                <Button color="secondary" variant="outlined">Secondary Button</Button>
                                <FormControlLabel control={<Checkbox color="primary" defaultChecked />} label="primary" />
                                <FormControlLabel control={<Checkbox color="secondary" defaultChecked />} label="secondary" />
                                <FormControlLabel control={<Checkbox color="default" defaultChecked />} label="default" />
                            </Container>
                            <Container className={classes.root}>
                                <FormControl variant="filled">
                                    <InputLabel variant="filled">Mező</InputLabel>
                                    <Select value={select1} onChange={(event) => setSelect1(event.target.value)} variant="filled" label="Mező">
                                        <MenuItem value="alma">Alma</MenuItem>
                                        <MenuItem value="balna">Bálna</MenuItem>
                                        <MenuItem value="valami">Valami</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl variant="outlined">
                                    <InputLabel variant="outlined">Mező</InputLabel>
                                    <Select value={select2} onChange={(event) => setSelect2(event.target.value)} variant="outlined" label="Mező">
                                        <MenuItem value="alma">Alma</MenuItem>
                                        <MenuItem value="balna">Bálna</MenuItem>
                                        <MenuItem value="valami">Valami</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl variant="standard">
                                    <InputLabel variant="standard">Mező</InputLabel>
                                    <Select value={select3} onChange={(event) => setSelect3(event.target.value)} variant="standard" label="Mező">
                                        <MenuItem value="alma">Alma</MenuItem>
                                        <MenuItem value="balna">Bálna</MenuItem>
                                        <MenuItem value="valami">Valami</MenuItem>
                                    </Select>
                                </FormControl>
                            </Container>
                            <Container>
                                <MyAccordion />
                            </Container>
                            <Container>
                                <MyBadge />
                            </Container>
                            <Container>
                                <MyAlerts />
                            </Container>
                        </Box>
                    </Grid>
                </Grid>
            </Route >
        </Switch >
    )
}