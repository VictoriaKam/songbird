import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

    rootWrapper: {
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      width: '40%',
      minHeight: '330px',
      marginRight: '10%',
      padding: '30px',
      backgroundColor: '#f8fee7',
      borderRadius: '10px',
      marginBottom: '20px',
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

    wrapper: {
        display: 'grid',
        gridTemplateColumns: '1fr 1.5fr',
        gridColumnGap: '15px',
        marginBottom: theme.spacing(2),
    },

    image: {
        maxWidth: '100%',
        maxHeight: '150px',
        borderRadius: '10px'
    },
  
    name: {
        marginBottom: theme.spacing(2),
        textAlign: 'left',
    },

    description: {
        margin: '0',
        lineHeight: '1.75',
        textAlign: 'justify'
    }
}));

function Description(props) {
    const classes = useStyles();
    const { birdToDescribe } = props;
    
    if (birdToDescribe === null) {
        return (
            <div className={classes.rootWrapper}>
                <p className={classes.name}>
                    Послушайте плеер и выберите название птицы, чей голос прозвучал.
                </p>
            </div>
        );

    } else {
        return (
            <div className={classes.rootWrapper}>
                <div className={classes.wrapper}>
                    <div>
                        <img src={birdToDescribe.image} alt="Bird" className={classes.image} />
                    </div>
                    <div>
                        <Typography variant="h5" className={classes.name}>
                            {birdToDescribe.name}
                        </Typography>
                        <Typography variant="h6" className={classes.name}>
                            {birdToDescribe.species}
                        </Typography>
                        <ThemeProvider theme={muiTheme}>
                            <AudioPlayer src={birdToDescribe.audio} width="100%" useStyles={useStyles} />
                        </ThemeProvider>
                    </div>
                </div>
                <div className={classes.descriptionWrapper}>
                    <p className={classes.description}>
                        {birdToDescribe.description}
                    </p>
                </div>
            </div>
        );
    }
}
    
export default Description;