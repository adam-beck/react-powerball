import React from 'react';
import style from './style.css';
import classnames from 'classnames';

const matchingNumber = (matching, numbers) => (
  classnames({
    [style.number]: true,
    [style.matching]: matching && numbers,
    [style.nonMatching]: !matching && numbers
  })
);

const curryInputId = (inputId, callback) => evt => {
  callback(inputId, parseInt(evt.target.value, 10));
};

const Numbers = ({setValues, submitted, numbers, powerball, matching}) => (

  <div className={style.ticket}>
    <input onBlur={curryInputId('w1', setValues)} className={matchingNumber(matching[0], numbers)} type="text" disabled={submitted} value={numbers && numbers[0]} />
    <input onBlur={curryInputId('w2', setValues)} className={matchingNumber(matching[1], numbers)} type="text" disabled={submitted} value={numbers && numbers[1]} />
    <input onBlur={curryInputId('w3', setValues)} className={matchingNumber(matching[2], numbers)} type="text" disabled={submitted} value={numbers && numbers[2]} />
    <input onBlur={curryInputId('w4', setValues)} className={matchingNumber(matching[3], numbers)} type="text" disabled={submitted} value={numbers && numbers[3]} />
    <input onBlur={curryInputId('w5', setValues)} className={matchingNumber(matching[4], numbers)} type="text" disabled={submitted} value={numbers && numbers[4]} />
    <div className={style.powerball}>
      <h3>Powerball</h3>
      <input onBlur={curryInputId('pb', setValues)} className={matchingNumber(matching[5], numbers)} type="text" disabled={submitted} value={powerball} />
    </div>
  </div>

);

export { Numbers };
