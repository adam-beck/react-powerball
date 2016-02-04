import React from 'react';

import style from './style.css';

const PlayButton = ({click}) => (
  <div className={style.buttonContainer}>
    <button className={style.button} onClick={click}>Play</button>
  </div>
);

export { PlayButton };
