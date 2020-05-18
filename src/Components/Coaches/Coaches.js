import React, { Component } from 'react';
import coaches from './coaches.json';
import CoachCard from "./CoachesCard";
import Wrapper from "./Wrapper";
import Title from "./Title";


class Roster extends Component {
    state = {
        coaches
    };

    removeFriend = id => {
        const coaches = this.state.coaches.filter(coach => coach.id !== id);
        this.setState({ coaches });
    };

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
                        position={coach.position}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default Roster;