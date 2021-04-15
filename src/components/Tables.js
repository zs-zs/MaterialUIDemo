import { styled, Table } from "@material-ui/core";
import MuiContainer from "@material-ui/core/Container";
import { spacing } from "@material-ui/system";
import { Route, Switch } from "react-router";
import { Body } from "./Table/Body";
import { Header } from "./Table/Header";

const Container = styled(MuiContainer)(spacing);

export function Tables(props) {

    return (
        <Switch>
            <Route path="/tables">
                <Container mt={10}>
                    <Table>
                        <Header />
                        <Body />
                    </Table>
                </Container>
                <Container mt={10}>
                    <Table>
                        <Header styled />
                        <Body styled />
                    </Table>
                </Container>
            </Route>
        </Switch>
    )
}