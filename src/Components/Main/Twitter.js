import React from 'react';
import { MDBView, MDBContainer } from
    "mdbreact";
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {

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