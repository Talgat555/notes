import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import blue from '@material-ui/core/colors/blue';
import orange from '@material-ui/core/colors/orange';
import lightGreen from '@material-ui/core/colors/lightGreen';
import SettingsPhoneIcon from '@material-ui/icons/SettingsPhone';
import MenuIcon from '@material-ui/icons/Menu';



const useStyles = makeStyles(theme => ({
    list: {
        width: 250,
        marginLeft: 10,
        marginTop: 30,
    },
    fullList: {
        width: 'auto',
    },
    menuButton: {
        marginRight: theme.spacing(2),

    },
}));

export const AppDrawer=()=> {
    const classes = useStyles();
    const [state, setState] = React.useState({isOpen: false,});

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setTimeout(()=> setState({ ...state, [side]: open }), 250);
    };

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                {['Главная', 'Контакты'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ?
                                <HomeIcon color='secondary' />
                                : <SettingsPhoneIcon style={{color: lightGreen['A400']}}
                        />}
                    </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['О нас', 'Написать нам'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                        <ListItemIcon>
                            {index % 2 === 0
                                ? <InfoIcon style={{color: orange['A700']}}/>
                                : <ContactMailIcon style={{color: blue['500']}} />}
                        </ListItemIcon>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <IconButton onClick={toggleDrawer('isOpen', true)} edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Drawer open={state.isOpen} onClose={toggleDrawer('isOpen', false)}>
                {sideList('isOpen')}
            </Drawer>
        </div>
    );
};