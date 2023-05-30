function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNums = { };
    for (const number of array) {
      const complement = target - number;
      if (complement in seenNums) return true;
      seenNums[number] = true;
    }
    return false;
  }

/* 
  Write the Big O time complexity of your function here
Running through a for loop is linear, therefore:
O(n) = runtime
O(n) = space
*/

/* 
  Add your pseudocode here
1. Create function (hasTargetSum) with 2 variables, an array and a target
2. Declare an object called seenNums.
2. Iterate through array with for of loop.
3. Declare complement and assign it the value of the target minues the current number in the array.
5. If the complement is a key in the seeNums object return true. If not, add the number as a key in the seenNums object.
6. If the loop runs without a solution return false.
*/

/*
  Add written explanation of your solution here
-The has TargetSum function takes two parameters-array and target.
-The function starts with a for loop that starts at 0 and goes through 2 minus the length of the array.  This becuase we will not need to look at the last number in the array because we will have already tried it with other values in the array.
-For each loop, I call a new function runThrough that will loop through a subset of array--essentially the original array without the current array number and any before it.
-Each iteration through the runThrough loop will call sumCompare, which will return true if the current value of the array plus the subArray value equals the target.
-If after all the multiple loops there is no solution, then TargetSum will return false.
*/
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;