import React from 'react';
import {AppButtons} from "./AppButtons/appButtons";
import {AppList} from "./AppList/AppList";
import yellow from '@material-ui/core/colors/yellow';
import {AppPopover} from "./AppPopover/AppPopover";




export const AppBody =(props)=>{

    const {list, handleToggle, deleteChangeElements, itemsChecked, addNewItem }=props

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return(
        <div style={{
                display: 'grid',
                margin: '10px 30px',
                gridTemplateRows: '60px 1fr',
            }}
        >
            <div>
                <AppButtons
                    deleteChangeElements={deleteChangeElements}
                    itemsChecked={itemsChecked}
                    handleClick={handleClick}
                />
            </div>
            <AppPopover
                anchorEl={anchorEl}
                handleClose={handleClose}
                open={open}
                addNewItem={addNewItem}
            />
            <div style={{
                backgroundColor: yellow['100'],
                margin: '25px 30px',
                width: '100%',
                maxWidth: '1280px',
            }}
                >
                <AppList
                    handleToggle={handleToggle}
                    list={list}
                />
            </div>
        </div>
    )
};