function calculateWinnings(results) {
  var firstFive = results.slice(0, 5).filter(result => result).length;
  var powerball = results[5];

  if (firstFive === 0 && !powerball) {
    return 0;
  }

  if (powerball) {
    switch (firstFive) {
      case 0:
      case 1:
        return 4;
      case 2:
        return 7;
      case 3:
        return 100;
      case 4:
        return 50000;
      case 5:
        return 136000000;
      default:
        0
    }
  }

  switch (firstFive) {
    case 0:
    case 1:
    case 2:
      return 0;
    case 3:
      return 7;
    case 4:
      return 100;
    case 5:
      return 1000000;
    default:
      return 0;
  }
}

export { calculateWinnings };
