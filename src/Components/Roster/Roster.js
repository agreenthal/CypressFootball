import React, { Component } from 'react';
import players from './players.json';
import PlayerCard from "./PlayerCard";
import Wrapper from "./Wrapper";
import Title from "./Title";


class Roster extends Component {
    state = {
        players
    };

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