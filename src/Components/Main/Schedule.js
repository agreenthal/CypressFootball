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
import { Container } from 'react-bootstrap';

import Peninsula from '../../Images/peninsula.png';
import SanJuanHills from '../../Images/sanjuanhills.png';
import Western from '../../Images/western.png';
import Katella from '../../Images/katella.png';
import Capo from '../../Images/capo.png';
import Valencia from '../../Images/valencia.png';
import Crean from '../../Images/crean.png';
import Tustin from '../../Images/tustin.png';
import Pacifica from '../../Images/pacifica.png';
import Kennedy from '../../Images/kennedy.png';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
        fontSize: '12pt'
    },
    title: {
        margin: theme.spacing(2, 0, 0),
        textAlign: 'center',
    },
    subtitle: {
        fontSize: '10pt',
        textAlign: 'center'
    }
}));



export default function Schedule() {
    const classes = useStyles();
    const [dense] = React.useState(true);
    const [secondary, setSecondary] = React.useState(false);
    return (
        <Paper elevation={6} className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs>
                    <Container style={{ borderBottom: '3px solid navy', paddingBottom: '10px' }}>
                        <Typography variant="h6" className={classes.title}>
                            2020 Schedule
                    </Typography>
                        <Typography className={classes.subtitle}>(All games start at 7pm, unless specified otherwise)</Typography>
                    </Container>
                    <div className={classes.demo}>
                        <List dense={dense}>
                            <ListItem >
                                <ListItemAvatar>
                                    <Avatar>
                                        <img src={Peninsula} alt="peninsula" />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Week 0: @ Peninsula HS"
                                    secondary={secondary ? 'Secondary text' : 'Location: Peninsula HS'}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <img src={SanJuanHills} alt="sanjuanhills" />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Week 1: @ San Juan Hills HS"
                                    secondary={secondary ? 'Secondary text' : "Location: San Juan Hills HS"}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <img src={Western} alt="western" />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Week 2: vs. Western HS"
                                    secondary={secondary ? 'Secondary text' : "Location: Western HS"}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Week 3: Bye"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <img src={Katella} alt="katella" />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Week 4: vs. Katella HS"
                                    secondary={secondary ? 'Secondary text' : 'Location: Glover Stadium'}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <img src={Capo} alt="capo" />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Week 5: @ Capo Valley HS"
                                    secondary={secondary ? 'Secondary text' : 'Location: Capistrano Valley HS'}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <img src={Valencia} alt="valencia" />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Week 6: vs. Valencia HS"
                                    secondary={secondary ? 'Secondary text' : 'Location: Western HS'}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <img src={Crean} alt="crean" />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Week 7: @ Crean Lutheran HS"
                                    secondary={secondary ? 'Secondary text' : 'Location: Portola HS'}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <img src={Tustin} alt="tustin" />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Week 8: vs. Tustin HS"
                                    secondary={secondary ? 'Secondary text' : 'Location: Western HS'}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <img src={Pacifica} alt="pacifica" />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Week 9: vs. Pacifica HS"
                                    secondary={secondary ? 'Secondary text' : 'Location: Western HS'}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <img src={Kennedy} alt="kennedy" />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Week 10: @ Kennedy HS"
                                    secondary={secondary ? 'Secondary text' : 'Location: Western HS'}
                                />
                            </ListItem>
                        </List>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    )
}