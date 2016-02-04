import React from 'react';
import style from './style.css';

const Ticket = ({submitted}) => (
      <div className={style.ticket}>
        <input type="text" disabled={submitted} />
        <input type="text" disabled={submitted} />
        <input type="text" disabled={submitted} />
        <input type="text" disabled={submitted} />
        <input type="text" disabled={submitted} />
        <div className={style.powerball}>
          <h3>Powerball</h3>
          <input type="text" disabled={submitted} />
        </div>
      </div>
);

export { Ticket };
