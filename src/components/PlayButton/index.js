import React from 'react';

import style from './style.css';

const PlayButton = ({click, disabled, text, rounds}) => (
  <div className={style.buttonContainer}>
    <button className={style.button} disabled={disabled} onClick={() => click(rounds)}>Play {rounds} Round{rounds === 1 ? '' : 's'}</button>
  </div>
);

export { PlayButton };
