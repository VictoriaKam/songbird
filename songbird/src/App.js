import React, { useState, useEffect } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import Header from './components/Header.js';
import Question from './components/Question.js';
import Variants from './components/Variants.js';
import Description from './components/Description.js';
import birdsData from './data.js';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFDE03',
    },
    secondary: {
      main: '#439A86',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Question />
      <Variants />
      <Description />
    </ThemeProvider>
  );
}

export default App;
