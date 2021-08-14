function search(array, item) {
  let index = null; // 1

  for (
    let i = 0; // 1
    i < array.length; // n + 1
    i++ // n
  ) {
    if (item === array[i]) {
      // n
      index = i; // only happens once if found, so not counting for worst case
      break;
    }
  }

  return index; // 1
}
