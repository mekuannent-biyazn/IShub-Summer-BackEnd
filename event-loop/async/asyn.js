const positionpp = document.getElementById("location");
const btnAdd = document.getElementById("isplai");
let isPlaying = false;

alert("This is an alert message");
console.log("this is run after alert message!");

navigator.geolocation.getCurrentPosition(
  (position) => {
    const { latitude, longitude } = position.coords;
    positionpp.textContent = `latitude: ${latitude} longitude: ${longitude}`;
  },
  (error) => {
    console.log("second");
    positionpp.textContent = `Error: ${error.message}`;
  }
);
console.log("this will run before the location required");

btnAdd.addEventListener("click", playSound);

function playSound() {
  const aud = new Audio("f02dc022ef8b197eaea9d76496dfd6f4.mp3");
  if (isPlaying) return;
  aud.play();
  isPlaying = true;
}
