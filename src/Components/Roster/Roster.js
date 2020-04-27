import React, { Component } from 'react';
import players from './players.json';
import PlayerCard from "./PlayerCard";
import Wrapper from "./Wrapper";
import Title from "./Title";


class Roster extends Component {
    // Setting this.state.roster to the roster json array
    state = {
        players
    };

    removeFriend = id => {
        // Filter this.state.roster for roster with an id not equal to the id being removed
        const players = this.state.players.filter(player => player.id !== id);
        // Set this.state.roster equal to the new roster array
        this.setState({ players });
    };

    // Map over this.state.roster and render a FriendCard component for each friend object
    render() {
        return (
            <Wrapper>
                <Title>Cypress Football Roster</Title>
                {this.state.players.map(player => (
                    <PlayerCard
                        id={player.id}
                        key={player.id}
                        name={player.name}
                        image={player.image}
                        position={player.position}
                        class={player.class}
                        measurables={player.measurables}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default Roster;