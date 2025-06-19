const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const button = document.getElementById("btn");
const hiddenField = document.getElementById("hiddenField");
const hiddenText = document.getElementById("hiddenText");
const hiddenType = document.getElementById("hiddenType");

let randomMsg = "";

const messages = [
  "Today is going to be a wonderful day for you ! 🌞",
  "Having a friend like you is a blessing ! 🤝",
  "You are truly special ! 🌟",
  "🍀 Today might be your lucky day !",
  "✨ Something great is coming soon. Be ready ! 🌈",
  "💫 A good surprise is coming your way !",
  "You’re unstoppable today !",
  "You're a gift to everyone you meet ! 🎁✨",
  "You're doing better than you think ! 💪😊",
  "You make today even more beautiful ! 🌸🌞",
  "Kind hearts like yours are rare ! ❤️🌟",
];

let likeCount;
let dislikeCount;

function showHappyMessage() {
  const fName = document.getElementById("firstName").value.trim();
  const lName = document.getElementById("lastName").value.trim();
  const fullName = `${fName} ${lName}`.trim();

  if (!fName || !lName) {
    alert("Please enter both your First Name and Last Name.");
    return;
  }

  randomMsg = messages[Math.floor(Math.random() * messages.length)];

  // Hide form and show message
  document.getElementById("formSection").style.display = "none";
  document.getElementById("messageSection").style.display = "block";
  document.getElementById("userFullName").textContent = fullName;
  document.getElementById("happyMsg").textContent = randomMsg;
}

button.addEventListener("click", () => {
  let newFirstName = firstName.value;
  let newLastName = lastName.value;
  let userName = `${newFirstName} ${newLastName}`;

  const finalData = (document.getElementById("hiddenField").value = userName);
  const finalData2 = (document.getElementById("hiddenText").value = randomMsg);
});

const like = document.getElementById("like-btn");
const dislike = document.getElementById("dislike-btn");

like.addEventListener("click", () => {
  const finalData3 = (document.getElementById("hiddenType").value = "True");
});

dislike.addEventListener("click", () => {
  const finaldata4 = (document.getElementById("hiddenType").value = "False");
});

function handleLike() {
  likeCount++;
  document.getElementById("likeCount").textContent = likeCount;
  alert("Thank you for liking ! 😍");
}

function handleDislike() {
  dislikeCount++;
  document.getElementById("dislikeCount").textContent = dislikeCount;
  alert("We will try to do better ! 😢");
}


const btn = document.getElementById('reloadBtn');
  btn.addEventListener('click', () => {
    location.reload();
  });