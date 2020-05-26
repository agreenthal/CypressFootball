import React from 'react';
import Roster from '../Roster/Roster';
import RosterTable from '../Roster/RosterTable'
import Footer from '../Footer/Footer';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Row } from 'react-bootstrap';
import NavBar1 from '../NavBar/NavBar1';
// import NavBar from '../NavBar/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles((theme) => ({
    main: {
        backgroundColor: '#F7FAF8'
    }
}));

function RosterPage() {
    const classes = useStyles();
    return (
        <>
            <Container className={classes.main} fluid>
                <Row>
                    <NavBar1 />
                </Row>
                <Row>
                    <Roster />
                    {/* <RosterTable /> */}
                </Row>
                <Row>
                    <Footer />
                </Row>
            </Container>
        </>
    )
}

export default RosterPage;