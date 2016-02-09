import React from 'react';

import style from './style.css';

const PlayButton = ({click, disabled, text}) => (
  <div className={style.buttonContainer}>
    <button className={style.button} disabled={disabled} onClick={click}>{text || 'Play'}</button>
  </div>
);

export { PlayButton };
