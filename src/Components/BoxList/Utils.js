export const getClosestDivisor = (num, startingDivisor) => {
  const solution = {
    isDivisible: false,
    divisor: startingDivisor,
  };

  do {
    if (isDivisible(num, solution.divisor)) {
      solution.isDivisible = true;
    } else {
      solution.divisor -= 1;
    }
  } while (!solution.isDivisible);

  return solution.divisor;
};

const isDivisible = (num, divisor) => {
  return num % divisor === 0;
};