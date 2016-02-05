function getRandomNumbers(count, max) {
  let output = [];

  while (output.length < count) {
    const randomNumber = Math.floor((Math.random() * max) + 1);

    if (output.indexOf(randomNumber) === -1) {
      output = output.concat(randomNumber);
    }
  }

  return output;
}

export {getRandomNumbers};
