const members = document.getElementById('members');
const goal = document.getElementById('goal');

const goalNumber = parseInt(goal.innerHTML.split(' ')[2]);
const memberNumber = parseInt(members.innerHTML);

updateBackground(memberNumber >= goalNumber);

function updateData(memberCount) {
  const currentGoal = calculateGoal(memberCount);
  members.innerHTML = memberCount;
  goal.innerHTML = `Count to ${currentGoal}`;

  const goalReached = memberCount >= currentGoal;
  updateBackground(goalReached);
}

function updateBackground(goalReached) {
  gifNum = Math.floor(Math.random() * 2) + 1;
  if (goalReached) {
    document.body.classList.add('party');
    document.body.style.backgroundImage = `url(./images/giphy${gifNum}.gif)`;
  } else {
    document.body.classList.remove('party');
    document.body.style.backgroundImage = 'none';
  }
}
