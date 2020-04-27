import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Row } from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';
import Image from '../../Images/header5.png';



const useStyles = makeStyles((theme) => ({
    image: {
        width: '100%',
        position: 'absolute',
        height: '375px',
    }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <Grid>
            <Container fluid>
                <Row className={classes.root}>
                    <div>
                        <img src={Image} alt="header" className={classes.image} />
                    </div>
                </Row>
            </Container>
        </Grid>
    )
}