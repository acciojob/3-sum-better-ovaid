function threeSum(arr, target) {
  arr.sort((a, b) => a - b);
  let closestSum = Infinity;

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const currentSum = arr[i] + arr[left] + arr[right];
      const diff = Math.abs(currentSum - target);

      if (diff < Math.abs(closestSum - target)) {
        closestSum = currentSum;
      }

      if (currentSum > target) {
        right--;
      } else if (currentSum < target) {
        left++;
      } else {
        return target; // Exact match found
      }
    }
  }

  return closestSum;
}


module.exports = threeSum;
