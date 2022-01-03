class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    let middle = nums[Math.floor(nums.length / 2)];
    
    if (target === middle)
      return true;
    else if (target > middle)
      return this.binarySearch(nums.slice(Math.floor(nums.length / 2) + 1), target);
    else if (target < middle)
      return this.binarySearch(nums.slice(0, Math.floor(nums.length / 2)), target);
    else
      return false;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;