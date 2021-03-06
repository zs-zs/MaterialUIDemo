import { Box, Button, Container, makeStyles, withStyles } from "@material-ui/core";
import { CloudUploadTwoTone, Delete, DeleteSharp, DeleteTwoTone } from "@material-ui/icons";
import { Route, Switch } from "react-router";
import { v4 as uuidv4 } from "uuid";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1)
        }
    },
    box: {
        '& > *': {
            margin: theme.spacing(10)
        },
    }
}));

const buttonColors = ["default", "primary", "secondary"];
const buttonVariants = ["contained", "outlined", "text"];
const buttonSizes = ["small", "medium", "large"];
const customStyles = [{
    background: 'linear-gradient(120deg, rgba(255, 141, 0, 1) 0%, rgba(255, 0, 0, 1) 90%)',
},
{
    background: 'linear-gradient(150deg, rgba(0, 155, 0, 1) 0%, rgba(0, 255, 0, 1) 90%)',
},
{
    background: 'linear-gradient(120deg, rgba(255, 141, 0, 1) 0%, rgba(255, 0, 0, 1) 90%)',
    border: 'solid 1px black'
},
{
    background: 'linear-gradient(150deg, rgba(0, 155, 0, 1) 0%, rgba(0, 255, 0, 1) 90%)',
    border: 'solid 1px black'
},
{
    border: 'solid 1px rgba(255, 141, 0, 1)'
},
{
    border: 'solid 1px rgba(0, 155, 0, 1)'
}
]

const StyledButton = withStyles({
    root: {
        padding: '7px 10px 7px 15px'
    },
})(Button);

export function ButtonsDemo(props) {

    const classes = useStyles();

    return (
        <Switch>
            <Route path="/buttons" exact>
                <Box mx="auto" p={1} className={classes.box}>
                    {
                        buttonSizes.map((y, i) =>
                            <Container key={uuidv4()} border={1} className={classes.root}>
                                <div className="text">{buttonSizes[i]}:</div>
                                {buttonVariants.map((_, idx) =>
                                    buttonColors.map((x, index) =>
                                        <Button size={y} key={uuidv4()} color={x} variant={_}>Gomb {index + 1 + idx * 3}</Button>))}
                            </Container>)
                    }
                    <Container className={classes.root}>
                        <div className="text">Ikonnal:  </div>
                        <Button color="primary" variant="outlined" startIcon={<Delete />}>T??rl??s</Button>
                        <Button color="primary" variant="outlined" startIcon={<DeleteTwoTone />}>T??rl??s</Button>
                        <Button color="primary" variant="contained" startIcon={<DeleteSharp />}>T??rl??s</Button>
                        <Button color="primary" variant="contained" startIcon={<CloudUploadTwoTone />}>Felt??lt??s</Button>
                    </Container>
                    <Container className={classes.root}>
                        <div className="text">??ll??that?? sz??nek:</div>
                        {customStyles.map((_, idx) =>
                            <StyledButton key={idx} style={_} startIcon={<CloudUploadTwoTone />}>Felt??lt??s</StyledButton>)}
                    </Container>
                </Box >
            </Route>
        </Switch>
    )
}