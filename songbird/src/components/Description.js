import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import question from './question_mark.jpg';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import AudioPlayer from 'material-ui-audio-player';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'inline-block',
      width: '40%',
      border: '2px solid #439A86',
      borderRadius: '16px',
      marginLeft: '4.5%',
      marginRight: '5%',
    },

    wrapper: {
        display: 'grid',
        gridTemplateColumns: '1fr 4fr',
        padding: '3% 3%',
    },

    image: {
        maxWidth: '120px',
        maxHeight: '120px',
        justifySelf: 'center',
    },
  
    name: {
        marginBottom: theme.spacing(3),
        textAlign: 'center',
    },

    descriptionWrapper: {
        padding: '1% 3%',
    }
}));

const muiTheme = createMuiTheme({});

function Description() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <img src={question} alt="Question Mark" className={classes.image} />
                <div>
                    <Typography variant="h5" className={classes.name}>
                        Журавль
                    </Typography>
                    <Typography variant="h6" className={classes.name}>
                    Grus grus
                    </Typography>
                    <ThemeProvider theme={muiTheme}>
                        <AudioPlayer src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
                            width="100%" />
                    </ThemeProvider>
                </div>
            </div>
            <div className={classes.descriptionWrapper}>
                <p>
                    Звуки, издаваемые журавлем, похожи на звонкое «кур-лы – кур-лы». Журавли чаще всего поют дуэтом – одна птица начинает запев со слога «кур», а вторая подхватывает «лы». Если птица поёт одна, то она издает только звук «кур».
                </p>
            </div>
        </div>
        );
    }
    
export default Description;