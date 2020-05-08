import React from 'react';
import { MDBContainer } from "mdbreact";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        position: 'static'
    }
}));

export default function TwitterFeed() {
    const classes = useStyles();
    return (
        <MDBContainer className={classes.root}>
            <a class="twitter-timeline" data-lang="en" data-width="300" data-height="800px" data-theme="light" href="https://twitter.com/CHSLineSixFB?ref_src=twsrc%5Etfw">Tweets by CHSLineSixFB</a>
        </MDBContainer>
    )
}