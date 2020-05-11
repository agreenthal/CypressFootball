import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Container, Row, Col } from 'react-bootstrap';
import { MDBContainer } from "mdbreact";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex'
    },
    news: {

    },
    newsItem: {
        width: '100%'
    }
}));

function News() {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Row>
                <MDBContainer>
                    <Paper className={classes.newsItem}>
                        <p>News Section</p>
                    </Paper>
                </MDBContainer>
            </Row>
        </Container>
    )
}

export default News;