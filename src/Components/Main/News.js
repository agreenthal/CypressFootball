import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Container, Row, Col } from 'react-bootstrap';
import { MDBContainer } from "mdbreact";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    img: {

    }
}));

function News() {
    const classes = useStyles();
    return (
        <Container>
            <Row>
                <MDBContainer>
                    <Paper>
                        <p>News Section</p>
                    </Paper>
                </MDBContainer>
            </Row>
        </Container>
    )
}

export default News;