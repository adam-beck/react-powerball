import React from 'react';
import style from './style.css';
import classnames from 'classnames';

const matchingNumber = matching => {
  return classnames({
    [style.number]: true,
    [style.matching]: matching,
    [style.nonMatching]: !matching
  });
};

function foo(callback, inputId) {
  return function(evt) {
    callback(evt.target.value, inputId);
  };
}

const Numbers = ({setValues, submitted, numbers, powerball, matching}) => {

  return(
      <div className={style.ticket}>
        <input onBlur={foo(setValues, 'w1')} className={matchingNumber(matching[0])} type="text" disabled={submitted} value={numbers && numbers[0]} />
        <input onBlur={foo(setValues, 'w2')} className={matchingNumber(matching[1])} type="text" disabled={submitted} value={numbers && numbers[1]} />
        <input onBlur={foo(setValues, 'w3')} className={matchingNumber(matching[2])} type="text" disabled={submitted} value={numbers && numbers[2]} />
        <input onBlur={foo(setValues, 'w4')} className={matchingNumber(matching[3])} type="text" disabled={submitted} value={numbers && numbers[3]} />
        <input onBlur={foo(setValues, 'w5')} className={matchingNumber(matching[4])} type="text" disabled={submitted} value={numbers && numbers[4]} />
        <div className={style.powerball}>
          <h3>Powerball</h3>
          <input onBlur={foo(setValues, 'p1')} className={matchingNumber(matching[5])} type="text" disabled={submitted} value={powerball} />
        </div>
      </div>
  );
};

export { Numbers };
