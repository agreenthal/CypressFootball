import React from 'react';
import Main from '../Main/Main';
import Schedule from '../Schedule/Schedule';
import Footer from '../Footer/Footer';
import Twitter from '../Main/Twitter';
import News from '../Main/News';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar1 from '../NavBar/NavBar1';
import 'bootstrap/dist/css/bootstrap.min.css';


const useStyles = makeStyles((theme) => ({
    main: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: theme.spacing(2),
        // border: '2px red solid',
        width: '100%'
    },
    schedule: {
        flexGrow: 1,
        display: 'flex',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(3)
    },
    twitter: {
        flexGrow: 1,
        display: 'flex',
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(10),
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
}));

function Home() {
    const classes = useStyles();
    return (
        <Container fluid>
            <Row>
                <NavBar1 />
            </Row>
            <Row>
                <Col>

                </Col>
                <Col className={classes.main} xs={7}>
                    <Row >
                        <Main />
                    </Row>
                </Col>
                <Col>
                    <Row>
                        {/* <Twitter /> */}
                        {/* <News /> */}
                    </Row>
                </Col>
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    )
}

export default Home;