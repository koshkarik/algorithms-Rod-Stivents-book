// this algorithm will do the work much faster on very big numbers than simple multiply

const raiseToPower = (number, power) => {
  const powers = [{ num: number, pow: 1 }];

  const findLastPower = (num, pow, allPowers = []) => {
    const newNum = num ** 2;
    let newPower = pow * 2;

    if (newPower > power) {
      return allPowers;
    }

    return findLastPower(
      newNum,
      newPower,
      [...allPowers, { num: newNum, pow: newPower }]
    );
  }

  const allPowers = findLastPower(number, 1, powers);

  if (allPowers[allPowers.length - 1].pow === power) {
    return allPowers[allPowers.length - 1].num;
  }

  const reversedPowers = allPowers.reverse();

  const makeResult = (powersArr, currentPow, currentNum) => {
    if (currentPow === power) {
      return currentNum;
    }

    return currentPow + powersArr[0].pow > power
      ? makeResult(powersArr.slice(1), currentPow, currentNum)
      : makeResult(powersArr, currentPow + powersArr[0].pow, currentNum * powersArr[0].num);
  }

  return makeResult(reversedPowers, reversedPowers[0].pow, reversedPowers[0].num);
};

export default raiseToPower;