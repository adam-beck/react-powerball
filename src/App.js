import React, { Component } from 'react';

import Header from './components/Header';
import Ticket from './components/Ticket';
import { PlayButton } from './components/PlayButton';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false
    };

    this.submitTicket = this.submitTicket.bind(this);
  }

  submitTicket() {
    this.setState({
      submitted: true
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Ticket submitted={this.state.submitted} />
        <PlayButton click={this.submitTicket} />
      </div>
    );
  }
}

export { App };
