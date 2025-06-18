const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const button = document.getElementById("btn");
const hiddenField = document.getElementById("hiddenField");

button.addEventListener("click", () => {
  let newFirstName = firstName.value;
  let newLastName = lastName.value;
  let userName = `${newFirstName} ${newLastName}`;

  const finalData = (document.getElementById("hiddenField").value = userName);
});

const messages = [
  "आजको दिन तपाईंका लागि अद्भुत हुनेछ! 🌞",
  "तपाईं जस्तो साथी हुनु नै भाग्य हो! 🤝",
  "तपाईं एकदमै विशेष हुनुहुन्छ! 🌟",
];

let likeCount;
let dislikeCount;

function showHappyMessage() {
  const fName = document.getElementById("firstName").value.trim();
  const lName = document.getElementById("lastName").value.trim();
  const fullName = `${fName} ${lName}`.trim();

  if (!fName || !lName) {
    alert("कृपया First Name र Last Name दुबै भर्नुहोस्।");
    return;
  }

  const randomMsg = messages[Math.floor(Math.random() * messages.length)];

  // Hide form and show message
  document.getElementById("formSection").style.display = "none";
  document.getElementById("messageSection").style.display = "block";
  document.getElementById("userFullName").textContent = fullName;
  document.getElementById("happyMsg").textContent = randomMsg;
}

function handleLike() {
  likeCount++;
  document.getElementById("likeCount").textContent = likeCount;
  alert("Thank you for liking! 😍");
}

function handleDislike() {
  dislikeCount++;
  document.getElementById("dislikeCount").textContent = dislikeCount;
  alert("We will try to do better! 😢");
}
