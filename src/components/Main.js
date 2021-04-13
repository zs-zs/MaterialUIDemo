import { AppBar, Menu } from "@material-ui/core";
import { ButtonsDemo } from "./ButtonsDemo";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
import { MenuItems } from "./MenuItems";
import { Router } from "react-router-dom";
import { history } from "../history";
import { Home } from "./Home";

export function Main(props) {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const items = [
        {
            text: "Home",
            link: "/home"
        },
        {
            text: "Buttons",
            link: "/buttons"
        }
    ]

    return (
        <Router history={history}>
            <AppBar position="static">
                <MenuIcon onClick={handleOpen} />
                <Menu
                    id="mainmenu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItems items={items} handleClose={handleClose} />
                </Menu>
            </AppBar>
            <Home />
            <ButtonsDemo />
        </Router>
    )

}