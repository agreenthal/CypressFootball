import React from 'react';
import Links from '../Links/Links';
import Footer from '../Footer/Footer';
// import { makeStyles } from '@material-ui/core/styles';
import { Container, Row } from 'react-bootstrap';
import NavBar1 from '../NavBar/NavBar1';
// import NavBar from '../NavBar/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';


function LinksPage() {
    // const classes = useStyles();
    return (
        <>
            <Container fluid>
                <Row>
                    <NavBar1 />
                </Row>
                <Row>
                    <Links />
                </Row>
                <Row>
                    <Footer />
                </Row>
            </Container>
        </>
    )
}

export default LinksPage;