import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../Images/logo2.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import Avatar from '@material-ui/core/Avatar';
// import Peninsula from '../../Images/Logos/peninsula.png';
// import SanJuanHills from '../../Images/Logos/sanjuanhills.png';
// import Western from '../../Images/Logos/western.png';
// import Katella from '../../Images/Logos/katella.png';
// import Capo from '../../Images/Logos/capo.png';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        dispaly: 'block'
    },
    title: {
        flexGrow: 1,
        fontFamily: 'Staatliches, cursive',
        textAlign: 'center',
        fontSize: '48pt',
    },
    logo: {
        flexGrow: 1,
        float: 'left',
    },
    logo1: {
        flexGrow: 1,
        float: 'right',
    },
    team: {
        flexGrow: 1,
        float: 'left',
        borderRadius: '50%',
        marginRight: '10px'
    },
    tabs: {
        flexGrow: 1,
        fontFamily: 'Staatliches, cursive',
        fontSize: '16pt',
        backgroundColor: '#f38011',
    }
}));

export default function NavBar1() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Navbar sticky="top" bg="dark" variant="dark">
                <Navbar.Brand className={classes.title}>
                    <img alt="logo" src={logo} width="80" height="80" className={classes.logo} />{' '}
                    Cypress Centurion Football
                    <img alt="logo" src={logo} width="80" height="80" className={classes.logo1} />{' '}
                </Navbar.Brand>
            </Navbar>
            <Nav fill variant="tabs" className={classes.tabs}>
                <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/schedule">Schedule</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/roster">Roster</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/coaches">Coaches</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/links">Links</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/boosters">Boosters/Sponsors</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}
