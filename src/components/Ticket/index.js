import React, { Component } from 'react';
import style from './style.css';

class Ticket extends Component {
  constructor() {
    super();
  }

  render() {
    if (this.props.submitted) {
      return (
        <div>Ticket Submitted</div>
      );
    }

    return (
      <div className={style.ticket}>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <div className={style.powerball}>
          <h3>Powerball</h3>
          <input type="text" />
        </div>
      </div>
    );
  }
}

export default Ticket;
