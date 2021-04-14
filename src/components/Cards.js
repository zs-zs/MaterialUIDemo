import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Typography } from "@material-ui/core";
import { Route, Switch } from "react-router";
import card from "../media/card.jpg"

export function Cards(params) {
    return (
        <Switch>
            <Route path="/cards" exact>
                <div className="card-container">
                    <Card className="card">
                        <CardHeader className="header" title="MATERIAL UI Bemutató" titleTypographyProps={{ variant: "h3" }} />
                        <CardActionArea>
                            <CardMedia component="img" src={card} style={{ height: "500px", width: "750px" }} />
                            <CardContent>
                                <Typography variant="h4" colot="textSecondary" component="h4">
                                    Ez egy Card komponens
                            </Typography>
                                <Typography variant="h5" color="textSecondary" component="p">
                                    Material UI-t bemutató alkalmazás.
                                    A bemutatott komponensek színezése testre szabható, illetve többféle típusból lehet választani.
                                    A különböző típusok egy-egy oldalon találhatóak.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </Route >
        </Switch >
    )
}