import React, { Component } from 'react';
import style from './style.css';

class Ticket extends Component {
  render() {
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
