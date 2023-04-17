const userLoginDetails = {
  user1: {
    email: 'user1@example.com',
    password: 'password1',
    score : 'score1'
  },
  user2: {
    email: 'user2@example.com',
    password: 'password2',
    score: 'score2'
  }
}

const numUsers = Object.keys(userLoginDetails).length;
console.log(`Number of users: ${numUsers}`);
document.getElementById("mybtn1").addEventListener("click", loginn);

function loginn() {

const searchEmail = document.getElementById('email').value;
const searchPassword = document.getElementById('password').value;
let foundUser = null;

for (const user in userLoginDetails) {
  if (userLoginDetails[user].email === searchEmail && userLoginDetails[user].password === searchPassword) {
    foundUser = user;
    break;
  }
}

if (foundUser) {
  window.location.href = "index.html";
} 
else {
  console.log('User not found');
}
}

document.getElementById("mybtn2").addEventListener("click", addUserr);
function addUser(name, email, password) {

  if (userLoginDetails[name]) {
    console.log('User already exists');
    return;
  }

  userLoginDetails[name] = {
    email: email,
    password: password
  }

  console.log(`User ${name} added`);
}

function addUserr() {
const inname = document.getElementById('name').value;
  const inemail = document.getElementById('email1').value;
  const inpassword = document.getElementById('password1').value;
addUser(inname, inemail, inpassword);
}

