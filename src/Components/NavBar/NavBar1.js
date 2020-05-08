import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../Images/logo2.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        dispaly: 'block'
    },
    title: {
        flexGrow: 1,
        fontFamily: 'Staatliches, cursive',
        textAlign: 'center',
        fontSize: '48pt'
    },
    logo: {
        flexGrow: 1,
        float: 'left'
    },
    logo1: {
        flexGrow: 1,
        float: 'right',
    },
    tabs: {
        flexGrow: 1,
        fontFamily: 'Staatliches, cursive',
        fontSize: '16pt',
        backgroundColor: '#e58e06'
    }
}));

export default function NavBar1() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Navbar sticky="top" bg="dark" variant="dark">
                <Navbar.Brand href="/" className={classes.title}>
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
                    <Nav.Link href="/roster">Roster</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/coaches">Coaches</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/links">Forms/Links</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/boosters">Boosters/Sponsors</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}
