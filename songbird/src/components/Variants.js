import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

const useStyles = makeStyles(() => ({
    root: {
      display: 'inline-block',
      width: '40%',
      border: '2px solid #439A86',
      borderRadius: '16px',
      marginLeft: '5%',
      marginRight: '4.5%',
    },
  }));

function Variants() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="variants to answer">
                <ListItem button>
                    <ListItemIcon>
                        <RadioButtonUncheckedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Орел" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <RadioButtonUncheckedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Коршун" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <RadioButtonUncheckedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Лунь" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <RadioButtonUncheckedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Сокол" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <RadioButtonUncheckedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Ястреб" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <RadioButtonUncheckedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Филин" />
                </ListItem>
            </List>
    </div>
    );
}
        
export default Variants;