import { MenuItem } from "@material-ui/core";
import { forwardRef } from "react";
import { NavLink } from "react-router-dom";

export const MenuItems = forwardRef((props, ref) => (
    <>
        {props.items && props.items.map((_, idx) =>
            <MenuItem key={idx} onClick={props.handleClose}><NavLink innerRef={ref} to={_.link}>{_.text}</NavLink></MenuItem>
        )}
    </>
));