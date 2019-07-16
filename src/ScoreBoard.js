import React, { Component } from 'react';
import SinglePlayer from './SinglePlayer';
import { Button } from 'react-bootstrap';

const tom_and_jerry = [
    {
        name: 'Tom',
        score: 55
    },
    {
        name: 'Jerry',
        score: 80
    }
];    
export default class ScoreBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: tom_and_jerry
        };
    }

    changeScore(amount) {
        if ( typeof(amount) !== "number" ) {
            return;
        }

        let players = this.state.players;
        let tom = players[0];
        tom.score = tom.score + amount;

        tom.score = (tom.score > 100) ? 100 : tom.score;
        tom.score = (tom.score < 0) ? 0 : tom.score;

        players[0] = tom;
        this.setState({ players: players });
    }
    render() {
        return (
            <div>
                <h1>Score Board</h1>
                <div>
                    <Button bsStyle='success' onClick={ (amount) => this.changeScore(5) }>Score of Tom: +5</Button>
                    <Button bsStyle='danger' onClick={ (amount) => this.changeScore(-5) }>Score of Tom: -5</Button>
                </div>
                {
                    this.state.players.map((value, index) => {
                        return <SinglePlayer key={index} name={value.name} score={value.score} />
                    })
                }
            </div>
        );
    }
}