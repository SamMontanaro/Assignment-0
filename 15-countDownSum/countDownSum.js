class MySolution {
  countDownSum(num) {
    if (num < 2)
      return 1;

    return this.countDownSum(num - 1) + num;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;