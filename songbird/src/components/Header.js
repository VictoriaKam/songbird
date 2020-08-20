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
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(3),
    },
    chip: {
        margin: theme.spacing(0.5),
    },
}));

function Header() {
    const classes = useStyles();

    return (
        <>
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" className={classes.title}>
                    Songbird
                    </Typography>
                    <Typography variant="h6">Score: 11</Typography>
                </Toolbar>
            </AppBar>
        </div>
        <div  className={classes.chipWrapper}>
          <Chip className={classes.chip} color="secondary" label="Разминка" clickable />
          <Chip className={classes.chip} color="secondary" label="Воробьиные" clickable />
          <Chip className={classes.chip} color="secondary" label="Лесные птицы" clickable />
          <Chip className={classes.chip} color="secondary" label="Певчие птицы" clickable />
          <Chip className={classes.chip} color="secondary" label="Хищные птицы" clickable />
          <Chip className={classes.chip} color="secondary" label="Морские птицы" clickable />
        </div>
      </>
      );
}

export default Header;