import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import { Container, Row, Col } from 'react-bootstrap';

import Peninsula from '../../Images/Logos/peninsula.png';
import SanJuanHills from '../../Images/Logos/sanjuanhills.png';
import Western from '../../Images/Logos/western.png';
import Katella from '../../Images/Logos/katella.png';
import Capo from '../../Images/Logos/capo.png';
import Valencia from '../../Images/Logos/valencia.png';
import Crean from '../../Images/Logos/crean.png';
import Tustin from '../../Images/Logos/tustin.png';
import Pacifica from '../../Images/Logos/pacifica.png';
import Kennedy from '../../Images/Logos/kennedy.png';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: '100%',
        paddingBottom: '0px',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(5)
    },
    title: {
        margin: theme.spacing(2, 0, 0),
        textAlign: 'center',
        fontFamily: 'Staatliches, cursive',
        fontSize: '26pt'
    },
    subtitle: {
        fontSize: '12pt',
        textAlign: 'center',
        fontFamily: 'Staatliches, cursive'
    },
    preseason: {
        flexGrow: 1,
        display: 'flex',
        float: 'left',
        textAlign: 'center'
    },
    league: {
        display: 'flex',
        float: 'right',
    },
}));



export default function Schedule() {
    const classes = useStyles();
    const [dense] = React.useState(true);
    return (
        <Grid container spacing={1} className={classes.root}>
            <Grid item md>
                <Container style={{ paddingBottom: '10px' }}>
                    <Typography variant="h6" className={classes.title}>2020 Schedule</Typography>
                    <Typography className={classes.subtitle}>(All games start at 7pm, unless specified otherwise)</Typography>
                </Container>
                <Container fluid>
                    <Row>
                        <Col></Col>
                        <Col className={classes.preseason}>
                            <div>
                                <List dense={dense}>
                                    <ListItem >
                                        <ListItemAvatar>
                                            <Avatar>
                                                <img src={Peninsula} alt="peninsula" />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="Week 0: @ Peninsula"
                                            secondary={'Location: Peninsula HS'}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <img src={SanJuanHills} alt="sanjuanhills" />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="Week 1: @ San Juan Hills"
                                            secondary={"Location: San Juan Hills HS"}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <img src={Western} alt="western" />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="Week 2: vs. Western"
                                            secondary={"Location: Western HS"}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="Week 3: Bye"
                                            secondary={null}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <img src={Katella} alt="katella" />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="Week 4: vs. Katella (Th)"
                                            secondary={'Location: Glover Stadium'}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <img src={Capo} alt="capo" />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="Week 5: @ Capo Valley"
                                            secondary={'Location: Capistrano Valley HS'}
                                        />
                                    </ListItem>
                                </List>
                            </div>
                        </Col>
                        <Col className={classes.league}>
                            <div>
                                <List dense={dense}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <img src={Valencia} alt="valencia" />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="Week 6: vs. Valencia (Homecoming)"
                                            secondary={'Location: Western HS'}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <img src={Crean} alt="crean" />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="Week 7: @ Crean Lutheran"
                                            secondary={'Location: Portola HS'}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <img src={Tustin} alt="tustin" />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="Week 8: vs. Tustin"
                                            secondary={'Location: Western HS'}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <img src={Pacifica} alt="pacifica" />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="Week 9: vs. Pacifica (Th)"
                                            secondary={'Location: Western HS'}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <img src={Kennedy} alt="kennedy" />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="Week 10: @ Kennedy HS (Th)"
                                            secondary={'Location: Western HS'}
                                        />
                                    </ListItem>
                                </List>
                            </div>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </Grid>
        </Grid>
    )
}