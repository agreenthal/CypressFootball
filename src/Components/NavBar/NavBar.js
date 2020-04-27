import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import DrawerList from '../NavBar/DrawerList';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { indigo, orange } from '@material-ui/core/colors';
import { useTheme } from '@material-ui/core/styles';

const titleTheme = createMuiTheme({
    palette: {
        primary: {
            main: indigo[900],
        },
        secondary: {
            main: orange[800],
        }
    },
});

const useStyles = makeStyles((theme) => ({
    root: {

    },
    nav: {
        fontFamily: 'Times New Roman, sans serif',
        fontWeight: 'bolder',
        border: '1px black solid',
        marginLeft: theme.spacing(.5),
        fontSize: '20pt',
        position: 'relative',
        backgroundColor: 'white'
    },
    title: {
        position: 'absolute',
        display: 'inline-block',
        marginLeft: theme.spacing(70),
    }
}));

export default function NavBar() {
    const theme = useTheme();
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <DrawerList />
        </div>
    );

    return (
        <div>
            <div >
                {['Menu'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button className={classes.nav} onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                        <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))}
                <React.Fragment>
                    <ThemeProvider theme={titleTheme}>
                        <h1 className={classes.title}>Cypress Centurion Football</h1>
                    </ThemeProvider>
                </React.Fragment>
            </div>
        </div>

    );
}
