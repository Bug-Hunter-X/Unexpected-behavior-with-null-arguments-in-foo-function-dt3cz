# Unexpected Null Handling in JavaScript Function

This repository demonstrates a common, yet subtle, bug in JavaScript function handling of null values.  The `foo` function unexpectedly terminates when null is passed as an argument without explicit error handling or alternative behavior.

## Bug Description

The `foo` function in `bug.js` fails to gracefully handle null arguments. When either `a` or `b` is null, the function silently returns without any indication of the error. This can lead to unexpected behavior in the calling code.

## Solution

The `bugSolution.js` file presents a corrected version of the `foo` function. It explicitly checks for null values and provides a more informative response, throwing an error or returning a default value depending on the requirements.

## How to Reproduce

1. Clone this repository.
2. Run `bug.js` with various inputs, including null values.
3. Observe the silent exit when nulls are present.
4. Run `bugSolution.js` with the same inputs and observe the improved error handling or default behavior.
