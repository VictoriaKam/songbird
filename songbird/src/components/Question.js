import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import question from './6.png';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import AudioPlayer from 'material-ui-audio-player';

const muiTheme = createMuiTheme({
    overrides: {
        MuiPaper: {
            root: {
                backgroundColor: '#f8fee7'
            },
        },
    }
});

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#f8fee7',
        boxShadow: 'none'
    },

    wrapper: {
        display: 'grid',
        gridTemplateColumns: '1fr 4fr',
        padding: '3%',
        margin: '0 10% 23px 10%',
        backgroundColor: '#f8fee7',
        borderRadius: '10px'
    },

    image: {
      maxWidth: '120px',
      maxHeight: '120px',
      justifySelf: 'center',
    },

    name: {
        marginBottom: theme.spacing(3),
    }
}));

function Question(props) {
    const classes = useStyles();

    const bird = props.birds[props.section][Math.floor(Math.random() * props.birds.length)];

    return (
        <div className={classes.wrapper}>
            <img src={question} alt="Question Mark" className={classes.image} />
            <div>
                <Typography variant="h5" className={classes.name}>
                    «...»
                </Typography>
                <ThemeProvider theme={muiTheme}>
                    <AudioPlayer src={bird.audio}
                        useStyles={useStyles}
                        width="100%" />
                </ThemeProvider>
            </div>
        </div>
        );
    }
    
export default Question;