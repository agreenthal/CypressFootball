import React from 'react';
import Table from 'react-bootstrap/Table';
import { makeStyles } from '@material-ui/core/styles';
import roster from '../Roster/roster.json';


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
            <Title>Friends List</Title>
            {this.state.friends.map(friend => (
                <FriendCard
                    removeFriend={this.removeFriend}
                    id={friend.id}
                    key={friend.id}
                    name={friend.name}
                    image={friend.image}
                    occupation={friend.occupation}
                    location={friend.location}
                />
            ))}
        </Wrapper>
    )
}