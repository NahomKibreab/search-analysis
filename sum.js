// Quadratic time - to check if two numbers in the array contains the sum
// Calculating the running time of Quadratic time
function arrayContainsSum(array, sum) {
  for (
    let i = 0; // 1
    i < array.length; // n + 1
    i++ // n
  ) {
    const element1 = array[i]; // n

    for (
      let ii = 0; // n
      ii < array.length; //n + n^2
      ii++ // n^2
    ) {
      const element2 = array[ii]; // n^2

      if (element1 + element2 === sum) {
        // n^2
        return true;
      }
    }
  }
  return false; // 1
}
