import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      fontStyle: 'italic',
      textDecoration: 'underline',
      letterSpacing: 6,
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    chipWrapper: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    chip: {
        margin: theme.spacing(0.5),
    },
}));

function Header(props) {
    const classes = useStyles();
    const { level, score } = props;
    const sections = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];
    const listOfSections = sections.map((section, index) => 
      <Chip 
        key={section} 
        className={classes.chip}
        color={ level === index ? "secondary" : "primary" }
        label={section}
      />);

    return (
      <>
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" className={classes.title}>
                    Songbird
                    </Typography>
                    <Typography variant="h6">Score: {score}</Typography>
                </Toolbar>
            </AppBar>
        </div>
        <div  className={classes.chipWrapper}>
        {listOfSections}
        </div>
      </>
    );
}

export default Header;