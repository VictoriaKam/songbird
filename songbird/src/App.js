import React, { useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import Header from './components/Header.js';
import Question from './components/Question.js';
import Variants from './components/Variants.js';
import Description from './components/Description.js';
import ButtonComponent from './components/Button.js';
import birdsData from './data.js';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#488286',
    },
    secondary: {
      main: '#488286',
    }
  },
});

function App() {
  const [birds] = useState(birdsData);

  const [sectionIndex, setSectionIndex] = useState(0);

  const [birdToDescribe, setbirdToDescribe] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <Header birds={birds} updateData={setSectionIndex} />
      <Question birds={birds} section={sectionIndex} />
      <Variants birds={birds} section={sectionIndex} updateBird={setbirdToDescribe}/>
      <Description birds={birds} section={sectionIndex} describe={birdToDescribe} />
      <ButtonComponent />
    </ThemeProvider>
  );
}

export default App;
