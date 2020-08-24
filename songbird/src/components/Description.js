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
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '39.5%',
      minHeight: '46vh',
      marginRight: '10%',
      backgroundColor: '#f8fee7',
      borderRadius: '10px',
      marginBottom: '23px'
    },

    wrapper: {
        display: 'grid',
        gridTemplateColumns: '1fr 1.5fr',
        gridColumnGap: '15px',
        padding: '2% 3%',
    },

    image: {
        maxWidth: '100%',
        maxHeight: '150px',
        borderRadius: '10px'
    },
  
    name: {
        marginBottom: theme.spacing(2),
        textAlign: 'center',
    },

    descriptionWrapper: {
        padding: '0 3%',
    }
}));

function Description(props) {
    const classes = useStyles();
    
    if (props.describe === null) {
        return (
            <div className={classes.rootWrapper}>
                <p className={classes.name}>
                    Послушайте плеер и выберите название птицы, чей голос прозвучал.
                </p>
            </div>
        );
    } else {
        const birdDescribe = props.birds[props.section][props.describe];
        return (
            <div className={classes.rootWrapper}>
                <div className={classes.wrapper}>
                    <div>
                        <img src={birdDescribe.image} alt="Bird" className={classes.image} />
                    </div>
                    <div>
                        <Typography variant="h5" className={classes.name}>
                            {birdDescribe.name}
                        </Typography>
                        <Typography variant="h6" className={classes.name}>
                            {birdDescribe.species}
                        </Typography>
                        <ThemeProvider theme={muiTheme}>
                            <AudioPlayer src={birdDescribe.audio} width="100%" useStyles={useStyles} />
                        </ThemeProvider>
                    </div>
                </div>
                <div className={classes.descriptionWrapper}>
                    <p>
                        {birdDescribe.description}
                    </p>
                </div>
            </div>
        );
    }
}
    
export default Description;