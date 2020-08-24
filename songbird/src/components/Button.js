import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
       display: 'flex',
       justifyContent: 'center',
       marginBottom: '23px'
    },

    button: {
        width: '40%'
    }
}));

function ButtonComponent(props) {
    const classes = useStyles();

    return (
      <>
        <div className={classes.root}>
            <Button variant="contained" color="primary" className={classes.button}>Next Level</Button>
        </div>
      </>
    );
}

export default ButtonComponent;