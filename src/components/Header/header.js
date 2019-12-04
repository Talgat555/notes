import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import indigo from "@material-ui/core/es/colors/indigo";
import {RightMenu} from "./RightMenu/rightMenu";
import {AppDrawer} from "./AppDrawer/appDrawer";

const useStyles = makeStyles({
    appHeader:{
        backgroundColor: indigo['700'],
        maxHeight: '60px',
    },
    title: {
        flexGrow: 1,
    },
});

export const AppHeader =()=> {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar className={classes.appHeader} position="static">
                <Toolbar>
                    <div className={classes.menuButton}>
                        <AppDrawer />
                    </div>
                    <Typography color="inherit" variant="h6" className={classes.title}>
                        App-Заметки
                    </Typography>
                    <RightMenu />
                </Toolbar>
            </AppBar>
        </div>
    );
};