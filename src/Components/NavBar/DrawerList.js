import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListIcon from '@material-ui/icons/List';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import PeopleIcon from '@material-ui/icons/People';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import InfoIcon from '@material-ui/icons/Info';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
    },
    subheader: {
        fontWeight: 'bolder',
    }
}));

// function ListItemLink(props) {
//     return <ListItem button component="a" {...props} />;
// }

export default function DrawerList() {
    const classes = useStyles();

    return (
        <div>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader" className={classes.subheader}>
                        Cypress Centurion Football
                    </ListSubheader>
                }
                className={classes.root}
            >
                <ListItem button>
                    <ListItemIcon>
                        <ListIcon />
                    </ListItemIcon>
                    <ListItemText primary="Schedule" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <FormatListNumberedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Roster" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Coaches" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <BusinessCenterIcon />
                    </ListItemIcon>
                    <ListItemText primary="Booster/Sponsors" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <InfoIcon />
                    </ListItemIcon>
                    <ListItemText primary="Forms/Links" />
                </ListItem>
            </List>
        </div>
    );
}
