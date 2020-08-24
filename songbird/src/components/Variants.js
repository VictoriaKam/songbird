import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      width: '39%',
      minHeight: '46vh',
      float: 'left',
      backgroundColor: '#f8fee7',
      borderRadius: '10px',
      marginLeft: '10%',
      marginRight: '23px',
      marginBottom: '23px'
    },

    list: {
        width: '100%'
    }
  }));

function Variants(props) {
    const classes = useStyles();
    
    const variants = props.birds[props.section];

    const listOfVariants = variants.map((variant, index) =>
            <ListItem 
                button
                key={index}
                onClick={() => { props.updateBird(index) }}
            >
                <ListItemIcon>
                    <RadioButtonUncheckedIcon color='primary' />
                </ListItemIcon>
                <ListItemText primary={variant.name} />
            </ListItem>
        );

    return (
        <Box className={classes.root}>
            <List component="nav" aria-label="variants to answer" className={classes.list}>
               {listOfVariants}
            </List>
        </Box>
    );
}
        
export default Variants;