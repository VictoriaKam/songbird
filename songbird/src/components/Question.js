import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import question from '../assets/question-mark.png';
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
        boxSizing: 'border-box',
        display: 'grid',
        gridTemplateColumns: '200px 4fr',
        gridColumnGap: '15px',
        padding: '30px',
        margin: '0 10% 20px',
        backgroundColor: '#f8fee7',
        borderRadius: '10px',
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: '1fr',
          },
        [theme.breakpoints.down('xs')]: {
          margin: '0 3% 20px',
        },
    },

    textWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'start',
    },

    image: {
      maxWidth: '100%',
      maxHeight: '130px',
      borderRadius: '10px',
    },
}));



function Question(props) {
    const classes = useStyles();
    const { bird, victory } = props;

    return (
        <div className={classes.wrapper}>
            <img src={ victory ? bird.image : question } alt="Bird" className={classes.image} />
            <div className={classes.textWrapper}>
                <Typography variant="h5" className={classes.name}>
                    {victory ? `${bird.name}` : '«...»'}
                </Typography>
                <ThemeProvider theme={muiTheme}>
                    <AudioPlayer src={ victory ? '' : bird.audio }
                        useStyles={useStyles}
                        width="100%" />
                </ThemeProvider>
            </div>
        </div>
        );
    }
    
export default Question;