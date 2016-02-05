import React, { Component } from 'react';

import Header from './components/Header';
import { Numbers } from './components/Numbers';
import { PlayButton } from './components/PlayButton';

import { getRandomNumbers } from './utilities/randomNumbers';
import { compareArrays } from './utilities/comparison';

var ticketValues = {};
function foo(value, id) {
  ticketValues[id] = value;
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
      matching: [],
      drawn: {}
    };

    this.submitTicket = this.submitTicket.bind(this);
  }

  submitTicket() {

    const drawn = {
      whiteballs: getRandomNumbers(5, 69).sort(),
      powerball: getRandomNumbers(1, 26)
    };


    const allEntered = [ticketValues.w1, ticketValues.w2, ticketValues.w3, ticketValues.w4, ticketValues.w5, ticketValues.p1].map(val => parseInt(val, 10));
    const matching = compareArrays(allEntered, drawn.whiteballs.concat(drawn.powerball));

    this.setState({ submitted: true, drawn, matching });

  }

  render() {
    const {whiteballs, powerball} = this.state.drawn;

    return (
      <div>
        <Header />
        <Numbers setValues={foo} submitted={this.state.submitted} matching={[]} />
        <PlayButton click={this.submitTicket} />
        <Numbers submitted={true} numbers={whiteballs} powerball={powerball && powerball[0]} matching={this.state.matching} />
      </div>
    );
  }
}

export { App };
