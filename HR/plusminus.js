function plusMinus(arr) {
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveCount++;
    } else if (arr[i] < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }
  }

  const positiveRatio = positiveCount / arr.length;
  const negativeRatio = negativeCount / arr.length;
  const zeroRatio = zeroCount / arr.length;

  console.log(positiveRatio.toFixed(6));
  console.log(negativeRatio.toFixed(6));
  console.log(zeroRatio.toFixed(6));
}

// Example usage:
const arr = [1, -2, 0, 3, -4, 0];
plusMinus(arr);
