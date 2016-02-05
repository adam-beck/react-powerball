function compareArrays(controlArray, testArray) {
  return testArray.map(val => {
    return controlArray.indexOf(val) > -1;
  });
}

export { compareArrays };
