import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';


export const AppList =({ list, handleToggle })=> {


    return (
        <List>
            {list.map((items, key )=> {
                    return (
                        <div key={key} >
                            <ListItem dense>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={items.checked}
                                        onChange={(event)=>handleToggle(key,event.target.checked)}
                                    />
                                </ListItemIcon>
                                <ListItemText primary={`${items.name}`} secondary={`${items.description}`} />
                            </ListItem>
                            <Divider variant='middle' />
                        </div>

                    );
            })}
        </List>
    );
};