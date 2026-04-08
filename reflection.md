## Why is it important to handle errors for each individual API call rather than just at the end of the promise chain?
- It is best practice to handle the error at block/functional level to have appropriate error than throwing a common error at end of the promise chain. 
- It is needed for finding the root cause of the problem and fix it easily.

## How does using custom error classes improve debugging and error identification?
- Adding a custom error message helps the developer identify the exact root cause of the error
- By looking at the error wwe can easily identify why it failed and where to fix it. 