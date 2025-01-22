function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.');
    //Alternative solution: return a default value
    //return 0;
  }
  // ...
}