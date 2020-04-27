import React from 'react';
import Coaches from '../Coaches/Coaches';
import Footer from '../Footer/Footer';
// import { makeStyles } from '@material-ui/core/styles';
import { Container, Row } from 'react-bootstrap';
import NavBar1 from '../NavBar/NavBar1';
// import NavBar from '../NavBar/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';


function CoachesPage() {
    // const classes = useStyles();
    return (
        <>
            <Container fluid>
                <Row>
                    <NavBar1 />
                </Row>
                <Row>
                    <Coaches />
                </Row>
                <Row>
                    <Footer />
                </Row>
            </Container>
        </>
    )
}

export default CoachesPage;