// Selectors for each clock hand
const secondHand = document.querySelector('.secondHand');
const minuteHand = document.querySelector('.minHand');
const hourHand = document.querySelector('.hourHand');

function setDate() {
  // Variable to hold the current time
  const now = new Date();

  // Get the current seconds, minutes, and hours
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hour = now.getHours();

  // Calculate amount of degrees hand has to move per interval/unit of time
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  const hourDegrees = ((hour / 12) * 360) + 90;

  // Totate appropriate hand according to degrees calculation per unit of time
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  // Remove transition when clock hand rotates fully around clock to prevent transition in wrong direction
  if (secondsDegrees === 90) {
    secondHand.style.transition = 'all 0.0s';
  }
  else {
    secondHand.style.transition = 'all 0.5s cubic-bezier(0.1, 2.7, 0.58, 1)';
  }
}

// Refresh every second
setInterval(setDate, 1000);
