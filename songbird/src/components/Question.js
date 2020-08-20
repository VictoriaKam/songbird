import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import question from './question_mark.jpg';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import AudioPlayer from 'material-ui-audio-player';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'grid',
        gridTemplateColumns: '1fr 4fr',
        border: '2px solid #FFDE03',
        borderRadius: '16px',
        padding: '3% 3%',
        margin: '0 5% 2% 5%',
    },

    image: {
      maxWidth: '120px',
      maxHeight: '120px',
      justifySelf: 'center',
    },

    name: {
        marginBottom: theme.spacing(3),
        textAlign: 'center',
    }
}));

const muiTheme = createMuiTheme({});

function Question() {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <img src={question} alt="Question Mark" className={classes.image} />
            <div>
                <Typography variant="h5" className={classes.name}>
                    ???
                </Typography>
                <ThemeProvider theme={muiTheme}>
                    <AudioPlayer src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
                        width="100%" />
                </ThemeProvider>
            </div>
        </div>
        );
    }
    
export default Question;