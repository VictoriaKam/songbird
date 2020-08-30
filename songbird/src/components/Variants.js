import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LensIcon from '@material-ui/icons/Lens';
import winAudio from '../assets/audio/win.mp3';
import loseAudio from '../assets/audio/lose.mp3';

const useStyles = makeStyles((theme) => ({
    root: { 
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      width: '39%',
      height: '300px',
      float: 'left',
      backgroundColor: '#f8fee7',
      borderRadius: '10px',
      margin: '0 20px 20px 10%',
      padding: '15px',
      [theme.breakpoints.down('sm')]: {
        width: '80%',
        margin: '0 10% 23px 10%',
        float: 'none',
      },
      [theme.breakpoints.down('xs')]: {
        width: '94%',
        margin: '0 3% 23px 3%',
      }
    },

    list: {
        width: '100%'
    }
  }));

function Variants(props) {
    const classes = useStyles();

    const { 
        variants, bird, updateBirdToDescribe, updateVictory, score, updateScore,
        color0, color1, color2, color3, color4, color5,
        updateColor0, updateColor1, updateColor2, updateColor3, updateColor4, updateColor5, updateColor6,
        disabled, updateDisabled
        } = props;

    const [attempt, setAttempt] = useState(1);

    let levelScore = 0;

    switch(attempt) {
        case 1: levelScore = 5; 
            break;
        case 2: levelScore = 4;
            break;
        case 3: levelScore = 3;
            break;
        case 4: levelScore = 2;
            break;
        case 5: levelScore = 1;
            break;
        case 6: levelScore = 0;
            break;
        default: levelScore = 0;
    }

    
    let iconColors = {
        0: color0,
        1: color1,
        2: color2,
        3: color3,
        4: color4,
        5: color5,
    };

    let win = new Audio(winAudio);
    let lose = new Audio(loseAudio);

    const listOfVariants = variants.map((variant, index) =>
            <ListItem 
                button
                disabled={disabled}
                key={index}
                onClick={() => { 
                    updateBirdToDescribe(variant);
                    if (bird.name === variant.name) {
                        updateVictory(true);
                        setAttempt(1); 
                        updateScore(score + levelScore);
                        let colorString = `updateColor${index}('green')`;
                        eval(colorString);
                        updateDisabled(true);
                        win.play();
                    } else {
                        updateVictory(false);
                        setAttempt(attempt + 1); 
                        let colorString = `updateColor${index}('red')`
                        eval(colorString);
                        lose.play();
                    }
                }}
            >
                <ListItemIcon>
                    <LensIcon fontSize='small' style={{color: iconColors[index]}}></LensIcon>
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