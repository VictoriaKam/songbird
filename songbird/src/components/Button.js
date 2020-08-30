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
   const { 
     victory, updateRandom, updateVictory, level, updateLevel,
     updateColor0, updateColor1, updateColor2, updateColor3, updateColor4, updateColor5,
     updateDisabled
     } = props;

   if (victory === true) {
    return (
      <div className={classes.root}>
          <Button 
            variant="contained" 
            color="primary" 
            className={classes.button}
            onClick={() => {
              updateRandom(Math.random());
              updateVictory(false);
              updateLevel(level + 1);
              updateColor0('rgba(0, 0, 0, 0.54)');
              updateColor1('rgba(0, 0, 0, 0.54)');
              updateColor2('rgba(0, 0, 0, 0.54)');
              updateColor3('rgba(0, 0, 0, 0.54)');
              updateColor4('rgba(0, 0, 0, 0.54)');
              updateColor5('rgba(0, 0, 0, 0.54)');
              updateDisabled(false);
            }}
            >
              Next Level
            </Button>
      </div>
    )
   } else {
    return (
      <div className={classes.root}>
          <Button 
            variant="contained" 
            color="primary" 
            className={classes.button}
            disabled
            >
              Next Level
            </Button>
      </div>
  )
   }
}

export default ButtonComponent;