// Selector for each key box
const keys = document.querySelectorAll('.key');

// Function to play sounds
function playSound(e) {
  // Selects sound that correspond with the key code of keydown event
  const audio = document.querySelector(`audio[data-keyCode="${e.keyCode}"]`);

  // Selects key box that corresponds with the key code of keydown event
  const key = document.querySelector(`.key[data-keyCode="${e.keyCode}"]`);

  // If key code on keydown event doesn't match any data-keyCodes, do nothing
  if (!audio) return;

  // Play sound that corresponds to the key code of keydown event
  audio.currentTime = 0;
  audio.play();

  // Add the playing class to the keybox that was played
  key.classList.add('playing');
};

function removeTransition(e) {
  // If property that was added wasn't a transform, do nothing
  if(e.propertyName !== 'transform') return;

  // Remove playing class from keybox
  this.classList.remove('playing');
}

// Remove playing class at end of transition
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// Listen for keydown events and play sound corresponding to correct key
window.addEventListener('keydown', playSound);
