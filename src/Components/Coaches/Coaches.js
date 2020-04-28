import React, { Component } from 'react';
import coaches from './coaches.json';
import CoachCard from "./CoachesCard";
import Wrapper from "./Wrapper";
import Title from "./Title";


class Roster extends Component {
    // Setting this.state.roster to the roster json array
    state = {
        coaches
    };

    removeFriend = id => {
        // Filter this.state.roster for roster with an id not equal to the id being removed
        const coaches = this.state.coaches.filter(coach => coach.id !== id);
        // Set this.state.roster equal to the new roster array
        this.setState({ coaches });
    };

    // Map over this.state.roster and render a FriendCard component for each friend object
    render() {
        return (
            <Wrapper>
                <Title>Coaching Staff</Title>
                {this.state.coaches.map(coach => (
                    <CoachCard
                        id={coach.id}
                        key={coach.id}
                        name={coach.name}
                        image={coach.image}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default Roster;