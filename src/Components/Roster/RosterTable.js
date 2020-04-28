import React from 'react';
import Table from 'react-bootstrap/Table';
import { makeStyles } from '@material-ui/core/styles';
import Title from "./Title";
import Wrapper from "./Wrapper";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '30px',
        padding: 0
    },
    col1: {
        maxWidth: '500px',
        margin: 'auto'
    }
}));

export default function Roster() {
    const classes = useStyles();

    return (
        <Wrapper>

            <Title>Cypress Football Roster</Title>
            <Table responsive className={classes.root}>
                <thead>
                    <tr>
                        <th className={classes.col1}>#</th>
                        <th className={classes.col1}>Name</th>
                        <th>Class</th>
                        <th>Position</th>
                        <th>HT/WT</th>
                        <th>Hudl/Film</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Isaac Hurtado</td>
                        <td>Sr.</td>
                        <td>RB/LB</td>
                        <td>6'3/220lbs</td>
                        <td>Link</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </Wrapper>
    )
}