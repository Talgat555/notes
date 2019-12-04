import React from 'react';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import HelpIcon from '@material-ui/icons/Help';
import CachedIcon from '@material-ui/icons/Cached';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import teal from '@material-ui/core/colors/teal';
import lightBlue from '@material-ui/core/colors/lightBlue';
import pink from '@material-ui/core/colors/pink';
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import Divider from "@material-ui/core/es/Divider/Divider";
import ListItemIcon from "@material-ui/core/es/ListItemIcon/ListItemIcon";


export const RightMenu =()=> {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setTimeout(()=> setAnchorEl(null), 250);
    };

    return (
        <div>
            <IconButton color='inherit' aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <MoreIcon/>
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                style={{
                    width: '100%',
                    maxWidth: 300,
                    height: '100%',
                    maxHeight: 300,
                }}
            >
                <ListItem button onClick={handleClose}>
                    <ListItemIcon >
                        <CachedIcon style={{color: teal['A700']}}/>
                    </ListItemIcon>
                    <ListItemText primary="Обновить" />
                </ListItem>
                <ListItem button onClick={handleClose}>
                    <ListItemIcon>
                        <HelpIcon style={{color: lightBlue['A700']}}/>
                    </ListItemIcon>
                    <ListItemText primary="Помощь" />
                </ListItem>
                <Divider />
                <ListItem button onClick={handleClose}>
                    <ListItemIcon>
                        <ExitToAppIcon style={{color: pink['A400']}}/>
                    </ListItemIcon>
                    <ListItemText primary="Выйти" />
                </ListItem>
            </Menu>
        </div>
    );
};
