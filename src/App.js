import React, { Component } from 'react';
import range from 'lodash.range';

import Header from './components/Header';
import { Numbers } from './components/Numbers';
import { PlayButton } from './components/PlayButton';

import { getRandomNumbers } from './utilities/randomNumbers';
import { compareArrays } from './utilities/comparison';
import { calculateWinnings } from './utilities/winningsCalculator';

const playSingleRound = (ticket, prevWinnings) => {

  const drawn = {
    whiteballs: getRandomNumbers(5, 69).sort((a, b) => a - b),
    powerball: getRandomNumbers(1, 26)
  };

  const matching = compareArrays([ticket.w1, ticket.w2, ticket.w3, ticket.w4, ticket.w5], drawn.whiteballs)
  .concat(compareArrays([ticket.pb], drawn.powerball));

  const winnings = prevWinnings + calculateWinnings(matching);

  return {
    drawn,
    matching,
    winnings
  };

};

class App extends Component {
  constructor() {
    super();

    this.state = {
      submitted: false,
      invalidTicket: true,
      ticket: {},
      matching: [],
      drawn: {},
      plays: 0,
      winnings: 0
    };

    this.submitTicket = this.submitTicket.bind(this);
    this.setTicketValue = this.setTicketValue.bind(this);
  }

  setTicketValue(id, value) {
    const ticket = Object.assign({}, this.state.ticket, {[id]: value});
    this.setState({ticket, invalidTicket: Object.keys(ticket).length !== 6});
  }

  submitTicket(rounds) {

    return () => {
      var { ticket, winnings } = this.state;

      const aggregate = range(rounds).reduce(prev => {
        return playSingleRound(ticket, prev.winnings);
      }, {winnings});

      this.setState(Object.assign({}, {plays: this.state.plays + rounds, submitted: true}, aggregate));
    };
  }

  render() {
    const {whiteballs, powerball} = this.state.drawn;

    return (
      <div>
        <Header />
        <Numbers setValues={this.setTicketValue} submitted={this.state.submitted} matching={[]} />
        <PlayButton disabled={this.state.invalidTicket} click={this.submitTicket(1)} />
        <PlayButton disabled={this.state.invalidTicket} click={this.submitTicket(1000000)} text={'Play 1000000 Times'} />
        <Numbers submitted={true} numbers={whiteballs} powerball={powerball && powerball[0]} matching={this.state.matching} />
        <div>You have played {this.state.plays} times</div>
        <div>You have spent ${this.state.plays * 2}</div>
        <div>You have earned ${this.state.winnings}</div>
        <div>Net ${this.state.winnings - this.state.plays * 2}</div>
      </div>
    );
  }
}

export { App };
