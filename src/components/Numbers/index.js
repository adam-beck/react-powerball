import React from 'react';
import style from './style.css';
import classnames from 'classnames';

const matchingNumber = (matching, numbers, powerball) => (
  classnames({
    [style.powerball]: powerball,
    [style.number]: true,
    [style.matching]: matching && numbers,
    [style.nonMatching]: matching !== undefined &&!matching && numbers
  })
);

const applyInputId = (inputId, callback) => evt => {
  const value = parseInt(evt.target.value, 10);

  if (value) {
    callback(inputId, value);
  }

};

const Numbers = ({setValues, submitted, numbers, powerball, matching = []}) => (

  <div className={style.ticket}>
    <input onChange={applyInputId('w1', setValues)} className={matchingNumber(matching[0], numbers)} type="text" disabled={submitted} value={numbers && numbers[0]} />
    <input onChange={applyInputId('w2', setValues)} className={matchingNumber(matching[1], numbers)} type="text" disabled={submitted} value={numbers && numbers[1]} />
    <input onChange={applyInputId('w3', setValues)} className={matchingNumber(matching[2], numbers)} type="text" disabled={submitted} value={numbers && numbers[2]} />
    <input onChange={applyInputId('w4', setValues)} className={matchingNumber(matching[3], numbers)} type="text" disabled={submitted} value={numbers && numbers[3]} />
    <input onChange={applyInputId('w5', setValues)} className={matchingNumber(matching[4], numbers)} type="text" disabled={submitted} value={numbers && numbers[4]} />
    <span className={style.powerballLabel}>Powerball: </span><input onChange={applyInputId('pb', setValues)} className={matchingNumber(matching[5], numbers, true)} type="text" disabled={submitted} value={powerball} />
  </div>

);

export { Numbers };
