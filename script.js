// Simulate waiting in the queue for a certain duration (in milliseconds)
function simulateQueue(duration) {
  return new Promise((resolve) => {
    let remainingTime = Math.ceil(duration / 1000);
    const countdownInterval = setInterval(() => {
      remainingTime--;
      updateCountdown(remainingTime);
      if (remainingTime <= 0) {
        clearInterval(countdownInterval);
        resolve();
      }
    }, 1000);
  });
}

// Update the countdown displayed on the page
function updateCountdown(remainingTime) {
  const countdownElement = document.getElementById('refresh-countdown');
  countdownElement.textContent = `Page will refresh in: ${remainingTime} s`;
}

// Enable the enter button after the queue simulation is complete
function enableEnterButton() {
  const enterButton = document.getElementById('enter-button');
  enterButton.disabled = false;
  enterButton.textContent = 'Enter Ticket Selection';
}

// Main entry point
async function main() {
  // Set the duration of the queue simulation (in milliseconds)
  const queueDuration = 5000;

  // Update the countdown initially
  updateCountdown(Math.ceil(queueDuration / 1000));

  // Simulate waiting in the queue for the specified duration
  await simulateQueue(queueDuration);

  // Update the queue message and enable the enter button
  enableEnterButton();
}

// Call the main function to start the simulation
main();
