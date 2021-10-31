function calculateGoal(memberCount) {
  const previousGoal = Math.floor(memberCount / 1000) * 1000;
  const newGoal = Math.ceil(memberCount / 1000) * 1000;
  return memberCount > previousGoal + 25
    ? newGoal
    : previousGoal;
}

if (typeof module !== 'undefined') {
  module.exports = exports = { calculateGoal };
}
