import React, { Component } from 'react';

import Header from './components/Header';
import { Numbers } from './components/Numbers';
import { PlayButton } from './components/PlayButton';

import { getRandomNumbers } from './utilities/randomNumbers';
import { compareArrays } from './utilities/comparison';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
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
    this.setState({ticket});
  }

  submitTicket() {

    const { ticket } = this.state;

    const drawn = {
      whiteballs: getRandomNumbers(5, 69).sort((a, b) => a - b),
      powerball: getRandomNumbers(1, 26)
    };

    const matching = compareArrays([ticket.w1, ticket.w2, ticket.w3, ticket.w4, ticket.w5], drawn.whiteballs)
    .concat(compareArrays([ticket.pb], drawn.powerball));

    this.setState({ plays: this.state.plays + 1, submitted: true, drawn, matching });

  }

  render() {
    const {whiteballs, powerball} = this.state.drawn;

    return (
      <div>
        <Header />
        <Numbers setValues={this.setTicketValue} submitted={this.state.submitted} matching={[]} />
        <PlayButton click={this.submitTicket} />
        <Numbers submitted={true} numbers={whiteballs} powerball={powerball && powerball[0]} matching={this.state.matching} />
        <div>You have played {this.state.plays} times</div>
      </div>
    );
  }
}

export { App };
