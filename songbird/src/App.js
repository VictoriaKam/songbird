import React, { useState, useEffect } from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from 'react-player'
import './App.css';
import Header from './components/Header.js';
import Question from './components/Question.js';
import Variants from './components/Variants.js';
import Description from './components/Description.js';
import ButtonComponent from './components/Button.js';
import birdsData from './data.js';
import birdVideo from './assets/giphy.mp4';
import totalWinAudio from './assets/audio/total-win.mp3';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#488286',
    },
    secondary: {
      main: '#f8fee7',
    }
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'center',
     alignItems: 'center',
     height: '70vh'
  },

  title: {
    marginBottom: '1%'
  },

  subtitle: {
    marginBottom: '2%'
  },

  button: {
      width: '40%'
  }
}));

function App() {
  const classes = useStyles();

  const [birds] = useState(birdsData);

  const [level, setLevel] = useState(0);

  const [random, setRandom] = useState(0);

  useEffect(() => {
    setRandom(Math.random())
  }, []);

  const [birdToDescribe, setbirdToDescribe] = useState(null);

  const [victory, setVictory] = useState(false); 

  const [score, setScore] = useState(0);

  // Colors 

  const [color0, setColor0] = useState('rgba(0, 0, 0, 0.54)');
  const [color1, setColor1] = useState('rgba(0, 0, 0, 0.54)');
  const [color2, setColor2] = useState('rgba(0, 0, 0, 0.54)');
  const [color3, setColor3] = useState('rgba(0, 0, 0, 0.54)');
  const [color4, setColor4] = useState('rgba(0, 0, 0, 0.54)');
  const [color5, setColor5] = useState('rgba(0, 0, 0, 0.54)');

  const [disabled, setDisabled] = useState(false);

  if (level < 6) {
    const bird = birds[level][Math.floor(random * birds.length)];
    const variants = birds[level];
    console.log(bird.name);

    return (
      <ThemeProvider theme={theme}>
        <Header 
          level={level}
          score={score} />
        <Question 
          bird={bird}
          victory={victory} />
        <Variants 
          variants={variants} 
          bird={bird}
          updateBirdToDescribe={setbirdToDescribe}
          updateVictory={setVictory}
          score={score}
          updateScore={setScore}
          updateColor0={setColor0}
          updateColor1={setColor1}
          updateColor2={setColor2}
          updateColor3={setColor3}
          updateColor4={setColor4}
          updateColor5={setColor5}
          color0={color0}
          color1={color1}
          color2={color2}
          color3={color3}
          color4={color4}
          color5={color5}
          disabled={disabled}
          updateDisabled={setDisabled}
        />
        <Description
          birdToDescribe={birdToDescribe} />
        <ButtonComponent 
          updateRandom={setRandom}
          victory={victory}
          updateVictory={setVictory}
          level={level}
          updateLevel={setLevel}
          updateColor0={setColor0}
          updateColor1={setColor1}
          updateColor2={setColor2}
          updateColor3={setColor3}
          updateColor4={setColor4}
          updateColor5={setColor5}
          updateDisabled={setDisabled}
          />
      </ThemeProvider>
    );
  } else {
    if (score < 30) {
      return (
        <ThemeProvider theme={theme}>
          <Header 
            score={score} />
          <div className={classes.root}>
            <Typography variant="h2" className={classes.title}>
              Поздравляем!
            </Typography>
            <Typography variant="h6" className={classes.subtitle}>
              Вы прошли викторину и набрали <b>{score}</b> из <b>30</b> возможных баллов.
            </Typography>
            <Button  
              variant="contained" 
              color="primary" 
              className={classes.button}
              onClick={() => { setLevel(0); setScore(0); }}>
                Попробовать еще раз!
            </Button>
          </div>
        </ThemeProvider>
      );
    } else {
      let totalWin = new Audio(totalWinAudio);
      totalWin.play();
      return (
        <ThemeProvider theme={theme}>
            <Header 
              score={score} />
            <div className={classes.root}>
              <Typography variant="h2"
               className={classes.title}>
                Поздравляем!
              </Typography>
              <Typography variant="h6" className={classes.subtitle}>
                Игра Окончена! Вы прошли викторину и набрали <b>{score}</b> из <b>30</b> возможных баллов.
              </Typography>
              <ReactPlayer 
                url={birdVideo} 
                playing 
                muted
                loop
              />
            </div>
          </ThemeProvider>
      )
    }
  }
}

export default App;