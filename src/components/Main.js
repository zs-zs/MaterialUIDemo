import { AppBar, Menu, createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { ButtonsDemo } from "./ButtonsDemo";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
import { MenuItems } from "./MenuItems";
import { Router } from "react-router-dom";
import { history } from "../history";
import { Cards } from "./Cards";
import { Colors } from "./Colors";

const defaultColors = [
    {
        name: "primary",
        label: "Primary",
        color: "#1976d2"
    },
    {
        name: "secondary",
        label: "Secondary",
        color: "#dc004e"
    },
    {
        name: "error",
        label: "Error",
        color: "#f44336"
    },
    {
        name: "warning",
        label: "Warning",
        color: "#ff9800"
    },
    {
        name: "info",
        label: "Info",
        color: "#2196f3"
    },
    {
        name: "success",
        label: "Success",
        color: "#4caf50"
    },
    {
        name: "textPrimary",
        label: "Primary Text",
        color: "rgba(0,0,0,0.87)"
    },
    {
        name: "textSecondary",
        label: "Secondary Text",
        color: "rgba(0,0,0,0.54)"
    },
    {
        name: "disabled",
        label: "Disabled Text",
        color: "rgba(0,0,0,0.38)"
    },
    {
        name: "paper",
        label: "Paper Background",
        color: "#ffffff"
    },
    {
        name: "background",
        label: "Default Background",
        color: "#fafafa"
    }
];

export function Main(props) {

    const [colors, setColors] = useState(defaultColors);
    const [anchorEl, setAnchorEl] = useState(null);

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: colors[0].color
            },
            secondary: {
                main: colors[1].color
            },
            error: {
                main: colors[2].color
            },
            warning: {
                main: colors[3].color
            },
            info: {
                main: colors[4].color
            },
            success: {
                main: colors[5].color
            },
            text: {
                primary: colors[6].color,
                secondary: colors[7].color,
                disabled: colors[8].color
            },
            background: {
                paper: colors[9].color,
                default: colors[10].color
            }
        },
    });

    const handleColorChange = (type, color) => {
        let newColors = colors.map(_ => _.name === type ? { ..._, color: color } : _);
        setColors(newColors);
    }

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const items = [
        {
            text: "Colors",
            link: "/colors"
        },
        {
            text: "Buttons",
            link: "/buttons"
        },
        {
            text: "Cards",
            link: "/cards"
        }
    ];

    return (
        <MuiThemeProvider theme={theme}>
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
                <Colors onColorChange={handleColorChange} defaultColors={colors} />
                <Cards />
                <ButtonsDemo />
            </Router>
        </MuiThemeProvider>
    )
}