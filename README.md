# MongoDB $inc operator error: Unexpected behavior with negative increments

This repository demonstrates a common error when using the `$inc` operator in MongoDB update queries, specifically when dealing with negative increments.  Incorrect usage can lead to unexpected results or errors.  The example shows how to correctly use `$inc` to avoid these problems.

## Bug Description
The original code attempts to decrement a counter using `$inc` with a negative value. Under certain conditions, this approach may lead to unexpected behavior or errors if the counter value reaches zero or below.  The code shows this problematic behavior.

## Solution
The corrected code demonstrates how to safely handle negative increments. We explicitly check if the value is greater than 0 before decrementing. This prevents potential issues with negative values and ensures data integrity.
