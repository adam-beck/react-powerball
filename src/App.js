import React, { Component } from 'react';

import Header from './components/Header';
import Ticket from './components/Ticket';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Ticket />
      </div>
    );
  }
}

export { App };
